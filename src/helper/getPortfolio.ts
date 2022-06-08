import axios from 'axios'

export const getPortfolio = async (token: string, depositArray: string[], withdrawalArray: string[]): Promise<any> => {
  let deposit = depositArray.reduce((previousValue: string, currentValue: string): any => {
    return parseFloat(previousValue) + parseFloat(currentValue);
  });
  let withdrawal = withdrawalArray.reduce((previousValue: string, currentValue: string): any => {
    return parseFloat(previousValue) + parseFloat(currentValue);
  });

  const value = parseFloat(deposit) - parseFloat(withdrawal)

  const portfolioData = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${token}&tsyms=USD`)
  const portfolioValue = portfolioData.data.USD
  const cryptoratesValue = value * portfolioValue
  const cryptoratesValueUSD = cryptoratesValue.toFixed(6)
  return cryptoratesValueUSD
}

