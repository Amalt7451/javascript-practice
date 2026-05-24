let students=[
    {name:"amal",age:21},
    {name:"john",age:15},
    {name:"arya",age:19}
];
console.log(countAdult(students));
function countAdult(students){
    let count = 0;
    for(let i=0;i<students.length;i++){
        if(students[i].age>= 18)count++;
    }
    return count;
}
