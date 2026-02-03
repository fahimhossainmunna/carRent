import Brands from "@/components/home/Brands";
import CoreFeatures from "@/components/home/CoreFeatures";
import DownloadApp from "@/components/home/DownloadApp";
import Facts from "@/components/home/Facts";
import FeaturedCars from "@/components/home/FeaturedCars";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
  
    <Hero/>
    <Brands/>
    <FeaturedCars/>
    <Facts/>
    <CoreFeatures/>
    <Services/>
    <DownloadApp/>
    
    </>
  );
}
