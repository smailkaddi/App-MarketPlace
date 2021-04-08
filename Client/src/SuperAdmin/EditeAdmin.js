
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState,useEffect } from 'react';
function EdiAdmin(props) {

	const history=useHistory();
	const [FirstName, setFirstName] = useState();
	const [LastName, setLastName] = useState();
	const [Email, setEmail] = useState();
	const [login, setlogin] = useState();
	const [Password, setPassword] = useState();
  const idadmin=localStorage.getItem('idadmin');
    
//   let idadmin;
  // ---------------------get question to update-----------------------------
     useEffect(()=>{
  
      axios.get(`http://localhost:8080/admin/${idadmin}`)
      .then(function (response) {
       
        setFirstName(response.data.FirstName)
        setLastName(response.data.LastName)
        setEmail(response.data.Email)
        setlogin(response.data.login)
        // const [, setNameCategory] = useState("");
      
      }).catch(function (err) {
        console.log(err);
    });
    
    },[])
  // -----------------------update question---------------------------
      const handleSubmit = (e) => {
          e.preventDefault();
      const Admin = {FirstName,LastName,Email,login,Password};
  
      axios.put(`http://localhost:8080/admin/update/${idadmin}`,Admin)
        .then(res => {
          if(res.error){
            return false
          }else{
            console.log(res.data);
            history.push('/AdminList')
          }
         
        })
  
    }

  


    return(
      
<div className="container mx-auto">
  <div className="flex justify-center px-6 my-12">
    {/* Row */}
    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
      {/* Col */}
      <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{backgroundImage: 'url("./superadmin/superadminhero.jpg")'}} />
      {/* Col */}
      <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-2xl text-center">Add Admins</h3>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" 
			   value={FirstName}
			   onChange={e => setFirstName(e.target.value)}
			  />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" 
			  value={LastName}
			  onChange={e => setLastName(e.target.value)}
			  />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" 
			value={Email}
			onChange={e => setEmail(e.target.value)}
			/>
          </div>
		  <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Login">
			UserName
            </label>
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="UserName" 
			value={login}
			onChange={e => setlogin(e.target.value)}
			/>
          </div>
          <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" 
			  value={Password}
			  onChange={e => setPassword(e.target.value)}
			  />

            
          </div>
          <div className="mb-6 text-center">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
              Edite
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/AdminList">
              Back
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

          )
        }
        export default EdiAdmin;