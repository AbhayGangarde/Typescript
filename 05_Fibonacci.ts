function Fibonacci (No : number) : void
{
    let a : number = 1;
    let b : number = 1;
    let c : number = 0;

    while(c <= No)
    {
        a = b;
        b = c;
        c = a + b;

        if(c <= No)
        {
            console.log(c);
        }
    }
}

var No : number = 21;

Fibonacci(No);