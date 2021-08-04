function getSecondLargest(nums) {
    let sorted = nums.sort((a,b)=>b-a)
    sorted.forEach(function(i) {
        sorted[0] == sorted [1] ? sorted.shift() : null
    });
        return (sorted[1])
    }
    


console.log(getSecondLargest(nums = [2,3,-5, 1, 4,4,4,3,3,3,50,5,5,50,50,50,51,51,51,52,52]))
