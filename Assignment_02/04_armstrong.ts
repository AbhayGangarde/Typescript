function ChkArmstrong(N : number) : void
{
    let Sum : number = 0;
    let Temp1 : number = 0;
    let Temp2 : number = 0;
    let iCnt : number = 0;
    Temp1 = N;

    while(N > 0)
    {
        Temp2 = N % 10;
        Sum = Sum + (Temp2 * Temp2 * Temp2);
        N = N / 10;
    }
    
    if(Temp1 == Sum)
    {
        console.log("It is armstrong number.")
    }
    else
    {
        console.log("It is not an armstrong number.")
    }
}

var No : number = 153;

ChkArmstrong(No);