const DEFAULT_COLUMN_WIDTH = 20;

// 根据 antd 的 column 生成 exceljs 的 column
function generateHeaders(columns: any[]) {
  return columns?.map((col) => {
    const obj = {
      // 显示的 name
      header: col.title,
      // 用于数据匹配的 key
      key: col.field,
      // 列宽
      width: col.width / 5 || DEFAULT_COLUMN_WIDTH,
    };
    return obj;
  });
}

function exportAll() {
  exportLoading.value = true;
  try {
    const name = '表.xlsx';
    const headersColums = generateHeaders([]); //导出表头
    const treeToListData = []; // 导出行
    var worker = new Worker('./worker.ts');

    console.log(new Date().getTime());
    // 向worker发送消息
    worker.postMessage({ treeToListData, headersColums });
    // 接收worker的消息
    worker.onmessage = function (event) {
      // 下载文件
      downloadByData(event.data, name);
      // 关闭worker
      worker.terminate();
      console.log(new Date().getTime());
    };
  } catch (e) {
    console.log(e);
  }
}
