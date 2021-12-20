const array = [1,2,3,4,5,6,7,8,9,10,11];

console.log("output the array into rows with 3 elements in each column");

const createRows = (arr, columnSize) => {
    let rows = {};
    let counter = 1;

    arr.forEach((item, index) => {
        rows[counter] = rows[counter] ? [...rows[counter]] : [];
        if (index%columnSize === 0 && index !== 0) {
            counter++;
            // rows[counter] = rows[counter] ? [...rows[counter]] : [];
            rows[counter] = [];
            rows[counter].push(item);
        } else {
            rows[counter].push(item);
        }
    });

    return Object.values(rows).map(row => {
        console.log(row);
    });
}

export {createRows, array};