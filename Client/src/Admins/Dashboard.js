// import { useHistory } from "react-router-dom";
// import toastr from 'toastr';
// import React, { useState,useEffect } from 'react';
// import axios from 'axios';



function Dashboard() {


  return(

    
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Tailwind Admin Starter Template : Tailwind Toolbox</title>
  <meta name="author" content="name" />
  <meta name="description" content="description here" />
  <meta name="keywords" content="keywords,here" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
  <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet" /> {/*Replace with your tailwind.css once created*/}
  <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" /> {/*Totally optional :) */}
  {/*Nav*/}
  <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
    <div className="flex flex-wrap items-center">
      <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
        <a href="#">
          <span className="text-xl pl-2"><i className="em em-grinning" /></span>
        </a>
      </div>
      <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
        <span className="relative w-full">
          <input type="search" placeholder="Search" className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal" />
          <div className="absolute search-icon" style={{top: '1rem', left: '.8rem'}}>
            <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
        </span>
      </div>
      <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li className="flex-1 md:flex-none md:mr-3">
            <a className="inline-block py-2 px-4 text-white no-underline" href="/Logout" >Logout</a>
          </li>
          <li className="flex-1 md:flex-none md:mr-3">
            <div className="relative inline-block">
              <button onclick="toggleDD('myDropdown')" className="drop-button text-white focus:outline-none"> <span className="pr-2"><i className="em em-robot_face" /></span> Hi, User <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
              <div id="myDropdown" className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" onkeyup="filterDD('myDropdown','myInput')" />
                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw" /> Profile</a>
                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw" /> Settings</a>
                <div className="border border-gray-800" />
                <a href="/Logout" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw" /> Log Out</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="flex flex-col md:flex-row">
    <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
      <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li className="mr-3 flex-1">
            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
              <i className="fas fa-tasks pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard</span>
            </a>
          </li>
          <li className="mr-3 flex-1">
            <a href="/ProblemOrder" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
              <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">delivery problems</span>
            </a>
          </li>
          <li className="mr-3 flex-1">
            <a href="/ClientOrder" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500  ">
              <i className="fas fa-chart-area pr-0 md:pr-3 " /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Confirm orders</span>
            </a>
          </li>
          <li className="mr-3 flex-1">
            <a href="/Delivery" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
              <i className="fa fa-wallet pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Add delivery</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white mt-8" >
          <h3 className="font-bold pl-2">Analytics</h3>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse" /></div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">Total Revenue</h5>
                <h3 className="font-bold text-3xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up" /></span></h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse" /></div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">Total Users</h5>
                <h3 className="font-bold text-3xl">249 <span className="text-pink-500"><i className="fas fa-exchange-alt" /></span></h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse" /></div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">New Users</h5>
                <h3 className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up" /></span></h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
      </div> 
    </div>
  </div>
</div>

// {/* <div className="h-screen flex">
// <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
//   transition duration-500 ease-in-out">
//   <div className="flex flex-col items-center ">
//     <h1 className="text-3xl font-light text-green-600 dark:text-green-400 mt-0
//       transition duration-500 ease-in-out text-center">
//     MarketPlace
//     </h1>
//     <img className="h-16 w-16 rounded-full object-cover mt-4" src="./admins/iconadmin.png" alt="Logo" />
//     <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
//       duration-500 ease-in-out text-center">
//       Admin
//     </span>
//   </div>
//   <ul>
//           <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
//       hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
//       duration-500 ease-in-out">
//       <a href="/AdminDashboard" className="focus:text-pink-500 dark-focus:text-pink-400
//         focus:outline-none w-full transition duration-500 ease-in-out">
//         <span className="flex items-center">
//           <span className="ml-4 capitalize">Dashboard</span>
//         </span>
//       </a>
//     </li>
//     <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
//       hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
//       duration-500 ease-in-out">
//       <a href="/ProblemOrder" className="focus:text-pink-500 dark-focus:text-pink-400
//         focus:outline-none w-full transition duration-500 ease-in-out">
//         <span className="flex items-center">
//           <span className="ml-4 capitalize">List delivery problems</span>
//         </span>
//       </a>
//     </li>
//     <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
//       hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
//       duration-500 ease-in-out">
//       <a href="/ClientOrder" className="focus:text-pink-500 dark-focus:text-pink-400
//         focus:outline-none w-full transition duration-500 ease-in-out">
//         <span className="flex items-center">
//           <span className="ml-4 capitalize">Confirm orders</span>
//         </span>
//       </a>
//     </li>
//             <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
//       hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
//       duration-500 ease-in-out">
//       <a href="/Delivery" className="focus:text-pink-500 dark-focus:text-pink-400
//         focus:outline-none w-full transition duration-500 ease-in-out">
//         <span className="flex items-center">
//           <span className="ml-4 capitalize">Add delivery people</span>
//         </span>
//       </a>
//     </li>
//   </ul>
//   <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
//     <a href="/Logout" class="flex items-center">
//       <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
//         <path
//           d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
//           2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
//           0 012-2h9z"></path>
//       </svg>
//       <span class="ml-4 capitalize font-medium">log out</span>
//     </a>

//   </div>
// </nav>

// <main className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
//   duration-500 ease-in-out">
//   <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
//     duration-500 ease-in-out">
//     <h2 className="text-4xl font-medium capitalize">Admins</h2>
//     <div className="mt-1 mb-4 flex items-center justify-between">
//       <span className="text-sm">

//         <strong>199</strong>

//       </span>
//       <div className="flex items-center select-none">
//         <span className="hover:text-pink-500 cursor-pointer mr-3">
//           <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
//             <path d="M505 442.7L405.3
//               343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
//               44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
//               208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
//               2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
//               0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
//               0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
//               128 57.2 128 128 0 70.7-57.2 128-128 128z" />
//           </svg>
//         </span>
//         <input className="bg-transparent focus:outline-none" placeholder="Search in activity" />
//       </div>
      
//     </div>
//     <div className="border dark:border-gray-700 transition duration-500
//       ease-in-out" />








// <div class="container mx-auto px-6 py-8">
//                 <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>

//                 <div class="mt-4">
//                     <div class="flex flex-wrap -mx-6">
//                         <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
//                             <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
//                                 <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
//                                     <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none"
//                                         >
//                                         <path
//                                             d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
//                                             fill="currentColor"></path>
//                                         <path
//                                             d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
//                                             fill="currentColor"></path>
//                                         <path
//                                             d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
//                                             fill="currentColor"></path>
//                                         <path
//                                             d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
//                                             fill="currentColor"></path>
//                                         <path
//                                             d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
//                                             fill="currentColor"></path>
//                                         <path
//                                             d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
//                                             fill="currentColor"></path>
//                                     </svg>
//                                 </div>

//                                 <div class="mx-5">
//                                     <h4 class="text-2xl font-semibold text-gray-700">89</h4>
//                                     <div class="text-gray-500">New Seller</div>
//                                 </div>
//                             </div>
//                         </div>

//             <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
//                             <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
//                                 <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
//                                     <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none">
//                                         <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
//                                             stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
//                                         <path
//                                             d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
//                                             stroke="currentColor" stroke-width="2"></path>
//                                     </svg>
//                                 </div>

//                                 <div class="mx-5">
//                                     <h4 class="text-2xl font-semibold text-gray-700">15</h4>
//                                     <div class="text-gray-500">Orders</div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
//                             <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
//                                 <div class="p-3 rounded-full bg-green-600 bg-opacity-75">
//                                     <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none"
//                                         xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
//                                             stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
//                                         <path
//                                             d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
//                                             stroke="currentColor" stroke-width="2"></path>
//                                     </svg>
//                                 </div>

//                                 <div class="mx-5">
//                                     <h4 class="text-2xl font-semibold text-gray-700">20</h4>
//                                     <div class="text-gray-500">Delivry Man</div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                  </div>
//   </div>

// </main>

// </div> */}

          )

}
export default Dashboard;
