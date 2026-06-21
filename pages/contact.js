import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Building2, Mail, MapPin, MessageSquareWarning } from "lucide-react";
import Layout from "../src/components/Layout";
import MarketingSEO from "../src/components/MarketingSEO";
import { Button } from "../src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../src/components/ui/card";
import { Input } from "../src/components/ui/input";
import { db } from "../src/lib/firebase";
import { contactTopics, site } from "../src/data/marketing";
import { cardBase, headingGradient, heroHeading } from "../src/data/theme";

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

      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
            <div className="space-y-6">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Contact
                </p>
                <h1 className={`${heroHeading} ${headingGradient}`}>
                  Talk to Wakeel.org.
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Reach out for product support, legal education demos, organization access, partnerships, or correction reports.
                </p>
              </div>

              <div className="grid gap-4">
                <Card className={cardBase}>
                  <CardContent className="p-5 flex gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${site.contactEmail}`} className="text-sm text-muted-foreground hover:text-primary">
                        {site.contactEmail}
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className={cardBase}>
                  <CardContent className="p-5 flex gap-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">Lahore, Pakistan</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-5 flex gap-4">
                    <MessageSquareWarning className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Report an incorrect answer</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Include the question, answer, source concern, and any reference you believe is correct.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-muted/60 bg-card/90 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Building2 className="h-6 w-6 text-primary" />
                  Send a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={submitForm} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Name</span>
                      <Input name="name" value={formData.name} onChange={updateField} placeholder="Your name" />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Email</span>
                      <Input name="email" type="email" value={formData.email} onChange={updateField} placeholder="you@example.com" />
                    </label>
                  </div>
                  <label className="space-y-2 block">
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
                  <label className="space-y-2 block">
                    <span className="text-sm font-medium">Message</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={updateField}
                      rows={6}
                      placeholder="How can we help?"
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </label>
                  {status.message && (
                    <p className={status.type === "success" ? "text-sm text-green-600" : "text-sm text-destructive"}>
                      {status.message}
                    </p>
                  )}
                  <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                    {loading ? "Sending..." : "Send message"}
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
