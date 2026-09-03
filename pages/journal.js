import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { CategoryChip } from '../src/components/ui/chip';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  ArrowRight,
  BookOpen,
  TrendingUp,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../src/lib/utils';
import { getBlogPostsServer } from '../src/lib/firebase/admin-collections';
import { pakistanGuides, gccGuides, globalGuides, getGuidePath, articles } from '../src/data/marketing';
import { getCategoryStyle, getGuideCategory } from '../src/data/designSystem';

// Standalone article pages (src/data/marketing.js `articles`) aren't stored in
// Firestore, so they're normalized here to the same shape as a `blog_posts`
// doc and merged with CMS posts for the grid below.
const staticArticlePosts = articles.map((article) => ({
  id: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  category: article.category,
  createdAt: article.publishedAt,
  readTime: article.readTime,
  isStatic: true,
}));

const POSTS_PER_PAGE = 12;

const guideLibrary = [
  {
    title: 'Pakistan Legal Guides',
    description: 'FIR, property, family law, employment, and more for Pakistani citizens.',
    browseAllHref: '/journal/legal-issues-pakistan',
    guides: pakistanGuides,
  },
  {
    title: 'GCC Legal Guides',
    description: 'Labor law, visas, family law, and business guidance across the Gulf.',
    browseAllHref: '/journal/legal-issues-gcc',
    guides: gccGuides,
  },
  {
    title: 'Global Legal Guides',
    description: 'Country-specific guides and cross-border legal topics worldwide.',
    browseAllHref: '/journal/legal-issues-global',
    guides: globalGuides,
  },
];

// Static export (output: 'export') only supports build-time data fetching —
// posts are baked into the HTML here so crawlers see real content without
// running JS. New posts require a rebuild/redeploy to appear.
export async function getStaticProps() {
  const posts = await getBlogPostsServer();
  return { props: { initialPosts: posts } };
}

const JournalPage = ({ initialPosts = [] }) => {
  const [posts] = useState(() =>
    [...initialPosts, ...staticArticlePosts].sort(
      (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    )
  );
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPost] = useState(
    posts.find((post) => post.featured) || posts[0] || null
  );

  // Get unique categories from posts
  const categories = ['All', ...new Set(posts.map(post => post.category).filter(Boolean))];

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, posts]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(clamped);
    if (typeof window !== 'undefined') {
      const grid = document.getElementById('journal-articles');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // A compact page-number list: always show first, last, current, and one
  // neighbour on each side, with '…' gaps in between for large page counts.
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '…') {
        pages.push('…');
      }
    }
    return pages;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const calculateReadTime = (content) => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <Layout>
      <Head>
        <title>Journal - Legal Technology Insights & Updates | Wakeel.org</title>
        <meta name="description" content="Explore Wakeel.org's journal for the latest insights on legal technology, AI in law, industry trends, and expert perspectives on transforming legal practice." />
        <meta name="keywords" content="legal technology blog, legal AI insights, law tech journal, legal innovation, legal research trends, case management technology, legal industry news" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wakeel.org/journal" />
        <meta property="og:title" content="Journal - Legal Technology Insights & Updates | Wakeel.org" />
        <meta property="og:description" content="Explore Wakeel.org's journal for the latest insights on legal technology, AI in law, industry trends, and expert perspectives on transforming legal practice." />
        <meta property="og:image" content="https://wakeel.org/og-journal.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://wakeel.org/journal" />
        <meta name="twitter:title" content="Journal - Legal Technology Insights & Updates | Wakeel.org" />
        <meta name="twitter:description" content="Explore Wakeel.org's journal for the latest insights on legal technology, AI in law, industry trends, and expert perspectives." />
        <meta name="twitter:image" content="https://wakeel.org/og-journal.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://wakeel.org/journal" />
        
        {/* Structured Data for Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Wakeel.org Journal",
              "description": "Legal technology insights, AI in law, and industry perspectives",
              "url": "https://wakeel.org/journal",
              "publisher": {
                "@type": "Organization",
                "name": "Wakeel.org",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://wakeel.org/logo-og.png"
                }
              }
            })
          }}
        />
      </Head>
      {/* Hero Section */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border-2 border-primary/30 bg-primary/5 text-primary mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.14em]">Wakeel Journal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the latest thoughts, insights, and updates from our team. Stay informed about legal technology, industry trends, and company news.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
            </div>
            <Card className="overflow-hidden border-2 border-primary/30 hover:border-primary shadow-none transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-[300px] bg-muted">
                  {featuredPost.imageUrl ? (
                    <Image
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border-2 border-primary/20 bg-primary/5">
                      <FileText className="w-16 h-16 text-primary/40" />
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <CategoryChip category={featuredPost.category} className="text-xs px-3 py-1.5" />
                    <CategoryChip
                      category={getGuideCategory({ title: featuredPost.title, slug: featuredPost.id })}
                      showIcon={false}
                      className="text-xs px-3 py-1.5"
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    {featuredPost.author && (
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    )}
                    {featuredPost.createdAt && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.createdAt)}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime || calculateReadTime(featuredPost.content)}</span>
                    </div>
                  </div>
                  <Button asChild className="w-fit group">
                    <Link href={`/journal/article/${featuredPost.id}`}>
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Legal Guides Library */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Legal Guides Library
            </h2>
            <p className="text-muted-foreground">
              In-depth, plain-language guides on Pakistani, GCC, and global legal topics — all part of the Wakeel Journal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {guideLibrary.map((section) => (
              <Card key={section.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2.5 mb-6">
                    {section.guides.slice(0, 6).map((guide) => (
                      <li key={guide.slug}>
                        <Link
                          href={getGuidePath(guide.slug)}
                          className="text-sm text-foreground hover:text-primary transition-colors flex items-start gap-2 group"
                        >
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-primary/60 group-hover:translate-x-0.5 transition-transform" />
                          <span className="line-clamp-1">{guide.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="sm" className="w-fit mt-auto">
                    <Link href={section.browseAllHref}>
                      Browse all {section.guides.length} guides
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => {
                const style =
                  category !== 'All' && selectedCategory === category
                    ? getCategoryStyle(category)
                    : null;
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                    style={style ? { backgroundColor: style.text, borderColor: style.text, color: '#FFFFFF' } : undefined}
                  >
                    {category}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div id="journal-articles" className="scroll-mt-24">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                {searchQuery || selectedCategory !== 'All'
                  ? 'Try adjusting your search or filters'
                  : 'Check back soon for new content'}
              </p>
            </div>
          ) : (
            <>
            <p className="text-sm text-muted-foreground mb-4">
              Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}
              –{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/journal/article/${post.id}`}
                  className="block h-full"
                >
                <Card
                  className="group overflow-hidden border-2 border-foreground/15 hover:border-foreground/50 shadow-none transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    {post.imageUrl ? (
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center border-2 border-primary/15 bg-primary/5">
                        <FileText className="w-12 h-12 text-primary/40" />
                      </div>
                    )}
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <CategoryChip category={post.category} />
                      <CategoryChip
                        category={getGuideCategory({ title: post.title, slug: post.id })}
                        showIcon={false}
                      />
                    </div>

                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                        )}
                        {post.createdAt && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(post.createdAt)}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime || calculateReadTime(post.content)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                aria-label="Journal article pages"
                className="flex flex-wrap items-center justify-center gap-2 mt-10"
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline ml-1">Previous</span>
                </Button>

                {getPageNumbers().map((page, idx) =>
                  page === '…' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground text-sm">
                      …
                    </span>
                  ) : (
                    <Button
                      key={page}
                      variant={page === currentPage ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => goToPage(page)}
                      aria-current={page === currentPage ? 'page' : undefined}
                      className="min-w-9"
                    >
                      {page}
                    </Button>
                  )
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <span className="hidden sm:inline mr-1">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </nav>
            )}
            </>
          )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/40 border-y-2 border-foreground/10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our journal to receive the latest insights, updates, and industry news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="sm:w-auto">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JournalPage;
