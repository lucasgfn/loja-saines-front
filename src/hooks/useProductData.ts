import axios from "axios";
import { IProductData } from "../interface/IProductData";
import { useQuery, useMutation, UseMutationResult } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

// Função para buscar dados
const fetchData = async (): Promise<IProductData[]> => {
    const response = await axios.get(API_URL + '/produtos');
    return response.data;
}

// Função para enviar dados
const sendData = async (productData: IProductData): Promise<IProductData> => {
    const response = await axios.post(API_URL + '/produtos', productData);
    return response.data;
}

// Hook GET
export function useProductData() {
    return useQuery({
        queryKey: ['product-data'],
        queryFn: fetchData,
        retry: 2
    });
}

// Hook POST
export function useSendData(): UseMutationResult<IProductData, Error, IProductData> {
    return useMutation({
        mutationFn: sendData,
        onSuccess: (data: IProductData) => {
            console.log('Produto cadastrado com sucesso:', data);
        },
        onError: (error: any) => {
            console.error('Erro ao cadastrar produto:', error);
        }
    });
}