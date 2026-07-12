import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const Disclaimer = ({ className = "" }) => (
  <p className={`flex items-start gap-2 text-xs sm:text-sm text-muted-foreground ${className}`}>
    <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
    <span>
      Legal information &amp; research support — not a substitute for a licensed advocate.{" "}
      <Link href="/disclaimer" className="font-semibold text-primary hover:underline whitespace-nowrap">
        Read disclaimer
      </Link>
    </span>
  </p>
);

export default Disclaimer;
