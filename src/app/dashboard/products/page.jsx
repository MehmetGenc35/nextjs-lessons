import DashboardProductHeader from "@/components/dashboard-product-header";
import DashboardProducts from "@/components/dashboard-products"
import { config } from "@/helpers/config";


//!export const revalidate = 120;  sn olarak tüm fetch işlemlerinde 120 sn başladı
//!export const dynamic="force-dynamic"; bu segmentteki fatchler cache lenmesin


const ProductsPage = async() => {

  const res= await fetch(`${config.apiURL}/products`);
  const products = await res.json();

  return (
    <div>
      <DashboardProductHeader/>
      <DashboardProducts products={products}/>
    </div>
  )
}

export default ProductsPage