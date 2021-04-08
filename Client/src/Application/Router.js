import React from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import PrivateRoute from '../authtification/PrivateRoute';
import PrivateRouteAdmin from '../authtification/PrivateRouteAdmin';
import PrivateRouteSeller from '../authtification/PrivateRouteSeller';
import PrivateRouteClient from '../authtification/PrivateClient';
// ______________HOME__________________
import Home from '../Home/HomePage';
import sortbyname from '../Home/Sort/ProductSortByN';
import sortbyprice from '../Home/Sort/ProductSortByP';
import CheckOut from '../Home/CheckOut';
import Login from '../Home/login';
import sousProduct from '../Home/SousCaty';
import Payment from '../Home/Payment';
import test from '../text';
// ______________SUPERADMIN__________________
//Admins
import LoginSup from '../SuperAdmin/login';
import ListAdmins from '../SuperAdmin/ListAdmins';
import addadmins from '../SuperAdmin/addAdmins';
import EditeAdmin from '../SuperAdmin/EditeAdmin';
//seller
import ListSeller from '../SuperAdmin/ListSeller';
import EditeSeller from '../SuperAdmin/EditSeller';
// ______________ADMIN__________________
import Dashboard from '../Admins/Dashboard';
import Delivery from '../Admins/DeliveryList';
import LoginAdmin from '../Admins/login';
import addDelivry from '../Admins/addDelivry';
import EditDelivry from '../Admins/editDelivery';
import Order from '../Admins/Order';
import DelivtyProblem from '../Admins/DelivryProblem';
// ______________SELLERS__________________
import Loginseller from '../Sellers/loginseller';
import BecomeSeller from '../Sellers/becomeseller';
import DashboardSeller from '../Sellers/dashboard-seller';
import Statistics from '../Sellers/statistics';
import SellerProduct from '../Sellers/seller-product';
import EditeProduct from '../Sellers/EditeProduct';
import AddSellerProduct from '../Sellers/Add-Product';
import Packs from '../Sellers/Packs';



function Routes() {
  return (
<BrowserRouter>
      <Switch> 
      {/* // ______________Client Route__________________ */}
          <Route  path="/" exact component={Home}/> 
          <PrivateRouteClient  path="/Home/Sortbyname" exact component={sortbyname}/> 
          <PrivateRouteClient  path="/Home/Sortbyprice" exact component={sortbyprice}/> 
          <PrivateRouteClient  path="/Home/CheckOut" exact component={CheckOut}/> 
          <Route  path="/Home/Login" exact component={Login}/> 
           <PrivateRouteClient  path="/sousProduct" exact component={sousProduct}/> 
           <PrivateRouteClient  path="/Home/Payment" exact component={Payment}/> 
           <Route  path="/test" exact component={test}/> 


      {/* // ______________Client Route__________________ */}
        {/*Syper Admin Admins */}
        <Route  path="/SuperAdmin" exact component={LoginSup}/> 
        <PrivateRoute  path="/AdminList" exact component={ListAdmins}/> 
        <PrivateRoute  path="/addadmins" exact component={addadmins}/> 
        <PrivateRoute  path="/EditeAdmin" exact component={EditeAdmin}/> 
        <PrivateRoute  path="/ListSeller" exact component={ListSeller}/> 
        <PrivateRoute  path="/editseller" exact component={EditeSeller}/> 

        {/* Admins */}
        <PrivateRouteAdmin  path="/Delivery" exact component={Delivery}/> 
        <PrivateRouteAdmin  path="/AdminDashboard" exact component={Dashboard}/>
        <PrivateRouteAdmin  path="/AddDelivery" exact component={addDelivry}/>  
        <Route  path="/Admin" exact component={LoginAdmin}/> 
        <PrivateRouteAdmin  path="/EditDelivry" exact component={EditDelivry}/> 
        <PrivateRouteAdmin  path="/ClientOrder" exact component={Order}/> 
         <PrivateRouteAdmin  path="/ProblemOrder" exact component={DelivtyProblem}/> 
 {/* Sellers */}
        <Route  path="/seller" exact component={Loginseller}/> 
        <PrivateRouteSeller  path="/becomeseller" exact component={BecomeSeller}/>  
        <PrivateRouteSeller  path="/DashboardSeller" exact component={DashboardSeller}/>  
        <PrivateRouteSeller  path="/Statistics" exact component={Statistics}/> 
        <PrivateRouteSeller  path="/SellerProduct" exact component={SellerProduct}/> 
        <PrivateRouteSeller  path="/AddSellerProduct" exact component={AddSellerProduct}/> 
        <PrivateRouteSeller  path="/Packs" exact component={Packs}/> 
        <PrivateRouteSeller  path="/editProduct" exact component={EditeProduct}/> 
      </Switch>
</BrowserRouter>
  );
}

export default Routes;