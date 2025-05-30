/*
Given the list of numbers, sort it in the ascending order
such that if duplicates exist, each instance is counted only once.
Remaining instances are to be arranged right after it again,
in the ascending following the same rule.
e.g.
Input : 5, 3, 2, 8, 4, 5, 2, 1, 9, 5, 3
Output : 1, 2, 3, 4, 5, 8, 9, 2, 3, 5, 5
*/

function customSort(arr) {
    let unique = [];
    let duplicates = [];

    let countMap = {};

    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    for (let key in countMap) {
        unique.push(Number(key));
        for (let i = 1; i < countMap[key]; i++) {
            duplicates.push(Number(key));
        }
    }

    unique.sort((a, b) => a - b);
    duplicates.sort((a, b) => a - b);

    return [...unique, ...duplicates];
}


const input1 = [5, 3, 2, 8, 4, 5, 2, 1, 9, 5, 3];
console.log(customSort(input1));
