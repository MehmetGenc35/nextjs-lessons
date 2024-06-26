import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import { config } from "@/helpers/config";
import ProductDetails from "@/components/product-details";
import Spacer from "@/components/spacer";
import ProductsInSameCategory from "@/components/products-in-same-category";

//ilk olarak params ile gelen idyi alıyoruz
//id ile backende bağlanıp ürün bilgilerini alıyoruz
//description ve title bilgilerini destruction yaparak alıyoruz
//dinamik metadata ya bilgileri yerleştiriyoruz

export const generateMetadata = async ({ params }) => {
    const productId = params.id;
    const res = await fetch(`${config.apiURL}/products/${productId}`);
    const product = await res.json();
    const { title, description } = product;
    return {
        title,
        description,
    };
};

const ProductDetailPage = async({params}) => {

  const productId = params.id;//[id] dinamik raouter ismi id olduğu için onun oradan karşılıyoruz

    const fetchProduct = (await fetch(`${config.apiURL}/products/${productId}`)).json();
    const fetchProducts = (await fetch(`${config.apiURL}/products`)).json();
    const [product, products] = await Promise.all([fetchProduct, fetchProducts,]);
    if (!product) notFound();

   



  return (
    <>
      <PageHeader title="Product Details"/>
      <Spacer/>
      <ProductDetails product={product}/>
      <Spacer/>
      <ProductsInSameCategory products={products}/>
      <Spacer/>
    </>
  )
}

export default ProductDetailPage

//!fetch işlemlerinde ok diye bir method var (res.ok)
//!eğer ürün bulunursa true, bulunmazsa false dönüyür