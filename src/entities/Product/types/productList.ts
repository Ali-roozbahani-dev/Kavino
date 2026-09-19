import { ApiPaginatedResponse } from "@/shared/types/ApiPaginatedResponse";
import { ProductListItem } from "./ProductListItem";


export interface BrandOption {
    brand__name : string;
    brand__slug: string;
    count: number;
}

export interface CategoryOption {
    category__name : string;
    category__slug: string;
    count: number;
}

export interface Facets {
    categories: CategoryOption[];
    brands: BrandOption[];
    price: {
        min: number;
        max: number;
    }    
}


export interface TproductList extends ApiPaginatedResponse{
    results: ProductListItem[];
    facets: Facets; 
}