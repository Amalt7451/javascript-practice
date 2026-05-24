function countEven(nums){
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0)count++;
    }
    return count;
}
let nums=[2,5,8,7,10];
console.log(countEven(nums));


