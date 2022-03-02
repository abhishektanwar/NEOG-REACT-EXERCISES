import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<h1>Thinking In React Exercise</h1>
			<h3><Link to='/character-counter' >1. Character Counter</Link></h3>
			<h3><Link to='/password-match' >2. Password Match</Link></h3>
			<h3><Link to='/designer-tool' >3. Designer Tool (mini figma) </Link></h3>
			<h3><Link to='/switch-tabs' >4. Switch Tabs </Link></h3>
			<h3><Link to='/toast' >5. Toast </Link></h3>
			<h3><Link to='/todo' >6. ToDo </Link></h3>
			<h3><Link to='/dark-mode' >7. Dark Mode </Link></h3>
		</div>
	)
}

export default Home