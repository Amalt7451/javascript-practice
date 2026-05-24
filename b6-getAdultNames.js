let students=[
    {name:"amal",age:21},
    {name:"john",age:15},
    {name:"arya",age:19}
];
console.log(getAdultNames(students));
function getAdultNames(students){
    let adultNames = [];
    for(let i=0;i<students.length;i++){
        if(students[i].age>= 18)adultNames.push(students[i].name);
    }
    return adultNames;
}