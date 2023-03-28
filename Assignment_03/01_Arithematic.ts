class Arithematic
{
    No1 : number;
    No2 : number;

    constructor(i : number = 10, j : number = 5)
    {
        this.No1 = i;
        this.No2 = j;
    }

    Addition() : number
    {
        let Ans : number = 0;
        Ans = this.No1 + this.No2
        
        return Ans;
    }

    Substraction() : number
    {
        let Ans : number = 0;
        Ans = this.No1 - this.No2

        return Ans;
    }

    Multiplication() : number
    {
        let Ans : number = 0;
        Ans = this.No1 * this.No2

        return Ans;
    }

    Division() : number
    {
        let Ans : number = 0;
        Ans = this.No1 / this.No2

        return Ans;
    }
};

var Obj1 = new Arithematic(15, 10);
var Obj2 = new Arithematic(50, 25);
var Ret : number = 0;

Ret = Obj1.Addition();
console.log("Addition is : "+ Ret + ".");

Ret = Obj1.Substraction();
console.log("Substraction is : "+ Ret + ".");

Ret = Obj1.Multiplication();
console.log("Multiplication is : "+ Ret + ".");

Ret = Obj1.Division();
console.log("Division is : "+ Ret + ".");

Ret = Obj2.Addition();
console.log("Addition is : "+ Ret + ".");

Ret = Obj2.Substraction();
console.log("Substraction is : "+ Ret + ".");

Ret = Obj2.Multiplication();
console.log("Multiplication is : "+ Ret + ".");

Ret = Obj2.Division();
console.log("Division is : "+ Ret + ".");