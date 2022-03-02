import React, { useState } from 'react'

const DesignerTool = () => {
	const [selectedText,setSelectedText] = useState('heading');

	const [styles,setStyles] = useState({
		heading:{
			fontFamily:'',
			fontSize:'8px'
		},
		normalText:{
			fontFamily:'',
			fontSize:'8px'
		}
	})

	const increaseFontSize = () =>{
		let newFontSize;
		if(selectedText === 'heading'){
			newFontSize = String(Number(styles.heading.fontSize.split('p')[0])+8).concat('px')
			setStyles({...styles,heading:{...styles.heading,fontSize:newFontSize}})
		}
		if(selectedText === 'normalText'){
			newFontSize = String(Number(styles.normalText.fontSize.split('p')[0])+8).concat('px')
			setStyles({...styles,normalText:{...styles.normalText,fontSize:newFontSize}})
		}
	}

	const decreaseFontSize = () => {
		let newFontSize;
		if(selectedText === 'heading'){
			if(styles.heading.fontSize.split('p')[0] <= 8){
				return
			}
			newFontSize = String(Number(styles.heading.fontSize.split('p')[0])-8).concat('px')
			setStyles({...styles,heading:{...styles.heading,fontSize:newFontSize}})
		}
		if(selectedText === 'normalText'){
			if(styles.normalText.fontSize.split('p')[0] <= 8){
				return
			}
			newFontSize = String(Number(styles.normalText.fontSize.split('p')[0])-8).concat('px')
			setStyles({...styles,normalText:{...styles.normalText,fontSize:newFontSize}})
		}
	}

	const handleFontChange = (e) => {
		if(selectedText === 'heading'){
			setStyles({...styles,heading:{...styles.heading,fontFamily:e.target.value}})
		}
		if(selectedText === 'normalText'){
			setStyles({...styles,normalText:{...styles.normalText,fontFamily:e.target.value}})
		}
	}

	const handleTextChange = (e) => {
		setSelectedText(e.target.value);
	}
	return (
		<div>
			<h1>#6 Designer Tool</h1>
			<select value={selectedText} onChange={handleTextChange}>
				<option defaultValue="select">Select Text</option>
				<option value="heading">Heading</option>
				<option value="normalText">Normal Text</option>
			</select>
			<select value={selectedText === 'heading' ? styles.heading.fontFamily : styles.normalText.fontFamily} placeholder="select fruit" onChange={handleFontChange} >
				<option defaultValue="select">Select Font</option>
				<option value="courier-new">Courier New</option>
				<option value="arial">Arial</option>
				<option value="georgia">Georgia</option>
				<option value="monaco">Monaco</option>
				<option value="verdana">Verdana</option>
			</select>
			<button onClick={increaseFontSize}>Increase Font (by 8px)</button>
			<button onClick={decreaseFontSize}>Decrease Font (by 8px)</button>


			<h2 style={styles.heading}>Hello</h2>
			<p style={styles.normalText}>This is normal text.</p>
		</div>
	)
}

export default DesignerTool
