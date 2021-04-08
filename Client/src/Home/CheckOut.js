import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
function CheckOut() {

const idProducttobuy=localStorage.getItem('idProducttobuy');

const history = useHistory();
//----------- show gategory added in datatable------------
const [product2 , setProduct] = useState();
useEffect(()=>{

  axios.get(`http://localhost:8080/product/${idProducttobuy}`)
    .then(function (response) {
        console.log(response.data);
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])



var i = 0;
    function addone() {
        i++;
        document.getElementById('inc').value = i;
        var x = document.getElementById("inc").value;
        var y = document.getElementById("price").textContent;
        document.getElementById("productnumber").innerHTML = x;
        var pricefinel = x * y + "MAD";
        document.getElementById("test").innerHTML = pricefinel;
    }
    function removeone() {
      i--;
      document.getElementById('inc').value = i;
      var x = document.getElementById("inc").value;
      var y = document.getElementById("price").textContent;
      document.getElementById("productnumber").innerHTML = x;

      var pricefinelmoin = y - y +"MAD";
      document.getElementById("test").innerHTML = pricefinelmoin;
  }

 

  const payment = (product)=>{
    const pricefinal = document.getElementById("test").textContent;
    var itemnumber = document.getElementById("inc").value;
    localStorage.setItem('idProducttobuy',product);
    localStorage.setItem('pricefinal',pricefinal);
    localStorage.setItem('itemnumber',itemnumber);
    history.push('/Home/Payment');
    console.log(product);
  
  }


    return(




<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style dangerouslySetInnerHTML={{__html: "\n    #summary {\n      background-color: #f6f6f6;\n    }\n  " }} />
  
  <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          {/* <h1 className="font-semibold text-2xl" id="test"></h1> */}
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>

        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> {/* product */}
            <div className="w-20">
              <img className="h-24" src="./../product.jpg" alt="img" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{ product2 && product2.Titel}</span>
              <a href="/" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
           <button onClick={() => removeone()}> <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg></button>
            <input className="mx-2 border text-center w-8" type="text" id="inc" value="1" defaultValue={1} />
            <button onClick={() => addone()}><svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg></button>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm" id="price">{ product2 && product2.price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">{ product2 && product2.price}</span>
        </div>
         
        <a href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
          Continue Shopping
        </a>
      </div>
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items <span id="productnumber">1</span></span>
          <span className="font-semibold text-sm">{ product2 && product2.price} MAD</span>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span id="test">{ product2 && product2.price} MAD</span>
          </div>
          <Link onClick={() => payment(product2._id)}><button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>


        
    )

}
export default CheckOut;