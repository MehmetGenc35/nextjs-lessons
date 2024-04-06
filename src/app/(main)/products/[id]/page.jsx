import PageHeader from "@/components/page-header";
import { notFound as NotFound } from "next/navigation"


const ProductDetail = ({params, searchParams}) => {

  
  if(params.id>100) NotFound();

  return (
    <div>
      <PageHeader title="Product Details"/>
    </div>
  )
}

export default ProductDetail