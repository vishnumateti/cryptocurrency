// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurencyData()
  }

  getCryptocurencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachdata => ({
      currencyLogo: eachdata.currency_logo,
      currencyName: eachdata.currency_name,
      euroValue: eachdata.euro_value,
      id: eachdata.id,
      usdValue: eachdata.usd_value,
    }))
    this.setState({cryptoCurrencyData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state

    return (
      <div className="card-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            {!isLoading && (
              <img
                className="image"
                alt="cryptocurrency"
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              />
            )}
          </div>
        )}
        <ul className="main-section">
          <li className="list-container">
            <p className="coin-type-heading">Coin Type</p>
            <div className="currency-section">
              <p className="currency-heading">USD</p>
              <p className="currency-heading">EURO</p>
            </div>
          </li>
          {cryptoCurrencyData.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} dataDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
