import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [loading, isLoading] = useState(false);

  return (
    <>
      <h1>QUIZ</h1>
      {loading && <Loader />}
      <Quiz/>
    </>
  );
}

export default App;
