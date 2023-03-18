function MaxinArray(Arr : number[]) : number
{
    var Max : number = 0;
    var iCnt : number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] >= Max)
        {
            Max = Arr[iCnt];
        }
    }
    return Max;
}

var Arr : number [] = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret : number = 0;

Ret = MaxinArray(Arr);

console.log("The maximum number is : "+ Ret);