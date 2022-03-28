import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Answer(props) {
  let newItems = props.Answer.map(displayAnswers);

  function displayAnswers(answerChoices) {
    return <p>{answerChoices}</p>;
  }
  return newItems;
}
function Question(props) {
  //console.log(props.Answer)
  return (
    <div>
      <p>{props.Quest}</p>
      <Answer Answer={props.Answer} />
    </div>
  );
}
function NextQuestion(props) {
  return <button>Next Question</button>;
}
function App() {

  let[currentQuestNum, setcurrentQuestionNum]= useState(0);
  let [answerDisplay, setAnswerDisplay] = useState("");
  function change(props){
    return setcurrentQuestionNum(1);
  }
  //console.log(data[0].question.choices);
  let [Quests, setQuests] = useState(0);
  let question = data[0].question;
  return (
    <div className="app">
      Trivia!{" "}
      <Question
        Quest={question.text}
        Answer={question.choices}
      />
      <NextQuestion nextNum={props.}/>
      <button
        onClick={() => {
          setAnswerDisplay(question.choices[question.correct_choice_index]);
        }}
      >
        The correct answer is {answerDisplay}
      </button>
    </div>
  );
}

export default App;
