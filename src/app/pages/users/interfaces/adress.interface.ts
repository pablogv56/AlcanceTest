import { Geo } from "./geo.interfase";

export interface Adress
{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo: Geo;
}