import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  HeadphonesIcon,
  Star,
  ChevronRight,
} from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MainContent = () => {
  const features: FeatureProps[] = [
    {
      title: "Harga Terjangkau",
      description:
        "Dapatkan produk dan layanan dengan harga kompetitif di pasaran",
      icon: <CreditCard className="h-10 w-10 text-primary" />,
    },
    {
      title: "Transaksi Aman",
      description:
        "Keamanan transaksi terjamin dengan sistem pembayaran terpercaya",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: "Pengiriman Cepat",
      description: "Produk fisik dikirim dengan cepat ke seluruh Indonesia",
      icon: <Truck className="h-10 w-10 text-primary" />,
    },
    {
      title: "Dukungan 24/7",
      description: "Tim dukungan pelanggan siap membantu Anda kapan saja",
      icon: <HeadphonesIcon className="h-10 w-10 text-primary" />,
    },
  ];

  const testimonials: TestimonialProps[] = [
    {
      name: "Ahmad Rizki",
      role: "Pelanggan Setia",
      content:
        "Saya sudah berbelanja di Gibstore selama 2 tahun dan selalu puas dengan layanan dan kualitas produknya. Pengiriman cepat dan harga sangat bersaing!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmad",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      role: "Pembeli Baru",
      content:
        "Baru pertama kali belanja di Gibstore dan sangat terkesan. Proses pembelian mudah, produk digital langsung dikirim ke email saya dalam hitungan menit.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=siti",
      rating: 4,
    },
    {
      name: "Budi Santoso",
      role: "Pebisnis",
      content:
        "Layanan IMEI di Gibstore sangat membantu bisnis saya. Prosesnya cepat dan customer service sangat responsif ketika ada pertanyaan.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
      rating: 5,
    },
    {
      name: "Dewi Lestari",
      role: "Influencer",
      content:
        "Sebagai content creator, saya sering membeli produk digital di Gibstore. Koleksinya lengkap dan selalu update dengan tren terbaru.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dewi",
      rating: 5,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full bg-background">
      {/* About Gibstore Section */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tentang Gibstore Marketplace
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Gibstore adalah marketplace terpercaya untuk produk fisik, digital,
            dan layanan IMEI dengan harga kompetitif dan layanan cepat. Kami
            berkomitmen untuk memberikan pengalaman belanja online terbaik
            dengan berbagai pilihan produk berkualitas dan layanan pelanggan
            yang prima.
          </p>
          <Separator className="my-8" />
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="bg-muted/30 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fitur Unggulan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apa yang membuat Gibstore Marketplace menjadi pilihan terbaik
              untuk kebutuhan belanja online Anda
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman nyata dari pelanggan yang telah berbelanja di Gibstore
            Marketplace
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </section>

      {/* Current Promotions Section */}
      <section className="bg-primary/5 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-r from-primary/80 to-primary rounded-xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-8 md:p-12 md:w-2/3 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Promo Spesial Bulan Ini!
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Dapatkan diskon hingga 50% untuk berbagai produk digital dan
                  fisik pilihan. Promo terbatas hanya sampai akhir bulan!
                </p>
                <Button variant="secondary" size="lg" className="group">
                  Lihat Semua Promo
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="md:w-1/3 p-6">
                <img
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80"
                  alt="Promo Special"
                  className="rounded-lg w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
