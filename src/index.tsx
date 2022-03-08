import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { MetronicI18nProvider } from "./_metronic/i18n/Metronici18n";

import "./_metronic/assets/sass/style.scss";
import "./_metronic/assets/sass/style.react.scss";
import "./_metronic/assets/css/custom.css";

ReactDOM.render(
  <MetronicI18nProvider>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Main />
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </MetronicI18nProvider>,
  document.getElementById("root")
);

reportWebVitals();
