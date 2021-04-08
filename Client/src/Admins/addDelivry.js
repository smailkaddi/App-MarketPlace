import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
function LoginSuperAdmin() {

    const history = useHistory();
    const [Delivry_Name, setDelivry_Name] = useState();

    let idDelivry;
    const handleSubmit = (e) => {
	
        e.preventDefault();
        const id = idDelivry.value;
      const Delivrydata = {Delivry_Name,Type:id};
          axios.post(`http://localhost:8080/Delivry/add`,Delivrydata)
            .then(res => {
              if(res.error){
              return false
          }else{
             console.log(res.data);
             history.push("/Delivery")
          }
        },[])
      }





    return(
<div className="w-full flex flex-wrap">
  {/* Login Section */}
  <div className="w-full md:w-1/2 flex flex-col">
    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
      <p className="text-center text-3xl">Add Delivry Man.</p>
      <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col pt-4">
          <label  className="text-lg">Delivry Name</label>
          <input type="text" id="text" placeholder="Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" 
           value={Delivry_Name}
           onChange={e => setDelivry_Name(e.target.value)}
          />
        </div>
        <div className="flex flex-col pt-4">
          <label className="text-lg">Type</label>
          <select ref={(e) => idDelivry = e} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
          <option value="Standard">Standard</option>
		<option value="Express">Express</option>
          </select>
        </div>
        <input onclick={toastr} type="submit" placeholder="Add" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
      </form>
      <div className="text-center pt-12 pb-12">
        <p>Back <a href="register.html" className="underline font-semibold">Click Here.</a></p>
      </div>
    </div>
  </div>
  {/* Image Section */}
  <div className="w-1/2 shadow-2xl">
    <img alt="img" className="object-cover w-full h-screen hidden md:block" src="./admins/delivery.png" />
  </div>
</div>







    )

}
export default LoginSuperAdmin;