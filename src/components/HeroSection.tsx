import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ShoppingBag, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  whatsappNumber?: string;
}

const HeroSection = ({
  title = "Temukan Semua Kebutuhanmu di Gibstore Marketplace!",
  subtitle = "Produk Fisik, Digital, dan Layanan IMEI Terpercaya dalam Satu Platform.",
  ctaText = "Jelajahi Sekarang",
  backgroundImage = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
  whatsappNumber = "+62 857-3834-2078",
}: HeroSectionProps) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`);
  };

  return (
    <div className="relative w-full h-[600px] bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 30, 0.7), rgba(0, 0, 30, 0.7)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-full"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            {ctaText}
          </Button>
        </motion.div>

        {/* App Store Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="bg-black text-white border-white hover:bg-gray-900"
          >
            <Download className="mr-2 h-5 w-5" />
            Download di App Store
          </Button>
          <Button
            variant="outline"
            className="bg-black text-white border-white hover:bg-gray-900"
          >
            <Download className="mr-2 h-5 w-5" />
            Download di Play Store
          </Button>
        </motion.div>

        {/* WhatsApp Contact Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            onClick={handleWhatsAppClick}
            variant="outline"
            className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Hubungi Kami via WhatsApp
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
