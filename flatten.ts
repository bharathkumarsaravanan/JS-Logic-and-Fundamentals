// Flatten Nested Arrays
// Input: [1, [2, [3, 4]], 5] → Output: [1, 2, 3, 4, 5]

// Focus: Recursion or iterative approach

type nestedAr = (number | nestedAr)[];

const input: nestedAr = [1, [2, [3, 4]], 5];
const output:number[] =  flatten(input);

function flatten(arr:nestedAr):number[] {
    let flattenAr:number[] = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (Array.isArray(current)) {
            flattenAr = flattenAr?.concat(flatten(current))
        } else {
            flattenAr.push(current);
        }
    }

    return flattenAr;
}

