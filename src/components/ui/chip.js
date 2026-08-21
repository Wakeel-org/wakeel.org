import { Tag } from "lucide-react";
import { cn } from "../../lib/utils";
import { getCategoryStyle, resolvePortalColors } from "../../data/designSystem";
import { useTheme } from "../../context/ThemeContext";

// Kitab-style category chip — JetBrains-Mono-flavoured, fixed-radius tag
// used for law/journal category taxonomy. Colors are semantic (see
// src/data/designSystem.js) and never change based on portal/audience.
export function CategoryChip({ category, className, showIcon = true }) {
  if (!category) return null;
  const style = getCategoryStyle(category);
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1",
        className
      )}
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {showIcon && <Tag className="w-3 h-3" />}
      {category}
    </span>
  );
}

// Portal stamp chip — identifies which audience a page belongs to
// (Citizen / Student / Lawyer / Judge / Law Firm / Institution).
export function PortalStamp({ portal, className }) {
  const { darkMode } = useTheme();
  if (!portal) return null;
  const { primary, surface } = resolvePortalColors(portal, darkMode);
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded font-mono text-xs font-bold uppercase tracking-[0.14em] px-3 py-1.5",
        portal.neutral && "border-2",
        className
      )}
      style={{
        backgroundColor: surface,
        color: primary,
        borderColor: portal.neutral ? primary : undefined,
      }}
    >
      {portal.label}
    </span>
  );
}
