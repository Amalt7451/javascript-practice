function sumNumbers(range){
    let sum=0;
    for(let i=1;i<=range;i++){
        sum+=i
    }
    return sum;
}


let result=sumNumbers(5);
console.log(result)