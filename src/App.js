// import react from "react";
import "./App.css";
import User from "./components/User.js";

function App() {
  // return react.createElement("div", null, "hello");
  return (
    <>
      <User name="Berkay" surname="Oruç" isLoggedIn={true} age={27} />
    </>
  );
}
export default App;
