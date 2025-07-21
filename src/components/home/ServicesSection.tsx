import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, TrendingUp, PenTool, BarChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Marketing Strategy",
    icon: <Rocket className="h-7 w-7 text-blue-600" />,
    desc: "Develop data-driven strategies to boost ROI and performance."
  },
  {
    title: "Social Media management",
    icon: <Globe className="h-7 w-7 text-purple-600" />,
    desc: "Build and grow your online presence with expert social strategy."
  },
  {
    title: "Content Creation & SEO",
    icon: <PenTool className="h-7 w-7 text-pink-500" />,
    desc: "Craft high-ranking, engaging content with powerful storytelling."
  },
  {
    title: "SEO & Ads",
    icon: <TrendingUp className="h-7 w-7 text-green-500" />,
    desc: "Search engine optimization and multi-platform advertising."
  },
  {
    title: "Analytics",
    icon: <BarChart className="h-7 w-7 text-yellow-500" />,
    desc: "Data analysis and performance reporting for your campaigns."
  },
  {
    title: "Branding & Design",
    icon: <CheckCircle className="h-7 w-7 text-cyan-500" />,
    desc: "Design standout brand identities that connect with your audience."
  }
];

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.08 }
  }),
  hover: { scale: 1.05, boxShadow: "0 8px 32px rgba(80,80,200,0.10)" }
};

const ServicesSection = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
         Heidigital Marketing Services - <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Optimized for Growth</span>
        </h2>
        <p className="text-gray-500 text-lg">Helping businesses grow with smart, scalable, and ROI-focused marketing solutions</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center transition-all group cursor-pointer hover:border-blue-200"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="mb-3 group-hover:scale-110 transition-transform">{s.icon}</div>
            <h4 className="font-semibold text-lg mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">{s.title}</h4>
            <p className="text-gray-500 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          <Link to="/services">Explore Our Services</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;