import React, { useEffect, useState } from "react";
import uuid from 'react-uuid';

const BasicPasswordMatch = () => {
	const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  return (
      <div>
				<h1>#2 Password Match</h1>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
        {password && confirmPassword && password !== confirmPassword ? (
          <p style={{ color: "red" }}>Passwords do not match</p>
        ) : null}
				{uuid()}
      </div>
  );
}

const AlphanumberPasswordMatch = () => {
	const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
	const [valid,setValid] = useState(true)
	const [error,setError] = useState('')
	// const alphaNumbericRegex = /^(?=.*\d).{4,8}$/;
	const alphaNumbericRegex = /\d/;

	const testPassword = () => {
		if(!password && !confirmPassword){
			return
		}
		else if(password && !alphaNumbericRegex.test(password)){
			setValid(false)
			setError('Password must contain atleast 1 numberr')
		}
		else if(confirmPassword && !alphaNumbericRegex.test(confirmPassword)){
			setValid(false)
			setError('Confirm Password must contain atleast 1 number')
		}
		else if(password && confirmPassword && password !== confirmPassword){
			setValid(false)
			setError('Passwords do not match')
		}
		else if (password && (password.length < 4 || password.length > 8) ){
			setValid(false)
			setError('Password should be 4 to 8 characters long')
		}
		else if (confirmPassword && (confirmPassword.length < 4 || confirmPassword.length > 8) ){
			setValid(false)
			setError('Confirm Password should be 4 to 8 characters long')
		}
		else{
			setValid(true)
			setError('')
		}
	}
	useEffect(() => {
		testPassword()

	}, [password,confirmPassword,testPassword])
  return (
      <div>
				<h1>#3 Alpha numeric Password Match</h1>
				<h1>#4 Disable submit button </h1>
        
				<label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
        {/* {password && confirmPassword && password !== confirmPassword ? (
          <p style={{ color: "red" }}>Passwords do not match</p>
        ) : null} */}
				{
					!valid ? <p style={{ color: "red" }}>{error}</p> : null
				}

				<button disabled={!valid}>Submit</button>
				{uuid()}
      </div>
  );
}

const ShowPassword = () => {
	const [passwordVisibility,setPasswordVisibility] = useState(false);

	const hideShowPassword = () => {
		setPasswordVisibility( passwordVisibility => !passwordVisibility)
	}

	return(
		<div>
			<h1>#5 show password</h1>
			<input type={passwordVisibility ? 'text' : 'password'} id="showPassFiled" />
			<button onClick={hideShowPassword}>show password</button>
		</div>
	)
}

const PasswordMatch = () => {
  return (
    <>
			<BasicPasswordMatch />
			<AlphanumberPasswordMatch />
			<ShowPassword />
		</>
  );
};

export default PasswordMatch;
