import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Smartphone, Cpu } from "lucide-react";

interface CategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

const Category = ({
  title,
  description,
  icon,
  linkTo = "#",
}: CategoryProps) => {
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white"
        >
          Lihat Selengkapnya
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ProductCategoriesProps {
  categories?: CategoryProps[];
}

const ProductCategories = ({ categories }: ProductCategoriesProps) => {
  const defaultCategories: CategoryProps[] = [
    {
      title: "Produk Fisik",
      description:
        "Berbagai produk fisik berkualitas dengan harga terjangkau dan pengiriman cepat ke seluruh Indonesia.",
      icon: <ShoppingBag size={32} />,
      linkTo: "/products/physical",
    },
    {
      title: "Produk Digital",
      description:
        "Voucher game, pulsa, token listrik, dan berbagai produk digital lainnya yang bisa langsung digunakan.",
      icon: <Smartphone size={32} />,
      linkTo: "/products/digital",
    },
    {
      title: "Layanan IMEI",
      description:
        "Layanan IMEI terpercaya untuk berbagai kebutuhan perangkat elektronik Anda dengan proses cepat.",
      icon: <Cpu size={32} />,
      linkTo: "/services/imei",
    },
  ];

  const displayCategories = categories || defaultCategories;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kategori Produk</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai kategori produk dan layanan terbaik yang kami
            sediakan untuk memenuhi kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCategories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              linkTo={category.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
