function getEvenNumbers(nums){
    let evenNumbers=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0)evenNumbers.push(nums[i]);
    }
    return evenNumbers;
}
let nums = [2,5,8,7,10];
console.log(getEvenNumbers(nums));

