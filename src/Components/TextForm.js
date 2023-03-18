import React,{ useState } from 'react'
import './TextForm.css'

export default function TextForm(props) {

  const wordCounter = () => {
    let newText = text.split(/[ ]+/);
    // console.log(newText);
    let c = 0, total = 0;
    for (let i = newText.length-1;i>=0;i--){
      let temp = newText[i].split("\n")
      for (let j = temp.length;j>=0;j--){
        if (temp[j]=== '' || temp[j]=== '\n'){
          ++c;
        }
      }
      total += temp.length;
    }
    return (total-c);
  }

  const handleupClick = ()=>{
      // console.log("UpperCase was Clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
  }

  const handlelowClick = ()=>{
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleonChange = (event)=>{
      // console.log("On Change");
      setText(event.target.value)
  }

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  // const handletitle = () =>{
  //   let newText = text.toLowerCase();
  //   console.log(newText)
  //   // let temp = newText.split("\n")`
  //   // for(let k = temp.length - 1;k>=0;k--){
  //   //   temp[0].toUpperCase();
  //   // }
  //   // setText(temp);
  // }

  const handlespeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleextraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className='Marg' style = {{color: props.mode==='dark'?'white':'black'}}>
        <h3 className = "center-heading">
          {props.heading}
        </h3>

        {/* <textarea class="form-control txta" placeholder="Enter Text Here" id="myBox" rows="11" style="background-color: rgb(33, 37, 41); color: white; border-width: 1px; border-color: white;"></textarea> */}

        <div className="mb-3">
          <textarea className="form-control" 
          value={text} 
          style={{background: props.mode === 'dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} 
          placeholder="Enter your text here" 
          onChange={handleonChange} 
          id="exampleFormControlTextarea1" 
          rows="10">
          </textarea>
        </div>

        <button className="btn btn-dark mx-1" onClick={handleupClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handlelowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-1" onClick={handleextraspace}>
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-dark mx-1" onClick={handletitle}>
          Capitalize
        </button> */}
        <button className="btn btn-dark mx-1" onClick={handlespeak}>
          Speak
        </button>
      </div>

      <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h5>Your Text Summary</h5>
        <p>{wordCounter()} words and {text.length} Characters</p>
        <p>{wordCounter()*0.008} Minutes Read</p>
      </div>

    </>
  )
}
