import Question from "../Question/Question";
import css from "./Quiz.module.css";

const Quiz = () => {
  return (
    <>
      <div className={css.quiz}>
        <div className={css.score}>Question 1/10</div>
        <Question />
        <div className={css.nextBtn}>Next</div>
      </div>
    </>
  );
};
export default Quiz;
