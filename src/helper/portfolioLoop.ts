import { TransactionCSV } from '../classes/trasactionCSV'
import { Portfolio } from '../Interfaces/Portfolio';

let i: number;

export const portfolioLoop = async (arr: Array<TransactionCSV>, deposit: Array<string>, withdrawal: Array<string>): Promise<Portfolio> => {
  let token = arr[0].token
  for (i = 0; i < arr.length; i++) {
    if (arr[i].transaction_type === 'DEPOSIT') {
      deposit.push(arr[i].amount)
    } else {
      withdrawal.push(arr[i].amount)
    }
  }
  return { token, deposit, withdrawal }
}