
import './App.css'
import { Card } from './components/Card/card';
import { Header } from './components/Header/header'
import { Info } from './components/Info/info';
import { useProductData } from './hooks/useProductData';

function App() {
  const {data} = useProductData();

  const scrollToSection = (section:string) => {
    const element  = document.getElementById(section);
    if(element){
        element.scrollIntoView({ behavior:'smooth'})
    }
}

 

  return (
    <>
       <Header scrollToSection={scrollToSection}/>
        <div className="container">
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
         
    
     </div>
    </>
  )
}

export default App
