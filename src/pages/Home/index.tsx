
import './index.css'
import { Card } from '../../components/Card/card';
import { Carroussel } from '../../components/Carroussel/carroussel';
import { Header } from '../../components/Header/header'
import { Info } from '../../components/Info/info';
import { useProductData } from '../../hooks/useProductData'
import { ProductForm } from '../Products/components/ProductForm';
import { IProductData } from '../../interface/IProductData';

function Home() {
  const {data} = useProductData();

  const scrollToSection = (section:string) => {
    const element  = document.getElementById(section);
    if(element){
        element.scrollIntoView({ behavior:'smooth'})
    }
  }

  const handleProductSubmit = (productData: IProductData) => {
    // Aqui você pode adicionar a lógica para lidar com o produto enviado
    console.log('Produto adicionado:', productData);
    // Você pode também atualizar o estado ou fazer uma chamada para a API para salvar o produto
  };


  return (
    <>
       <Header scrollToSection={scrollToSection}/>
        <div className="container">
            <Carroussel />
          <div className="card-grid" id='card-grid'> 
              {data?.map(productData =>
                  <Card
                  key={productData.id}
                  title={productData.nome}
                  price={productData.price}
                  image = {productData.image}
                  />
              )}

          </div>
          <div className="info" id='info-grid'>
              <Info />
          </div>
         
          <ProductForm />
     </div>
    </>
  )
}

export default Home
