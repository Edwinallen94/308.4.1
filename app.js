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
