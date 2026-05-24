function isAdult(student){
    if(student.age>=18)return true;
    else return false;
}
let student={
    name:"amal",
    age:21
};
console.log(isAdult(student))
