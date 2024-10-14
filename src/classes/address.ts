export class Address 
{
    private country: string;
    private zipcode: string;
    private city: string;
    private street: string;
    private building_number: string;
    constructor(country: string, zipcode: string, city: string, street: string, buildingnumber: string)
    {
        this.country = country;
        this.zipcode = zipcode;
        this.city = city;
        this.street = street;
        this.building_number = buildingnumber;
    }
    public get Country(): string
    {
        return this.country;
    }
    public get ZipCode(): string
    {
        return this.zipcode;
    }
    public get City(): string
    {
        return this.city;
    }
    public get Street(): string
    {
        return this.street;
    }
    public get BuildingNumber(): string
    {
        return this.building_number;
    }
}  