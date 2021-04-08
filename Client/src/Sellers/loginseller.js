import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
import "toastr/build/toastr.css";
function LoginSeller() {

	const history = useHistory();
	const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  // const [status] = useState();


	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {Username,Password};

	axios.post(`http://localhost:8080/seller/login`, user)
		.then(res => {
			if(!res.data.message){ 
       let status= res.data.status;

       localStorage.setItem("status", status);
        if(status == "InActive"){
          var yesno = window.confirm(
          "This Account is not activated! Yet please contact us if you have any problem" +
          " Email : supportSeller@marequetplce.com"
          );
          if (yesno) {   
            window.location.reload();
          }
        }else if (status == "Block"){
        var yesno = window.confirm(
          "This Account is Blocked! please contact us if you have any problem" +
          " Email : supportSeller@marequetplce.com"
          );
          if (yesno) {   
            window.location.reload();
          }
      }else{
        let token= res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem('name',Username);
        history.push('/DashboardSeller');
        toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)
      }
    
    
    }
      else(

      // Calling toast method by passing string 
      toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
      )
		 
		})
	}

    return(
<div className="container mx-auto">
  <div className="flex justify-center px-6 my-12">
    {/* Row */}
    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
      {/* Col */}
      <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1583088580009-2d947c3e90a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80")'}} />
      {/* Col */}
      <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
              Username
            </label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"  
              value={Username}
                          onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" 
             value={Password} 
                         onChange={e => setPassword(e.target.value)}
                         /> 
            <p className="text-xs italic text-red-500">Please choose a password.</p>
          </div>
          <div className="mb-4">
            <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
            <label className="text-sm" htmlFor="checkbox_id">
              Remember Me
            </label>
          </div>
          <div className="mb-6 text-center">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"  href="/becomeseller">
              Create an Account!
            </a>
          </div>
          <div className="text-center">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./forgot-password.html">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
          )
        }
        export default LoginSeller;