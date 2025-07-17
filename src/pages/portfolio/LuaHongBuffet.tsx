import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Calendar, Star, Users, Flame, CircleDollarSign, Image } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const LuaHongBuffet = () => {
  // SEO optimization
  useSEO({
    title: "Lửa Hồng Buffet Marketing Strategy | Heidigital",
    description: "Complete marketing strategy for Lửa Hồng Buffet - Hot pot buffet restaurant in Ho Chi Minh City. Social media campaigns, viral content, and youth-focused dining experiences.",
    keywords: "Lửa Hồng Buffet, hot pot restaurant marketing, Ho Chi Minh City restaurant, social media marketing, restaurant branding, viral content, TikTok marketing, Facebook marketing, dining experience",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    url: "https://heidigital.info/portfolio/lua-hong-buffet",
    canonicalUrl: "https://heidigital.info/portfolio/lua-hong-buffet",
    type: "article"
  });

  // Structured Data for SEO
  React.useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "https://heidigital.info/portfolio/lua-hong-buffet#article",
          "headline": "Lửa Hồng Buffet Marketing Strategy Case Study",
          "description": "Comprehensive marketing strategy for hot pot buffet restaurant targeting young demographics in Ho Chi Minh City with social media campaigns.",
          "author": {
            "@type": "Organization",
            "name": "Heidi Digital",
            "url": "https://heidigital.info"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Heidi Digital",
            "logo": {
              "@type": "ImageObject",
              "url": "https://heidigital.info/og-image.jpg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://heidigital.info/portfolio/lua-hong-buffet"
          },
          "image": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-29"
        },
        {
          "@type": "CaseStudy",
          "name": "Lửa Hồng Buffet Marketing Strategy",
          "description": "Social media marketing strategy for hot pot buffet restaurant in Ho Chi Minh City",
          "client": "Lửa Hồng Buffet",
          "industry": "Food & Beverage",
          "location": "Binh Thanh District, Ho Chi Minh City",
          "budget": "70,000,000 VND"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://heidigital.info"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Portfolio",
              "item": "https://heidigital.info/portfolio"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Lửa Hồng Buffet Strategy",
              "item": "https://heidigital.info/portfolio/lua-hong-buffet"
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const contentCalendarData = [
    { date: "June 1", contentType: "Announcement Post", contentIdea: "Buffet Battle teaser", platform: "Facebook, IG" },
    { date: "June 3", contentType: "Video Clip", contentIdea: "\"Types of People at Hot Pot Buffets\" - Comedy Clip", platform: "TikTok, IG Reels" },
    { date: "June 5", contentType: "UGC Contest", contentIdea: "Launch \"Most Creative Customer\" competition", platform: "TikTok, IG, FB" },
    { date: "June 7", contentType: "Livestream Event", contentIdea: "Weekly eating challenge livestream", platform: "TikTok, FB" },
    { date: "June 10", contentType: "Interactive Story", contentIdea: "Mystery topping clue release", platform: "IG Stories" },
    { date: "June 12", contentType: "Promotional Post", contentIdea: "Reminder Spin-the-Wheel Event", platform: "FB, IG" },
    { date: "June 14", contentType: "Mini Event", contentIdea: "Spin-the-Wheel onsite", platform: "Onsite, FB Live" },
    { date: "June 17", contentType: "UGC Feature", contentIdea: "Highlight customer-generated content", platform: "IG, TikTok" },
    { date: "June 20", contentType: "Video Clip", contentIdea: "\"Eat without Burning Up!\" Challenge highlights", platform: "TikTok" },
    { date: "June 22", contentType: "Livestream Event", contentIdea: "Hot Pot cooking demonstration", platform: "TikTok, FB" },
    { date: "June 25", contentType: "Event Coverage", contentIdea: "Buffet Battle Live event coverage", platform: "IG, FB Live" },
    { date: "June 28", contentType: "Wrap-up Post", contentIdea: "Buffet Battle highlights", platform: "FB, IG" },
    { date: "June 30", contentType: "Monthly Recap", contentIdea: "Best moments of the month", platform: "IG, TikTok" },
  ];

  const budgetData = [
    { item: "Content Production & Viral Clips", budget: "15,000,000" },
    { item: "Major Events (3 events)", budget: "21,000,000" },
    { item: "Mini-events (6 events)", budget: "9,000,000" },
    { item: "Livestream & Mini-games", budget: "7,000,000" },
    { item: "Gifts & Customer Incentives", budget: "8,000,000" },
    { item: "Decor & Check-in Setup", budget: "8,000,000" },
    { item: "Contingency", budget: "2,000,000" },
    { item: "Total", budget: "70,000,000 VND" },
  ];

  const objectives = [
    {
      title: "Brand Awareness",
      description: "Achieve 100,000 organic interactions on social media (particularly TikTok and Instagram) within 6 months.",
      icon: <Star className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Customer Base",
      description: "Achieve 85% of customers aged 16-35 within the first 6 months.",
      icon: <Users className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Events",
      description: "Organize at least 3 major events and 6 mini-events within 6 months.",
      icon: <Calendar className="h-6 w-6 text-heisocial-purple" />,
    },
    {
      title: "Content",
      description: "Create at least 3 viral content pieces per month (each achieving >100,000 organic reach).",
      icon: <Flame className="h-6 w-6 text-heisocial-purple" />,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Lửa Hồng Buffet Marketing Strategy"
        subtitle="Bringing vibrant energy and youthful atmosphere to a hotpot buffet experience in Ho Chi Minh City"
        backgroundImage="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Overview"
            subtitle="Lửa Hồng Buffet - Hot Pot Buffet"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Brand Name</h3>
                    <p>Lửa Hồng Buffet - Hot Pot Buffet</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p>Binh Thanh District, Ho Chi Minh City</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Concept</h3>
                    <p>A diverse hot pot buffet with a vibrant and youthful atmosphere</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-heisocial-purple mr-2 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-bold">Vision</h3>
                    <p>To become the go-to destination for young people seeking a fun dining experience with friends and family.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hot Pot Buffet Experience" 
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 bg-heisocial-purple text-white px-4 py-2 rounded-bl-lg font-bold">
                  Case Study
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-heisocial-blue mb-6">Specific Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {objective.icon}
                    <h4 className="ml-2 font-bold">{objective.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Target Audience Insights"
            subtitle="Understanding the 16-35 year old demographic"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <p className="text-white/90">Enjoy unique and exciting dining experiences.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🎬</div>
              <p className="text-white/90">Easily attracted by trending and highly interactive content.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <p className="text-white/90">Love sharing their experiences on social media and actively seek attractive check-in spots.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl mb-4">🎉</div>
              <p className="text-white/90">Frequently gather with friends and prefer venues with events and entertainment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Content Strategy"
            subtitle="Dining Should Be Fun – Fun Means Lửa Hồng"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Flame className="h-6 w-6 text-red-500 mr-2" />
                Unique Viral Content
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Food Challenge "Eat without Burning Up!"</strong>: Series featuring unusual toppings and increasing spice levels; successful participants receive direct discounts.</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Parody Videos "Types of People at Hot Pot Buffets"</strong>: Funny, relatable TikTok clips that encourage sharing.</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>"Mystery Topping" Series</strong>: Weekly challenges for customers to find and film mystery toppings, with special rewards.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 text-orange-500 mr-2" />
                UGC Content
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Encourage customers to create review and check-in videos, offering monthly awards for "Most Creative Customer."</span>
                </li>
                <li className="flex">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Establish a "Wall of Fame" both online and offline to honor viral contributors.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-yellow-500 mr-2" />
                Livestream & Real-time Content
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Host livestreamed events, eating challenges, and interactive Q&A sessions on TikTok and Facebook.</span>
                </li>
                <li className="flex">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Implement online mini-games during livestreams to attract immediate offline visits.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events & Experiences Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Events & Experiences"
            subtitle="Event Marketing Strategy"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-red-500 p-3 rounded-full text-white mr-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Major Events</h3>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Lửa Hồng Neon Night</h4>
                  <p className="text-gray-600 mb-4">Live DJ, overnight hot pot buffet, neon-themed photo areas.</p>
                  <Badge variant="outline" className="bg-red-50 text-red-500 border-red-200">Quarterly Event</Badge>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">"Hot Pot Speed Dating"</h4>
                  <p className="text-gray-600 mb-4">Quick-dating event aimed at young singles who love food and meeting new people.</p>
                  <Badge variant="outline" className="bg-red-50 text-red-500 border-red-200">Special Event</Badge>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Buffet Battle</h4>
                  <p className="text-gray-600 mb-4">Competitive eating and fun quizzes about food, livestreamed with big prizes.</p>
                  <Badge variant="outline" className="bg-red-50 text-red-500 border-red-200">Flagship Event</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-3 rounded-full text-white mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Mini Events</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Exclusive Dipping Sauce Workshops</h4>
                  <p className="text-gray-600">Learn to create Lửa Hồng's signature dipping sauces with our chef.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Happy Hour Discounts</h4>
                  <p className="text-gray-600">Special pricing during fixed weekly hours to drive traffic during slower periods.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Spin-the-Wheel Games</h4>
                  <p className="text-gray-600">Onsite games offering vouchers and free toppings to enhance the dining experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Concept Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Space & Visual Concept"
            subtitle="Creating a vibrant dining environment"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-red-600 to-red-500 text-white">
              <Image className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Decor</h3>
              <p>Featuring neon photo spots and humorous slogans to engage the young audience.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 text-white">
              <Image className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Vibrant Color Palette</h3>
              <p>Primary Visual Colors: Neon red, burnt orange, vibrant yellow accents.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-500 text-white">
              <Image className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">"Fire Check-in" Spot</h3>
              <p>Interactive area featuring LED screens, neon lighting, and trending funny quotes.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Budget Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Estimated Budget"
            subtitle="Investment allocation for the marketing plan"
            centered
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-red-600 to-orange-500 text-white">
              <div className="flex items-center">
                <CircleDollarSign className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Budget Breakdown</h3>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Budget (VND)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {budgetData.map((item, index) => (
                  <TableRow key={index} className={item.item === "Total" ? "font-bold bg-gray-50" : ""}>
                    <TableCell>{item.item}</TableCell>
                    <TableCell className="text-right">{item.budget}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Content Calendar Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Content Calendar Demo"
            subtitle="Strategic content planning for June"
            centered
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">June Content Schedule</h3>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Content Type</TableHead>
                    <TableHead>Content Idea</TableHead>
                    <TableHead>Platform</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contentCalendarData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.contentType}</TableCell>
                      <TableCell>{row.contentIdea}</TableCell>
                      <TableCell>{row.platform}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conclusion & Highlights
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              Combining unique offline experiences, humorous online content, and meaningful engagement with young customers, Lửa Hồng's marketing strategy will create a memorable, fun brand that easily resonates and spreads within the youth community of Ho Chi Minh City.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🚀 Viral Potential</h3>
              <p className="text-white/80">Creating content that naturally encourages sharing and participation from the target demographic.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🎯 Focused Targeting</h3>
              <p className="text-white/80">Strategy specifically designed for the 16-35 age demographic and their social behaviors.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🔄 Online-Offline Integration</h3>
              <p className="text-white/80">Seamless connection between digital content and in-restaurant experiences to drive real traffic.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Create Your Own Marketing Success Story?"
        description="Let's discuss how our strategic marketing expertise can help your business achieve remarkable growth."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default LuaHongBuffet;
