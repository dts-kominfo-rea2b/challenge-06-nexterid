const fs = require("fs");

fs.readFile(
  "./dummy3.json",
  //   {
  //     encoding: "utf-8",
  //   },
  (err, dataYangDibaca) => {
    if (err) {
      return console.log("ada terjadi error:" + err);
    }
    console.log(dataYangDibaca);

    const bacaDataObject = JSON.parse(dataYangDibaca);
    console.log(bacaDataObject[0].data.message);
  }
);
