import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { useToast } from "@/hooks/use-toast";
import ArticleGeneratorForm from "@/components/seo-article/ArticleGeneratorForm";
import ArticleFeatures from "@/components/seo-article/ArticleFeatures";
import GeneratedArticleDisplay from "@/components/seo-article/GeneratedArticleDisplay";
import FeaturesSection from "@/components/seo-article/FeaturesSection";
import BenefitsSection from "@/components/seo-article/BenefitsSection";

const SEOArticleGenerator = () => {
  // Add no-index meta tag
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex, nofollow';
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

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
        title: "Missing Information",
        description: "Please fill in the primary keyword and article topic",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate article generation
    setTimeout(() => {
      const article = generateSEOArticle(primaryKeyword, secondaryKeywords, targetAudience, articleTopic);
      setGeneratedArticle(article);
      setIsGenerating(false);
      toast({
        title: "Article Generated Successfully!",
        description: "Your SEO-optimized article is ready to use",
      });
    }, 3000);
  };

  const generateSEOArticle = (primary: string, secondary: string, audience: string, topic: string) => {
    const secondaryArray = secondary.split(',').map(k => k.trim()).filter(k => k);
    const audienceText = audience || "professionals";
    
    // Calculate optimal keyword density (aim for 1-1.5% for primary, 0.5-1% for secondary)
    const targetWordCount = 1500;
    const primaryKeywordOccurrences = Math.floor(targetWordCount * 0.012); // 1.2% density
    const secondaryKeywordOccurrences = Math.floor(targetWordCount * 0.008); // 0.8% density per secondary keyword
    
    // Generate LSI keywords based on primary keyword
    const lsiKeywords = generateLSIKeywords(primary);
    
    // Helper function to get secondary keywords for natural distribution
    const getSecondaryKeyword = (index: number) => {
      if (secondaryArray.length === 0) return '';
      return secondaryArray[index % secondaryArray.length];
    };
    
    return `# ${topic}

## Giới thiệu về ${primary}

${primary} đã trở thành yếu tố thiết yếu trong bối cảnh cạnh tranh số hóa ngày nay. Dù bạn là chủ doanh nghiệp, chuyên gia marketing, hay ${audienceText} đang tìm cách nâng cao hiện diện số, việc thành thạo ${primary} có thể thay đổi hoàn toàn quỹ đạo thành công của bạn. ${secondaryArray.length > 0 ? `Kết hợp với ${getSecondaryKeyword(0)}, ${primary} tạo nên giải pháp toàn diện cho doanh nghiệp hiện đại.` : ''}

Hướng dẫn toàn diện này cung cấp những hiểu biết có thể áp dụng ngay và các chiến lược đã được kiểm chứng để giúp bạn tận dụng ${primary} một cách hiệu quả. ${secondaryArray.length > 1 ? `Chúng ta cũng sẽ khám phá cách ${getSecondaryKeyword(1)} tương tác với ${primary} để tối đa hóa kết quả.` : ''}

## ${primary} là gì và tại sao nó quan trọng?

${primary} đại diện cho một phương pháp tiếp cận cơ bản mà các doanh nghiệp hiện đại không thể bỏ qua. Dữ liệu ngành gần đây cho thấy các tổ chức triển khai chiến lược ${primary} hiệu quả có hiệu suất tốt hơn đến 45% so với những tổ chức không áp dụng. Đối với ${audienceText}, đây không chỉ là cơ hội—mà là điều kiện cần thiết để cạnh tranh.

### Các thành phần cốt lõi của ${primary}

Khái niệm ${primary} bao gồm nhiều yếu tố liên kết với nhau như lập kế hoạch chiến lược, phương pháp thực thi, và tối ưu hóa hiệu suất. ${secondaryArray.length > 0 ? `Các thành phần chính như ${getSecondaryKeyword(0)}${secondaryArray.length > 1 ? `, ${getSecondaryKeyword(1)}` : ''}${secondaryArray.length > 2 ? `, và ${getSecondaryKeyword(2)}` : ''} hoạt động cùng nhau để tạo ra giải pháp toàn diện.` : ''}

${secondaryArray.length > 0 ? `Sự tích hợp giữa ${primary} và ${getSecondaryKeyword(0)} đã chứng minh khả năng mang lại kết quả vượt trội trong môi trường kinh doanh cạnh tranh.` : ''}

## Sự phát triển và hiện trạng của ${primary}

Trong thập kỷ qua, ${primary} đã phát triển từ một chuyên môn ngách thành thực hành kinh doanh chính thống. Các nhà lãnh đạo ngành nhận ra rằng việc triển khai ${primary} hiệu quả có mối tương quan trực tiếp với tăng doanh thu, cải thiện hiệu quả vận hành, và nâng cao sự hài lòng của khách hàng.

${secondaryArray.length > 1 ? `Các phương pháp ${primary} hiện đại tích hợp ${getSecondaryKeyword(1)} và ${lsiKeywords[0]} để mang lại kết quả có thể đo lường được.` : `Các phương pháp ${primary} hiện đại tích hợp ${lsiKeywords[0]} và ${lsiKeywords[1]} để mang lại kết quả có thể đo lường được.`} Sự phát triển này phản ánh những thay đổi trong động lực thị trường và kỳ vọng của người tiêu dùng trong nền kinh tế số trước tiên.

## Lợi ích cốt lõi của việc triển khai ${primary}

### Nâng cao hiệu suất vận hành

Lợi ích chính của ${primary} nằm ở khả năng tinh giản hoạt động và loại bỏ sự kém hiệu quả. Các tổ chức triển khai chương trình ${primary} có cấu trúc thường thấy cải thiện 30-50% trong các chỉ số hiệu suất chính trong vòng sáu tháng.

${primary} cho phép doanh nghiệp tự động hóa các quy trình thường ngày, tối ưu hóa phân bổ tài nguyên, và tập trung nguồn nhân lực vào các hoạt động có giá trị cao. ${secondaryArray.length > 0 ? `Kết hợp với ${getSecondaryKeyword(0)}, hiệu quả vận hành này chuyển đổi trực tiếp thành lợi nhuận cải thiện và vị thế cạnh tranh.` : 'Việc nâng cao vận hành này chuyển đổi trực tiếp thành lợi nhuận cải thiện và vị thế cạnh tranh.'}

### Cải thiện khả năng mở rộng và tiềm năng tăng trưởng

Khả năng mở rộng đại diện cho lợi ích quan trọng khác của ${primary}. Khi doanh nghiệp mở rộng, các phương pháp truyền thống thường bị phá vỡ dưới sự phức tạp gia tăng. ${primary} cung cấp khung và công cụ cần thiết để duy trì chất lượng và hiệu quả trong các giai đoạn tăng trưởng nhanh.

${secondaryArray.length > 1 ? `Đối với ${audienceText}, yếu tố khả năng mở rộng này đặc biệt có giá trị khi lập kế hoạch các sáng kiến chiến lược dài hạn. ${primary} kết hợp với ${getSecondaryKeyword(1)} tạo ra hệ thống bền vững thích ứng với yêu cầu kinh doanh thay đổi mà không ảnh hưởng đến tiêu chuẩn hiệu suất.` : `Đối với ${audienceText}, yếu tố khả năng mở rộng này đặc biệt có giá trị khi lập kế hoạch các sáng kiến chiến lược dài hạn. ${primary} tạo ra hệ thống bền vững thích ứng với yêu cầu kinh doanh thay đổi mà không ảnh hưởng đến tiêu chuẩn hiệu suất.`}

### Nâng cao trải nghiệm và sự hài lòng của khách hàng

Cải thiện trải nghiệm khách hàng có lẽ là lợi ích rõ ràng nhất của việc triển khai ${primary} hiệu quả. ${secondaryArray.length > 0 ? `Thông qua ${getSecondaryKeyword(0)} và các phương pháp tối ưu hóa liên quan, ${primary} cho phép doanh nghiệp tạo ra những tương tác cá nhân hóa hơn và có ý nghĩa hơn.` : `${primary} cho phép doanh nghiệp tạo ra những tương tác cá nhân hóa hơn và có ý nghĩa hơn.`}

## Kết luận

${primary} không còn là tùy chọn mà đã trở thành yêu cầu bắt buộc cho các doanh nghiệp muốn duy trì khả năng cạnh tranh trong thị trường hiện tại. ${secondaryArray.length > 0 ? `Việc tích hợp ${getSecondaryKeyword(0)} cùng với các chiến lược ${primary} sẽ định hình tương lai của ngành và tạo ra cơ hội chưa từng có cho những ai sẵn sàng đầu tư vào sự xuất sắc.` : `Việc áp dụng ${primary} sẽ định hình tương lai của ngành và tạo ra cơ hội chưa từng có cho những ai sẵn sàng đầu tư vào sự xuất sắc.`}`;
  };

  const generateLSIKeywords = (keyword: string) => {
    // Simple LSI keyword generation based on the primary keyword
    const lsiMap: { [key: string]: string[] } = {
      'seo': ['tối ưu hóa công cụ tìm kiếm', 'xếp hạng Google', 'từ khóa'],
      'marketing': ['tiếp thị số', 'quảng cáo', 'khách hàng'],
      'business': ['kinh doanh', 'doanh nghiệp', 'lợi nhuận'],
      'default': ['chiến lược', 'phát triển', 'tối ưu hóa']
    };
    
    const lowerKeyword = keyword.toLowerCase();
    for (const [key, values] of Object.entries(lsiMap)) {
      if (lowerKeyword.includes(key)) {
        return values;
      }
    }
    return lsiMap.default;
  };

  return (
    <Layout>
      <Hero
        title="SEO Article Generator"
        subtitle="Tạo bài viết SEO chuẩn Google với AI và template chuyên nghiệp"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <ArticleFeatures />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Tạo Bài Viết SEO Chuyên Nghiệp"
            subtitle="Nhập thông tin và để AI tạo bài viết SEO hoàn chỉnh cho bạn"
            centered
          />

          <ArticleGeneratorForm
            primaryKeyword={primaryKeyword}
            setPrimaryKeyword={setPrimaryKeyword}
            secondaryKeywords={secondaryKeywords}
            setSecondaryKeywords={setSecondaryKeywords}
            targetAudience={targetAudience}
            setTargetAudience={setTargetAudience}
            articleTopic={articleTopic}
            setArticleTopic={setArticleTopic}
            isGenerating={isGenerating}
            onGenerate={handleGenerate}
          />

          {generatedArticle && (
            <GeneratedArticleDisplay
              generatedArticle={generatedArticle}
              onClear={() => setGeneratedArticle("")}
            />
          )}
        </div>
      </section>

      <FeaturesSection />
      <BenefitsSection />

      <CallToAction
        title="Sẵn sàng tạo nội dung SEO chất lượng?"
        description="Bắt đầu tạo những bài viết SEO chuẩn Google ngay hôm nay"
        primaryButtonText="Bắt đầu ngay"
        primaryButtonLink="#generator"
        secondaryButtonText="Xem thêm công cụ AI"
        secondaryButtonLink="/solutions/ai-tools"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default SEOArticleGenerator;
