import DashboardProductHeader from "@/components/dashboard-product-header";
import DashboardProducts from "@/components/dashboard-products"
import { config } from "@/helpers/config";


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