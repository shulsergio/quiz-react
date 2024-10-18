import Answer from "../Answer/Answer";
import css from "./Question.module.css";
const Question = () => {
  return (
    <>
      <div className={css.question}>New question</div>
      <div className={css.answers}>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </>
  );
};

export default Question;
