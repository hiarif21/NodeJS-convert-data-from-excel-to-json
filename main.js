const XLSX = require("xlsx");
const workbook = XLSX.readFile("file.xlsx");
const sheet_name_list = workbook.SheetNames;
// get a list sheetnames
// console.log(sheet_name_list);

sheet_name_list.forEach(function (item) {
  let worksheet = workbook.Sheets[item];
  // get detail sheet
  // console.log(worksheet);

  let data = XLSX.utils.sheet_to_json(worksheet);
  console.log(data);
});
