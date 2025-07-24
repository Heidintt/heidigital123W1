
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { trackContactForm } = useGoogleAnalytics();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      console.log("Submitting contact form:", data);

      // Call the Supabase Edge Function
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          subject: data.subject,
          message: data.message,
        },
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      console.log("Contact form response:", response);

      // Track successful submission
      trackContactForm('Contact Form');

      // Success state
      setSubmitStatus('success');
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
        icon: <CheckCircle className="h-4 w-4" />,
      });
      
      // Reset form
      reset();
      
    } catch (error: any) {
      console.error("Contact form submission error:", error);
      
      setSubmitStatus('error');
      toast.error("Failed to send message!", {
        description: error.message || "Please try again or contact us directly.",
        duration: 5000,
        icon: <AlertCircle className="h-4 w-4" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Your full name"
              autoComplete="name"
              className={`transition-colors ${
                errors.name 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              }`}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your@email.com"
              autoComplete="email"
              className={`transition-colors ${
                errors.email 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              }`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="Your phone number"
              autoComplete="tel"
              className="transition-colors border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject *
            </Label>
            <Input
              id="subject"
              {...register("subject")}
              placeholder="How can we help you?"
              autoComplete="off"
              className={`transition-colors ${
                errors.subject 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
              }`}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message *
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Tell us about your project or how we can help..."
            rows={5}
            autoComplete="off"
            className={`resize-none transition-colors ${
              errors.message 
                ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                : "border-gray-300 focus:border-heidigital-blue focus:ring-heidigital-blue"
            }`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.message.message}
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-heidigital-blue hover:bg-heidigital-blue/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : submitStatus === 'success' ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm text-green-800">
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

const Contact = () => {
  useSEO({
    title: "Contact Us - Heidi Digital | Get Your Free Marketing Consultation",
    description: "Ready to transform your business with AI-powered marketing? Contact Heidi Digital today for your free consultation. Let's discuss how we can help grow your business with proven digital marketing strategies.",
    keywords: "contact heidi digital, free marketing consultation, digital marketing agency contact, marketing services inquiry, get in touch heidi digital",
    url: "https://heidigital.info/contact",
    canonicalUrl: "https://heidigital.info/contact",
    type: "website",
    image: "https://heidigital.info/og-contact.jpg",
    schemaType: "ContactPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Contact", url: "https://heidigital.info/contact" }
    ]
  });

  React.useEffect(() => {
    // Add Google Ads gtag
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17388175497';
    gtagScript.id = 'gtag-script';
    
    const gtagConfig = document.createElement('script');
    gtagConfig.id = 'gtag-config';
    gtagConfig.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17388175497');
    `;
    
    // Remove existing gtag scripts if any
    const existingScript = document.getElementById('gtag-script');
    const existingConfig = document.getElementById('gtag-config');
    if (existingScript) existingScript.remove();
    if (existingConfig) existingConfig.remove();
    
    document.head.appendChild(gtagScript);
    document.head.appendChild(gtagConfig);

    // Add ContactPage structured data
    const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Heidi Digital",
      "description": "Get in touch with Heidi Digital for your free marketing consultation",
      "url": "https://heidigital.info/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'contact-schema';
    script.textContent = JSON.stringify(contactSchema);
    
    const existing = document.getElementById('contact-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const gtagScript = document.getElementById('gtag-script');
      const gtagConfig = document.getElementById('gtag-config');
      const script = document.getElementById('contact-schema');
      if (gtagScript) gtagScript.remove();
      if (gtagConfig) gtagConfig.remove();
      if (script) script.remove();
    };
  }, []);

  return (
    <Layout>
      <main role="main" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your business with? Contact Heidigital today for your free Marketing consultation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
