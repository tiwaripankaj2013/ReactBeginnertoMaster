import React from 'react';
import './sidebar.css'

class Sidebar extends React.Component  {
  render(){
    return (
      <div className="doNotPrint">
        <div className="dashboar">
          <div className="leftMenuBar1">
            <div className="logo text-center">
              <img className="mt10" src="../assets/images/Group.png" />
            </div>
            <div className="menue text-center">
              <a href="javascript:void(0)"> <span className="fIcon icon-list ifit"></span></a>
            </div>
            <div className="bst">
              <div class="menue text-center">
                <a href="javascript:void(0)"><span class="fIcon icon-settings32 ifit"></span></a>
              </div>
              <div class="menue text-center">
                <a href="javascript:void(0)"><span class="fIcon icon-notifications2 ifit"></span></a>
              </div>
              <div class="menue text-center">
                <a href="javascript:void(0)">
                  <img class="help" src="../assets/images/help.png" />
                </a>
              </div>
              <div class="avatar">
                <h4 class="avatar-text">test</h4>
              </div>
              <div className="flylist">
                <div className="flylist-link">
                  <a className="">
                    <i className="custom-icon icon-user pr10"></i>Profile</a>
                  <a className="" href="javascript:void(0)">
                    <i className="custom-icon icon-sign-out pr10"></i>Logout</a>
                </div>
              </div>
            </div>
          </div>
          <div id="1" className="">
            <div className="form-group">
              <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search" />
              <h3 className="title">Sygnio Sections</h3>
              <div class="sideMenueWidgit text-center bg-orange">
                <img class="mb10" src="../assets/images/dashboard.png" />
                <i class="custom-icon icon-menu"></i>
                <p>Dashboard</p>
              </div>
              <div className="sideMenueWidgit text-center bg-yellow">
                <img className="mb10" src="../assets/images/Staff_management.png" />
                <i class="custom-icon icon-menu"></i>
                <p>Staff Management</p>
              </div>
              <div className="sideMenueWidgit text-center bg-floor">
                <i className="custom-icon icon-floor"></i>
                <p>Floor Management</p>
              </div>
              <div className="sideMenueWidgit text-center bg-green">
                <img className="mb10" src="../assets/images/Inventory_management.png" />
                <i className="custom-icon icon-menu"></i>
                <p>Inventory Management</p>
              </div>
              <div className="sideMenueWidgit text-center bg-pos">
                <i className="custom-icon icon-floor"></i>
                <p>POS</p>
              </div>
              <div className="sideMenueWidgit text-center bg-transaction">
                <i className="custom-icon icon-floor"></i>
                <p>Transactions</p>
              </div>
              <div className="sideMenueWidgit text-center bg-report">
                <i className="custom-icon icon-floor"></i>
                <p>Reports</p>
              </div>
              <div class="sideMenueWidgit text-center bg-customer">
                <i class="custom-icon icon-floor"></i>
                <p>Customers</p>
              </div>
              <div class="sideMenueWidgit text-center bg-setting">
                <i class="custom-icon icon-floor"></i>
                <p>Settings</p>
              </div>
              <div class="sideMenueWidgit text-center bg-orders" >
                <i class="custom-icon icon-floor"></i>
                <p>Orders</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  } 
}
export default Sidebar;