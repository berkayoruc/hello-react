// import react from "react";
import "./App.css";
import User from "./components/User.js";

const friends = [
  { name: "Ahmet", id: 1 },
  { name: "Mehmet", id: 2 },
  { name: "Selami", id: 3 },
];

function App() {
  // return react.createElement("div", null, "hello");
  return (
    <>
      <User
        name="Berkay"
        surname="Oruç"
        isLoggedIn={true}
        age={27}
        friends={friends}
      />
    </>
  );
}
export default App;
