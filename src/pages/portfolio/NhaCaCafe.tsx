
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Cat, 
  Users, 
  Calendar, 
  TrendingUp, 
  Target, 
  Briefcase, 
  Users2,
  DollarSign,
  Star,
  FacebookIcon,
  Instagram,
  CircleDollarSign,
  Award,
  ChartBar,
  Percent,
  Coffee,
  Heart,
  MapPin,
  Clock,
  Palette,
  Camera
} from "lucide-react";

const NhaCaCafe = () => {
  const objectives = [
    {
      icon: <Users className="w-6 h-6 text-heisocial-blue" />,
      title: "Brand Awareness",
      description: "20,000+ social media followers by Q4 2025, gain feature coverage in 3+ local media outlets",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-heisocial-purple" />,
      title: "Foot Traffic",
      description: "Increase daily customers from 100 to 130 through enhanced promotions and experiences",
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-heisocial-blue" />,
      title: "Revenue Growth",
      description: "Boost monthly sales through workshops, seasonal menus, and loyalty programs",
    },
    {
      icon: <Users2 className="w-6 h-6 text-heisocial-purple" />,
      title: "Community Engagement",
      description: "12 creative workshops per year with 80%+ attendance, 5+ local partnerships",
    },
  ];

  const workshops = [
    { month: "January", theme: "Festive Creativity", description: "Cat-themed Tet greeting cards and lucky money envelopes" },
    { month: "February", theme: "Valentine's Love", description: "Design heartfelt cards with a feline twist" },
    { month: "March", theme: "Art & Design", description: "DIY home décor techniques with founder" },
    { month: "April", theme: "Spring Inspirations", description: "Craft handmade décor with spring colors" },
    { month: "May", theme: "Cat Care Basics", description: "Pet care tips with local vet" },
    { month: "June", theme: "Summer Refresh", description: "Create innovative, refreshing beverages" },
    { month: "July", theme: "Back-to-School", description: "Customize creative school supplies" },
    { month: "August", theme: "DIY Home Décor", description: "Hands-on interior decoration workshop" },
    { month: "September", theme: "Autumn & Cat Moments", description: "Photography session with café cats" },
    { month: "October", theme: "Halloween Creativity", description: "Craft Halloween accessories and décor" },
    { month: "November", theme: "Art & Relaxation", description: "Painting and journaling session" },
    { month: "December", theme: "Christmas & New Year", description: "Create festive cat-themed ornaments" },
  ];

  const targetAudience = [
    {
      icon: <Users2 className="w-6 h-6 text-heisocial-blue" />,
      title: "Students (15-25 years)",
      description: "Seeking study-friendly, 'Instagrammable' spots",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-heisocial-purple" />,
      title: "Young Professionals (25-35 years)",
      description: "Looking for creative, relaxing spaces to socialize",
    },
    {
      icon: <Cat className="w-6 h-6 text-heisocial-blue" />,
      title: "Cat Lovers",
      description: "Both locals and tourists seeking unique experiences",
    },
    {
      icon: <Target className="w-6 h-6 text-heisocial-purple" />,
      title: "Families & Tourists",
      description: "Attracted by kid-friendly events and local culture",
    },
  ];

  const contentPillars = [
    {
      icon: <Cat className="w-6 h-6" />,
      title: "#MeowOfTheDay",
      description: "Daily posts showcasing café cats' antics",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "#WorkshopWednesday",
      description: "Weekly workshop highlights and teasers",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "#NhaCaStories",
      description: "Customer testimonials and behind-the-scenes content",
    },
  ];

  const socialPlatforms = [
    {
      icon: <Instagram className="w-6 h-6" />,
      platform: "Instagram & TikTok",
      description: "Short, engaging videos of café decor and cats",
    },
    {
      icon: <FacebookIcon className="w-6 h-6" />,
      platform: "Facebook & Zalo",
      description: "Event announcements and targeted local ads",
    },
  ];

  const brandIdentity = [
    {
      icon: <Cat className="w-6 h-6 text-orange-500" />,
      element: "Brand Mascots",
      description: "Four resident 'boss' cats: Mèo, Luna, Simba, and Whiskers - each with distinct personalities for storytelling",
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-500" />,
      element: "Visual Identity",
      description: "Warm earth tones with pops of cat-themed colors. Minimalist yet cozy aesthetic for Instagram appeal",
    },
    {
      icon: <Coffee className="w-6 h-6 text-brown-500" />,
      element: "Product Philosophy",
      description: "Premium coffee meets artistic ambiance - every cup tells a story, every visit sparks creativity",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      element: "Brand Values",
      description: "Community, Creativity, Comfort, and Cat Love - creating a space where humans and felines coexist harmoniously",
    },
  ];

  const marketingMix = [
    {
      element: "Product",
      description: "Specialty coffee, cat-themed pastries, creative workshops, and unique café experience with resident cats",
      highlights: ["Signature 'Paw-fect' drinks", "Cat-shaped pastries", "Monthly creative workshops", "Instagram-worthy ambiance"]
    },
    {
      element: "Price",
      description: "Premium positioning with student-friendly options and workshop packages",
      highlights: ["Coffee: 35,000-85,000 VND", "Workshop: 80,000-100,000 VND", "Student discount: 20%", "Combo deals available"]
    },
    {
      element: "Place",
      description: "Strategic location in downtown Thai Nguyen near universities and high schools",
      highlights: ["High foot traffic area", "Easy accessibility", "Proximity to target market", "Cozy interior design"]
    },
    {
      element: "Promotion",
      description: "Integrated digital marketing with focus on social media and community engagement",
      highlights: ["Social media campaigns", "Influencer partnerships", "Workshop marketing", "Loyalty programs"]
    },
  ];

  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Social Growth",
      description: "300-500 new followers monthly",
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Workshop Success",
      description: "60%+ attendance rate, 4/5+ ratings",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Sales Growth",
      description: "Increase through combos and loyalty",
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: "Engagement",
      description: "5%+ engagement rate target",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Marketing Plan for Nhà Cá Cafe (2025)
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Where Coffee Meows & Creativity Grows!
          </p>
          <p className="text-lg italic text-gray-500 mt-2">
            Nơi Cà Phê Kêu Meo & Ý Tưởng Đâm Chồi!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Brand Introduction & Concept */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Brand Introduction & Concept
              </span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-pink-300 flex items-center">
                    <MapPin className="mr-3" />
                    Location & Setting
                  </h4>
                  <p className="text-gray-300">Located in downtown Thai Nguyen near universities and high schools, Nhà Cá Cafe combines coffee culture with artistic interior design and feline charm.</p>
                </div>
                
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                    <Users className="mr-3" />
                    Founding Vision
                  </h4>
                  <p className="text-gray-300">Founded by an architect and interior designer, the café aims to be a creative hub for students, young professionals, and cat lovers.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-green-300 flex items-center">
                    <Target className="mr-3" />
                    Unique Proposition
                  </h4>
                  <p className="text-gray-300">The only cat-themed café in Thai Nguyen offering monthly workshops and an "Instagrammable" experience in a cozy, trend-driven environment.</p>
                </div>
                
                <div className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300 flex items-center">
                    <Star className="mr-3" />
                    Experience Promise
                  </h4>
                  <p className="text-gray-300">Every visit combines premium coffee, creative inspiration, and therapeutic cat interactions in a beautifully designed space.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Identity Elements */}
        <div className="mb-16">
          <SectionHeading
            title="Brand Identity & Values"
            subtitle="Building a Memorable Cat Café Experience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandIdentity.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.element}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Strategic Objectives for 2025
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg text-center">
                  <div className="mb-4">{objective.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                  <p className="text-gray-300">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience Analysis */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Target Audience Analysis
              </span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="bg-slate-700 p-6 rounded-lg">
                    <div className="mb-4">{audience.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{audience.title}</h3>
                    <p className="text-gray-300">{audience.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-2xl font-bold mb-6 text-pink-300">Primary Persona</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-lg text-blue-300">Minh Anh</h5>
                    <p className="text-gray-300">Age: 22</p>
                    <p className="text-gray-300">Occupation: University student (Art & Design)</p>
                    <p className="text-gray-300">Income: 3-5 million VND/month (part-time + family support)</p>
                    <p className="text-gray-300">Location: Thai Nguyen city center</p>
                  </div>
                  
                  <div>
                    <h6 className="font-bold text-green-300">Goals & Motivations</h6>
                    <ul className="text-sm text-gray-300">
                      <li>• Find inspiring study spaces</li>
                      <li>• Connect with like-minded creatives</li>
                      <li>• Create Instagram-worthy content</li>
                      <li>• Learn new artistic skills</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-bold text-red-300">Pain Points</h6>
                    <ul className="text-sm text-gray-300">
                      <li>• Limited budget for entertainment</li>
                      <li>• Lack of creative inspiration</li>
                      <li>• Need for social connection</li>
                      <li>• Stress from academic pressure</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-bold text-purple-300">Digital Behavior</h6>
                    <p className="text-sm text-gray-300">Active on Instagram, TikTok, and Facebook. Shares lifestyle content and follows cat accounts.</p>
                    <p className="text-sm text-gray-300 italic">&quot;I want a cozy place where I can study, be creative, and share beautiful moments with cute cats.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Mix Strategy */}
        <div className="mb-16">
          <SectionHeading
            title="Marketing Mix Strategy (4Ps)"
            subtitle="Comprehensive Approach to Market Positioning"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingMix.map((mix, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-heisocial-blue">{mix.element}</h3>
                <p className="text-gray-600 mb-4">{mix.description}</p>
                <div className="space-y-2">
                  {mix.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className="w-4 h-4 text-heisocial-purple mr-2" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Calendar */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                2025 Creative Workshop Calendar
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {workshops.map((workshop, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                  <div className="text-heisocial-blue font-semibold mb-2">{workshop.month}</div>
                  <h3 className="text-lg font-semibold mb-2">{workshop.theme}</h3>
                  <p className="text-gray-300">{workshop.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-600 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-yellow-300">Workshop Strategy & Pricing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-green-300 mb-2">Pricing Structure</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Standard Fee: 80,000–100,000 VND per ticket</li>
                    <li>• Student Discount: 20% off with valid student ID</li>
                    <li>• Combo Offer: "Workshop + Coffee" package for 150,000 VND</li>
                    <li>• Group bookings (3+): 15% discount</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-300 mb-2">Marketing Approach</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Pre-Event: Social media countdowns and university partnerships</li>
                    <li>• During Event: Live streaming and real-time content</li>
                    <li>• Post-Event: UGC sharing and 10% next session discount</li>
                    <li>• Monthly themes align with cultural events and seasons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Content Strategy */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Social Media & Content Strategy
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-pink-300">Content Pillars</h4>
                <div className="space-y-4">
                  {contentPillars.map((pillar, index) => (
                    <div key={index} className="flex items-start bg-slate-700 p-4 rounded-lg">
                      <div className="mr-4">{pillar.icon}</div>
                      <div>
                        <h5 className="font-semibold">{pillar.title}</h5>
                        <p className="text-gray-300">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-300">Platform Strategy</h4>
                <div className="space-y-4 mb-6">
                  {socialPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-start bg-slate-700 p-4 rounded-lg">
                      <div className="mr-4">{platform.icon}</div>
                      <div>
                        <h5 className="font-semibold">{platform.platform}</h5>
                        <p className="text-gray-300">{platform.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-600 p-4 rounded-lg">
                  <h5 className="font-bold text-green-300 mb-2">Content Calendar Highlights</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Monday: #MeowMotivation - Inspirational quotes with cats</li>
                    <li>• Wednesday: #WorkshopWednesday - Behind-the-scenes prep</li>
                    <li>• Friday: #FeelGoodFriday - Customer highlights and UGC</li>
                    <li>• Daily: Cat moments, coffee art, and café atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Budget & Investment Plan */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <SectionHeading
            title="Marketing Budget & Investment Plan"
            subtitle="Annual Marketing Investment: 100-120 million VND"
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Allocation (VND)</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Key Activities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Workshop Materials & Setup</TableCell>
                <TableCell>30,000,000</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>Materials for 12 workshops, decorations, equipment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Digital Marketing & Ads</TableCell>
                <TableCell>30,000,000</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>Facebook, Instagram, TikTok ads, influencer partnerships</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Seasonal Décor & Ambiance</TableCell>
                <TableCell>20,000,000</TableCell>
                <TableCell>17%</TableCell>
                <TableCell>Monthly themed decorations, photo props, lighting</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Community Partnerships</TableCell>
                <TableCell>10,000,000</TableCell>
                <TableCell>8%</TableCell>
                <TableCell>University collaborations, local artist partnerships</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Content Creation & PR</TableCell>
                <TableCell>10,000,000</TableCell>
                <TableCell>8%</TableCell>
                <TableCell>Professional photography, video content, PR activities</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Loyalty Program & Rewards</TableCell>
                <TableCell>5,000,000</TableCell>
                <TableCell>4%</TableCell>
                <TableCell>Customer rewards, referral bonuses, VIP perks</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Events & Special Occasions</TableCell>
                <TableCell>10,000,000</TableCell>
                <TableCell>8%</TableCell>
                <TableCell>Grand opening, anniversary, holiday celebrations</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Contingency & Flexibility</TableCell>
                <TableCell>5,000,000</TableCell>
                <TableCell>4%</TableCell>
                <TableCell>Unexpected opportunities, market adjustments</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* KPIs & Success Metrics */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Key Performance Indicators & Success Metrics
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg text-center">
                  <div className="mb-4">{metric.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                  <p className="text-gray-300">{metric.description}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-600 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-blue-300">Brand Awareness</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Social media reach: 50,000+ monthly</li>
                  <li>• Local media mentions: 3+ per quarter</li>
                  <li>• Brand recognition in target area: 40%</li>
                  <li>• Website traffic: 5,000+ monthly visitors</li>
                </ul>
              </div>
              
              <div className="bg-slate-500 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-green-300">Customer Engagement</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Daily customers: 100 → 130</li>
                  <li>• Workshop attendance rate: 80%+</li>
                  <li>• Customer retention rate: 60%+</li>
                  <li>• Average session duration: 90+ minutes</li>
                </ul>
              </div>
              
              <div className="bg-slate-400 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-purple-300">Financial Performance</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Monthly revenue growth: 15%</li>
                  <li>• Workshop revenue: 20M VND/month</li>
                  <li>• Customer lifetime value: +25%</li>
                  <li>• Marketing ROI: 3:1 target</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Management & Mitigation */}
        <div className="mb-16">
          <SectionHeading
            title="Risk Management & Mitigation Strategies"
            subtitle="Proactive Measures for Sustainable Success"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Low Workshop Attendance</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Risk:</strong> Seasonal fluctuations, competing events</p>
                <p className="text-gray-600"><strong>Mitigation:</strong> Last-minute promotions, flexible scheduling, online workshops option</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Social Media Algorithm Changes</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Risk:</strong> Reduced organic reach, changing platform policies</p>
                <p className="text-gray-600"><strong>Mitigation:</strong> Diversified platform strategy, email list building, paid promotion budget</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Cat Health & Safety Concerns</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Risk:</strong> Cat illness, customer allergies, hygiene issues</p>
                <p className="text-gray-600"><strong>Mitigation:</strong> Regular vet checkups, clear allergy warnings, strict cleanliness protocols</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Seasonal Revenue Fluctuations</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Risk:</strong> Academic calendar impacts, holiday periods</p>
                <p className="text-gray-600"><strong>Mitigation:</strong> Tourist targeting during breaks, special holiday packages, online engagement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <SectionHeading
            title="Implementation Timeline 2025"
            subtitle="Quarterly Roadmap for Success"
          />
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-blue-600 mb-2">Foundation & Launch (Jan-Mar)</h4>
                <p className="text-gray-600">Brand identity finalization, social media setup, first 3 workshops, local partnerships establishment</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-green-600 mb-2">Growth & Engagement (Apr-Jun)</h4>
                <p className="text-gray-600">Influencer collaborations, customer loyalty program launch, workshop expansion, university partnerships</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-purple-600 mb-2">Expansion & Innovation (Jul-Sep)</h4>
                <p className="text-gray-600">New service offerings, advanced workshops, community events, seasonal campaigns</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q4</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-orange-600 mb-2">Optimization & Planning (Oct-Dec)</h4>
                <p className="text-gray-600">Holiday campaigns, year-end analysis, 2026 strategy development, anniversary preparation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-heisocial-blue hover:bg-heisocial-blue/90"
          >
            <a href="/contact" className="px-8 py-6 text-lg">
              Start Your Cat Café Marketing Journey
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NhaCaCafe;
