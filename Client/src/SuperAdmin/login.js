import '../index.css'
import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import React, { useState } from 'react';
import axios from 'axios';


function LoginSuperAdmin() {

	const history = useHistory();
	const [login, setlogin] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {login,password};

	axios.post(`http://localhost:8080/SuperAdmin/login`, user)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('/AdminList');
       localStorage.setItem('name',login);
			 toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)

			}else{
  
                    // Calling toast method by passing string 
                    toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
                
                
			}
		 
		})
	}
 
    return(

      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Tailwind Login Template by David Grzyb</title>
  <meta name="author" content="David Grzyb" />
  <meta name="description" content />
  <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n        .body-bg {\n            background-color: #9921e8;\n            background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);\n        }\n    " }} />
  <header className="max-w-lg mx-auto">
    <a href="#">
      <h1 className="text-4xl font-bold text-white text-center">Startup</h1>
    </a>
  </header>
  <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
    <section>
      <h3 className="font-bold text-2xl">SuperAdmin</h3>
      <p className="text-gray-600 pt-2">Sign in to your account.</p>
    </section>
    <section className="mt-10">
      <form className="flex flex-col" method="POST" action="#" onSubmit={handleSubmit}>
        <div className="mb-6 pt-3 rounded bg-gray-200">
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Username</label>
          <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
          value={login}
                     onChange={e => setlogin(e.target.value)}
           />
        </div>
        <div className="mb-6 pt-3 rounded bg-gray-200">
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
          <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
          value={password} 
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit"onClick={toastr} >Sign In</button>
      </form>
    </section>
  </main>
  <div className="max-w-lg mx-auto text-center mt-12 mb-6">
    
    <p className="text-white">Don't have an account? <a href="#" className="font-bold hover:underline">Sign up</a>.</p>
  </div>
  <footer className="max-w-lg mx-auto flex justify-center text-white">
    <a href="#" className="hover:underline">Contact</a>
    <span className="mx-3">•</span>
    <a href="#" className="hover:underline">Privacy</a>
  </footer>
</div>
          )
        }
        export default LoginSuperAdmin;