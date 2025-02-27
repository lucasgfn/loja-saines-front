import axios from "axios";
import { ProductData } from "../interface/ProductData";
import { useQuery } from "@tanstack/react-query";


const API_URL = "http://localhost:8080";

const fetchData = async () : Promise<ProductData[]> => {
    const response = axios.get(API_URL+ '/produtos');
    return (await response).data;
}


export function useProductData(){
    return useQuery({
        queryKey: ['product-data'],
        queryFn: fetchData,
        retry: 2
    });
}