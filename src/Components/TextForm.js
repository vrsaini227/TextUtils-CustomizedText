//import rfc and usestate
import React, {useState} from 'react'
export default function TextForm(props) {

    //create handleUpClick Function  and useState
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("Converted To UpperCase!", "Success")
    }

    //create handleOnChange Function and useState
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //create handleLoClick Function
    const handleLoClick = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
        props.showAlert("Converted To LowerCase!", "Success")
    }
    //create handleClearClick Function
    const handleClearClick = () => {
        let NewText = "";
        setText(NewText);
        props.showAlert("Clear Text", "Success")
    }





    return (
        <>

        {/* this div color change by button */}
        <div className='container' style={{color:props.mode === 'dark'?'white':'#042743' }}>
            <div >
                {/* h1 heading usings props */}
                <h1>{props.heading}</h1>

                {/* this div is textarea */}
                <div className="mb-3" >
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="4" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange}></textarea>

                    {/* this button use for characters convert into UpperCase */}
                    <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Change to UpperCase</button>

                    {/* this button use for characters convert into LowerCase */}
                    <button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Change to LowerCase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>

            <div className="container mb-3">
                {/* count words and characters from textarea */}
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                {/* Preview the text  */}
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the textbox above to Text to Preview Here"}</p>
            </div>
            
        </div>
        </>
    )
}
