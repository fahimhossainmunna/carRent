import Image from "next/image";

const Brands = () => {
  const brands = [
    { name: "Audi", src: "/images/brands/audi.png" },
    { name: "BMW", src: "/images/brands/bmw.png" },
    { name: "Ferrari", src: "/images/brands/ferrari.png" },
    { name: "Ford", src: "/images/brands/ford.png" },
    { name: "Toyota", src: "/images/brands/toyota.png" },
  ];

  return (
    <section className="py-12 bg-gray-50/50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10">
          Available Premium Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="relative w-45 h-20 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;