
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Instagram, Facebook, TrendingUp, Users, CircleDollarSign, Star, Target, MapPin, Clock, Award, Music } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SocialMediaPost from "@/components/SocialMediaPost";

const KotoClub = () => {
  const brandConcept = [
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      element: "Positioning Statement",
      description: "Koto Club: The premium nightlife destination where mature energy, sophistication, and unforgettable experiences converge in the heart of Da Nang.",
    },
    {
      icon: <Music className="w-6 h-6 text-blue-500" />,
      element: "Unique Value Proposition",
      description: "Curated music experiences with deep house, live saxophone, and retro vibes - designed for the discerning 22-40 demographic seeking quality over chaos.",
    },
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      element: "Brand Personality",
      description: "Sophisticated yet approachable, exclusive but welcoming, trendy yet timeless - where every night tells a story worth remembering.",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      element: "Experience Promise",
      description: "Premium cocktails, curated ambiance, and VIP treatment that transforms ordinary nights into extraordinary memories.",
    },
  ];

  const strategicObjectives = [
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: "Brand Recognition",
      description: "Establish Koto Club as Da Nang's premier nightlife destination for the 22-40 demographic",
      target: "35% increase in brand awareness by mid-2025"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Customer Growth",
      description: "Build a loyal customer base of tourists and locals seeking premium experiences",
      target: "75% weekend occupancy rate consistently"
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-purple-500" />,
      title: "Revenue Excellence",
      description: "Maximize revenue through VIP services and premium pricing strategy",
      target: "25% VIP table booking rate"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      title: "Social Influence",
      description: "Create buzz and social media presence that drives organic growth",
      target: "80% increase in social media followers"
    },
  ];

  const targetSegments = [
    {
      segment: "International Tourists",
      age: "22-40 years",
      profile: "Mid-to-high income visitors seeking premium nightlife experiences",
      behavior: "Value quality service, willing to pay for exclusive experiences, active on social media",
      pain_points: "Limited knowledge of local venues, concerns about quality and safety",
      motivation: "Create memorable vacation experiences, social media content, networking"
    },
    {
      segment: "Local Professionals",
      age: "25-40 years", 
      profile: "Established professionals and expats in Da Nang/Hoi An/Hue area",
      behavior: "Regular entertainment budget, appreciate consistent quality, referral-driven",
      pain_points: "Lack of sophisticated venues, inconsistent service quality",
      motivation: "Regular social outlet, professional networking, stress relief"
    },
    {
      segment: "Special Occasion Groups",
      age: "22-35 years",
      profile: "Celebrating birthdays, anniversaries, corporate events",
      behavior: "Higher spending during celebrations, group bookings, photo-sharing",
      pain_points: "Finding venues that can accommodate groups with style",
      motivation: "Making celebrations memorable, impressing guests"
    }
  ];

  const competitiveAnalysis = [
    {
      competitor: "Sky Bar Da Nang",
      strengths: "Rooftop location, city views",
      weaknesses: "Limited music variety, inconsistent service",
      opportunity: "Superior music curation and VIP experience"
    },
    {
      competitor: "Local Beach Clubs",
      strengths: "Beach proximity, tourist traffic",
      weaknesses: "Seasonal dependency, younger crowd focus",
      opportunity: "Year-round operation, mature demographic targeting"
    },
    {
      competitor: "Hotel Bars",
      strengths: "Consistent quality, tourist base",
      weaknesses: "Limited atmosphere, early closing",
      opportunity: "Extended hours, energetic but sophisticated atmosphere"
    }
  ];

  const marketingTactics = [
    {
      category: "Product (Experience)",
      items: [
        "Upgrade cocktail menu: Signature drinks aimed at 30+ crowd",
        "Special music nights: Deep house, live saxophone, retro house vibes",
        "VIP packages: Premium bottle service with dedicated areas",
        "Themed nights: Monthly curated experiences"
      ]
    },
    {
      category: "Price",
      items: [
        "Maintain mid-high pricing positioning",
        "Early night happy hour deals (7-9PM) to attract after-dinner crowd", 
        "VIP table packages with value-added services",
        "Loyalty program with exclusive member pricing"
      ]
    },
    {
      category: "Place",
      items: [
        "Create more exclusive VIP spaces with premium comfort",
        "Enhanced table service and bottle packages",
        "Premium sofa areas designed for conversation",
        "Strategic lighting and sound zones"
      ]
    },
    {
      category: "Promotion",
      items: [
        "Targeted Facebook + Instagram ads (age 22-40)",
        "Google Ads optimization for nightlife keywords",
        "Hotel package promotions with bundled deals",
        "Influencer partnerships with lifestyle content creators",
        "Loyalty offers: Every 5th visit rewards program"
      ]
    }
  ];

  const contentStrategy = [
    {
      pillar: "Lifestyle Moments",
      description: "Sophisticated nightlife experiences, premium cocktail artistry",
      frequency: "Daily posts",
      platforms: "Instagram, Facebook"
    },
    {
      pillar: "Music & Atmosphere", 
      description: "Behind-the-scenes DJ content, live music highlights",
      frequency: "3x per week",
      platforms: "Instagram Stories, TikTok"
    },
    {
      pillar: "VIP Experience",
      description: "Exclusive service moments, premium space showcases",
      frequency: "2x per week", 
      platforms: "Instagram, Facebook"
    },
    {
      pillar: "Customer Stories",
      description: "Testimonials, celebration moments, group experiences",
      frequency: "Weekly",
      platforms: "All platforms"
    }
  ];

  const budgetData = [
    { category: "Social Media Ads (FB, IG)", cost: 3000, percentage: "20%" },
    { category: "Influencer Collaborations", cost: 2500, percentage: "17%" },
    { category: "Monthly Event Themes & Decor", cost: 4500, percentage: "30%" },
    { category: "Partnerships (Hotels, Tour Groups)", cost: 1500, percentage: "10%" },
    { category: "Content Creation & Photography", cost: 2000, percentage: "13%" },
    { category: "Loyalty Program Development", cost: 1000, percentage: "7%" },
    { category: "Contingency & Market Response", cost: 1000, percentage: "3%" }
  ];

  const kpis = [
    { 
      category: "Brand Awareness",
      metrics: [
        "3M+ social media reach monthly",
        "6M+ impressions across platforms", 
        "Local brand recognition: 40%"
      ]
    },
    {
      category: "Customer Engagement", 
      metrics: [
        "75% weekend occupancy rate",
        "25% VIP table booking rate",
        "90-minute average session duration"
      ]
    },
    {
      category: "Social Performance",
      metrics: [
        "80% increase in followers",
        "5% engagement rate target",
        "1000+ UGC posts monthly"
      ]
    },
    {
      category: "Revenue Impact",
      metrics: [
        "400 loyalty program members",
        "20% repeat customer rate",
        "15% revenue growth monthly"
      ]
    }
  ];

  const socialMediaPosts = [
    {
      month: "January",
      title: "New Year, New Legends",
      caption: "2025, we're not just celebrating the New Year — we're creating new legends. 🍸\n\nJoin us for a night where neon dreams light up Da Nang's skyline. Exclusive cocktails, live DJs, and unforgettable memories await.\n\nStep into the future at Koto Club.",
      visualConcept: "Background: Neon skyline Đà Nẵng + Club vibe. Model: Cầm ly cocktail ánh neon xanh tím.",
      specials: [
        "Dress Code: Futuristic Neon",
        "Complimentary Welcome Shot for Early Birds"
      ],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    {
      month: "March",
      title: "Spring Awakening - Rebirth in Lights",
      caption: "Spring isn't just a season. It's a state of mind. 🌸✨\n\nThis March, awaken your senses under the pulse of neon lights.\n\nLimited edition 'Spring Bloom' cocktails and live sets from Da Nang's top DJs.\n\nKoto Club — where your new story begins.",
      visualConcept: "Background: Neon flowers or light petals falling. Model: Cười rạng rỡ giữa khung neon lấp lánh.",
      specials: ["Special: Free Signature Cocktail for first 30 guests"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      month: "July",
      title: "Summer High - Neon Beach Party",
      caption: "When the sun goes down, the real summer begins. 🔥🏖️\n\nThis July, Koto turns into a Neon Beach Paradise — tropical beats, icy cocktails, and glowing vibes.\n\nDance barefoot. Shine without limits.",
      visualConcept: "Background: Neon palm trees, biển đêm lung linh. Model: Cầm ván lướt neon, đeo kính phản quang.",
      specials: ["Dress Code: Beach Glam with Neon Accessories"],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      month: "August",
      title: "Hot Nights, Cool Lights",
      caption: "Turn up the heat, cool down with neon. 🔥🌌\n\nAugust at Koto Club is pure fire — electrifying music, bold flavors, and nights you'll never forget.\n\nVIP Bottle Service Specials available all month.",
      visualConcept: "Background: Neon lửa và băng (fire & ice theme). Model: Cheers ly cocktail khói mát lạnh dưới ánh đèn.",
      specials: ["Special: VIP table discount for pre-bookings"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    },
    {
      month: "December",
      title: "Neon Wonderland Christmas",
      caption: "Santa got a neon upgrade 🎅🏼✨\n\nCelebrate Christmas with a twist — sparkling cocktails, dazzling lights, and the coolest party in Da Nang.\n\nCome dressed in white or silver — let's glow together!",
      visualConcept: "Background: Cây thông Noel neon, người mặc đồ trắng/silver.",
      specials: ["Special: Free Neon Christmas Shot for everyone dressed in theme!"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    }
  ];

  const riskMitigation = [
    {
      risk: "Seasonal Tourism Fluctuations",
      impact: "High",
      mitigation: "Develop local customer base, off-season promotions, corporate event targeting"
    },
    {
      risk: "Competition from New Venues", 
      impact: "Medium",
      mitigation: "Continuous experience innovation, loyalty program strengthening, exclusive partnerships"
    },
    {
      risk: "Economic Downturn Impact",
      impact: "Medium", 
      mitigation: "Flexible pricing tiers, value-focused packages, cost optimization strategies"
    },
    {
      risk: "Social Media Algorithm Changes",
      impact: "Medium",
      mitigation: "Diversified platform strategy, email marketing, influencer partnerships"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Koto Club Da Nang"
        subtitle="2025 First Half Marketing Strategy"
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Brand Introduction & Concept */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Brand Introduction & Strategic Concept
              </span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300 flex items-center">
                    <MapPin className="mr-3" />
                    Vision & Mission
                  </h4>
                  <p className="text-gray-300 mb-3">
                    <strong>Vision:</strong> To be Da Nang's most sought-after premium nightlife destination, where sophisticated experiences meet unforgettable memories.
                  </p>
                  <p className="text-gray-300">
                    <strong>Mission:</strong> Creating curated nightlife experiences that cater to discerning adults seeking quality, sophistication, and authentic connections.
                  </p>
                </div>
                
                <div className="bg-slate-600 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                    <Clock className="mr-3" />
                    Market Context
                  </h4>
                  <p className="text-gray-300">
                    Da Nang's nightlife scene is evolving, with increasing demand for sophisticated venues that cater to mature professionals and international visitors seeking premium experiences beyond typical tourist bars.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {brandConcept.slice(0, 2).map((item, index) => (
                  <div key={index} className="bg-slate-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-4 text-green-300 flex items-center">
                      {item.icon}
                      <span className="ml-3">{item.element}</span>
                    </h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brandConcept.slice(2).map((item, index) => (
                <div key={index} className="bg-slate-500 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300 flex items-center">
                    {item.icon}
                    <span className="ml-3">{item.element}</span>
                  </h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Objectives */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Strategic Objectives 2025
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strategicObjectives.map((objective, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg text-center">
                  <div className="mb-4">{objective.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                  <p className="text-gray-300 mb-3">{objective.description}</p>
                  <div className="bg-slate-600 p-3 rounded">
                    <p className="text-sm font-semibold text-yellow-300">{objective.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Market Analysis */}
        <section>
          <SectionHeading 
            title="Target Market Analysis" 
            subtitle="Understanding Our Audience" 
          />
          <div className="space-y-6">
            {targetSegments.map((segment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-heisocial-purple">{segment.segment}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Demographics & Profile</h4>
                    <p className="text-sm text-gray-600 mb-2"><strong>Age:</strong> {segment.age}</p>
                    <p className="text-sm text-gray-600">{segment.profile}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Behavior & Preferences</h4>
                    <p className="text-sm text-gray-600">{segment.behavior}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Pain Points & Motivations</h4>
                    <p className="text-sm text-gray-600 mb-2"><strong>Challenges:</strong> {segment.pain_points}</p>
                    <p className="text-sm text-gray-600"><strong>Drivers:</strong> {segment.motivation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive Analysis */}
        <section>
          <SectionHeading 
            title="Competitive Landscape Analysis" 
            subtitle="Positioning Against Competition" 
          />
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Competitor</TableHead>
                    <TableHead>Key Strengths</TableHead>
                    <TableHead>Weaknesses</TableHead>
                    <TableHead>Our Opportunity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {competitiveAnalysis.map((comp, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{comp.competitor}</TableCell>
                      <TableCell>{comp.strengths}</TableCell>
                      <TableCell>{comp.weaknesses}</TableCell>
                      <TableCell className="text-heisocial-purple font-medium">{comp.opportunity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Marketing Mix Strategy */}
        <section>
          <SectionHeading title="Marketing Mix Strategy (4Ps)" subtitle="Comprehensive Market Approach" />
          <div className="grid md:grid-cols-2 gap-6">
            {marketingTactics.map((tactic, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-heisocial-blue">{tactic.category}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tactic.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Star className="w-4 h-4 text-heisocial-purple mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Content Strategy & Social Media */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Content Strategy & Social Media Framework
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentStrategy.map((pillar, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-purple-300">{pillar.pillar}</h4>
                  <p className="text-gray-300 text-sm mb-3">{pillar.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-blue-300"><strong>Frequency:</strong> {pillar.frequency}</p>
                    <p className="text-xs text-green-300"><strong>Platforms:</strong> {pillar.platforms}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Allocation */}
        <section>
          <SectionHeading title="Marketing Budget Allocation" subtitle="Strategic Investment Plan - $15,500 Total" />
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Investment (USD)</TableHead>
                    <TableHead className="text-right">Budget %</TableHead>
                    <TableHead>Strategic Focus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {budgetData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.category}</TableCell>
                      <TableCell className="text-right">${item.cost.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-heisocial-purple font-semibold">{item.percentage}</TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {item.category.includes('Social Media') && "Digital reach & engagement optimization"}
                        {item.category.includes('Influencer') && "Authentic testimonials & lifestyle content"}
                        {item.category.includes('Event') && "Experience enhancement & atmosphere creation"}
                        {item.category.includes('Partnerships') && "Strategic collaborations & cross-promotion"}
                        {item.category.includes('Content') && "Professional visual storytelling"}
                        {item.category.includes('Loyalty') && "Customer retention & lifetime value"}
                        {item.category.includes('Contingency') && "Agile response to market opportunities"}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-bold bg-slate-50">
                    <TableCell>TOTAL INVESTMENT</TableCell>
                    <TableCell className="text-right">
                      ${budgetData.reduce((acc, item) => acc + item.cost, 0).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">100%</TableCell>
                    <TableCell className="text-heisocial-blue">Comprehensive market penetration</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* KPIs & Success Metrics */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-10 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Key Performance Indicators & Success Metrics
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {kpis.map((kpi, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">{kpi.category}</h4>
                  <ul className="space-y-2">
                    {kpi.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="text-sm text-gray-300 flex items-start">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Campaign Preview */}
        <section>
          <SectionHeading 
            title="Social Media Campaign Preview" 
            subtitle="2025 Content Calendar Highlights" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {socialMediaPosts.map((post, index) => (
              <SocialMediaPost
                key={index}
                month={post.month}
                title={post.title}
                caption={post.caption}
                visualConcept={post.visualConcept}
                specials={post.specials}
                image={post.image}
              />
            ))}
          </div>
        </section>

        {/* Risk Management */}
        <section>
          <SectionHeading title="Risk Management & Mitigation" subtitle="Proactive Strategic Planning" />
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Risk Factor</TableHead>
                    <TableHead>Impact Level</TableHead>
                    <TableHead>Mitigation Strategy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {riskMitigation.map((risk, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{risk.risk}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          risk.impact === 'High' ? 'bg-red-100 text-red-800' :
                          risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {risk.impact}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm">{risk.mitigation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Timeline */}
        <section>
          <SectionHeading title="2025 Implementation Roadmap" subtitle="Quarterly Strategic Milestones" />
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q1</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-purple-600 mb-2">Foundation & Brand Establishment (Jan-Mar)</h4>
                <p className="text-gray-600">Brand identity refinement, staff training, initial marketing campaigns, social media launch, partnership development</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q2</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-blue-600 mb-2">Growth & Optimization (Apr-Jun)</h4>
                <p className="text-gray-600">Loyalty program launch, influencer collaborations, VIP experience enhancement, customer feedback integration</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q3</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-green-600 mb-2">Expansion & Innovation (Jul-Sep)</h4>
                <p className="text-gray-600">Summer campaigns, new service offerings, corporate event packages, market expansion strategies</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">Q4</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-orange-600 mb-2">Consolidation & Planning (Oct-Dec)</h4>
                <p className="text-gray-600">Holiday season campaigns, annual performance review, 2026 strategic planning, customer appreciation events</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Positioning Statement */}
        <section className="text-center py-12 bg-gradient-to-r from-heisocial-purple/10 via-heisocial-blue/10 to-heisocial-purple/10 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Strategic Positioning Statement
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
            "Koto Club: Where mature energy, sophisticated experiences, and unforgettable nights converge in the heart of Da Nang."
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            By mid-2025, Koto Club will be recognized as Da Nang's premier nightlife destination for discerning adults who value quality, sophistication, and authentic connections in an environment that celebrates both local culture and international standards.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default KotoClub;
