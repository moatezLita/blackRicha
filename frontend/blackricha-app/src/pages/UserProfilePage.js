import React from 'react';
import Profile from '../components/profile/profile';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/profile/sideBar';


const UserProfilePage = () => {
  return (
      
      
      <div className=" flex lg:flex-row  h-auto  lg:p-8 lg:space-x-4 ">
                {/* <SideBarAccount /> */}
                {/* <SideBarAccountH/> */}
                <div className="w-18 lg:w-auto ">
                    <SideBar />
                </div>
                {/* Render this component for screen sizes smaller than md */}
               
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

                    <main>
                        <div className=" mx-auto max-w-screen-2xl  ">
                            {/* {children} */}
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
    
    
    


    
  );
}

export default UserProfilePage;
