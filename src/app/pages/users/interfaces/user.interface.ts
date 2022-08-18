import { Adress } from "./adress.interface";
import { Company } from "./company.interface";

export interface User
{
    id:number;
    name: string;
    username:string;
    email:string;
    address: Adress;
    phone: string;
    website: string;
    company:Company;
}