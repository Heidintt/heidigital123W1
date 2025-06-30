
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

  // Enhanced content processing with table support
  const processContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex];

      // Handle table detection
      if (line.includes('|') && line.includes('Tool') && line.includes('Best For') && line.includes('Catch')) {
        // Found table header, process the table
        const tableData = [];
        let tableIndex = currentIndex + 2; // Skip header and separator line
        
        while (tableIndex < lines.length && lines[tableIndex].includes('|') && lines[tableIndex].trim() !== '') {
          const cells = lines[tableIndex].split('|').map(cell => cell.trim()).filter(cell => cell !== '');
          if (cells.length >= 3) {
            tableData.push(cells);
          }
          tableIndex++;
        }

        if (tableData.length > 0) {
          elements.push(
            <div key={currentIndex} className="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-lg">
              <Table>
                <TableHeader className="bg-gradient-to-r from-heisocial-blue to-heisocial-purple">
                  <TableRow>
                    <TableHead className="text-white font-bold">Tool</TableHead>
                    <TableHead className="text-white font-bold">Best For</TableHead>
                    <TableHead className="text-white font-bold">Catch</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row, idx) => (
                    <TableRow key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <TableCell className="font-semibold text-heisocial-blue">{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell className="text-gray-600">{row[2]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          );
        }
        
        currentIndex = tableIndex;
        continue;
      }

      // Handle headers with gradient styling
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={currentIndex} className="text-4xl font-bold mt-12 mb-6 gradient-text">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={currentIndex} className="text-3xl font-bold mt-10 mb-4 text-gray-800 border-b-2 border-heisocial-blue pb-2">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={currentIndex} className="text-2xl font-bold mt-8 mb-3 text-heisocial-purple">
            {line.slice(4)}
          </h3>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={currentIndex} className="h-4" />);
      } else {
        // Handle bold text and regular paragraphs
        const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-heisocial-blue font-semibold">$1</strong>');
        
        elements.push(
          <p 
            key={currentIndex} 
            className="mb-4 leading-relaxed text-gray-700 text-lg"
            dangerouslySetInnerHTML={{ __html: boldText }}
          />
        );
      }
      
      currentIndex++;
    }

    return elements;
  };

  return (
    <Layout>
      <article className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8 hover:bg-heisocial-blue/10">
            <Link to="/blog" className="flex items-center gap-2 text-heisocial-blue">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </Button>

          {/* Article header */}
          <header className="mb-12 text-center">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <User size={16} className="text-heisocial-blue" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Calendar size={16} className="text-heisocial-blue" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <Tag size={16} className="text-heisocial-blue" />
                  <span>{post.tags.slice(0, 3).join(", ")}</span>
                </div>
              )}
            </div>

            {/* Featured image */}
            {post.featured_image && (
              <div className="mb-12">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {processContent(post.content)}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-heisocial-blue to-heisocial-purple rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-3 text-white">Need Help With Your Marketing?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Get expert guidance from our team at Heidi Digital
            </p>
            <Button asChild size="lg" className="bg-white text-heisocial-blue hover:bg-gray-100 font-semibold px-8 py-3">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
