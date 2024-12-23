import { useState } from "react";
import s from "./s.module.css";
import { questions } from "./questionsData";
import { chunkArray } from "./questionsData";
import UpArrow from "../../../public/UParrow.svg";

const Faqs = () => {
  const chunkedQuestions = chunkArray(questions, 4);

  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const handleToggleAnswer = (chunkIndex: number, questionIndex: number) => {
    const uniqueIndex = `${chunkIndex}-${questionIndex}`;
    if (openIndex === uniqueIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(uniqueIndex);
    }
  };

  return (
    <div className={s.FaqsSection}>
      <div className={s.FaqsTitleContiner}>
        <div className={s.FaqsTitleText}>FAQ’s</div>
        <div className={s.FaqsTitleMainText}>
          <span>Frequently Asked Questions</span>
        </div>
      </div>
      <div className={s.QuestionsMainDiv}>
        {chunkedQuestions.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className={s.QuestionsContainer}>
            {chunk.map((question, questionIndex) => {
              const uniqueIndex = `${chunkIndex}-${questionIndex}`;
              return (
                <div key={questionIndex} className={s.QuestionContainerDiv}>
                  <div className={s.FaqCont}>
                    <div
                      className={s.QuestionArray}
                      onClick={() =>
                        handleToggleAnswer(chunkIndex, questionIndex)
                      }
                    >
                      <h3 className={s.Question}>{question.question}</h3>
                      <div
                        className={`${s.ArrowIconDiv} ${
                          openIndex === uniqueIndex ? s.open : ""
                        }`}
                      >
                        <img
                          className={s.ArrowIcon}
                          src={UpArrow}
                          alt="image"
                        />
                      </div>
                    </div>
                    <p
                      className={`${s.Answer} ${
                        openIndex === uniqueIndex ? s.open : ""
                      }`}
                    >
                      {question.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
