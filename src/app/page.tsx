import Brands from "@/components/home/Brands";
import FeaturedCars from "@/components/home/FeaturedCars";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <div className="flex flex-col gap-20"> 
    <Hero/>
    <Brands/>
    <FeaturedCars/>
    </div>
    </>
  );
}
