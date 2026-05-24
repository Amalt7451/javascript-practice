nums=[3,7,2,10,5];
console.log(findLargest(nums));
function findLargest(nums){
    let largestNum=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largestNum)largestNum=nums[i];

    }
    return largestNum;
}