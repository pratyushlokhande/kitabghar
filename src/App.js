import React from "react";

// Pages
import GlobalStyles from "./pages/components/GlobalStyles";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Home /> */}
      <Form />
    </div>
  );
}

export default App;
