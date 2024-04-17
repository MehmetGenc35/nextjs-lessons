import PageHeader from "@/components/page-header";
import ProductDetails from "@/components/product-details";
import { config } from "@/helpers/config";
import { notFound as NotFound } from "next/navigation"

export const metadata={
  title:"Product Details",
  description:"Product Details Page"
}

const ProductDetailPage = async({params}) => {

  const productId = params.id;//[id] dinamik raouter ismi id olduğu için onun oradan karşılıyoruz

  if(!productId) throw new Error("ProductId missing"); //hata fırlarsa en yakın error.jsx yakalayacak
  
  const res=await fetch(`${config.apiURL}/products/${productId}`);
  if(!res.ok) NotFound();
  const product = await res.json();//data elimiz e gelmiş oldu



  return (
    <>
      <PageHeader title="Product Details"/>
      <ProductDetails product={product}/>
    </>
  )
}

export default ProductDetailPage

//!fetch işlemlerinde ok diye bir method var (res.ok)
//!eğer ürün bulunursa true, bulunmazsa false dönüyür