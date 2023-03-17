function AreaOfCircle(Pi : number, Rad : number) : number
{
    let Area : number = 0;

    Area = Pi * (Rad * Rad);
    
    return Area;
}

var Rad : number = 5;
var Pi : number = 3.14;

var Ret : number = 0;

Ret = AreaOfCircle(Pi, Rad);

console.log("Area of Circle is : "+ Ret);