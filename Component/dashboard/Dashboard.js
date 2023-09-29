import Link from "next/link";
import React, { useEffect, useState } from "react";
const Dashboard = ({ isHidden }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let isDarkMode = localStorage.getItem("darkmode");

    if (isDarkMode === null) {
      isDarkMode = false;
      localStorage.setItem("darkmode", isDarkMode);
    } else {
      isDarkMode = isDarkMode === "true";
    }

    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("darkmode");
      document.documentElement.style.setProperty("--boxcolor", "rgb(51, 65, 85)");
    
      document.documentElement.style.setProperty("--textcircle", "rgb(255, 255, 255)");
      document.documentElement.style.setProperty("--cardbox", "#23273b91");
      document.documentElement.style.setProperty("--textcolor3", "#fff");
      document.documentElement.style.setProperty("--hidden-list", "rgb(15, 23, 42)");
    } else {
      document.body.classList.remove("darkmode");
      document.documentElement.style.setProperty("--boxcolor", "#f8fafc");

      document.documentElement.style.setProperty("--textcolor3", "#rgb(15, 23, 42)");
      document.documentElement.style.setProperty("--cardbox", "rgb(255, 255, 255)");
      document.documentElement.style.setProperty("--hidden-list", "rgb(229, 231, 235)");
    }
  }, []);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkmode", newDarkMode);
    if (newDarkMode) {
      document.body.classList.add("darkmode");
      document.documentElement.style.setProperty("--boxcolor", "rgb(51, 65, 85)");
      document.documentElement.style.setProperty("--textcolor", "#ffffff");
      document.documentElement.style.setProperty("--textcolor2", "#fff");
      document.documentElement.style.setProperty("--textcolor3", "#fff");
      document.documentElement.style.setProperty("--arrow-down", "rgb(64 74 97)");
      document.documentElement.style.setProperty("--hidden-list", "rgb(15, 23, 42)");
      document.documentElement.style.setProperty("--nav", "rgb(15, 23, 42)");
      document.documentElement.style.setProperty("--textcircle", "rgb(255, 255, 255)");
      document.documentElement.style.setProperty("--cardbox", "#23273b91");
    } else {
      document.body.classList.remove("darkmode");
      document.documentElement.style.setProperty("--nav", "rgb(79, 70, 229)");
      document.documentElement.style.setProperty("--boxcolor", "#f8fafc");
      document.documentElement.style.setProperty("--textcolor", "rgb(15, 23, 42)");
      document.documentElement.style.setProperty("--textcolor2", "#000");
      document.documentElement.style.setProperty("--textcolor3", "rgb(15, 23, 42)");
      document.documentElement.style.setProperty("--arrow-down", "rgb(195 195 195 / 82%)");
      document.documentElement.style.setProperty("--hidden-list", "rgb(229, 231, 235)");
      document.documentElement.style.setProperty("--textcircle", "rgb(15, 23, 42)");
      document.documentElement.style.setProperty("--cardbox", "rgb(255, 255, 255)");
    }
  };

  return (
    <div>
      <div className={` h-100 ${isHidden ? "hidden" : ""} hiddenlist hidden-list2`}>
        <h1 className='mt-6  dqsh'></h1>{" "}
        <nav>
          <ul className=' '>
            <li className='px-4 py-3 list-s '>
              <i className='fa-duotone fa-moon' onClick={toggleDarkMode}></i>
            </li>
            <Link href={"/"}>
              <li className='px-4 py-3 list-s '>
                <i className='fa-solid fa-house '></i>
              </li>
            </Link>
            <Link href={"/Users"}>
              <li className='px-4 py-3 list-s'>
                <i className='fa-solid fa-users '></i>
              </li>
            </Link>
          </ul>
          <ul className=' '>
            <Link href={"/Pages"}>
              <li className='px-4 py-3 list-s'>
                <i className='fa-solid fa-pager  '></i>
              </li>
            </Link>
            <Link href={"/Posts"}>
              <li className='px-4 py-3 list-s '>
                <i className='fa-solid fa-address-card '></i>
              </li>
            </Link>
            <li className='px-4 py-3 list-s '>
              <i className='fa-solid fa-rectangle-history-circle-user '></i>
            </li>
            <li className='px-4 py-3 list-s'>
              <i className='fa-regular fa-calendar '></i>
            </li>
          </ul>
          <ul className=' '>
            <li className='px-4 py-3 list-s '>
              <i className='fa-solid fa-gear '></i>
            </li>
            <li className='px-4 py-3 list-s'>
              <i className='fa-solid fa-flag '></i>
            </li>
          </ul>
        </nav>
      </div>
      <div className='showlist '>
        <div className='flex justify-between items-baseline mt-8'>
          <h1 className=' ml-6 dqsh'>Dashboard</h1>
          <i className='fa-duotone fa-moon mr-6' onClick={toggleDarkMode}></i>
        </div>
        <nav>
          <ul className='ml-6 mt-6'>
            <h5 className='h5d'>Main</h5>
            <Link href={"/"}>
              <li className='px-4 py-3 list-s  mt-1'>
                <i className='fa-solid fa-house mr-2'></i>Homepage
              </li>
            </Link>
            <Link href={"/Users"}>
              <li className='px-4 py-3 list-s mt-2'>
                <i className='fa-solid fa-users mr-2'></i>Users
              </li>
            </Link>
          </ul>
          <ul className='ml-6 mt-3'>
            <h5 className='h5d'>Lists</h5>
            <Link href={"/Pages"}>
              <li className='px-4 py-3 list-s'>
                <i className='fa-solid fa-pager  mr-2'></i>pages
              </li>
            </Link>
            <Link href={"/Posts"}>
              <li className='px-4 py-3 list-s mt-2'>
                <i className='fa-solid fa-address-card mr-2'></i>Posts
              </li>
            </Link>
            <li className='px-4 py-3 list-s mt-2'>
              <i className='fa-solid fa-rectangle-history-circle-user mr-2'></i>Products
            </li>
            <li className='px-4 py-3 list-s mt-2'>
              <i className='fa-regular fa-calendar mr-2'></i>Calendar
            </li>
          </ul>
          <ul className='ml-6 mt-3'>
            <h5 className='h5d'>Maintenance</h5>
            <li className='px-4 py-3 list-s mt-2'>
              <i className='fa-solid fa-gear mr-2 mt-2'></i>Setting
            </li>
            <li className='px-4 py-3 list-s mt-1'>
              <i className='fa-solid fa-flag mr-2 '></i>Reports
            </li>
          </ul>

          <p className=' mt-8 ml-4 text-start'>Developed By iman♡</p>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
