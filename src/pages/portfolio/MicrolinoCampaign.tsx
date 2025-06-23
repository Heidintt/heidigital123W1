
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MicrolinoCampaign = () => {
  return (
    <Layout>
      <Hero
        title="Microlino 2026 Australian Launch Campaign"
        subtitle="Integrated Marketing Communications Campaign by Heisocial Communications"
        backgroundImage="/lovable-uploads/4122d0a9-afef-4722-8fc3-da6801946f64.png"
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Campaign Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campaign Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic launch campaign targeting urban professionals with innovative micro-EV solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">60%</CardTitle>
                <p className="text-gray-600">Aided Recall Target</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Among 25-35 year old urban professionals</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">5,000</CardTitle>
                <p className="text-gray-600">Test Drive Bookings</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Engagement conversion target</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">2,000</CardTitle>
                <p className="text-gray-600">Pre-Orders</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Ultimate conversion goal</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Big Idea */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-5xl font-bold mb-6">Half the Space, Twice the Life</h2>
              <p className="text-xl mb-6">The Big Idea</p>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                #TwiceTheLife
              </Badge>
              <p className="mt-6 text-lg opacity-90">
                A pocket-EV that shrinks the car so drivers gain time, space and unmistakable eco-style
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Target Audience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Target Audience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <span className="mr-2">📍</span> Geographic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sydney, Brisbane & Melbourne CBDs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <span className="mr-2">👤</span> Demographic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>25-45 years old<br />Income: AUD 75-90k</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <span className="mr-2">🧠</span> Psychographic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Eco-conscious, tech-savvy, design-driven</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <span className="mr-2">🚗</span> Behavioral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Short-distance drivers, mobile-first, social sharers</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Campaign Strategies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Tiny EV Hunt Activation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Instagram AR filter hunt in 50 key urban spots</li>
                  <li>• Daily clues via IG Stories</li>
                  <li>• Virtual Microlino model discovery</li>
                  <li>• Top 1000: VIP Test Drive + 10% discount</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Road Banner Bonus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• "Half the Space, Twice the Life" rear-window banners</li>
                  <li>• 6-month display commitment</li>
                  <li>• Extra 5% off for new buyers (stackable)</li>
                  <li>• QR code linking to booking page</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Media Mix */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">6-Week Media Flight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Social Media (Paid)</CardTitle>
                <Badge variant="outline">35% Budget</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Instagram & TikTok Reels, YouTube Shorts</p>
                <p className="text-sm font-medium mt-2">Target: 12M views, CTR ≥ 1.4%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">OOH Transit</CardTitle>
                <Badge variant="outline">20% Budget</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Transit shelter advertising</p>
                <p className="text-sm font-medium mt-2">Target: 6M impressions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Influencer Content</CardTitle>
                <Badge variant="outline">8% Budget</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Micro-influencer vlogs</p>
                <p className="text-sm font-medium mt-2">Target: 2.5M views, 1% swipe-up</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AR Experience</CardTitle>
                <Badge variant="outline">12% Budget</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Tiny EV Hunt development & prizes</p>
                <p className="text-sm font-medium mt-2">Target: 3,500 active hunters</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Banner Program</CardTitle>
                <Badge variant="outline">5% Budget</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Mobile billboard initiative</p>
                <p className="text-sm font-medium mt-2">Target: 1,000 sign-ups</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Owned Media</CardTitle>
                <Badge variant="outline">10% Budget</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Website & CRM retargeting</p>
                <p className="text-sm font-medium mt-2">Always-on conversion focus</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Campaign Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">6-Week Campaign Timeline</h2>
          <div className="space-y-6">
            {[
              { week: 1, title: "Hero Launch", description: "Paid Reels & Shorts + OOH domination; landing page live", color: "bg-blue-500" },
              { week: 2, title: "AR Hunt Kick-off", description: "IG Stories clues; paid reach reminder", color: "bg-green-500" },
              { week: 3, title: "Influence & Banner Push", description: "5 lifestyle creators drop vlogs; announce Banner Bonus", color: "bg-purple-500" },
              { week: 4, title: "UGC Spotlight", description: "Reshare best Hunt videos & banner pics; 'Hall of Fame' carousel", color: "bg-orange-500" },
              { week: 5, title: "Booking Surge", description: "Retarget site visitors with dynamic ads; email countdown", color: "bg-yellow-500" },
              { week: 6, title: "Pre-Order Finale", description: "Live Q&A Reel with product lead; final 48-hour flash ad", color: "bg-red-500" }
            ].map((item) => (
              <Card key={item.week} className="overflow-hidden">
                <div className="flex">
                  <div className={`${item.color} w-2 flex-shrink-0`}></div>
                  <CardContent className="flex-1 p-6">
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="mr-3">Week {item.week}</Badge>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section>
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-8">Expected Campaign Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
                  <p className="text-gray-300">Aided Recall Achievement</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">1.2%+</div>
                  <p className="text-gray-300">Social Media CTR</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">3,500</div>
                  <p className="text-gray-300">AR Hunt Participants</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-400 mb-2">2,000</div>
                  <p className="text-gray-300">Pre-orders Secured</p>
                </div>
              </div>
              <Separator className="my-8 bg-gray-700" />
              <p className="text-lg text-gray-300">
                This campaign fuses robust theory with playful creativity to move urban professionals 
                seamlessly from awareness to purchase, empowering them to <span className="font-bold text-white">"Half the Space, Twice the Life."</span>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default MicrolinoCampaign;
