import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Tag, FileText } from "lucide-react";
import Layout from "../../../src/components/Layout";
import { site } from "../../../src/data/marketing";
import { getBlogPostsServer } from "../../../src/lib/firebase/admin-collections";

export async function getStaticPaths() {
  const posts = await getBlogPostsServer();
  return {
    paths: posts.map((post) => ({ params: { slug: post.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getBlogPostsServer();
  const post = posts.find((item) => item.id === params.slug) || null;

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

const formatDate = (timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const calculateReadTime = (content) => {
  if (!content) return "5 min read";
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

const ArticlePage = ({ post }) => {
  const path = `/journal/article/${post.id}`;
  const description = post.excerpt || post.title;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description,
      author: post.author ? { "@type": "Person", name: post.author } : undefined,
      datePublished: post.createdAt || undefined,
      publisher: {
        "@type": "Organization",
        name: "Wakeel.org",
        logo: { "@type": "ImageObject", url: `${site.url}/logo-og.png` },
      },
      url: `${site.url}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Journal", item: `${site.url}/journal` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}${path}` },
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{post.title} | Wakeel.org Journal</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site.url}${path}`} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${site.url}${path}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <article className="bg-background">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>

          {post.category && (
            <span className="inline-flex items-center gap-1 w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            )}
            {post.createdAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{calculateReadTime(post.content)}</span>
            </div>
          </div>

          {post.imageUrl ? (
            <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden mb-10 bg-muted">
              <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
            </div>
          ) : (
            <div className="w-full h-48 rounded-lg mb-10 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <FileText className="w-12 h-12 text-primary/40" />
            </div>
          )}

          <div className="prose prose-neutral dark:prose-invert max-w-none whitespace-pre-line text-foreground leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticlePage;
