const csv = require("csvtojson");

const csvFilePath = "./transaction.csv";


export const transactionData = async (): Promise<[]> => {
  if (!csvFilePath) {
    throw new Error;
  }
  const jsonObj = await csv().fromFile(csvFilePath)
  return jsonObj
};

