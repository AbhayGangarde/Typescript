function Factor(No1 : number) : void
{
    let iCnt : number = 0;

    for(iCnt = 1; iCnt < No; iCnt ++)
    {
        if(No % iCnt == 0)
        {
            console.log(iCnt);
        }
    }
}

var No : number = 20;

Factor(No);
