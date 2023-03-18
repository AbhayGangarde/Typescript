function Addition(Arr : number[]) : number
{
    var Add : number = 0;
    var iCnt : number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        Add += Arr[iCnt]; 
    }
    return Add;
}

var Arr : number [] = [23, 6, 7, 4, 5, 7];
var Ret : number = 0;

Ret = Addition(Arr);

console.log("Addition is "+ Ret);