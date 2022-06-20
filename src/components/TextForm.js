import React, {useState} from 'react'

export default function TextForm(props) {

   const handleUpClick = () => {
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert('Text converted into Uppercase', 'success')
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted into Lowercase', 'success')
     }    
     const handleClClick = () => {
        let newText = ' ';
        setText(newText);
     }    

   const handleOnChange = (event) => {
        setText(event.target.value);
    }

/**
  functions written for copy clipboard Codes
**/     
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);   
        props.showAlert('Coppied !', 'success')
    }


/**
  functions written for remove extra spaces
**/     

  const handleExtraSpaces = () => {    
      let newText = text.split(/[ ]+/);
      setText(newText.join(" ")) 
  }

    const [text, setText] = useState('');  
    return (
<>

    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#405191':'white', color:props.mode==='dark'?'white':'black' }} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
          <button id="myBox" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>   
          
    </div>

    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2> Your Text Summary </h2>
        <p> {text.split(" ").length} words {text.length} characters </p>
        <p> {0.008 * text.split(" ").length} minutes read  </p>
        <h3 className='mt-5'> Preview </h3>
        <p> {text.length>0?text:"Enter the Text above to preview the textBox"} </p>
    </div>
</>

  )
}
