import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
