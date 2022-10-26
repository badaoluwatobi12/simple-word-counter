import React, { useEffect, useState } from "react";

function WordCount() {
  const [textArea, setTextArea] = useState("");
  const [showWord, setShowWord] = useState(0);
  const [clear, setClear] = useState(" ")

   const countBtn=()=>{
    var rep = textArea.replace(/ /g,"");
    setShowWord(textArea.split(" ").length)
   
   }
   
  const clearSpc =()=>{
   
    setShowWord(textArea.split(" ").value)
  }



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 my-auto">
            <div className="jumbotron p-3">
              <h2 className="text-center">Word Counter</h2>
              <textarea
                value={textArea}
                onChange={(e)=>setTextArea(e.target.value)}
                onKeyPress={()=>countBtn()}
                className="form-control"
                placeholder="Type/paste your text here"
              ></textarea>
              <div className="row mt-3">
                <div className="col">
                  Word Count: <span id="setShowWord">{showWord}</span>
                </div>
                <div className="col text-right">
                  <button onClick={()=>clearSpc()} className="btn btn-danger">clear</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordCount;
