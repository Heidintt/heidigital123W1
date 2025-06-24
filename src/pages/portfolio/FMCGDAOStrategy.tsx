
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
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Users,
  Settings,
  TrendingUp,
  Target,
  Shield,
  AlertTriangle,
  CheckCircle,
  Calendar,
  DollarSign,
  BarChart3,
  Lightbulb,
  Zap,
  Globe,
  Lock,
  Coins,
  Vote,
  Network,
  FileText,
  Award,
  Rocket
} from "lucide-react";

const FMCGDAOStrategy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-heisocial-blue via-heisocial-purple to-indigo-900 text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Academic Research & Strategy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web3 DAO Models in FMCG Marketing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transforming Brand Loyalty Through Community-Owned Governance by 2035
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global FMCG Industry
              </span>
              <span className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                Blockchain & Web3
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Community Governance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Executive Summary"
                subtitle="Research into the transformative potential of Web3-based DAO models in FMCG marketing"
              />
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  The fast-moving consumer goods (FMCG) industry faces unprecedented challenges in maintaining consumer loyalty and engagement. With the global loyalty program market expected to reach $155.2 billion by 2029, traditional marketing strategies are proving increasingly ineffective against price-conscious consumers demanding transparency and authentic engagement.
                </p>
                <p className="text-gray-600 mb-6">
                  This comprehensive research explores how Web3-based Decentralized Autonomous Organizations (DAOs) can revolutionize brand-consumer relationships through transparent governance, community ownership, and participatory decision-making, fundamentally transforming marketing strategies by 2035.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-heisocial-blue">$155.2B</div>
                  <div className="text-sm text-gray-600">Global loyalty market by 2029</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-heisocial-purple">350%</div>
                  <div className="text-sm text-gray-600">Projected engagement increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">20%</div>
                  <div className="text-sm text-gray-600">Repeat engagement growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Research Context & Problem Statement"
            subtitle="Understanding the challenges facing modern FMCG marketing"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Market Fragmentation</h3>
              <p className="text-gray-600">
                Consumer loyalty is increasingly fragmented with traditional mass advertising strategies becoming ineffective in meeting modern consumer expectations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Rising Expectations</h3>
              <p className="text-gray-600">
                Demand for transparency, personalized engagement, and authentic brand interactions continues to grow, especially among Gen Z and millennials.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <DollarSign className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Revenue at Risk</h3>
              <p className="text-gray-600">
                Billions in potential revenue are at risk as price-conscious consumers move away from previously favored brands, even when discounts are offered.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Research Question</h3>
            <div className="bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10 rounded-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-800">
                "How will the adoption of Web3-based community-owned DAO models change brand loyalty, consumer engagement, and marketing strategies in the FMCG industry by 2035?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theoretical Framework */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Theoretical Framework"
            subtitle="Literature insights supporting DAO adoption in FMCG marketing"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Network className="w-6 h-6 text-heisocial-blue" />
                Decentralization Theory
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-heisocial-blue pl-4">
                  <p className="text-gray-600">
                    <strong>Power Distribution:</strong> DAOs enable the shift of power from centralized entities to distributed communities, fundamentally changing brand-consumer dynamics.
                  </p>
                </div>
                <div className="border-l-4 border-heisocial-purple pl-4">
                  <p className="text-gray-600">
                    <strong>Collective Decision-Making:</strong> Token holders participate in governance through smart contracts, creating transparent and democratic brand management.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-heisocial-purple" />
                Co-Creation & Participation
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-600">
                    <strong>Active Contributors:</strong> Consumers evolve from passive recipients to active contributors in brand development and strategy.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="text-gray-600">
                    <strong>Emotional Investment:</strong> Ownership drives emotional attachment and loyalty through perceived ownership and community belonging.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Key Research Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Eye className="w-8 h-8 text-heisocial-blue mx-auto mb-3" />
                <h4 className="font-bold mb-2">Transparency Demand</h4>
                <p className="text-sm text-gray-600">Consumers increasingly demand ethical behavior and transparent decision-making from brands</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-heisocial-purple mx-auto mb-3" />
                <h4 className="font-bold mb-2">Community Engagement</h4>
                <p className="text-sm text-gray-600">DAOs generate higher engagement levels, especially among Gen Z and millennials who value authenticity</p>
              </div>
              <div className="text-center">
                <Settings className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Governance Innovation</h4>
                <p className="text-sm text-gray-600">Decentralized governance provides mechanisms for real ownership and accountability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAO Impact Analysis */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="DAO Impact Analysis"
            subtitle="How community-owned governance models transform FMCG marketing"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-heisocial-blue" />
              </div>
              <h3 className="font-bold text-lg mb-3">Loyalty Transformation</h3>
              <p className="text-gray-600 mb-4">
                DAOs transform loyalty from transactional rewards to emotional and financial investment through governance tokens and direct participation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shared ownership model</li>
                <li>• Active brand ambassadorship</li>
                <li>• Value-based association</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Vote className="w-6 h-6 text-heisocial-purple" />
              </div>
              <h3 className="font-bold text-lg mb-3">Enhanced Engagement</h3>
              <p className="text-gray-600 mb-4">
                Consumer engagement becomes deeper through integration in decision-making, co-creation, and community governance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Product development participation</li>
                <li>• Marketing strategy input</li>
                <li>• Community-driven innovation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Radical Transparency</h3>
              <p className="text-gray-600 mb-4">
                DAO governance requires unprecedented transparency in performance data, campaign ideas, and budget allocations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Blockchain-verified decisions</li>
                <li>• Smart contract execution</li>
                <li>• Community accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: FutureFoodsDAO */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Case Study: FutureFoodsDAO"
            subtitle="A projected industry example of DAO implementation in sustainable snacking"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">FutureFoodsDAO</h3>
                    <p className="text-gray-600">Sustainable Snack Community</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  A sustainable snack company where 10,000 token holders vote on flavor innovations, packaging suppliers, and marketing campaigns. Token rewards are distributed for eco-friendly behaviors like recycling participation and carbon offsetting.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-heisocial-blue" />
                    Governance Mechanics
                  </h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <strong>Proposal Submission:</strong> Consumers holding ≥50 $FFD tokens can propose product/policy changes
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <strong>Tiered Voting Power:</strong> Votes weighted by token holdings (capped at 10% per wallet) and participation longevity
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <strong>Smart Contract Execution:</strong> Approved proposals auto-trigger funding via Ethereum-based contracts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-orange-500" />
                  Token Economy Distribution
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Product Purchases</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-blue-200 rounded-full">
                        <div className="w-[45%] h-full bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Staking Rewards</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-purple-200 rounded-full">
                        <div className="w-[25%] h-full bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Content Creation</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-green-200 rounded-full">
                        <div className="w-[20%] h-full bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Recycling Rewards</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-orange-200 rounded-full">
                        <div className="w-[10%] h-full bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  PR Crisis Scenario Response
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Transparency:</strong>
                      <p className="text-sm text-gray-600">Publish supplier audit trails on IPFS for public verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Community Vote:</strong>
                      <p className="text-sm text-gray-600">Token holders choose between full refunds + regulation vs. donation to research + 50% discount</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Execution:</strong>
                      <p className="text-sm text-gray-600">Smart contracts distribute compensation within 48 hours, funded by DAO treasury</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Limitations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Challenges & Limitations"
            subtitle="Key barriers to DAO adoption in FMCG industry"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Regulatory Uncertainty</h3>
              <p className="text-gray-600 mb-4">
                Current frameworks inadequately classify DAO tokens and ensure accountability in decentralized systems, creating compliance risks.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> SEC litigation against crypto projects creates barriers for tokenized loyalty programs
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Zap className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Technical Scalability</h3>
              <p className="text-gray-600 mb-4">
                Current blockchain infrastructure faces scalability issues with Ethereum processing only ~15 transactions per second.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> Insufficient for global FMCG demand and real-time consumer interactions
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Users className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Governance Participation</h3>
              <p className="text-gray-600 mb-4">
                Many DAOs experience low voting participation (often <1%) with small groups controlling majority voting power.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> Risk of oligarchic governance structures undermining democratic principles
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Lock className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Security Vulnerabilities</h3>
              <p className="text-gray-600 mb-4">
                Smart contract vulnerabilities can expose consumer data or disrupt supply chains, as seen in major DeFi hacks.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Impact:</strong> Consumer trust erosion and potential financial losses from security breaches
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Mitigation Strategies</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Challenge</TableHead>
                  <TableHead>Mitigation Strategy</TableHead>
                  <TableHead>Implementation Timeline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Regulatory Uncertainty</TableCell>
                  <TableCell>Partner with legal experts, pilot limited-scope programs</TableCell>
                  <TableCell>2025-2026</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Technical Scalability</TableCell>
                  <TableCell>Layer 2 solutions, hybrid on-chain/off-chain architecture</TableCell>
                  <TableCell>2026-2027</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Low Participation</TableCell>
                  <TableCell>Gamification, intuitive UX, education campaigns</TableCell>
                  <TableCell>2025-2028</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Security Risks</TableCell>
                  <TableCell>Multi-signature wallets, security audits, insurance</TableCell>
                  <TableCell>Ongoing</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Implementation Roadmap"
            subtitle="Strategic timeline for DAO integration in FMCG (2025-2035)"
            centered
          />

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phase 1: Foundation (2025-2026)</h3>
                  <p className="text-gray-600">Market Familiarization & Pilot Programs</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Key Initiatives</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Launch tokenized loyalty pilot programs</li>
                    <li>• Build educational content and consumer awareness</li>
                    <li>• Establish legal compliance frameworks</li>
                    <li>• Partner with blockchain infrastructure providers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Success Metrics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 10,000+ engaged token holders</li>
                    <li>• 15% increase in customer retention</li>
                    <li>• 50+ governance proposals submitted</li>
                    <li>• Regulatory compliance achievement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phase 2: Expansion (2026-2028)</h3>
                  <p className="text-gray-600">Token Engagement Pilots & Co-creation Platforms</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Key Initiatives</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Scale community co-creation platforms</li>
                    <li>• Implement transparent decision dashboards</li>
                    <li>• Launch governance voting mechanisms</li>
                    <li>• Develop hybrid DAO-traditional structures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Success Metrics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 25% engagement rate in governance</li>
                    <li>• 100+ co-created product launches</li>
                    <li>• 30% improvement in brand loyalty scores</li>
                    <li>• Multi-brand DAO partnerships</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phase 3: Integration (2031-2035)</h3>
                  <p className="text-gray-600">Full DAO Integration & Industry Transformation</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Key Initiatives</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Launch fully DAO-governed sub-brands</li>
                    <li>• Implement cross-brand token ecosystems</li>
                    <li>• Establish industry-wide DAO standards</li>
                    <li>• Achieve mainstream consumer adoption</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Success Metrics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 50%+ brands with DAO elements</li>
                    <li>• $50B+ in DAO-governed FMCG revenue</li>
                    <li>• 1M+ active DAO participants per brand</li>
                    <li>• Industry-wide adoption of DAO principles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Recommendations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Strategic Recommendations"
            subtitle="Actionable steps for FMCG brands to integrate DAO principles"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Build Tokenized Loyalty Systems</h3>
              <p className="text-gray-600 mb-4">
                Pilot Web3-based loyalty programs issuing governance tokens for customer engagement, shifting from discount-driven to ownership-driven models.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Expected: 20% increase in repeat engagement
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Launch Co-Creation Platforms</h3>
              <p className="text-gray-600 mb-4">
                Create DAO-enabled platforms where consumers vote on product flavors, packaging designs, and marketing campaigns to increase emotional investment.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Expected: Deeper brand advocacy and UGC momentum
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Adopt Radical Transparency</h3>
              <p className="text-gray-600 mb-4">
                Implement public blockchain dashboards sharing real-time decisions and metrics to meet growing consumer demand for ethical conduct.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Expected: Enhanced trust and reduced fraud risk
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Develop Governance Protocols</h3>
              <p className="text-gray-600 mb-4">
                Establish clear processes for consumer proposals, discussions, and voting on brand initiatives with gamified interfaces to increase participation.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Expected: Higher voter turnout and inclusive decision-making
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Pilot DAO-Based Sub-Brands</h3>
              <p className="text-gray-600 mb-4">
                Launch DAO-native sub-brands where everything from mission to marketing is governed by token-holding consumers as R&D testing grounds.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Expected: Innovation insights and market validation
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Measure New KPIs</h3>
              <p className="text-gray-600 mb-4">
                Shift metrics from impressions to participation rates, token circulation, and governance proposal activity to measure DAO success.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Expected: Better ROI measurement and optimization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Conclusion"
              subtitle="The future of FMCG marketing lies in community-owned governance"
              centered
            />
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-600 mb-6">
                The integration of DAO models in the FMCG sector presents a paradigm shift in how brands approach loyalty, transparency, and consumer engagement. By empowering consumers to be co-creators and co-owners, DAO-based brands stand to cultivate unprecedented levels of emotional investment and long-term loyalty.
              </p>
              
              <p className="text-gray-600 mb-6">
                This transformation redefines the marketing function from one of persuasion to participation, aligning brand strategy with Web3 values of decentralization, community governance, and transparency. As consumers demand more authenticity, ethical conduct, and real influence, the adoption of community-owned brand models may transition from novelty to necessity.
              </p>
              
              <p className="text-gray-600">
                For FMCG marketers, preparing for this shift is not only a strategic advantage but may be the key to relevance in the decentralized future. The brands that embrace community ownership today will be the market leaders of tomorrow.
              </p>
            </div>

            <div className="bg-gradient-to-r from-heisocial-blue to-heisocial-purple rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore DAO Marketing?</h3>
              <p className="text-white/90 mb-6">
                Let's discuss how your FMCG brand can leverage Web3 and DAO principles to build stronger community relationships and drive sustainable growth.
              </p>
              <Button className="bg-white text-heisocial-blue hover:bg-gray-100">
                Schedule Strategy Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FMCGDAOStrategy;
