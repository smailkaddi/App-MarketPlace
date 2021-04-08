import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
import "toastr/build/toastr.css";
// import adminlogin from './adminlog.jpg'
function LoginSuperAdmin() {

	const history = useHistory();
	const [login, setlogin] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {login,password};

	axios.post(`http://localhost:8080/admin/login`, user)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('/AdminDashboard');
			 toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)

			}else{
  
                    // Calling toast method by passing string 
                    toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
                
                
			}
		 
		})
	}
 
    return(
    
<div className="bg-green-400 h-screen w-screen">
  <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
    <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: '500px'}}>
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <div className="flex flex-col flex-1 justify-center mb-8">
          <h1 className="text-4xl text-center font-thin">Welcome Back Admin</h1>
          <div className="w-full mt-4">
            <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col mt-4">
                <input id="text" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="text" placeholder="Username" 
                value={login}
                onChange={e => setlogin(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-4">
                <input id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-8">
                <button  onClick={toastr} type="submit" className="bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                Forgot Your Password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{background: 'url("/adminlog.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'}} />
    </div>
  </div>
</div>


          )
        }
        export default LoginSuperAdmin;