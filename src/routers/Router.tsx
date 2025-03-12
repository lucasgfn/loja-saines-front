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
                path: "*", // Captura todas as rotas não definidas
                element: <Erro />, // Redireciona para a página de erro
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





