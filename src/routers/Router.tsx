import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/Products/AddProduct";
import App from "../App";
import ProductList from "../pages/Products/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
            {
                path: "cadastro-produto",
                element: <AddProduct/>,
            },
            {
                path: "/listar-produtos",
                element: <ProductList/>,
            },
            {
                path: "*", 
                element: <Erro />, 
            }

        ]
    
);

export default router;

function Erro(){
    return (
        <div>
            <h1>ERRO OU PAGINA NAO EXISTE</h1>
        </div>
    )
}





