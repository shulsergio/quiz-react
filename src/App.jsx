import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, isLoading] = useState(false);

  return (
    <>
      <h1>QUIZ</h1>
      {loading && <Loader />}
      <Quiz currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </>
  );
}

export default App;
