let arr1 = [1,2,3,4];
let arr2 = [2,4,6];

console.log(countMatches(arr1, arr2));
function countMatches(arr1,arr2){
    let count=0;
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j])count++;
        }
    }
    return count;
}