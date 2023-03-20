function SecondLargest (Arr : number[]) : number
{
    let Sec : number = 0;
    let Max : number = 0;
    let iCnt : number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] >= Max)
        {
            Max = Arr[iCnt];
        }
        if(Arr[iCnt] != Max && Arr[iCnt] >= Sec)
        {
            Sec = Arr[iCnt];
        }
    }
    return Sec;
}

var Arr : number [] = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret : number = 0;

Ret = SecondLargest(Arr);

console.log("Second maximum number is : " + Ret + "."); 