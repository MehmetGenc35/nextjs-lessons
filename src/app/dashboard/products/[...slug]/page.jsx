//products/tes1/tes2/tes3
//products/ dan sonraki tüm değişkenleri yakalaması için [...slug] kullanılıyor
//bunların çıktısı da alttaki gibi oluyor
//{slug:['tes1','tes2','tes3']}

const ProductDetails = ({params}) => {
  return (
    <div>ProductDetails {params.slug}</div>
  )
}

export default ProductDetails