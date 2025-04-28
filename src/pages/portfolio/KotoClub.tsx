import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Instagram, Facebook, TrendingUp, Users, CircleDollarSign, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SocialMediaPost from "@/components/SocialMediaPost";

const KotoClub = () => {
  const marketingTactics = [
    {
      category: "Product (Experience)",
      items: [
        "Upgrade cocktail menu: Signature drinks aimed at 30+ crowd",
        "Special music nights: Deep house, live saxophone, retro house vibes"
      ]
    },
    {
      category: "Price",
      items: [
        "Maintain mid-high pricing",
        "Early night happy hour deals (7-9PM) to attract after-dinner crowd"
      ]
    },
    {
      category: "Place",
      items: [
        "Create more exclusive VIP spaces",
        "Enhanced table service and bottle packages",
        "Premium sofa areas for comfort"
      ]
    },
    {
      category: "Promotion",
      items: [
        "Targeted Facebook + Instagram ads (age 22-40)",
        "Google Ads optimization for nightlife keywords",
        "Hotel package promotions with bundled deals",
        "Loyalty offers: Every 5th visit rewards"
      ]
    }
  ];

  const budgetData = [
    { category: "Social Media Ads (FB, IG)", cost: 3000 },
    { category: "Influencer Collaborations", cost: 2500 },
    { category: "Monthly Event Themes & Decor", cost: 4500 },
    { category: "Partnerships (Hotels, Tour Groups)", cost: 1500 },
    { category: "Content Creation", cost: 2000 },
    { category: "Loyalty Program", cost: 1000 },
    { category: "Contingency", cost: 1000 }
  ];

  const kpis = [
    { objective: "Awareness", kpi: "3M+ reach, 6M+ impressions" },
    { objective: "Social Media Growth", kpi: "80% increase in followers (FB/IG)" },
    { objective: "Traffic", kpi: "75% occupancy on weekends" },
    { objective: "VIP Sales", kpi: "25% VIP table bookings rate" },
    { objective: "Loyalty", kpi: "400 loyal customers signed up" }
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

  return (
    <Layout>
      <Hero
        title="Koto Club Da Nang"
        subtitle="2025 First Half Marketing Plan"
        backgroundImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Executive Summary */}
        <section>
          <SectionHeading title="Executive Summary" subtitle="Vision for 2025" />
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                Koto Club Da Nang aims to establish itself as the go-to nightlife destination for both tourists and young-to-mid-age locals (22–40 years old) by mid-2025. This plan focuses on strategic brand-building, smart budget allocation, and curated experiences that cater to a more mature, spending-capable audience.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Target Market */}
        <section>
          <SectionHeading title="Target Market" subtitle="Our Audience" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-heisocial-purple" />
                  Primary Target
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  International and domestic tourists (22–40 years old) visiting Da Nang.
                </p>
                <p className="text-gray-600">
                  Profile: Mid-to-high income, seeking trendy yet elegant nightlife, appreciates quality service, premium drinks, and good music (less chaotic, more curated).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-heisocial-purple" />
                  Secondary Target
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Local professionals and expats (25–40 years old) living in Da Nang or nearby cities (Hoi An, Hue).
                </p>
                <p className="text-gray-600">
                  Profile: Social, enjoys music/art events, values VIP treatment, willing to spend for exclusive experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Marketing Objectives */}
        <section>
          <SectionHeading title="Marketing Objectives" subtitle="Goals for 2025" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-heisocial-purple/10 to-transparent">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-8 w-8 text-heisocial-purple" />
                  <h3 className="text-xl font-semibold">Brand Growth</h3>
                </div>
                <p className="text-gray-700">Increase brand awareness among 22–40 demographic by 35%</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-heisocial-blue/10 to-transparent">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Instagram className="h-8 w-8 text-heisocial-blue" />
                  <h3 className="text-xl font-semibold">Social Media</h3>
                </div>
                <p className="text-gray-700">Grow social media followers by 80%</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-heisocial-purple/10 to-transparent">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-8 w-8 text-heisocial-purple" />
                  <h3 className="text-xl font-semibold">VIP Growth</h3>
                </div>
                <p className="text-gray-700">Achieve 25% VIP table bookings for weekend events</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Marketing Tactics */}
        <section>
          <SectionHeading title="Marketing Tactics" subtitle="Our Approach" />
          <div className="grid md:grid-cols-2 gap-6">
            {marketingTactics.map((tactic, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{tactic.category}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {tactic.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Budget Estimation */}
        <section>
          <SectionHeading title="Budget Estimation" subtitle="Financial Overview" />
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Cost (USD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {budgetData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-right">${item.cost.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-bold">
                    <TableCell>TOTAL</TableCell>
                    <TableCell className="text-right">
                      ${budgetData.reduce((acc, item) => acc + item.cost, 0).toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* KPIs */}
        <section>
          <SectionHeading title="Key Performance Indicators" subtitle="Measuring Success" />
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Objective</TableHead>
                    <TableHead>KPI</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kpis.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.objective}</TableCell>
                      <TableCell>{item.kpi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
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

        {/* Final Positioning */}
        <section className="text-center py-12 bg-gradient-to-r from-heisocial-purple/10 via-heisocial-blue/10 to-heisocial-purple/10 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Final Positioning
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 italic">
            "Koto Club: Where mature energy, class, and unforgettable nights meet."
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default KotoClub;
