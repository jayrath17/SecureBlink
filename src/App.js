// make sure check the version of dependencies
import React from "react";
import Store from "./store/store";
import { Provider } from "react-redux";
// make sure check the version of dependencies
import Header from "./components/header";
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/three";
import Four from "./components/four";
import Five from "./components/five";
import Six from "./components/six";
import ContactPage from "./components/contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <ContactPage />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
