
function PacksSeller() {



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
                <a href="/SellerProduct" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                  <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Product</span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a href="/Packs" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500  ">
                  <i className="fas fa-chart-area pr-0 md:pr-3 " /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Buy Packs</span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a href="/Statistics" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                  <i className="fa fa-wallet pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Statistics</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div className="bg-gray-800 pt-3">
            <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white mt-8" >
              <h3 className="font-bold pl-2">Pricing Plans</h3>
            </div>
          </div>
          <div className="pricing-table-2  py-6 md:py-12 item-center">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-medium text-black mb-4 md:mb-6">Pricing Plans</h1>
      <p className="text-black-500 xl:mx-12">You have 2 plans to choose from for using Our Store. You can use it for your personal or commercial projects. Just don't forget to share our website or give attribution.</p>
    </div>
    <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">
      <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 ml-56">
        <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Pro</h4>
            <p className="text-gray-600">For small projects</p>
          </div>
          <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
            <div className><span className="text-4xl font-semibold">3000 MAD</span> /MON</div>
          </div>
          <div className="p-6">
            <ul className="leading-loose">
              <li>Upto 50 produits</li>
              <li>Livraison Standard</li>
            </ul>
            <div className="mt-6 py-4">
              <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get PACK</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
        <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Expert</h4>
            <p className="text-gray-600">For multi large scale projects</p>
          </div>
          <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
            <div className><span className="text-4xl font-semibold">5000 MAD</span> /MON</div>
          </div>
          <div className="p-6">
            <ul className="leading-loose">
              <li>Unlimited Product</li>
              <li>Express delivery by MarketStore</li>
            </ul>
            <div className="mt-6 py-4">
              <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get PACK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>

          )
        }
        export default PacksSeller;