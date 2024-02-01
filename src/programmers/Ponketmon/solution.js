module.exports = {
    solution : function (nums) {
        let numsSet =  new Set(nums);
        return Math.min(Math.floor(nums.length/2), numsSet.size);
    }
}