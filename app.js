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

const newObjects = transformToObjects(data2D);

// p4
// Example array of objects from Part 3
const dataObjects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
];

// Function to change data
function changedData(objectsArray) {
  // Remove the last object from the array
  objectsArray.pop();

  // Add a new object at index 1
  objectsArray.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25",
  });

  // Add a new object to the end of the array
  objectsArray.push({
    id: "7",
    name: "Bilbo",
    occupation: "None",
    age: "111",
  });

  // finding the average age
  let totalAge = 0; //
  for (let i = 0; i < objectsArray.length; i++) {
    totalAge += Number(objectsArray[i].age); // change age to number and add to total
  }
  const averageAge = totalAge / objectsArray.length; // Calculate average

  console.log("new", objectsArray);
  console.log("Average Age:", averageAge.toFixed(2)); // Show average age with 2 decimal places
}

// Calling the function with the dataObjects array
changedData(dataObjects);
