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

var Obj1 = new Circle(10.7);
var Obj2 = new Circle(28);

var Ret : number = 0;

Ret = Obj1.Area();
console.log("Area of circle is : "+ Ret + ".");

Ret = Obj2.Area();
console.log("Area of circle is : "+ Ret + ".");
