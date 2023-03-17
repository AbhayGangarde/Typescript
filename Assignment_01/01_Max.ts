function Max (No1 : number, No2 : number, No3 : number) : number
{
    if(No1 > No2 && No1 > No3)
    {
        return No1;
    }
    else if(No2 > No1 && No2 > No3)
    {
        return No2;
    }
    else
    {
        return No3;
    }
}


var No1 : number = 23;
var No2 : number = 89;
var No3 : number = 6;

var Ret : number = 0;

Ret = Max(No1, No2, No3);

console.log("maximum number is  "+Ret);