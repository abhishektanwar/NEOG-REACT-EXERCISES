import React, { useState } from 'react'

const CharacterCounter = () => {

	const [postMessage,setPostMessage] = useState('')
	const maxPostLength = 20;
	const handleCharacterCount = (e) => {
		console.log(e.target.value)
		setPostMessage(e.target.value)
	}

	return (
		<div>
			<h2>Character Counter</h2>
			<h5>{maxPostLength} characters allowed</h5>
			<label for="newPost" />
			<textarea id="newPost" name="newPost" rows={4} cols={50} onChange={handleCharacterCount} maxLength={maxPostLength} />
			{postMessage && postMessage.length > 8 ? <p>{maxPostLength - postMessage.length} Characters remaining</p> : null}
		</div>
	)
}

export default CharacterCounter
