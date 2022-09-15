importScripts('./exceljs.js');

self.addEventListener(
  'message',
  function (e) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('报表测试');

    const data = e.data;
    worksheet.columns = data.headersColums;
    worksheet.addRows(data.treeToListData);
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: '' });
      self.postMessage(blob);
    });
  },
  false
);
