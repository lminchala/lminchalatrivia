import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Answer(props){
 return <ul>{props.Answer}</ul>
}
////ans.map((choice)=><p>{choice}</p>) mira 121122

function Question(props){
return(<div><p>{props.Quest}</p>
<Answer Answer={props.Answer}/></div>)

}
function NextQuestion(props){
return<button>button</button>
}
function App() {
  console.log(data[0].question.choices);
  let [Quests, setQuests]=useState(0);
  return <div className="app">Trivia! <Question Quest={data[0].question.text} Answer={data[0].question.choices}/> <NextQuestion /> </div>;
}

export default App;
