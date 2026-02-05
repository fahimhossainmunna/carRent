import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { carData } from "@/data/cars";
import { useDebounce } from "./useDebounce";

export const useCarFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "");
  const [priceRange, setPriceRange] = useState(Number(searchParams.get("price")) || 1000);

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedBrand) params.set("brand", selectedBrand);
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (priceRange < 1000) params.set("price", priceRange.toString());
    router.push(`/cars?${params.toString()}`, { scroll: false });
  }, [selectedBrand, debouncedSearch, priceRange, router]);

  const filteredCars = carData.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesBrand = selectedBrand === "" || car.brand === selectedBrand;
    const matchesPrice = car.price <= priceRange;
    return matchesSearch && matchesBrand && matchesPrice;
  });

  // Sidebar-er jonno reset function
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("");
    setPriceRange(1000);
  };

  return {
    searchTerm, setSearchTerm,
    selectedBrand, setSelectedBrand,
    priceRange, setPriceRange,
    filteredCars,
    resetFilters 
  };
};