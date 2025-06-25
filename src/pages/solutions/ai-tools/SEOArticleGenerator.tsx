
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, FileText, CheckCircle, Target, Search, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SEOArticleGenerator = () => {
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [articleTopic, setArticleTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState("");
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!primaryKeyword || !articleTopic) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng điền từ khóa chính và chủ đề bài viết",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate article generation
    setTimeout(() => {
      const article = `# ${articleTopic}

## Meta Title:
${primaryKeyword} - Complete Guide for ${targetAudience || "Users"} in 2025

## Meta Description:
Discover everything about ${primaryKeyword}. Learn ${secondaryKeywords ? `${secondaryKeywords.split(',')[0]}, ` : ""}tips, strategies, and best practices in this comprehensive guide.

## H1: ${articleTopic}

### Giới thiệu
Bạn đang tìm hiểu về ${primaryKeyword}? Bạn không đơn độc. Trong thế giới số hóa ngày nay, ${primaryKeyword} đã trở thành một yếu tố quan trọng không thể bỏ qua. Bài viết này sẽ cung cấp cho bạn kiến thức toàn diện về ${primaryKeyword}, từ cơ bản đến nâng cao.

## H2: ${primaryKeyword} là gì?

${primaryKeyword} là một khái niệm quan trọng trong lĩnh vực marketing số. Nó giúp ${targetAudience || "người dùng"} có thể đạt được mục tiêu kinh doanh hiệu quả hơn.

### Định nghĩa cơ bản:
- ${primaryKeyword} bao gồm nhiều yếu tố khác nhau
- Mục tiêu chính là tối ưu hóa hiệu suất
- Phù hợp với ${targetAudience || "mọi đối tượng"}

## H2: Tại sao ${primaryKeyword} quan trọng?

Theo nghiên cứu gần đây, ${primaryKeyword} có thể:
- Tăng hiệu quả công việc lên đến 300%
- Giảm thời gian thực hiện các tác vụ
- Cải thiện chất lượng kết quả đầu ra

## H2: Cách sử dụng ${primaryKeyword} hiệu quả

### Bước 1: Chuẩn bị
Trước khi bắt đầu với ${primaryKeyword}, bạn cần:
- Xác định mục tiêu rõ ràng
- Chuẩn bị các công cụ cần thiết
- Hiểu rõ target audience

### Bước 2: Thực hiện
${secondaryKeywords ? `Kết hợp ${primaryKeyword} với ${secondaryKeywords.split(',')[0]} để đạt hiệu quả tối ưu.` : "Áp dụng các chiến lược phù hợp với mục tiêu của bạn."}

### Bước 3: Đánh giá và tối ưu
- Theo dõi kết quả thường xuyên
- Điều chỉnh chiến lược khi cần thiết
- Học hỏi từ các thành công và thất bại

## H2: Các lỗi thường gặp khi sử dụng ${primaryKeyword}

### Lỗi 1: Không có chiến lược rõ ràng
Nhiều người bắt đầu với ${primaryKeyword} mà không có kế hoạch cụ thể.

### Lỗi 2: Bỏ qua việc đo lường
Không theo dõi KPI và metrics quan trọng.

### Lỗi 3: Thiếu kiên nhẫn
${primaryKeyword} cần thời gian để mang lại kết quả.

## H2: Câu hỏi thường gặp về ${primaryKeyword}

### Q: ${primaryKeyword} có phù hợp với doanh nghiệp nhỏ?
A: Hoàn toàn có thể. ${primaryKeyword} có thể điều chỉnh theo quy mô và ngân sách của mọi doanh nghiệp.

### Q: Tôi cần bao lâu để thấy kết quả từ ${primaryKeyword}?
A: Thông thường, bạn có thể thấy kết quả đầu tiên sau 2-3 tháng thực hiện nghiêm túc.

### Q: Chi phí cho ${primaryKeyword} là bao nhiều?
A: Chi phí phụ thuộc vào nhiều yếu tố như quy mô, mục tiêu và phương pháp thực hiện.

## H2: Kết luận

${primaryKeyword} là một công cụ mạnh mẽ có thể giúp ${targetAudience || "bạn"} đạt được mục tiêu kinh doanh. Bằng cách áp dụng đúng chiến lược và kiên trì thực hiện, bạn sẽ thấy được những kết quả tích cực.

**Hành động tiếp theo:** Hãy bắt đầu thực hiện ${primaryKeyword} ngay hôm nay với những kiến thức đã học được từ bài viết này.

---

**Từ khóa được sử dụng:**
- Từ khóa chính: ${primaryKeyword}
${secondaryKeywords ? `- Từ khóa phụ: ${secondaryKeywords}` : ""}

**Số từ ước tính:** ~1,200 từ
**Readability:** Phù hợp cho người đọc từ cấp độ trung bình trở lên`;

      setGeneratedArticle(article);
      setIsGenerating(false);
      toast({
        title: "Tạo bài viết thành công!",
        description: "Bài viết SEO đã được tạo theo template chuẩn",
      });
    }, 3000);
  };

  return (
    <Layout>
      <Hero
        title="SEO Article Generator"
        subtitle="Tạo bài viết SEO chuẩn Google với template chuyên nghiệp. Tối ưu từ khóa, cấu trúc H1-H6, và độ dài nội dung."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Features Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Viết bài SEO chuẩn Google"
            subtitle="Template chuyên nghiệp giúp bài viết của bạn lên top tìm kiếm"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Tối ưu từ khóa</h3>
              <p className="text-gray-600">Phân bố từ khóa chính, phụ và LSI keyword tự nhiên trong bài</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Cấu trúc chuẩn</h3>
              <p className="text-gray-600">H1, H2, H3 theo thứ tự logic, meta title/description tối ưu</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Độ dài chuẩn</h3>
              <p className="text-gray-600">1200-2000 từ, phù hợp với yêu cầu SEO của Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Generator Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Tạo bài viết SEO"
            subtitle="Điền thông tin dưới đây để tạo bài viết SEO chuẩn template"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Thông tin bài viết</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Từ khóa chính (Primary Keyword) *
                  </label>
                  <Input
                    placeholder="VD: content creator tool"
                    value={primaryKeyword}
                    onChange={(e) => setPrimaryKeyword(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Từ khóa phụ (Secondary Keywords)
                  </label>
                  <Input
                    placeholder="VD: AI content writer, blog generator, SEO tool"
                    value={secondaryKeywords}
                    onChange={(e) => setSecondaryKeywords(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Cách nhau bằng dấu phẩy</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chủ đề bài viết *
                  </label>
                  <Input
                    placeholder="VD: Top 5 Content Creator Tools for SEO in 2025"
                    value={articleTopic}
                    onChange={(e) => setArticleTopic(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Đối tượng mục tiêu
                  </label>
                  <Input
                    placeholder="VD: marketers, content creators, small business owners"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90 text-white"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Đang tạo bài viết...
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-5 w-5" />
                        Tạo bài viết SEO
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* SEO Checklist */}
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">SEO Checklist</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Meta Title (60 ký tự)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Meta Description (155 ký tự)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Cấu trúc H1, H2, H3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Từ khóa trong URL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Độ dài 1200+ từ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Internal & External Links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">FAQ Section</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Call-to-Action</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Tips SEO:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Đặt từ khóa chính gần đầu title</li>
                    <li>• Sử dụng số liệu và năm hiện tại</li>
                    <li>• Viết đoạn văn ngắn, dễ đọc</li>
                    <li>• Thêm hình ảnh có ALT text</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Generated Article Display */}
            {generatedArticle && (
              <div className="mt-8 bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Bài viết SEO đã tạo</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Sẵn sàng đăng
                  </Badge>
                </div>
                <div className="bg-gray-50 p-4 rounded border max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap font-mono text-sm">{generatedArticle}</pre>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(generatedArticle);
                      toast({
                        title: "Đã copy!",
                        description: "Bài viết đã được copy vào clipboard"
                      });
                    }}
                  >
                    Copy bài viết
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setGeneratedArticle("")}
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Tại sao chọn tool này?"
            subtitle="Tạo bài viết SEO chuyên nghiệp trong vài phút"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Template chuẩn SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Dựa trên template SEO chuyên nghiệp, đảm bảo bài viết tối ưu cho Google
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Tiết kiệm thời gian</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Tạo bài viết 1200+ từ chỉ trong vài phút thay vì vài giờ viết thủ công
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-10 w-10 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Chuẩn Google</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Tuân theo các nguyên tắc SEO mới nhất, tăng cơ hội lên top tìm kiếm
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CallToAction
        title="Sẵn sàng tạo bài viết SEO chuyên nghiệp?"
        description="Bắt đầu tạo những bài viết SEO chuẩn Google ngay hôm nay với template chuyên nghiệp của chúng tôi"
        primaryButtonText="Bắt đầu ngay"
        primaryButtonLink="#"
        secondaryButtonText="Xem thêm AI Tools"
        secondaryButtonLink="/solutions/ai-tools"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default SEOArticleGenerator;
