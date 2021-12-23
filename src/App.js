// import react from "react";
import "./App.css";

const name = "Berkay";
const isLoggedIn = true;

function App() {
  // return react.createElement("div", null, "hello");
  return (
    <>
      <h1>{isLoggedIn ? `Benim adım ${name}` : 'Giriş yapmadınız'}</h1>
      {/* {!isLoggedIn && "Giriş yapmadınız"} */}
    </>
  );
}
export default App;
