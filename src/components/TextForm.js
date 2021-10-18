import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "New Title"; //Wrong way to change the text
    // setText("New Title"); // Correct way to change the text -> using Function
    
    const HandleUpClick = ()=>{
        // console.log("UpperCase btn Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlert("Converted to Uppercase ", "success")
    }
    const HandleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.setAlert("Cleared the text ", "success")
    }
    const HandleonChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const HandleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlert("Converted to Lowercase ", "success")
    }

    const HandleCopy =() =>{
        var text = document.getElementById('mytext');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.setAlert("Text Copied ", "success")
    }

    const HandleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAlert("Extra Spaces Removed " , "success")
    }

    return (
        <>
        <div className="container" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className = "mb-3">
            {/* <label for="mytext" className = "form-label">Example textarea</label> */}
            <textarea className = "form-control" value={text} onChange={HandleonChange} style={{backgroundColor:props.mode === 'light' ? 'white' : '#1f5987', color:props.mode === 'light' ? 'black' : 'white'}} id="mytext" rows="5"></textarea>
            </div>
            <div className="flex">
                <button className="btn btn-warning mx-2" onClick={HandleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={HandleLowClick}>Convert To Lowercase</button>
                <button className="btn btn-secondary mx-2" onClick={HandleClearClick}>Clear Text</button>
                <button className="btn btn-info mx-2" onClick={HandleCopy}>Copy Text</button>
                <button className="btn btn-dark mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces </button>
            </div>
        </div>
        <div className="container my-4" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
            <h2>Your Text Summery</h2>
            <p>'{text.split(" ").length}' Words and '{text.length}' Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text : 'Enter something in textbox to preview it.'}</p>
        </div>
        </>
    )
}
