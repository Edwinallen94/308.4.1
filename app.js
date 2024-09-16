// Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

function parseCSV(csvData) {
  const rows = csvData.split("\n");

  const columnCount = rows[0].split(",").length;

  const result = rows.map((row) => row.split(","));

  console.log("Column Count:", columnCount);
  console.log("Parsed Data:", result);

  return result;
}

const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const parsedData = parseCSV(csvData);
