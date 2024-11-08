
import "./App.css";

function hindi(){

}
function gkgs(){

}
function english(){

}


function math(){

}




function App() {

  return (
    <div className="app">

      <h2 className="heading">Exam Pratice </h2>
     <div className="quiz-section"> <button className="quiz" onClick={hindi}>Hindi Quiz</button>
      <button className="quiz" onClick={gkgs}>GK/GS Quiz</button>
      <button className="quiz" onClick={english}>English Quiz</button>
      <button className="quiz" onClick={math}>Math Quiz</button>
                </div>
                </div>
  );
}

export default App;
