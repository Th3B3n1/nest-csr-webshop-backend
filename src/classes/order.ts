import { Address } from "./address"
import { CreditCard } from "./creditcard"

export class Order
{
    private name: string;
    private cuponcode?: string;
    private address: Address;
    private creditcard: CreditCard;
    private productId: number;
    constructor(name: string, address: Address, creditcard: CreditCard, productId: number, cuponcode?: string)
    {
        this.name = name;
        this.address = address;
        this.creditcard = creditcard;
        this.productId = productId;
        this.cuponcode = cuponcode;
    }

    public get Name(): string
    {
        return this.name;
    }
    public get Address(): Address
    {
        return this.address;
    }
    public get CreditCard(): CreditCard
    {
        return this.creditcard;
    }
    public get ProductId(): number
    {
        return this.productId;
    }
    public get CuponCode(): string
    {
        return this.cuponcode;
    }
}