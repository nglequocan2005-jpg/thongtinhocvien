function formatDate(d) {
  if (!d || d === "-") return "-";
  if (!(d instanceof Date)) return d;

  return Utilities.formatDate(
    d,
    "Asia/Ho_Chi_Minh",
    "dd/MM/yyyy"
  );
}

function doGet(e) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const values = sheet.getDataRange().getValues();

  const keyword = (e.parameter.keyword || "").toLowerCase();

  let result = [];

  for (let i = 1; i < values.length; i++) {

    if (values[i].join(" ").toLowerCase().includes(keyword)) {

      result.push({

        stt: values[i][0],
        ten: values[i][1],
        ma: values[i][2],
        ngaysinh: formatDate(values[i][3]),
        quequan: values[i][4],
        truquan: values[i][5],
        ngayvaodoan: formatDate(values[i][6]),
        ngayvaodang: formatDate(values[i][7]),
        dantoc: values[i][8],
        tongiao: values[i][9],
        cccd: values[i][10],
        sdt: values[i][11],
        tbm: values[i][12],
        xeploai: values[i][13]

      });

    }

  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);

}
