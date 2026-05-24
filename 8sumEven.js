function sumEven(nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0)sum+=nums[i];
    }
    return sum;
}
let nums=[2,5,8,7,10];
console.log("sum of even numbers",sumEven(nums))