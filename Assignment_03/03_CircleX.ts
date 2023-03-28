class Circle
{
    Radius : number;
    Pi : number;

    constructor(R : number)
    {
        this.Radius = R;
        this.Pi = 3.14;
    }
    
    Area() : number
    {
        let Ans : number = 0;
        Ans = this.Pi * this.Radius * this.Radius;
        
        return Ans;
    }
};

class CircleX extends Circle
{
    constructor(R : number)
    {
        super(R);
    }

    Circumference() : number
    {
        let Ans : number = 0;
        Ans = 2 * this.Pi * this.Radius;

        return Ans;
    }
};

var Obj1 = new CircleX(10.7);
var Obj2 = new CircleX(28);

var Ret : number = 0;

Ret = Obj1.Area();
console.log("Area of circle is : "+ Ret + ".");
Ret = Obj1.Circumference();
console.log("Circumference of circle is : "+ Ret + ".");

Ret = Obj2.Area();
console.log("Area of circle is : "+ Ret + ".");
Ret = Obj2.Circumference();
console.log("Circumference of circle is : "+ Ret + ".");
