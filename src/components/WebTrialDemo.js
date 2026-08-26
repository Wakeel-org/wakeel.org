import { useState } from "react";
import { ArrowRight, MessageSquareText, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { demoQA, site } from "../data/marketing";
import { eyebrow } from "../data/theme";

// `embedded` drops the outer Card chrome so this can sit inside another
// Card (e.g. the homepage hero) without a card-in-card look.
const WebTrialDemo = ({ className = "", embedded = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [customQuestion, setCustomQuestion] = useState("");
  const active = demoQA[activeIndex];

  const Wrapper = embedded ? "div" : Card;
  const wrapperProps = embedded
    ? { className: `flex flex-1 flex-col ${className}` }
    : { className: `border-2 border-primary/20 shadow-none ${className}` };
  const Inner = embedded ? "div" : CardContent;
  const innerProps = embedded
    ? { className: "flex flex-1 flex-col space-y-5" }
    : { className: "p-5 sm:p-7 space-y-5" };

  return (
    <Wrapper {...wrapperProps}>
      <Inner {...innerProps}>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <p className={eyebrow}>
            Try a sample question — no install needed
          </p>
        </div>
        <p className="text-xs text-muted-foreground -mt-3">
          Wakeel works agentically: it plans a research step, checks it against Pakistani sources, then answers — not a single-turn chatbot reply.
        </p>

        <div className="flex flex-wrap gap-2">
          {demoQA.map((item, index) => (
            <button
              key={item.prompt}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded border-2 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors ${
                index === activeIndex
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground/15 bg-background text-muted-foreground hover:border-primary/50"
              }`}
            >
              {item.audience}
            </button>
          ))}
        </div>

        <div className="space-y-3 rounded-xl border-2 border-foreground/15 bg-muted/30 p-4">
          <div className="flex items-start gap-2">
            <div className="h-7 w-7 shrink-0 rounded-lg border-2 border-primary/30 bg-primary/5 text-primary flex items-center justify-center">
              <MessageSquareText className="h-3.5 w-3.5" />
            </div>
            <p className="text-sm font-medium text-foreground pt-1">{active.prompt}</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-9">{active.answer}</p>
        </div>

        <p className="text-xs text-muted-foreground">
          Sample answer for illustration. Real answers in the app cite Pakistani legal sources and
          are specific to your question — always verify with a licensed advocate before acting.
        </p>

        <div className="space-y-2 border-t border-border pt-4">
          <p className="text-sm font-semibold text-foreground">Have your own question?</p>
          <form
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(site.appUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <Input
              type="text"
              value={customQuestion}
              onChange={(event) => setCustomQuestion(event.target.value)}
              placeholder="Ask anything about Pakistani law..."
              className="flex-1"
            />
            <Button type="submit" className="cta-try-free shrink-0">
              Get my answer free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Opens Wakeel free in the app so you get a real, personalized answer.
          </p>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default WebTrialDemo;
