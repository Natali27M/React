import {IUser,sum,showSum,incAge} from "./interfaces/function.interface";

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
};

console.log(sum(1, 2));

showSum(2, 3);

incAge(user, 2);

