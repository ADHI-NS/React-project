import React,{useState} from 'react'


    export default function TextForm(props) {
        const handleUpClick=()=>{
            console.log("upper case was clicked" + text);
            let newText= text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to upper case!", "success");
        }

        const handleLoClick=()=>{
            console.log("upper case was clicked" + text);
            let newText= text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to lower case!", "success");
        }
        const handleClearClick=()=>{
            console.log("" + text);
            let newText= '';
            setText(newText)
            props.showAlert(" Text Cleared!", "success");
        }
       //setText("you have clicked on handleUpClick")
    
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleCopy =()=>{
        console.log("i am copy")
        var text=document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success");
    }
    //speaks the para
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }


    const [text, setText] = useState('');
    //setText("new text");
    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="container ">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <div style={{ marginTop: '10px' }}></div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button type="submit" onClick={speak} className="btn btn-warning my-2">Speak</button>


    </div>
    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1> your Text summary</h1>
        <p>{text.split("").length} words and {text.length} characters</p>
        <p>{0.008*text.split("").length} Miniutes to Read</p>
        <h2>PreVeiw</h2>
        <p>{text.length>0?text:"Enter something to preveiw it here"}</p>
    </div>
    </>
  )
}
