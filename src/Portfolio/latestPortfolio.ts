// Given no parameters, return the latest portfolio value per token in USD

import { transactionData } from '../helper/transactionData'
import { TransactionCSV } from '../classes/trasactionCSV'
import { portfolioLoop } from '../helper/portfolioLoop'
import { TransactionToken } from '../classes/transactionToken'
import { getPortfolio } from '../helper/getPortfolio'
import 'colors'

let deposit: string[] = [];
let withdrawal: string[] = []
export const listLatestPortfolio = async () => {
  try {
    // load csv file to json
    const transactionResult: Array<TransactionCSV> = await transactionData()
    // reduce data to each token as key and the data
    const transactionResultToken: TransactionToken = transactionResult.reduce((r, a) => {

      r[a.token] = r[a.token] || [];
      r[a.token].push(a);
      return r;
    }, Object.create(null));

    const XRP: any = transactionResultToken['XRP']
    // loop over data and seperate deposit from withdrawal
    const portfolioLoopResultXRP = await portfolioLoop(XRP, deposit, withdrawal)
    const depositXRP = portfolioLoopResultXRP['deposit']
    const withdrawalXRP = portfolioLoopResultXRP['withdrawal']
    const tokenXRP = portfolioLoopResultXRP['token']
    // calculate rate in USD for XRP
    let valueXRP = await getPortfolio(tokenXRP, depositXRP, withdrawalXRP)

    const BTC: any = transactionResultToken['BTC']

    const portfolioLoopResultBTC = await portfolioLoop(BTC, deposit, withdrawal)
    const depositBTC = portfolioLoopResultBTC['deposit']
    const withdrawalBTC = portfolioLoopResultBTC['withdrawal']
    const tokenBTC = portfolioLoopResultBTC['token']
    // calculate rate in USD for BTC
    let valueBTC = await getPortfolio(tokenBTC, depositBTC, withdrawalBTC)


    const ETH: any = transactionResultToken['ETH']

    const portfolioLoopResultETH = await portfolioLoop(ETH, deposit, withdrawal)
    const depositETH = portfolioLoopResultETH['deposit']
    const withdrawalETH = portfolioLoopResultETH['withdrawal']
    const tokenETH = portfolioLoopResultETH['token']
    // calculate rate in USD for ETH
    let valueETH = await getPortfolio(tokenETH, depositETH, withdrawalETH)

    let output = '';

    output = `The latest Portfolio Value Per Token in USD include: 
                XRP(Ripple): ${valueXRP.green}, 
                BTC(Bitcon):${valueBTC.green}, 
                ETH(Ethereum):${valueETH.green}`
    return output
  } catch (err) {
    console.error(err)
  }

}
