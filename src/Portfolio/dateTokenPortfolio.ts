// Given a date and a token, return the portfolio value of that token in USD on that date

import { transactionData } from '../helper/transactionData'
import { TransactionCSV } from '../classes/trasactionCSV'
import { portfolioLoop } from '../helper/portfolioLoop'
import { getPortfolio } from '../helper/getPortfolio'
import 'colors'

let deposit: string[] = [];
let withdrawal: string[] = []
export const dateTokenPortfolio = async (date: string, token: string) => {
  try {
    // change date to timestamp
    const timestamp = Date.parse(date).toString().substr(-8)
    
    // load csv file to json
    const transactionResult: Array<TransactionCSV> = await transactionData()
    const transactionResultTokenDate = transactionResult.filter(el => el.timestamp <= timestamp && el.token === token);

    if (!transactionResultTokenDate[0]) {
      console.log(`Input Valid Token or Date`.red)
      return
    }
    // loop over data and seperate deposit from withdrawal
    const portfolioLoopResultToken = await portfolioLoop(transactionResultTokenDate, deposit, withdrawal)
    const depositToken = portfolioLoopResultToken['deposit']
    const withdrawalToken = portfolioLoopResultToken['withdrawal']
    // calculate rate in USD for the incoming token on that date
    let valueToken = await getPortfolio(token, depositToken, withdrawalToken)

    let output = '';

    output = `Given a token, the latest portfolio value for that ${token.blue} in USD: ${valueToken.green}`

    return output
  } catch (err) {
    console.log(err)
  }
}
