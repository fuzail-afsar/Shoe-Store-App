import "./App.css";
import Footer from "./components/common/temp/Footer";
import Header from "./components/common/temp/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Theme from "./components/UI/Theme";
import { Provider } from "./context/GlobalState";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Theme>
          <Header />
          <Router />
          <Footer />
        </Theme>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
