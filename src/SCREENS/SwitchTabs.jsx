import React, { useState } from 'react'

const Home = () => {
	return (
		<>
			<h1>This is home component.</h1>
		</>
	)
}

const About = () => {
	return (
		<>
			<h1>This is about component.</h1>
		</>
	)
}

const Profile = () => {
	return (
		<>
			<h1>This is Profile component.</h1>
		</>
	)
}
const SwitchTabs = () => {
	const [currentTab,setCurrentTab] = useState(null)
	
	const handleTabSwitch = (target) => {
		setCurrentTab(target);
	}

	return (
		<div>
			<button onClick={()=>handleTabSwitch("Home")}>Home</button>
			<button onClick={()=>handleTabSwitch("About")}>About</button>
			<button onClick={()=>handleTabSwitch("Profile")}>Profile</button>
			{currentTab && currentTab==='Home' ? <Home /> : currentTab === 'About' ? <About /> : currentTab === 'Profile' ? <Profile /> : null}
		</div>
	)
}

export default SwitchTabs
