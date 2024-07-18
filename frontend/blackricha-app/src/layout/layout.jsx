import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer1 from '../components/common/Footer';

export default function Layout() {

    return (
        <div className="bg-gray-100  min-h-screen	 ">

            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

                <Header/>
                <main className=''>
                    <Outlet />

                </main>
                <Footer1/>

            </div>
        </div>
    )


}