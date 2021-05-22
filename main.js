const XLSX = require("xlsx");
const workbook = XLSX.readFile("file.xlsx");
const sheet_name_list = workbook.SheetNames;
// get a list sheetnames
// console.log(sheet_name_list);

sheet_name_list.forEach(function (y) {
  let worksheet = workbook.Sheets[y];
  // get detail sheet
  // console.log(worksheet);

  let headers = {};
  let data = [];
  for (cell in worksheet) {
    if (cell[0] === "!") continue;
    // get cell
    // console.log(cell);

    // parse col, row and value
    let col = cell.substring(0, 1);
    let row = parseInt(cell.substring(1));
    let value = worksheet[cell].v;

    // store header name
    if (row == 1) {
      headers[col] = value;
      continue;
    }

    if (!data[row]) data[row] = {};
    data[row][headers[col]] = value;
  }

  data.shift();
  data.shift();
  console.log(data);
});
