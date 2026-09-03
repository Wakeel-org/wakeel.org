import Head from "next/head";
import { site } from "../data/marketing";

const MarketingSEO = ({
  title,
  description,
  path = "/",
  schema = [],
  image = "/logo-og.png",
  region = "pk",
  language = "en",
  keywords = "",
}) => {
  const pageTitle = title?.includes("Wakeel")
    ? title
    : `${title} | Wakeel.org`;
  const canonical = `${site.url}${path === "/" ? "" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;
  const schemaItems = Array.isArray(schema) ? schema : [schema];

  // Derive article-specific OG/meta signals from an Article schema block when
  // present, so per-article freshness and authorship signals reach crawlers
  // and AI answer engines without every article page needing new props.
  const articleSchema = schemaItems.find((item) => item?.["@type"] === "Article");
  const ogType = articleSchema ? "article" : "website";

  // Language and region metadata. `region` is a top-level country/scope
  // code ("pk", "sa", "ae", "kw", "qa"), not a Pakistani province — "global"
  // content has no single country and should not claim one. Previously this
  // always emitted Pakistan-only signals (`geo.region="PK-SA"`,
  // `hrefLang="en-PK"`, `country="PK"`) regardless of the region actually
  // passed in, which mis-targeted every GCC and global guide page. Fixed to
  // derive real per-region metadata instead (see docs/HOMEPAGE-REDESIGN-2026.md,
  // "Pre-production QA fixes").
  const regionMeta = {
    pk: { name: "Pakistan", code: "PK" },
    sa: { name: "Saudi Arabia", code: "SA" },
    ae: { name: "United Arab Emirates", code: "AE" },
    kw: { name: "Kuwait", code: "KW" },
    qa: { name: "Qatar", code: "QA" },
  };
  const geo = regionMeta[region]; // undefined for "global" (or anything unrecognized) — correct, since it has no single place to claim
  const hrefLangCode = geo ? `en-${geo.code}` : "en";
  const ogLocaleCountry = geo ? geo.code : "US"; // neutral international default for global content, never a false Pakistan claim

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || `Pakistani law, legal help, ${title}`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content={language === "ur" ? "Urdu" : "English"} />
      {geo && <meta name="geo.placename" content={geo.name} />}
      {geo && <meta name="geo.region" content={geo.code} />}
      <link rel="canonical" href={canonical} />

      {/* Alternate language/region versions. Only add the region-specific
          hrefLang when it differs from the generic "en" below it — for
          global content (no `geo`) they're the same value, and duplicating
          an identical hrefLang tag is redundant markup. */}
      {geo && <link rel="alternate" hrefLang={hrefLangCode} href={canonical} />}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph — `key`s here match Layout.js's fallback OG tags so
          Next's <Head> dedup collapses to this page-specific version
          instead of emitting both (see the comment on Layout.js's block). */}
      <meta key="og:type" property="og:type" content={ogType} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:title" property="og:title" content={pageTitle} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta key="og:site_name" property="og:site_name" content="Wakeel.org" />
      <meta key="og:locale" property="og:locale" content={language === "ur" ? "ur_PK" : `en_${ogLocaleCountry}`} />
      {articleSchema?.datePublished && (
        <meta property="article:published_time" content={articleSchema.datePublished} />
      )}
      {articleSchema?.dateModified && (
        <meta property="article:modified_time" content={articleSchema.dateModified} />
      )}
      {articleSchema && <meta property="article:publisher" content={site.url} />}
      {articleSchema && <meta property="article:section" content="Legal Help" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO */}
      <meta name="author" content="Wakeel.org" />
      <meta name="publisher" content="Wakeel.org" />
      {articleSchema?.dateModified && (
        <meta name="last-modified" content={articleSchema.dateModified} />
      )}

      {/* Region marker — was unconditionally "PK" for every page including
          GCC/global guides; now reflects the actual region, and is omitted
          entirely for global content rather than falsely claiming a country. */}
      {geo && <meta name="country" content={geo.code} />}

      {/* Schema.org structured data */}
      {schemaItems.filter(Boolean).map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
};

export default MarketingSEO;
