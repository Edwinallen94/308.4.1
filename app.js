// Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

function parseCSV(csvData) {
  const rows = csvData.split("\n"); //using .split notation to split into rows

  const columnCount = rows[0].split(",").length; // Ge0t the number of columns from the first row

  const result = rows.map((row) => row.split(",")); // made a 2D array by splitting each row into columns

  console.log("Column Count:", columnCount); //console.logginf each result
  console.log("Parsed Data:", result);

  return result;
}

// setting string and parsing it with the function
const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const parsedData = parseCSV(csvData);

// p3
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

function transformToObjects(data2D) {
  const columns = data2D[0]; //
  const lowerCaseColumns = columns.map((column) => column.toLowerCase()); // changed headers to lowercase

  const objects = [];
  for (let i = 1; i < data2D.length; i++) {
    const row = data2D[i];
    const obj = {};
    for (let j = 0; j < row.length; j++) {
      obj[lowerCaseColumns[j]] = row[j];
    }
    objects.push(obj); // Added object to result array
  }

  console.log("Transformed Data:", objects);
  return objects;
}
//made my array
const data2D = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

const dataObjects = transformToObjects(data2D);
