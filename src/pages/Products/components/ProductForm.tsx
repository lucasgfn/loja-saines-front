
import { useState } from "react";
import { IProductData } from "../../../interface/IProductData";
import { useSendData } from "../../../hooks/useProductData";


export const ProductForm: React.FC = () => {
    const { mutate: sendData, isPending, error } = useSendData();
    const [product, setProduct] = useState<IProductData>({
        nome: '',
        marca: '',
        tipo: '',
        image: '',
        price: 0,
    });

   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendData(product);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input name="nome" value={product.nome} onChange={handleChange} placeholder="Nome" required />
        <input name="marca" value={product.marca} onChange={handleChange} placeholder="Marca" required />
        <input name="tipo" value={product.tipo} onChange={handleChange} placeholder="Tipo" required />
        <input name="image" value={product.image} onChange={handleChange} placeholder="URL da Imagem" required />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Preço" required />
        <button type="submit" disabled={isPending}>Cadastrar Produto</button>
        {error && <p>Erro ao cadastrar produto: {error.message}</p>}
    </form>
    );

};