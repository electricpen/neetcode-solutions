// Leetcode problem #27
// https://leetcode.com/problems/remove-element/

const removeElement = (nums, val) => {
    // Your code here
    const getLastReplaceable = lastReplaceable => {
        while(nums[lastReplaceable] === val) {
            lastReplaceable--
        }
        return lastReplaceable
    }

    let lastReplaceable = getLastReplaceable(nums.length - 1)
    let currentIndex = 0

    while(currentIndex <= lastReplaceable && currentIndex < nums.length) {
        const currentVal = nums[currentIndex]
        const lastElement = nums[lastReplaceable]
        if(currentVal === val) {
            nums[currentIndex] = lastElement
            nums[lastReplaceable] = currentVal
            lastReplaceable = getLastReplaceable(lastReplaceable)
        }

        currentIndex++
    }

    // Technically you do not need to remove the elements off the end of the array for the leetcode solution 
    // because it is language agnostic and some languages you cannot alter the length of their arrays
    // I added this to the JS solution since it makes a neater return and it is still O(n) time ( O(2n) technically)
    const removedCount = nums.length - 1 - lastReplaceable

    for(i = 0; i < removedCount; i++) {
        nums.pop()
    }

    return nums;
}

module.exports = {
    removeElement: removeElement
}