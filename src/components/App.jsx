import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props){
return <p>{props.Quest}</p>
}
function NextQuestion(props){
return<button>button</button>
}
function App() {
  console.log(data[0].question.text);
  let [Quests, setQuests]=useState(0);
  return <div className="app">Trivia! <Question Quest={data[0].question.text}/><NextQuestion/> </div>;
}

export default App;
