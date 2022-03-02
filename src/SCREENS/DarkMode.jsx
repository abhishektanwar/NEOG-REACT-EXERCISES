import React, { useState } from 'react'

const DarkMode = () => {
	const [darkMode,setDarkMode] = useState(false)

	const toggleTheme = () => {
		setDarkMode(!darkMode)
	}

	return (
		<div style={darkMode ? {backgroundColor:'black',color:'white',height:'100vh'} : {backgroundColor:'white',color:'black',height:'100vh'}}>
			<h1>Dummy Text</h1>
			<button onClick={toggleTheme}>{darkMode ? 'light' : 'dark'}</button>
		</div>
	)
}

export default DarkMode
