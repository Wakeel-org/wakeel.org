import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  FileText
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../src/lib/utils';

const JournalPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Load Firebase lazily so it stays out of the journal's initial bundle.
        const { getBlogPosts } = await import('../src/lib/firebase/collections');
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
        setFilteredPosts(blogPosts);
        
        // Set the first post as featured or find one marked as featured
        const featured = blogPosts.find(post => post.featured) || blogPosts[0];
        setFeaturedPost(featured);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
  }, [searchQuery, selectedCategory, posts]);

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

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <BookOpen className="w-12 h-12 text-primary" />
            <p className="text-muted-foreground">Loading journal entries...</p>
          </div>
        </div>
      </Layout>
    );
  }

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
      <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Wakeel Journal</span>
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
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20">
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
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                      <FileText className="w-16 h-16 text-primary/40" />
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  {featuredPost.category && (
                    <span className="inline-flex items-center gap-1 w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                  )}
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
                      <span>{calculateReadTime(featuredPost.content)}</span>
                    </div>
                  </div>
                  <Button className="w-fit group">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

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
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
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
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <FileText className="w-12 h-12 text-primary/40" />
                      </div>
                    )}
                  </div>
                  <CardHeader className="flex-grow">
                    {post.category && (
                      <span className="inline-flex items-center gap-1 w-fit px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    )}
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
                        <span>{calculateReadTime(post.content)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
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
