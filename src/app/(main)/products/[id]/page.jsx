import { notFound as NotFound } from "next/navigation"


const ProductDetail = ({params, searchParams}) => {

  if(params.id>100) NotFound();

  return (
    <div>{params.id}</div>
  )
}

export default ProductDetail