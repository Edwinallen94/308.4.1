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
