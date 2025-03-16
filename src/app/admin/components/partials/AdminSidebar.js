import React from 'react'
import Link from 'next/link'
const AdminSidebar = () => {
  return (

  
    <aside id="sidebar" 
    className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">

        <ul className="list-reset flex flex-col">
            <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                <a href="#"
                   className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                    <i className="fas fa-tachometer-alt float-left mx-2"></i>
                    Dashboard
                    <span><i className="fas fa-angle-right float-right"></i></span>
                </a>
            </li>
      
            <li className="w-full h-full py-3 px-2 border-b border-300-border">




                <Link href="/admin/admin-categories">
                      
                    <i className="fas fa-square-full float-left mx-2"></i>
                    Categories
                    <span><i className="fa fa-angle-right float-right"></i></span>
             
            </Link>
       


            </li>
            <li className="w-full h-full py-3 px-2">
                <Link href="/admin/providers"
                   className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                    <i className="far fa-file float-left mx-2"></i>
                         Providers
                    <span><i className="fa fa-angle-down float-right"></i></span>
                </Link>
           
            </li>
        </ul>

    </aside>
   





  )
}

export default AdminSidebar;