import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!" , "success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!" , "success");
    } 
    const handleCrClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared" , "success");
    } 
    const handleTeClick = () =>{
        let newText = text.charAt(0).toUpperCase() + text.slice (1).toLowerCase ();
        setText(newText)
        props.showAlert("Converted to Titlecase!" , "success");
    } 
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed" , "success");
    } 


    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>     
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color :props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleTeClick}>Convert to Titlecase</button>
        <button className="btn btn-primary mx-1" onClick={handleCrClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Removes Extra Spaces</button>
    </div>
    <div className="container my-2"style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Sumary</h2>
        <p> {text.split(" ").length} of Words and {text.length} of Characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in text area to preview here"}</p>
    </div>
    </>
    
    

  )
}
