export class Product
{
    private id: number;
    private name: string;
    private description: string;
    private price: number;
    constructor(id: number, name: string, description: string, price: number)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    public get Id(): number
    {
        return this.id;
    }
    public get Name(): string
    {
        return this.name;
    }
    public get Description(): string
    {
        return this.description;
    }
    public get Price(): number
    {
        return this.price;
    }
}