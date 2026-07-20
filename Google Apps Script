function doGet(e) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  const values = sheet.getDataRange().getValues();

  const keyword = (e.parameter.keyword || "").toLowerCase();

  let result = [];

  for (let i = 1; i < values.length; i++) {

    if (values[i].join(" ").toLowerCase().includes(keyword)) {

      result.push({

        ma: values[i][0],

        ten: values[i][1],

        sdt: values[i][2],

        diachi: values[i][3]

      });

    }

  }

  return ContentService

      .createTextOutput(JSON.stringify(result))

      .setMimeType(ContentService.MimeType.JSON);

}
