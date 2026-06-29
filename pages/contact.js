import { useState } from "react";
import { Mail, MapPin, MessageSquareWarning, Send } from "lucide-react";
import Layout from "../src/components/Layout";
import MarketingSEO from "../src/components/MarketingSEO";
import { Button } from "../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Input } from "../src/components/ui/input";
import { contactTopics, site } from "../src/data/marketing";
import { cardBase, headingGradient, heroHeading, iconTile, sectionHeading } from "../src/data/theme";

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Wakeel.org",
  description:
    "Contact Wakeel.org for product support, partnerships, law college demos, organization access, and correction reports.",
  url: `${site.url}/contact`,
};

const initialForm = {
  name: "",
  email: "",
  topic: "Product support and feedback",
  message: "",
};

const infoCards = [
  {
    icon: Mail,
    label: "Email",
    content: (
      <a href={`mailto:${site.contactEmail}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
        {site.contactEmail}
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Location",
    content: <p className="text-sm text-muted-foreground">Lahore, Pakistan</p>,
  },
  {
    icon: MessageSquareWarning,
    label: "Report an incorrect answer",
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Include the question, answer, source concern, and any reference you believe is correct.
      </p>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please add your name, email, and message." });
      return;
    }

    setLoading(true);

    try {
      // Load Firebase only on submit so it stays out of the initial page bundle.
      const [{ db }, { addDoc, collection, serverTimestamp }] = await Promise.all([
        import("../src/lib/firebase"),
        import("firebase/firestore"),
      ]);

      await addDoc(collection(db, "website_queries"), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.topic,
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        status: "new",
        source: "wakeel_org_contact_page",
      });

      setFormData(initialForm);
      setStatus({ type: "success", message: "Thanks. Your message has been sent." });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        type: "error",
        message: `Something went wrong. You can also email ${site.contactEmail}.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <MarketingSEO
        title="Contact Wakeel.org"
        description="Contact Wakeel.org for product support, partnerships, law college demos, organization access, and correction reports."
        path="/contact"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Contact
            </p>
            <h1 className={`${heroHeading} ${headingGradient}`}>
              Talk to Wakeel.org.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Reach out for product support, legal education demos, organization access, partnerships, or correction reports.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 items-start">

            {/* Left — info cards */}
            <div className="space-y-4">
              <h2 className={`${sectionHeading} mb-2`}>Get in touch</h2>
              {infoCards.map(({ icon: Icon, label, content }) => (
                <Card key={label} className={cardBase}>
                  <CardContent className="p-5 flex gap-4 items-start">
                    <div className={iconTile} style={{ width: "2.75rem", height: "2.75rem", minWidth: "2.75rem" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      {content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right — form */}
            <Card className="border-muted/60 bg-card shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Send className="h-5 w-5 text-primary" />
                  Send a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={submitForm} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-1.5 block">
                      <span className="text-sm font-medium">Name</span>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={updateField}
                        placeholder="Your name"
                      />
                    </label>
                    <label className="space-y-1.5 block">
                      <span className="text-sm font-medium">Email</span>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={updateField}
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>
                  <label className="space-y-1.5 block">
                    <span className="text-sm font-medium">Topic</span>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={updateField}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {contactTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="space-y-1.5 block">
                    <span className="text-sm font-medium">Message</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={updateField}
                      rows={6}
                      placeholder="How can we help?"
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                  </label>
                  {status.message && (
                    <p className={status.type === "success" ? "text-sm text-green-600" : "text-sm text-destructive"}>
                      {status.message}
                    </p>
                  )}
                  <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto">
                    {loading ? "Sending…" : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
