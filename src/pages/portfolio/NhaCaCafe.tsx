
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
  Percent
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
      <div className="relative h-[400px] bg-gradient-to-r from-heisocial-blue to-heisocial-purple">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marketing Plan for Nhà Cá Cafe (2025)
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Where Coffee Meows & Creativity Grow!
          </p>
          <p className="text-lg italic text-white/80">
            Nơi Cà Phê Kêu Meo & Ý Tưởng Đâm Chồi!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Introduction"
            subtitle="A Unique Cat-themed Café Experience in Thai Nguyen"
          />
          <p className="text-gray-600 leading-relaxed">
            Nhà Cá Cafe is a cat-themed café located in downtown Thai Nguyen near universities and high schools. 
            Combining coffee culture, artistic interior design, and feline charm with four resident "boss" cats, 
            the café is set to become a creative hub for students, young professionals, and cat lovers. Founded by 
            an architect and an interior designer, the café aims to engage the community through monthly workshops 
            and unique events—all while delivering an "Instagrammable" experience in a cozy, trend-driven environment.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="mb-16">
          <SectionHeading
            title="Key Objectives"
            subtitle="Our Goals for 2025"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{objective.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <SectionHeading
            title="Target Audience"
            subtitle="Understanding Our Core Demographics"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{audience.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Calendar */}
        <div className="mb-16">
          <SectionHeading
            title="Workshop Calendar 2025"
            subtitle="Monthly Creative Sessions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="text-heisocial-blue font-semibold mb-2">{workshop.month}</div>
                <h3 className="text-lg font-semibold mb-2">{workshop.theme}</h3>
                <p className="text-gray-600">{workshop.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Workshop Pricing & Promotions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Standard Fee: 80,000–100,000 VND per ticket</li>
              <li>• Student Discount: 20% off with valid student ID</li>
              <li>• Combo Offer: "Workshop + Coffee" package for 150,000 VND</li>
              <li>• Pre-Event: Social media countdowns and university partnerships</li>
              <li>• Post-Event: UGC sharing and 10% next session discount</li>
            </ul>
          </div>
        </div>

        {/* Social Media Strategy */}
        <div className="mb-16">
          <SectionHeading
            title="Social Media Strategy"
            subtitle="Building Our Online Presence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Content Pillars</h3>
              <div className="space-y-4">
                {contentPillars.map((pillar, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="mr-4">{pillar.icon}</div>
                    <div>
                      <h4 className="font-semibold">{pillar.title}</h4>
                      <p className="text-gray-600">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Platform Focus</h3>
              <div className="space-y-4">
                {socialPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="mr-4">{platform.icon}</div>
                    <div>
                      <h4 className="font-semibold">{platform.platform}</h4>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <SectionHeading
            title="Budget Overview"
            subtitle="Annual Marketing Investment: 100-120 million VND"
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Allocation (VND)</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Workshop Materials</TableCell>
                <TableCell>30,000,000</TableCell>
                <TableCell>Materials for 12 workshops (2.5M each)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Social Media Advertising</TableCell>
                <TableCell>30,000,000</TableCell>
                <TableCell>Facebook, Instagram, and TikTok ads</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Seasonal Décor & Setup</TableCell>
                <TableCell>20,000,000</TableCell>
                <TableCell>Monthly décor, workshop setup</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Partnerships & Promotions</TableCell>
                <TableCell>10,000,000</TableCell>
                <TableCell>Local partnerships, promotional materials</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Influencer & PR</TableCell>
                <TableCell>10,000,000</TableCell>
                <TableCell>Micro-influencer collaborations</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Loyalty Program</TableCell>
                <TableCell>5,000,000</TableCell>
                <TableCell>Materials and rewards</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Contingency</TableCell>
                <TableCell>5,000,000</TableCell>
                <TableCell>Miscellaneous expenses</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* KPIs & Metrics */}
        <div className="mb-16">
          <SectionHeading
            title="Evaluation & KPIs"
            subtitle="Measuring Our Success"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">{metric.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Management */}
        <div className="mb-16">
          <SectionHeading
            title="Risk Management"
            subtitle="Proactive Measures for Success"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Low Workshop Turnout</h3>
              <p className="text-gray-600">Implement last-minute promotions via Zalo and social media ads</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Negative Online Feedback</h3>
              <p className="text-gray-600">Dedicated team member to address reviews within 24 hours</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Budget Overruns</h3>
              <p className="text-gray-600">Continuous monitoring and adjustment of non-essential activities</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Seasonal Lulls</h3>
              <p className="text-gray-600">Introduce "flash sales" or "happy hour" promotions during slower periods</p>
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
              Start Your Project With Us
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NhaCaCafe;

