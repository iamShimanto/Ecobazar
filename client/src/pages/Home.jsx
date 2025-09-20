import React from 'react'
import Banner from '../components/Home/Banner'
import Features from '../components/Home/Features'
import Categories from '../components/Home/Categories'
import PopularProducts from '../components/Home/PopularProducts'
import Stats from '../components/Home/Stats'
import SaleOfMonth from '../components/Home/SaleOfMonth'
import BlogSection from '../components/Home/BlogSection'
import Testimonials from '../components/Home/Testimonials'
import InstagramSection from '../components/Home/InstagramSection'

const Home = () => {
  return (
    <>
      <Banner/>
      <Features />
      <Categories />
      <PopularProducts />
      <SaleOfMonth />
      <Stats />
      <BlogSection />
      <Testimonials />
      <InstagramSection />
    </>
  )
}

export default Home