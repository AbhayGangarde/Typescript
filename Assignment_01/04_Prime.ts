function Primeno(No1 : number) : void
{
    let iCnt : number = 0;
    let Flag : number = 0;

    for(iCnt = (No1 - 1); iCnt > 1 ; iCnt --)
    {
        if(No % iCnt == 0)
        {
            Flag = 1;
        }
    }

    if(Flag == 0)
    {
        console.log("It is a prime number.");
    }
    else
    {
        console.log("It is not a prime number.");
    }
}

var No : number = 18;

Primeno(No);