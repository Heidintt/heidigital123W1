
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = useBlogPosts();

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heisocial-blue mx-auto mb-4"></div>
            <p>Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500">Error loading article: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  // Simplified content processing with unified styling
  const processContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex];

      // Handle table detection with modern styling
      if (line.includes('|') && line.includes('Tool') && line.includes('Best For') && line.includes('Catch')) {
        const tableData = [];
        let tableIndex = currentIndex + 2;
        
        while (tableIndex < lines.length && lines[tableIndex].includes('|') && lines[tableIndex].trim() !== '') {
          const cells = lines[tableIndex].split('|').map(cell => cell.trim()).filter(cell => cell !== '');
          if (cells.length >= 3) {
            tableData.push(cells);
          }
          tableIndex++;
        }

        if (tableData.length > 0) {
          elements.push(
            <div key={currentIndex} className="my-16">
              <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Quick Tool Snapshot</h3>
              <div className="overflow-hidden rounded-2xl shadow-2xl border-0">
                <Table>
                  <TableHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <TableRow>
                      <TableHead className="text-white font-bold text-lg py-6">Tool</TableHead>
                      <TableHead className="text-white font-bold text-lg py-6">Best For</TableHead>
                      <TableHead className="text-white font-bold text-lg py-6">Catch</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row, idx) => (
                      <TableRow key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-blue-50" : "bg-blue-50/50 hover:bg-blue-100"}>
                        <TableCell className="font-bold text-blue-600 text-lg py-6">{row[0]}</TableCell>
                        <TableCell className="text-gray-700 text-base py-6">{row[1]}</TableCell>
                        <TableCell className="text-gray-600 text-base py-6">{row[2]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          );
        }
        
        currentIndex = tableIndex;
        continue;
      }

      // Handle main headers with beautiful styling
      if (line.startsWith('# ')) {
        elements.push(
          <div key={currentIndex} className="text-center my-20">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 leading-tight">
              {line.slice(2)}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        );
      } else if (line.startsWith('## ')) {
        const title = line.slice(3);
        elements.push(
          <div key={currentIndex} className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>
        );
      } else if (line.startsWith('### ')) {
        const title = line.slice(4);
        const isNumbered = /^\d+\./.test(title);
        
        elements.push(
          <div key={currentIndex} className="my-12">
            <div className="flex items-center gap-4 mb-6">
              {isNumbered && (
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {title.match(/^\d+/)?.[0]}
                </span>
              )}
              <h3 className="text-3xl font-bold gradient-text">
                {isNumbered ? title.replace(/^\d+\.\s*/, '') : title}
              </h3>
            </div>
          </div>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={currentIndex} className="h-6" />);
      } else if (line.startsWith('![')) {
        // Handle images with modern styling
        const altMatch = line.match(/!\[(.*?)\]/);
        const urlMatch = line.match(/\((.*?)\)/);
        
        if (altMatch && urlMatch) {
          elements.push(
            <div key={currentIndex} className="my-12">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={urlMatch[1]}
                  alt={altMatch[1]}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {altMatch[1] && (
                <p className="text-center text-gray-600 italic mt-4 text-lg">{altMatch[1]}</p>
              )}
            </div>
          );
        }
      } else {
        // Handle regular paragraphs with clean styling (no ** processing)
        const cleanText = line.replace(/\*\*(.*?)\*\*/g, '$1');
        
        // Special styling for key phrases
        if (line.includes('Get Started:') || line.includes('Why It Shines:') || line.includes('Pro Tip:') || line.includes('Limitation:')) {
          const [label, ...content] = cleanText.split(':');
          const contentText = content.join(':').trim();
          
          let borderColor = 'border-l-blue-500';
          let bgColor = 'bg-blue-50/50';
          let textColor = 'text-blue-700';
          
          if (label.includes('Why It Shines')) {
            borderColor = 'border-l-green-500';
            bgColor = 'bg-green-50/50';
            textColor = 'text-green-700';
          } else if (label.includes('Pro Tip')) {
            borderColor = 'border-l-yellow-500';
            bgColor = 'bg-yellow-50/50';
            textColor = 'text-yellow-700';
          } else if (label.includes('Limitation')) {
            borderColor = 'border-l-red-500';
            bgColor = 'bg-red-50/50';
            textColor = 'text-red-700';
          }
          
          elements.push(
            <div key={currentIndex} className={`my-6 ${bgColor} ${borderColor} border-l-4 rounded-r-lg p-6`}>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full ${borderColor.replace('border-l-', 'bg-')} mt-2 flex-shrink-0`}></div>
                <div>
                  <span className={`font-bold ${textColor} text-lg`}>{label}:</span>
                  <span className="text-gray-700 ml-2 text-lg leading-relaxed">{contentText}</span>
                </div>
              </div>
            </div>
          );
        } else if (line.trim()) {
          elements.push(
            <p 
              key={currentIndex} 
              className="mb-6 leading-relaxed text-gray-700 text-lg"
            >
              {cleanText}
            </p>
          );
        }
      }
      
      currentIndex++;
    }

    return elements;
  };

  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8 hover:bg-blue-50 transition-colors">
            <Link to="/blog" className="flex items-center gap-2 text-blue-600 font-medium">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </Button>

          {/* Article header */}
          <header className="mb-16 text-center">
            <div className="mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight gradient-text">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
                <User size={18} className="text-blue-600" />
                <span className="font-medium">By {post.author}</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
                <Calendar size={18} className="text-blue-600" />
                <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
                  <Tag size={18} className="text-blue-600" />
                  <span className="font-medium">{post.tags.slice(0, 3).join(", ")}</span>
                </div>
              )}
            </div>

            {/* Featured image */}
            {post.featured_image && (
              <div className="mb-16 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                {processContent(post.content)}
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 overflow-hidden rounded-2xl shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Need Help With Your Marketing?</h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Get expert guidance from our team at Heidi Digital
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
