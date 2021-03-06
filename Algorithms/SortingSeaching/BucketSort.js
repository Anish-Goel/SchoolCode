"use strict";

let bucketSort = (nums, numBuckets = 4) => {

    let buckets = [];
    while (buckets.push([]) < numBuckets);

    let mx = Math.max(...nums) + 1

    for (let n of nums) {

        let index = Math.floor(n / mx * numBuckets);

        buckets[index].push(n);

    }

    let arrayIndex = 0;

    for (let bucket of buckets) {

        bucket.sort((a, b) => a - b);

        for (let n of bucket) {

            nums[arrayIndex++] = n;

        }

    }

}

let nums = [12, 32, 43, 11, 58, 60, 68, 90, 80, 99, 22];

console.log(nums);

bucketSort(nums);

console.log(nums);
