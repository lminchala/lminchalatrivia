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
  let [answerDisplay, setAnswerDisplay] = useState("");
  //console.log(data[0].question.choices);
  let [Quests, setQuests] = useState(0);
  return (
    <div className="app">
      Trivia!{" "}
      <Question
        Quest={data[0].question.text}
        Answer={data[0].question.choices}
      />
      <NextQuestion /> 
      <button onClick={()=>{
setAnswerDisplay(data[0].question.choices.[data[0].question.choices.correct_choice_index]);

      }}
      
      >The correct answer is {answerDisplay}</button>
      
    </div>
  );
}

export default App;
