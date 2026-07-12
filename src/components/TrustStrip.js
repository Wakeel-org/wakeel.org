import { team } from "../data/marketing";

const advocate = team.find((member) => member.role.includes("Advocate"));

const TrustStrip = ({ className = "" }) => {
  if (!advocate) return null;

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-lg border border-border bg-background/70 px-4 py-2.5 ${className}`}
    >
      <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
        {advocate.initials}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground">
        Legal accuracy reviewed by{" "}
        <span className="font-semibold text-foreground">{advocate.name}</span>, {advocate.role}
      </p>
    </div>
  );
};

export default TrustStrip;
