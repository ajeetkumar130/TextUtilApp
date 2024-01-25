// import react from "react";

import { useState } from "react";


export function TextForm(props) {

    const [text, setText] = useState(' ');

    const handelUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handelClearClick = () => {
        let newText= '';
        setText(newText)
        props.showAlert("clear textarea!", "success");

    }

    const handelLcClick = () => {
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");

    }
   
    const handelCopyClick =() =>{
        var text= document.getElementById("myBox")
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy clipboard!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)

    }

    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Comments</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                <button className="btn btn-primary mx-3" onClick={handelUpClick} >conver to uppercsae</button>
                <button className="btn btn-primary mx-3"  onClick={handelLcClick} >conver to lowercsae</button>
                <button className="btn btn-primary mx-3"  onClick={handelClearClick} >clear</button>
                <button className="btn btn-primary mx-3"  onClick={handelCopyClick} >copy clip</button>

            </div>
        </div>
        <div className="container">
            <h3>Your text summary</h3>
            {/* <p>{text.split(" ").length} word and{text.length} cheratcter</p> */}
            <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
            {/* <p>{0.008*text.split(" ").length} minutes to read</p> */}
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter the text in above box to preview "}</p>
        </div>
    
        </>

    );
}