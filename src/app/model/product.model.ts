export class Product{
 category:string;
 price:string;
 stock!:boolean;
 name:string;
constructor(){
    
    this.category="Unknown";
    this.price="Unknown";
    this.name="Unknown";
}
}