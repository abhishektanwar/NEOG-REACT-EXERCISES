import React, { useEffect, useState } from 'react'

const ToastComponent = ({setToastVisibility}) => {

	useEffect(()=>{
		setTimeout(()=>{
			setToastVisibility(false)
		},3000)
	})
	
	return (
		<div style={{display:'flex',backgroundColor:'green',color:'black',maxWidth:'400px',justifyContent:'space-between',alignItems:'center',position:'fixed',padding:'10px 20px',bottom:'30px',left:'30%',height:'30px',boxSizing:'border-box',width:'400px'}}>
			<h4>This is a toast</h4>
			<button onClick={()=>setToastVisibility(false)}>Hide</button>
		</div>
	)
}

const Toast = () => {
	const [toastVisibility,setToastVisibility] = useState(false);

	const handleToastVisibility = () => {
		// toastVisibility ? null : setToastVisibility(visibility => !visibility)
		setToastVisibility(true )
	}
	return (
		<div>
			{toastVisibility}
			<button onClick={handleToastVisibility}>Show Toast</button>
			{toastVisibility ? <ToastComponent setToastVisibility={setToastVisibility} /> : null }
			
		</div>
	)
}

export default Toast
