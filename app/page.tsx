"use client"
import Banner from "@/features/dashboard/components/banner/banner"
import Footer from "@/features/dashboard/components/footer/footer"
import Benefits from "@/features/dashboard/components/benefits/benefits"
import { useCategoryViewModel } from "@/logicViewModal/useCategoryViewModel"
import ProductList from "@/features/dashboard/components/product/productList"
import BestSeller from "@/features/dashboard/components/bestSeller/bestSeller"
import CategoryList from "@/features/dashboard/components/category/categoryList"
import HeroSection from "@/features/dashboard/components/heroSection/heroSection"
import SecondaryBanner from "@/features/dashboard/components/secondaryBanner/secondaryBanner"


export default function Home() {
  const vm = useCategoryViewModel();
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection></HeroSection>
      <CategoryList {...vm}></CategoryList>
      <Banner></Banner>
      <ProductList {...vm}></ProductList>
      <BestSeller {...vm}></BestSeller>
      <SecondaryBanner></SecondaryBanner>
      <Benefits></Benefits>
      <Footer></Footer>

    </main>
  )
}
