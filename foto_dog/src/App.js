import { BrowserRouter, NavLink } from "react-router-dom";
import { GlobalStyle } from "./utils/GlobalStyle/GlobalStyle";
import { RoutesApp } from "./utils/Route/RoutesApp";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <RoutesApp />
      <Footer />
    </div>
  );
};
