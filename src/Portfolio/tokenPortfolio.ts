// Given a token, return the latest portfolio value for that token in USD

import { transactionData } from '../helper/transactionData'
import { TransactionCSV } from '../classes/trasactionCSV'
import { portfolioLoop } from '../helper/portfolioLoop'
import { getPortfolio } from '../helper/getPortfolio'
import 'colors'


let deposit: string[] = [];
let withdrawal: string[] = []
export const TokenLatestPortfolio = async (token: string) => {
  try {
    // load csv file to json
    const transactionResult: Array<TransactionCSV> = await transactionData()

    const transactionResultToken = transactionResult.filter(el => el.token === token);

    if (!transactionResultToken[0]) {
      console.log(`Input Valid Token`.red)
      return
    }
    // loop over data and seperate deposit from withdrawal
    const portfolioLoopResultToken = await portfolioLoop(transactionResultToken, deposit, withdrawal)
    const depositToken = portfolioLoopResultToken['deposit']
    const withdrawalToken = portfolioLoopResultToken['withdrawal']
    // calculate rate in USD for the incoming token
    let valueToken = await getPortfolio(token, depositToken, withdrawalToken)

    let output = '';

    output = `Given a token, the latest portfolio value for ${token.blue} in USD: ${valueToken.green}`
    return output
  } catch (err) {
    console.error(err)
  }
}
