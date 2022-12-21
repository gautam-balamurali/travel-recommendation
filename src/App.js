/* eslint-disable */
import { useState } from "react";
import * as AppConstants from "./config/app-config";
import Header from "./components/header";
import Footer from "./components/footer";
import user_avatar from "./images/user_avatar.svg";
import "./App.css";

const countryNames = Object.keys(AppConstants.COUNTRY_DICTIONARY);

function App() {
  const [selectedCountry, setSelectedCountry] = useState(
    AppConstants.DEFAULT_COUNTRY
  );

  /**
   * Function to handle country change
   * @param {*} inputCountry
   */
  function countryClickHandler(inputCountry) {
    setSelectedCountry(inputCountry);
  }

  return (
    <div className="App">
      {/* Header Begins*/}
      <Header></Header>
      {/* Header Ends*/}

      {/* Section Begins*/}
      <div className="section">
        <div className="container user-avatar">
          <img src={user_avatar} alt="User Avatar" />
        </div>
        <h3>Checkout my favourite cities. Select a country to get started.</h3>
        <div>
          {countryNames.map((countryName) => (
            <button
              className={`${
                countryName === selectedCountry
                  ? "country-btn-active"
                  : "country-btn-inactive"
              }`}
              key={countryName}
              onClick={() => countryClickHandler(countryName)}
            >
              {countryName}
            </button>
          ))}
        </div>

        <ul>
          {AppConstants.COUNTRY_DICTIONARY[selectedCountry].map(
            (city, index) => {
              return (
                <div
                  className={index % 2 === 0 ? "section-odd" : "section-even"}
                  key={city.city_name}
                >
                  <section className="container container-center">
                    <div>
                      <div>
                        <h2>{city.city_name}</h2>
                      </div>
                      <div>
                        <small>{city.rating}</small>
                      </div>
                      <div>
                        <p>{city.description}</p>
                      </div>
                    </div>
                  </section>
                </div>
              );
            }
          )}
        </ul>
      </div>
      {/* Section Ends*/}

      {/* Footer Begins*/}
      <Footer></Footer>
      {/* Footer Ends*/}
    </div>
  );
}

export default App;
