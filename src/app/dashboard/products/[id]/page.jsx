//burası dinamik routing kısmı
//endpointdeki "/new " dışındaki olmauan sayfaları bursaı yakalayacak

const EditProductsPage = ({ params }) => {
  return (
    <div>{params}</div>
  )
}

export default EditProductsPage