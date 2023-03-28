import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    let handleUpClick = () => {
        // console.log('handleUpClick was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case', 'success');
    }
    let handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case','success');
    }
    let handleClearClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert('All text cleared.','success');
    }
    let handleOnChange = (e) => {
        // console.log('handleOnChange was active');
        setText(e.target.value);
    }

    
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#17072b' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBoc" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-2">
                <hr />
                <h2>Your Text Summery: </h2>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>You have to give {0.008 * text.split(" ").length} Minutes to read.</p>
                <hr />
                <h2>Preview:</h2>
                <hr />
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>
        </>
    )
}
