import "./FinalResult.css";
import Button from "../Button/Button";

const FinalResult = (props) => {
  let resultText = "";
  let showCelebration = false;

  if (props.result === props.quizLength) {
    resultText = "Excellent result 👍👍👍";
    showCelebration = true;
  } else if (props.result >= props.quizLength / 2) {
    resultText = "Good result 👍";
    showCelebration = true;
  } else if (props.result < props.quizLength / 2) {
    resultText = "Bad result 👎";
  }

  return (
    <div className="final-result">
      <h1>Final result</h1>
      <p>
        You answered {props.result} question correct out of {props.quizLength}.
      </p>

      <p>{resultText}</p>

      {showCelebration && (
        <div className="celebration">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="ball"></div>
          ))}
        </div>
      )}

      <Button onClick={props.onTryAgain}>Try again</Button>
    </div>
  );
};

export default FinalResult;
