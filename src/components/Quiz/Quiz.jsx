import Question from "../Question/Question";
import css from "./Quiz.module.css";

const Quiz = ({ currentIndex, setCurrentIndex }) => {
  const handleClick = () => {
    if (currentIndex < 9) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      <div className={css.quiz}>
        <p className={css.score}>Question {currentIndex + 1}/10</p>
        <Question />
        <button className={css.nextBtn} onClick={handleClick}>
          Next
        </button>
      </div>
    </>
  );
};
export default Quiz;
