// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {dataDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = dataDetails

  return (
    <li className="list-container1">
      <div className="logo-container">
        <img className="logo" alt={currencyName} src={currencyLogo} />
        <p className="text-color">{currencyName}</p>
      </div>
      <div className="currency-section1 ">
        <p className="text-color">{euroValue}</p>
        <p className="text-color">{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
