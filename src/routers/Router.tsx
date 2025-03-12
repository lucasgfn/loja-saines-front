import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/Products/AddProduct";
import App from "../App";

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
                path: "/erro",
                element: <Erro/>,
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





