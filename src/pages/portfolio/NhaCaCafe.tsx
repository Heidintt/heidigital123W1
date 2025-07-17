
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Users, Star, Target, Coffee, Heart, Camera, Palette, TrendingUp, DollarSign, BarChart3, Calendar } from "lucide-react";

const NhaCaCafe = () => {
  // SEO optimization
  useSEO({
    title: "Nha Ca Cafe Marketing Plan 2025 | Heidigital",
    description: "Comprehensive marketing strategy for Nha Ca Cafe - Where Coffee Meows & Creativity Grows! Complete brand identity, workshops, and community engagement plan.",
    keywords: "Nha Ca Cafe, cat cafe marketing, Vietnam cafe branding, creative workshops, Thai Nguyen marketing, cat therapy, community building, marketing plan 2025",
    image: "/uploads/nha-ca-thumb.jpg",
    url: "https://heidigital.info/portfolio/nha-ca-cafe",
    canonicalUrl: "https://heidigital.info/portfolio/nha-ca-cafe",
    type: "article"
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Marketing Plan for <span className="text-pink-300">Nhà Cá Cafe</span> (2025)
          </h1>
          <p className="text-xl md:text-2xl mb-2">Where Coffee Meows & Creativity Grows!</p>
          <p className="text-lg text-pink-200 italic">Nơi Cà Phê Kêu Meo & Ý Tưởng Đậm Chồi!</p>
        </div>
      </section>

      {/* Brand Introduction & Concept */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-pink-400">Brand Introduction & Concept</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-700 p-8 rounded-xl">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-pink-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Location & Setting</h3>
                  <p className="text-gray-300">Located in downtown Thai Nguyen near universities and high schools, Nhà Cá Cafe combines coffee culture with artistic interior design and feline charm.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl">
              <div className="flex items-start mb-4">
                <Target className="h-6 w-6 text-green-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Unique Proposition</h3>
                  <p className="text-gray-300">The only cat-themed café in Thai Nguyen offering monthly workshops and an "Instagrammable" experience in a cozy, trend-driven environment.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl">
              <div className="flex items-start mb-4">
                <Users className="h-6 w-6 text-blue-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Founding Vision</h3>
                  <p className="text-gray-300">Founded by an architect and interior designer, the café aims to be a creative hub for students, young professionals, and cat lovers.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-8 rounded-xl">
              <div className="flex items-start mb-4">
                <Star className="h-6 w-6 text-purple-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Experience Promise</h3>
                  <p className="text-gray-300">Every visit combines premium coffee, creative inspiration, and therapeutic cat interactions in a beautifully designed space.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Brand Identity & Values"
            subtitle="Building a Memorable Cat Café Experience"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <Coffee className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Brand Mascots</h3>
              <p className="text-gray-600">Four resident 'boss' cats: Mèo, Luna, Simba, and Whiskers - each with distinct personalities for storytelling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <Palette className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Identity</h3>
              <p className="text-gray-600">Warm earth tones with pops of cat-themed colors. Minimalist yet cozy aesthetic for Instagram appeal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Coffee className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Product Philosophy</h3>
              <p className="text-gray-600">Premium coffee meets artistic ambiance - every cup tells a story, every visit sparks creativity</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Brand Values</h3>
              <p className="text-gray-600">Community, Creativity, Comfort, and Cat Love - creating a space where humans and felines coexist harmoniously</p>
            </div>
          </div>

          {/* Strategic Objectives */}
          <div className="bg-slate-800 text-white p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-center mb-8 text-pink-400">Strategic Objectives for 2025</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-700 p-6 rounded-lg text-center">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Brand Awareness</h4>
                <p className="text-sm text-gray-300">20,000+ social media followers by Q4 2025, gain feature coverage in 3+ local media outlets</p>
              </div>

              <div className="bg-slate-700 p-6 rounded-lg text-center">
                <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Foot Traffic</h4>
                <p className="text-sm text-gray-300">Increase daily customers from 100 to 130 through enhanced promotions and experiences</p>
              </div>

              <div className="bg-slate-700 p-6 rounded-lg text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Revenue Growth</h4>
                <p className="text-sm text-gray-300">Boost monthly sales through workshops, seasonal menus, and loyalty programs</p>
              </div>

              <div className="bg-slate-700 p-6 rounded-lg text-center">
                <Users className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Community Engagement</h4>
                <p className="text-sm text-gray-300">12 creative workshops per year with 80%+ attendance, 5+ local partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Analysis */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-pink-400">Target Audience Analysis</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-slate-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Students (15-25 years)</h3>
              </div>
              <p className="text-gray-300">Seeking study-friendly, 'Instagrammable' spots</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold">Young Professionals (25-35 years)</h3>
              </div>
              <p className="text-gray-300">Looking for creative, relaxing spaces to socialize</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-pink-400 mr-3" />
                <h3 className="text-xl font-bold">Cat Lovers</h3>
              </div>
              <p className="text-gray-300">Both locals and tourists seeking unique experiences</p>
            </div>
          </div>

          <div className="bg-slate-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-pink-400">Primary Persona</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Minh Anh</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>Age:</strong> 22</li>
                  <li><strong>Occupation:</strong> University student (Art & Design)</li>
                  <li><strong>Income:</strong> 3-5 million VND/month (part-time + family support)</li>
                  <li><strong>Location:</strong> Thai Nguyen city center</li>
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <h5 className="font-bold text-green-400 mb-2">Goals & Motivations</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Find inspiring study spaces</li>
                    <li>• Connect with like-minded creatives</li>
                    <li>• Create Instagram-worthy content</li>
                    <li>• Learn new artistic skills</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-bold text-orange-400 mb-2">Pain Points</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Limited budget for entertainment</li>
                    <li>• Lack of creative inspiration</li>
                    <li>• Need for social connection</li>
                    <li>• Stress from academic pressure</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-purple-400 mb-2">Digital Behavior</h5>
                  <p className="text-sm text-gray-300">Active on Instagram, TikTok, and Facebook. Shares lifestyle content and follows cat accounts.</p>
                  <p className="text-sm text-gray-300 italic mt-2">"I want a cozy place where I can study, be creative, and share beautiful moments with cute cats."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Mix Strategy */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Marketing Mix Strategy (4Ps)"
            subtitle="Comprehensive Approach to Market Positioning"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Product</h3>
                <p className="text-gray-600 mb-4">Specialty coffee, cat-themed pastries, creative workshops, and unique café experience with resident cats</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Signature 'Paw-fect' drinks</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Cat-shaped pastries</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Monthly creative workshops</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Instagram-worthy ambiance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Place</h3>
                <p className="text-gray-600 mb-4">Strategic location in downtown Thai Nguyen near universities and high schools</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> High foot traffic area</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Easy accessibility</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Proximity to target market</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Cozy interior design</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Price</h3>
                <p className="text-gray-600 mb-4">Premium positioning with student-friendly options and workshop packages</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Coffee: 35,000-85,000 VND</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Workshop: 80,000-100,000 VND</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Student discount: 20%</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Combo deals available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Promotion</h3>
                <p className="text-gray-600 mb-4">Integrated digital marketing with focus on social media and community engagement</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Social media campaigns</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Influencer partnerships</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Workshop marketing</li>
                  <li className="flex items-center"><Star className="h-4 w-4 text-purple-500 mr-2" /> Loyalty programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Workshop Calendar */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-pink-400">2025 Creative Workshop Calendar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { month: "January", title: "Festive Creativity", desc: "Cat-themed Tết greeting cards and lucky money envelopes", color: "blue" },
              { month: "February", title: "Valentine's Love", desc: "Design heartfelt cards with a feline twist", color: "blue" },
              { month: "March", title: "Art & Design", desc: "DIY home décor techniques with founder", color: "blue" },
              { month: "April", title: "Spring Inspirations", desc: "Craft handmade décor with spring colors", color: "blue" },
              { month: "May", title: "Cat Care Basics", desc: "Pet care tips with local vet", color: "blue" },
              { month: "June", title: "Summer Refresh", desc: "Create innovative, refreshing beverages", color: "blue" },
              { month: "July", title: "Back-to-School", desc: "Customize creative school supplies", color: "blue" },
              { month: "August", title: "DIY Home Décor", desc: "Hands-on interior decoration workshop", color: "blue" },
              { month: "September", title: "Autumn & Cat Moments", desc: "Photography session with café cats", color: "blue" },
              { month: "October", title: "Halloween Creativity", desc: "Craft Halloween accessories and décor", color: "blue" },
              { month: "November", title: "Art & Relaxation", desc: "Painting and journaling session", color: "blue" },
              { month: "December", title: "Christmas & New Year", desc: "Create festive cat-themed ornaments", color: "blue" }
            ].map((workshop, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-1">{workshop.month}</h4>
                <h5 className="font-bold mb-2">{workshop.title}</h5>
                <p className="text-sm text-gray-300">{workshop.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Workshop Strategy & Pricing</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-green-400 mb-4">Pricing Structure</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Standard Fee: 80,000-100,000 VND per ticket</li>
                  <li>• Student Discount: 20% off with valid student ID</li>
                  <li>• Combo Offer: "Workshop + Coffee" package for 150,000 VND</li>
                  <li>• Group bookings (3+): 15% discount</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 mb-4">Marketing Approach</h4>
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
      </section>

      {/* Social Media & Content Strategy */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Social Media & Content Strategy"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">Content Pillars</h3>
              <div className="space-y-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">#MeowOfTheDay</h4>
                  <p className="text-sm text-gray-300">Daily posts showcasing café cats' antics</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">#WorkshopWednesday</h4>
                  <p className="text-sm text-gray-300">Weekly workshop highlights and teasers</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">#NhaCaStories</h4>
                  <p className="text-sm text-gray-300">Customer testimonials and behind-the-scenes content</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Platform Strategy</h3>
              <div className="space-y-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Instagram & TikTok</h4>
                  <p className="text-sm text-gray-300">Short, engaging videos of café décor and cats</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Facebook & Zalo</h4>
                  <p className="text-sm text-gray-300">Event announcements and targeted local ads</p>
                </div>
              </div>
              
              <div className="mt-6 bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-3">Content Calendar Highlights</h4>
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
      </section>

      {/* Marketing Budget & Investment Plan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Marketing Budget & Investment Plan"
            subtitle="Annual Marketing Investment: 100-120 million VND"
            centered
          />

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-center">Allocation (VND)</th>
                    <th className="px-6 py-4 text-center">Percentage</th>
                    <th className="px-6 py-4 text-left">Key Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Workshop Materials & Setup</td>
                    <td className="px-6 py-4 text-center">30,000,000</td>
                    <td className="px-6 py-4 text-center">25%</td>
                    <td className="px-6 py-4">Materials for 12 workshops, decorations, equipment</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Digital Marketing & Ads</td>
                    <td className="px-6 py-4 text-center">30,000,000</td>
                    <td className="px-6 py-4 text-center">25%</td>
                    <td className="px-6 py-4">Facebook, Instagram, TikTok ads, influencer partnerships</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Seasonal Décor & Ambiance</td>
                    <td className="px-6 py-4 text-center">20,000,000</td>
                    <td className="px-6 py-4 text-center">17%</td>
                    <td className="px-6 py-4">Monthly themed decorations, photo props, lighting</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Community Partnerships</td>
                    <td className="px-6 py-4 text-center">10,000,000</td>
                    <td className="px-6 py-4 text-center">8%</td>
                    <td className="px-6 py-4">University collaborations, local artist partnerships</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Content Creation & PR</td>
                    <td className="px-6 py-4 text-center">10,000,000</td>
                    <td className="px-6 py-4 text-center">8%</td>
                    <td className="px-6 py-4">Professional photography, video content, PR activities</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Loyalty Program & Rewards</td>
                    <td className="px-6 py-4 text-center">5,000,000</td>
                    <td className="px-6 py-4 text-center">4%</td>
                    <td className="px-6 py-4">Customer rewards, referral bonuses, VIP perks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Events & Special Occasions</td>
                    <td className="px-6 py-4 text-center">10,000,000</td>
                    <td className="px-6 py-4 text-center">8%</td>
                    <td className="px-6 py-4">Grand opening, anniversary, holiday celebrations</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Contingency & Flexibility</td>
                    <td className="px-6 py-4 text-center">5,000,000</td>
                    <td className="px-6 py-4 text-center">4%</td>
                    <td className="px-6 py-4">Unexpected opportunities, market adjustments</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs & Success Metrics */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-pink-400">Key Performance Indicators & Success Metrics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Social Growth</h4>
              <p className="text-sm text-gray-300">300-500 new followers monthly</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <BarChart3 className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Workshop Success</h4>
              <p className="text-sm text-gray-300">60%+ attendance rate, 4/5+ ratings</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Sales Growth</h4>
              <p className="text-sm text-gray-300">Increase through combos and loyalty</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg text-center">
              <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Engagement</h4>
              <p className="text-sm text-gray-300">5%+ engagement rate target</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-xl">
              <h4 className="font-bold text-blue-400 mb-4">Brand Awareness</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Social media reach: 50,000+ monthly</li>
                <li>• Local media mentions: 3+ per quarter</li>
                <li>• Brand recognition in target area: 40%</li>
                <li>• Website traffic: 5,000+ monthly visitors</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl">
              <h4 className="font-bold text-green-400 mb-4">Customer Engagement</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Daily customers: 100 → 130</li>
                <li>• Workshop attendance rate: 80%+</li>
                <li>• Customer retention rate: 60%+</li>
                <li>• Average session duration: 90+ minutes</li>
              </ul>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl">
              <h4 className="font-bold text-purple-400 mb-4">Financial Performance</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Monthly revenue growth: 15%</li>
                <li>• Workshop revenue: 20M VND/month</li>
                <li>• Customer lifetime value: +25%</li>
                <li>• Marketing ROI: 3:1 target</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Risk Management & Mitigation Strategies"
            subtitle="Proactive Measures for Sustainable Success"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-red-200 p-6 rounded-lg">
                <h4 className="font-bold text-red-600 mb-2">Low Workshop Attendance</h4>
                <p className="text-sm text-gray-600 mb-3"><strong>Risk:</strong> Seasonal fluctuations, competing events</p>
                <p className="text-sm text-gray-700"><strong>Mitigation:</strong> Last-minute promotions, flexible scheduling, online workshops option</p>
              </div>

              <div className="border border-blue-200 p-6 rounded-lg">
                <h4 className="font-bold text-blue-600 mb-2">Cat Health & Safety Concerns</h4>
                <p className="text-sm text-gray-600 mb-3"><strong>Risk:</strong> Cat illness, customer allergies, hygiene issues</p>
                <p className="text-sm text-gray-700"><strong>Mitigation:</strong> Regular vet checkups, clear allergy warnings, strict cleanliness protocols</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-orange-200 p-6 rounded-lg">
                <h4 className="font-bold text-orange-600 mb-2">Social Media Algorithm Changes</h4>
                <p className="text-sm text-gray-600 mb-3"><strong>Risk:</strong> Reduced organic reach, changing platform policies</p>
                <p className="text-sm text-gray-700"><strong>Mitigation:</strong> Diversified platform strategy, email list building, paid promotion budget</p>
              </div>

              <div className="border border-purple-200 p-6 rounded-lg">
                <h4 className="font-bold text-purple-600 mb-2">Seasonal Revenue Fluctuations</h4>
                <p className="text-sm text-gray-600 mb-3"><strong>Risk:</strong> Academic calendar impacts, holiday periods</p>
                <p className="text-sm text-gray-700"><strong>Mitigation:</strong> Tourist targeting during breaks, special holiday packages, online engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Implementation Timeline 2025"
            subtitle="Quarterly Roadmap for Success"
            centered
          />

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                Q1
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Foundation & Launch (Jan-Mar)</h3>
                <p className="text-gray-600">Brand identity finalization, social media setup, first 3 workshops, local partnerships establishment</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                Q2
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Growth & Engagement (Apr-Jun)</h3>
                <p className="text-gray-600">Influencer collaborations, customer loyalty program launch, workshop expansion, university partnerships</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                Q3
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Expansion & Innovation (Jul-Sep)</h3>
                <p className="text-gray-600">New service offerings, advanced workshops, community events, seasonal campaigns</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                Q4
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">Optimization & Planning (Oct-Dec)</h3>
                <p className="text-gray-600">Holiday campaigns, year-end analysis, 2026 strategy development, anniversary preparation</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg">
              Start Your Cat Café Marketing Journey
            </button>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Build Your Creative Cat Café Brand?"
        description="Let's discuss how our branding and marketing expertise can help your unique café concept thrive and create a purr-fect community space."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-pink-500 to-purple-600"
      />
    </Layout>
  );
};

export default NhaCaCafe;
