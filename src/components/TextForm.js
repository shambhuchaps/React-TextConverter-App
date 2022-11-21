import React,{useState} from 'react'


export default function TextForm(props) {
 
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase!", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }
  const handleToClear = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const handleToCapitalize = ()=>{
    let arr = text.split(" ");
    for(let i=0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalize Text!", "success");
  }
const handleCopy = ()=>{
  // let text = document.getElementById("myBox");
  // text.select();
  navigator.clipboard.writeText(text);
  // document.getSelection().removeAllRanges(); // this is for unselect text
  props.showAlert("Copied to Clipboard!", "success");
}
const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed Extra Spaces!", "success");
}

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#121652'}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#021443cc':'white',color:props.mode==='dark'?'white':'#121652'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleToClear}>Clear Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleToCapitalize}>Convert to Capitalize</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#121652'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
