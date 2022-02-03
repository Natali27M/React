export interface IUser{
    name: string;
    age: number;
    gender: string;
}

function sum(a:number,b:number):number{
    return a + b;
}
function showSum(a:number,b:number){
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):object{
    someUser.age += inc;
    return someUser;
}




