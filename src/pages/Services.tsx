
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import { Zap, Users, BarChart3, Palette, Target, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Xây dựng và phát triển cộng đồng trên các nền tảng mạng xã hội với chiến lược nội dung và chiến dịch mục tiêu.",
      features: ["Chiến lược nội dung", "Quản lý cộng đồng", "Chiến dịch quảng cáo", "Phân tích & Báo cáo"]
    },
    {
      icon: Zap,
      title: "Content Creation",
      description: "Tạo nội dung hấp dẫn kể câu chuyện thương hiệu của bạn và thúc đẩy sự tương tác trên tất cả các kênh marketing.",
      features: ["Viết Blog", "Sản xuất Video", "Thiết kế đồ họa", "Chiến lược nội dung"]
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Cải thiện thứ hạng tìm kiếm và tăng lưu lượng truy cập tự nhiên với các chiến lược SEO toàn diện.",
      features: ["SEO kỹ thuật", "Tối ưu nội dung", "Xây dựng liên kết", "SEO địa phương"]
    },
    {
      icon: Palette,
      title: "Brand Development",
      description: "Tạo bản sắc thương hiệu mạnh mẽ, đáng nhớ, phù hợp với đối tượng mục tiêu và nổi bật so với đối thủ.",
      features: ["Chiến lược thương hiệu", "Thiết kế Logo", "Hướng dẫn thương hiệu", "Định vị thương hiệu"]
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Tối đa hóa ROI với các chiến dịch quảng cáo kỹ thuật số mục tiêu trên Google, Facebook và các nền tảng khác.",
      features: ["Chiến dịch PPC", "Quảng cáo mạng xã hội", "Quảng cáo hiển thị", "Remarketing"]
    },
    {
      icon: Bot,
      title: "AI Marketing Solutions",
      description: "Tận dụng trí tuệ nhân tạo để tự động hóa và tối ưu hóa các nỗ lực marketing để có kết quả tốt hơn.",
      features: ["Tự động hóa Marketing", "Phân tích AI", "Phát triển Chatbot", "Marketing dự đoán"]
    }
  ];

  return (
    <Layout>
      <Hero
        title="Dịch Vụ Của Chúng Tôi"
        subtitle="Giải pháp marketing số toàn diện để phát triển doanh nghiệp của bạn"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Những Gì Chúng Tôi Cung Cấp"
            subtitle="Dịch vụ marketing số từ đầu đến cuối được thiết kế riêng cho nhu cầu doanh nghiệp của bạn"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Sẵn Sàng Thay Đổi Marketing Của Bạn?"
        description="Hãy thảo luận về cách các dịch vụ marketing số toàn diện của chúng tôi có thể giúp doanh nghiệp của bạn đạt được sự tăng trưởng và thành công đáng kể trong bối cảnh cạnh tranh ngày nay."
        primaryButtonText="Bắt Đầu Ngay Hôm Nay"
        primaryButtonLink="/contact"
        secondaryButtonText="Xem Công Việc Của Chúng Tôi"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Services;
