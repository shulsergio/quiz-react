import css from "./Answer.module.css";

const Answer = () => {
  return (
    <>
      <div className={css.answerData}>
        <p className={css.answerLetter}>X</p>
        <p className={css.answerText}>Text</p>
      </div>
    </>
  );
};

export default Answer;
