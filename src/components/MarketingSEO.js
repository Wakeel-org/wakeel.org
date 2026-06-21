import Head from "next/head";
import { site } from "../data/marketing";

const MarketingSEO = ({
  title,
  description,
  path = "/",
  schema = [],
  image = "/logo-dark.svg",
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

  // Language and region metadata
  const regionNames = {
    pk: "Pakistan",
    sa: "Saudi Arabia",
    ae: "United Arab Emirates",
    kw: "Kuwait",
    qa: "Qatar",
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || `Pakistani law, legal help, ${title}`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content={language === "ur" ? "Urdu" : "English"} />
      <meta name="geo.placename" content={regionNames[region] || "Pakistan"} />
      <meta name="geo.region" content={`PK-${region.toUpperCase()}`} />
      <link rel="canonical" href={canonical} />

      {/* Alternate language/region versions */}
      <link rel="alternate" hrefLang="en-PK" href={canonical} />
      <link rel="alternate" hrefLang="ur-PK" href={`${canonical}?lang=ur`} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Wakeel.org" />
      <meta property="og:locale" content={language === "ur" ? "ur_PK" : "en_PK"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO */}
      <meta name="author" content="Wakeel.org" />
      <meta name="publisher" content="Wakeel.org" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Pakistan-specific markers */}
      <meta name="google-site-verification" content="" />
      <meta name="country" content="PK" />

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
