import React from 'react'
import Breadcrumb from '../utils/BreadCrumb'
import DiscountBanner from '../components/shop/DiscountBanner'
import ShopProducts from '../components/shop/ShopProducts'

const Shop = () => {
  return (
    <>
      <Breadcrumb />
      <DiscountBanner />
      <ShopProducts />
    </>
  )
}

export default Shop