import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, X, Share2, Tag } from 'lucide-react';
import blog1 from '@/assets/blog/post-1.jpg';
import blog2 from '@/assets/blog/post-2.jpg';
import blog3 from '@/assets/blog/post-3.jpg';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'post-001',
      title: 'Advanced WordPress Custom Functions',
      excerpt: 'Learn how to create powerful custom functions that extend WordPress functionality and improve your development workflow.',
      content: `
        <h2>Why Custom Functions Matter</h2>
        <p>WordPress custom functions are essential for creating unique functionality that goes beyond what themes and plugins offer. They allow developers to:</p>
        <ul>
          <li>Create custom post types and fields</li>
          <li>Modify WordPress behavior</li>
          <li>Add custom functionality without plugins</li>
          <li>Optimize performance by removing unnecessary features</li>
        </ul>
        
        <h2>Best Practices for Custom Functions</h2>
        <p>When writing custom functions, always follow WordPress coding standards and best practices:</p>
        <ol>
          <li>Use proper naming conventions</li>
          <li>Sanitize and validate all inputs</li>
          <li>Add proper documentation</li>
          <li>Test thoroughly across different environments</li>
        </ol>
        
        <h2>Example: Custom Post Type Function</h2>
        <pre><code>
function create_custom_portfolio() {
    register_post_type('portfolio',
        array(
            'labels' => array(
                'name' => 'Portfolio',
                'singular_name' => 'Portfolio Item'
            ),
            'public' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'has_archive' => true,
        )
    );
}
add_action('init', 'create_custom_portfolio');
        </code></pre>
        
        <p>This function creates a custom post type for portfolio items that can be used to showcase your work effectively.</p>
      `,
      date: '2025-09-10',
      readTime: '5 min read',
      image: blog1,
      tags: ['WordPress', 'PHP', 'Development', 'Custom Functions']
    },
    {
      id: 'post-002',
      title: 'Modern Web Design Trends for 2025',
      excerpt: 'Explore the latest web design trends including glass morphism, minimalism, and advanced CSS techniques.',
      content: `
        <h2>The Evolution of Web Design</h2>
        <p>Web design continues to evolve rapidly, with 2025 bringing exciting new trends that focus on user experience, performance, and visual appeal.</p>
        
        <h2>Key Trends for 2025</h2>
        <h3>1. Glass Morphism</h3>
        <p>Glass morphism creates depth and visual interest through translucent elements with blur effects. This trend adds a futuristic feel to interfaces while maintaining readability.</p>
        
        <h3>2. Ultra-Minimalism</h3>
        <p>Less is more. Ultra-minimalist designs focus on essential elements, creating clean, fast-loading websites that provide excellent user experiences.</p>
        
        <h3>3. Dark Mode First</h3>
        <p>Designing for dark mode first, then adapting to light mode, is becoming the standard approach for modern applications.</p>
        
        <h2>Implementation Tips</h2>
        <ul>
          <li>Use CSS backdrop-filter for glass effects</li>
          <li>Implement proper contrast ratios for accessibility</li>
          <li>Optimize for performance across all devices</li>
          <li>Test designs in both light and dark modes</li>
        </ul>
        
        <p>These trends represent a shift towards more sophisticated, user-centric design approaches that prioritize both aesthetics and functionality.</p>
      `,
      date: '2025-09-08',
      readTime: '7 min read',
      image: blog2,
      tags: ['Design', 'Trends', 'UI/UX', 'CSS']
    },
    {
      id: 'post-003',
      title: 'SEO Optimization for WordPress Sites',
      excerpt: 'Complete guide to optimizing WordPress websites for search engines and improving organic visibility.',
      content: `
        <h2>Why SEO Matters for WordPress</h2>
        <p>Search Engine Optimization is crucial for WordPress sites to improve visibility, drive organic traffic, and achieve better search rankings.</p>
        
        <h2>Essential SEO Strategies</h2>
        <h3>1. Technical SEO</h3>
        <ul>
          <li>Optimize site speed and performance</li>
          <li>Implement proper URL structure</li>
          <li>Create and submit XML sitemaps</li>
          <li>Ensure mobile responsiveness</li>
        </ul>
        
        <h3>2. Content Optimization</h3>
        <ul>
          <li>Research and target relevant keywords</li>
          <li>Write compelling meta descriptions</li>
          <li>Use proper heading structure (H1, H2, H3)</li>
          <li>Optimize images with alt text</li>
        </ul>
        
        <h3>3. WordPress-Specific SEO</h3>
        <ul>
          <li>Use SEO-friendly themes</li>
          <li>Install essential SEO plugins (Yoast, RankMath)</li>
          <li>Optimize permalink structure</li>
          <li>Enable caching and compression</li>
        </ul>
        
        <h2>Measuring Success</h2>
        <p>Track your SEO progress using tools like Google Analytics, Search Console, and SEO plugins to monitor rankings, traffic, and user behavior.</p>
        
        <blockquote>
          "Good SEO work only gets better over time. It's only search engine tricks that need to keep changing when the ranking algorithms change."
        </blockquote>
        
        <p>Remember, SEO is a long-term strategy that requires consistent effort and monitoring to achieve sustainable results.</p>
      `,
      date: '2025-09-05',
      readTime: '6 min read',
      image: blog3,
      tags: ['SEO', 'WordPress', 'Marketing', 'Analytics']
    }
  ];

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  const sharePost = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href + '#blog-' + post.id,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href + '#blog-' + post.id);
    }
  };

  const relatedPosts = selectedPost 
    ? posts.filter(post => 
        post.id !== selectedPost.id && 
        post.tags.some(tag => selectedPost.tags.includes(tag))
      ).slice(0, 2)
    : [];

  return (
    <section id="blog" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Blog
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and design
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="glass-intense rounded-lg overflow-hidden hover-lift cursor-pointer group"
              onClick={() => openPost(post)}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-muted text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-surface-hover text-text-secondary rounded-full border border-border-glass"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs text-text-muted">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 animate-fade-in">
            <div className="glass-intense rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    onClick={() => sharePost(selectedPost)}
                    variant="secondary"
                    size="sm"
                    className="glass"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={closePost}
                    variant="secondary"
                    size="sm"
                    className="glass"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-text-primary text-background rounded-full"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none text-text-muted"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-border-glass">
                    <h3 className="text-xl font-semibold text-text-primary mb-6">
                      Related Posts
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {relatedPosts.map((post) => (
                        <div
                          key={post.id}
                          className="flex gap-4 p-4 glass rounded-lg hover-lift cursor-pointer"
                          onClick={() => setSelectedPost(post)}
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <h4 className="font-semibold text-text-primary mb-1 line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-sm text-text-muted line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;