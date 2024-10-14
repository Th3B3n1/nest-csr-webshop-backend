export class CreditCard
{
    private number: string;
    private expiryDate: string;
    private cvc: string;
    constructor(number: string, expiryDate: string, cvc: string)
    {
        this.number = number;
        this.expiryDate = expiryDate;
        this.cvc = cvc;
    }
    public get Number(): string
    {
        return this.number;
    }
    public get ExpiryDate(): string
    {
        return this.expiryDate;
    }
    public get CVC(): string
    {
        return this.cvc;
    }
}  