import { Address } from "./address";
import { Company } from "./company";

export class User {

    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public phone: string;
    public website: string;
    public company: Company;
    public address: Address;

}
