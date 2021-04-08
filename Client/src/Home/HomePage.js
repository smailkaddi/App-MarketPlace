import '../index.css'
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
function Home() {

  const history = useHistory();
//----------- show gategory added in datatable------------
const [product , setProduct] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/products`)
    .then(function (response) {
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])


const [category , setcategory] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/category`)
    .then(function (response) {
      setcategory(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])

const getIdProduct = (category)=>{
  localStorage.setItem('idProduct',category);
  history.push('/sousProduct');


}

const Checkout = (product)=>{
  localStorage.setItem('idProducttobuy',product);
  history.push('/Home/CheckOut');
  console.log(product);

}


  return (












    
  <header className="bg-white bg-no-repeat bg-center bg-cover		" >
  <div className="container mx- auto px-6 py-3 bg-gray-400 mb-8 ">
    <div className="flex items-center justify-between">
      <div className="hidden w-full text-white md:flex md:items-center">
        <span className="mx-1 text-sm">Medicament</span>
      </div>
      <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
      
      </div>
      <div className="flex items-center justify-end w-full">
        <button click="cartOpen = !cartOpen" className="text-white focus:outline-none mx-4 sm:mx-0">
          <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
        <div className="flex sm:hidden">
          <button click="isOpen = !isOpen" type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
          
        </div>
      </div>
    </div>
    <nav class="isOpen ? '' : 'hidden'" className="sm:flex sm:justify-center sm:items-center mt-4">
      <div className="flex flex-col sm:flex-row">
      { category && category.map(item =>(
           <Link onClick={() => getIdProduct(item._id)}> <a className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0" >{item.CategoryName}</a></Link>
        ))}
        
      </div>
      
    </nav>
    <div className="relative mt-6 max-w-lg mx-auto">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
    </div>
  </div>
  <div className="container mx-auto px-6">
  <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1583088580067-16d1109aeacb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=635&q=80")'}}>
      <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">Medicament</h2>
          <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
          <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Shop Now</span>
            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  <div className="mt-16 m-28">
    <h3 className="text-gray-600 text-2xl font-medium">Product</h3>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
    { product && product.map(item =>(
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div className="flex items-end justify-end h-56 w-full bg-cover" >  
    <img className="hover:grow hover:shadow-lg" alt="img" src={item.productImg}/>    
        </div>
        <Link onClick={() => Checkout(item._id)}>  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 float-right	">
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button></Link>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{item.Titel}</h3>
          <span className="text-gray-500 mt-2">{item.price} MAD</span>
          <p className="pt-1 text-gray-900">By {item.idSeller}</p>
          <p className="pt-1 text-gray-400">TAGS: {item.tags}</p>
        </div>
      </div>
       ))}
    </div>
     
  </div>
  
  
</div>
<footer className="bg-gray-200 ">
  <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">
      
    </a>
    <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
  </div>
</footer>
</header>
  );
}

export default Home;
