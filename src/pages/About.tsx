
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Lightbulb, Eye, Target, Handshake, Brain, Rocket, TrendingUp, Zap, Shield, Award, Users, Globe, BarChart } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Luôn tìm kiếm và ứng dụng những công nghệ mới nhất để mang lại hiệu quả tối ưu.",
      icon: Lightbulb,
    },
    {
      title: "Transparency",
      description: "Minh bạch trong mọi báo cáo và giao tiếp với khách hàng.",
      icon: Eye,
    },
    {
      title: "Results",
      description: "Tập trung vào kết quả thực tế và có thể đo lường được.",
      icon: Target,
    },
    {
      title: "Partnership",
      description: "Làm việc như một đối tác lâu dài, cam kết thành công của bạn.",
      icon: Handshake,
    },
  ];

  const expertise = [
    {
      title: "Digital Marketing Strategy",
      description: "Xây dựng chiến lược marketing toàn diện kết hợp công nghệ hiện đại và hiểu biết sâu về thị trường.",
      icon: Brain,
    },
    {
      title: "Creative Solutions",
      description: "Tạo ra những giải pháp sáng tạo độc đáo giúp thương hiệu của bạn nổi bật trong thị trường cạnh tranh.",
      icon: Rocket,
    },
    {
      title: "Performance Optimization",
      description: "Tối ưu hóa hiệu suất và ROI thông qua phân tích dữ liệu và điều chỉnh chiến lược liên tục.",
      icon: TrendingUp,
    },
  ];

  const services = [
    {
      title: "Brand Development",
      description: "Xây dựng thương hiệu mạnh mẽ từ ý tưởng đến triển khai thực tế.",
      icon: Users,
    },
    {
      title: "Digital Presence",
      description: "Tạo dựng sự hiện diện số mạnh mẽ trên tất cả các nền tảng.",
      icon: Globe,
    },
    {
      title: "Data Analytics",
      description: "Phân tích dữ liệu để đưa ra quyết định marketing thông minh.",
      icon: BarChart,
    },
  ];

  return (
    <Layout>
      <Hero
        title="About Heidigital"
        subtitle="Đối tác tin cậy trong hành trình phát triển thương hiệu số của bạn"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Company Introduction */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block p-4 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-2xl mb-6">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Chào mừng đến với <span className="gradient-text">Heidigital</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Chúng tôi là một agency marketing chuyên nghiệp, tập trung vào việc biến ý tưởng thành hiện thực thông qua các chiến lược marketing sáng tạo và hiệu quả. 
                  Với sự kết hợp giữa công nghệ hiện đại và hiểu biết sâu sắc về thị trường, chúng tôi giúp doanh nghiệp đạt được mục tiêu tăng trưởng bền vững.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Marketing Dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-8 -left-8 bg-gradient-to-r from-heidigital-blue to-heidigital-purple text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">Digital</div>
                  <div className="text-sm opacity-90">First</div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-heidigital-purple">Creative</div>
                  <div className="text-gray-600 text-sm">Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-br from-heidigital-lightpurple to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Sứ mệnh & <span className="gradient-text">Tầm nhìn</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-heidigital-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
                <p className="text-gray-600 leading-relaxed">
                  Giúp các doanh nghiệp Việt Nam tiếp cận và ứng dụng thành công các giải pháp marketing hiện đại, 
                  tạo ra giá trị bền vững và tăng trưởng mạnh mẽ trong thời đại số.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-heidigital-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trở thành đối tác marketing đáng tin cậy hàng đầu, tiên phong trong việc ứng dụng công nghệ 
                  để tạo ra những chiến dịch marketing sáng tạo và hiệu quả.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Lĩnh vực chuyên môn"
            subtitle="Kiến thức chuyên sâu mang lại kết quả vượt trội"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
                <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Giá trị cốt lõi"
            subtitle="Những nguyên tắc định hướng mọi hoạt động của chúng tôi"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Heidigital */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Tại sao chọn <span className="gradient-text">Heidigital</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Chúng tôi không chỉ là một agency marketing thông thường. Phương pháp tiếp cận độc đáo của chúng tôi 
                kết hợp chuyên môn sáng tạo với chiến lược dựa trên dữ liệu và công nghệ tiên tiến.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phương pháp toàn diện</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tích hợp công nghệ hiện đại vào mọi khía cạnh của chiến lược marketing, đảm bảo 
                      quyết định dựa trên dữ liệu và hiệu suất tối ưu trên tất cả các kênh.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Thiết kế lấy con người làm trung tâm</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Công nghệ phục vụ con người, không phải ngược lại. Mọi giải pháp đều được thiết kế 
                      với nhu cầu và trải nghiệm của khách hàng làm trọng tâm.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Kết quả có thể đo lường</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mọi chiến dịch đều được thiết kế với KPI rõ ràng và kết quả có thể đo lường 
                      để đảm bảo ROI hữu hình cho khoản đầu tư của doanh nghiệp.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Đổi mới liên tục</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Luôn cập nhật với các công nghệ marketing mới nhất và xu hướng mới nổi 
                      để giữ cho doanh nghiệp của bạn có lợi thế cạnh tranh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital marketing workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-heidigital-blue/20 to-heidigital-purple/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Sẵn sàng chuyển đổi marketing của bạn?"
        description="Hãy thảo luận về cách các chiến lược marketing hiện đại có thể giúp doanh nghiệp của bạn đạt được tăng trưởng vượt trội và lợi thế cạnh tranh."
        primaryButtonText="Bắt đầu hành trình"
        primaryButtonLink="/contact"
        secondaryButtonText="Khám phá dịch vụ"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default About;
