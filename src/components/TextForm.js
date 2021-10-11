import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here ');

    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.alert("uppercase", "success")
    }
    const lowerCase = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const clear = () => {
        setText("")
        props.alert("clear","success");
    }
    const copy = () => {
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.alert("Copied","success");
    }
    const extraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className=" mb-3" >
                    <textarea className="form-control" id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white', cursor: 'pointer' }} value={text} onChange={handleOnchange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handelUpClick}>convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clear}>clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={copy}>copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={lowerCase}>convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={extraSpaces}>remove extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Text to preveiw'}</p>
            </div>
        </>
    )
}

