
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

  // Enhanced content processing with modern visual components
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
            <Card key={currentIndex} className="my-12 overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white text-center">Quick Tool Snapshot</h3>
              </div>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-gradient-to-r from-blue-500 to-purple-500">
                    <TableRow>
                      <TableHead className="text-white font-bold text-lg">Tool</TableHead>
                      <TableHead className="text-white font-bold text-lg">Best For</TableHead>
                      <TableHead className="text-white font-bold text-lg">Catch</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row, idx) => (
                      <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
                        <TableCell className="font-bold text-blue-600 text-lg">{row[0]}</TableCell>
                        <TableCell className="text-gray-700 text-base">{row[1]}</TableCell>
                        <TableCell className="text-gray-600 text-base">{row[2]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          );
        }
        
        currentIndex = tableIndex;
        continue;
      }

      // Handle main headers with beautiful styling
      if (line.startsWith('# ')) {
        elements.push(
          <div key={currentIndex} className="text-center my-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4 leading-tight">
              {line.slice(2)}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        );
      } else if (line.startsWith('## ')) {
        const title = line.slice(3);
        elements.push(
          <Card key={currentIndex} className="my-12 bg-gradient-to-r from-blue-600 to-purple-600 border-0 overflow-hidden">
            <CardContent className="p-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
              <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
            </CardContent>
          </Card>
        );
      } else if (line.startsWith('### ')) {
        const title = line.slice(4);
        const isNumbered = /^\d+\./.test(title);
        
        elements.push(
          <Card key={currentIndex} className="my-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 bg-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                {isNumbered && (
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {title.match(/^\d+/)?.[0]}
                  </span>
                )}
                <span className={isNumbered ? "gradient-text" : "text-blue-600"}>
                  {isNumbered ? title.replace(/^\d+\.\s*/, '') : title}
                </span>
              </h3>
            </CardContent>
          </Card>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={currentIndex} className="h-6" />);
      } else if (line.startsWith('![')) {
        // Handle images with modern card styling
        const altMatch = line.match(/!\[(.*?)\]/);
        const urlMatch = line.match(/\((.*?)\)/);
        
        if (altMatch && urlMatch) {
          elements.push(
            <Card key={currentIndex} className="my-10 overflow-hidden shadow-2xl border-0">
              <div className="relative group">
                <img
                  src={urlMatch[1]}
                  alt={altMatch[1]}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {altMatch[1] && (
                <CardContent className="p-4 bg-gray-50">
                  <p className="text-center text-gray-600 italic">{altMatch[1]}</p>
                </CardContent>
              )}
            </Card>
          );
        }
      } else {
        // Handle regular paragraphs with enhanced styling
        const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-600 font-semibold">$1</strong>');
        
        // Special styling for key phrases
        if (line.includes('Get Started:') || line.includes('Why It Shines:') || line.includes('Pro Tip:') || line.includes('Limitation:')) {
          const [label, ...content] = line.split(':');
          const contentText = content.join(':').trim();
          
          let bgColor = 'bg-blue-50 border-blue-200';
          let iconColor = 'text-blue-600';
          
          if (label.includes('Why It Shines')) {
            bgColor = 'bg-green-50 border-green-200';
            iconColor = 'text-green-600';
          } else if (label.includes('Pro Tip')) {
            bgColor = 'bg-yellow-50 border-yellow-200';
            iconColor = 'text-yellow-600';
          } else if (label.includes('Limitation')) {
            bgColor = 'bg-red-50 border-red-200';
            iconColor = 'text-red-600';
          }
          
          elements.push(
            <Card key={currentIndex} className={`my-6 ${bgColor} border-l-4 shadow-md hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full ${iconColor.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                  <div>
                    <span className={`font-bold ${iconColor} text-lg`}>{label}:</span>
                    <span className="text-gray-700 ml-2 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: boldText.replace(label + ':', '') }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        } else if (line.trim()) {
          elements.push(
            <p 
              key={currentIndex} 
              className="mb-6 leading-relaxed text-gray-700 text-lg"
              dangerouslySetInnerHTML={{ __html: boldText }}
            />
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
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <User size={18} className="text-blue-600" />
                  <span className="font-medium">By {post.author}</span>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar size={18} className="text-blue-600" />
                  <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
                </CardContent>
              </Card>
              {post.tags && post.tags.length > 0 && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Tag size={18} className="text-blue-600" />
                    <span className="font-medium">{post.tags.slice(0, 3).join(", ")}</span>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Featured image */}
            {post.featured_image && (
              <Card className="mb-16 overflow-hidden shadow-2xl border-0">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </Card>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                {processContent(post.content)}
              </CardContent>
            </Card>
          </div>

          {/* Call to action */}
          <Card className="mt-16 overflow-hidden border-0 shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Need Help With Your Marketing?</h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Get expert guidance from our team at Heidi Digital
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
