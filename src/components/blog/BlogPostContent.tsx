
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({
  content
}) => {
  // Simplified content processing with reduced spacing
  const processContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex];

      // Handle table detection with modern styling
      if (line.includes('|') && line.includes('Mistake') && line.includes('Fix')) {
        const tableData = [];
        let tableIndex = currentIndex + 2;
        while (tableIndex < lines.length && lines[tableIndex].includes('|') && lines[tableIndex].trim() !== '') {
          const cells = lines[tableIndex].split('|').map(cell => cell.trim()).filter(cell => cell !== '');
          if (cells.length >= 2) {
            tableData.push(cells);
          }
          tableIndex++;
        }
        if (tableData.length > 0) {
          elements.push(
            <div key={currentIndex} className="my-6">
              <div className="overflow-hidden rounded-xl shadow-lg border-0">
                <Table>
                  <TableHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <TableRow>
                      <TableHead className="text-white font-bold text-lg py-3">Mistake</TableHead>
                      <TableHead className="text-white font-bold text-lg py-3">Fix</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row, idx) => (
                      <TableRow key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-blue-50" : "bg-blue-50/50 hover:bg-blue-100"}>
                        <TableCell className="font-bold text-blue-600 text-base py-3">{row[0]}</TableCell>
                        <TableCell className="text-gray-700 text-base py-3">{row[1]}</TableCell>
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
          <div key={currentIndex} className="text-center my-6">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3 leading-tight">
              {line.slice(2)}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        );
      } else if (line.startsWith('## ')) {
        const title = line.slice(3);
        elements.push(
          <div key={currentIndex} className="my-6">
            <div className="text-center mb-5">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{title}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>
        );
      } else if (line.startsWith('### ')) {
        const title = line.slice(4);
        const isNumbered = /^\d+\./.test(title);
        elements.push(
          <div key={currentIndex} className="my-4">
            <div className="flex items-center gap-3 mb-3">
              {isNumbered && (
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                  {title.match(/^\d+/)?.[0]}
                </span>
              )}
              <h3 className="text-2xl font-bold gradient-text">
                {isNumbered ? title.replace(/^\d+\.\s*/, '') : title}
              </h3>
            </div>
          </div>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={currentIndex} className="h-2" />);
      } else if (line.startsWith('![')) {
        // Handle images with modern styling - FIX THE IMAGE DISPLAY
        const altMatch = line.match(/!\[(.*?)\]/);
        const urlMatch = line.match(/\((.*?)\)/);
        if (altMatch && urlMatch) {
          elements.push(
            <div key={currentIndex} className="my-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={urlMatch[1]}
                  alt={altMatch[1]}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {altMatch[1] && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{altMatch[1]}</p>
                  </div>
                )}
              </div>
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
            <div key={currentIndex} className={`my-3 ${bgColor} ${borderColor} border-l-4 rounded-r-lg p-3`}>
              <div className="flex items-start gap-2">
                <div className={`w-2 h-2 rounded-full ${borderColor.replace('border-l-', 'bg-')} mt-2 flex-shrink-0`}></div>
                <div>
                  <span className={`font-bold ${textColor} text-base`}>{label}:</span>
                  <span className="text-gray-700 ml-2 text-base leading-relaxed">{contentText}</span>
                </div>
              </div>
            </div>
          );
        } else if (line.trim()) {
          elements.push(
            <p key={currentIndex} className="mb-2 leading-relaxed text-gray-700 text-base">
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
    <div className="prose prose-lg max-w-none">
      <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8">
          {processContent(content)}
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
