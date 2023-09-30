import Link from "next/link";
import React, { useEffect, useState } from "react";
const Dashboard = ({ isHidden }) => {
  const [darkMode, setDarkMode] = useState(false);
  const lightStyles = {
    "--textcolor2": "#000",
    "--textcolor3": "rgb(15 23 42 / 74%)",
    "--arrow-down": "rgb(195 195 195 / 82%)",
    "--hidden-list": "rgb(229, 231, 235)",
    "--nav": "rgb(79, 70, 229)",
    "--boxcolor": "#f8f8f8",
    "--cardbox": "#fff",
    "--cardbox2": "#f8f8f9",
    "--textcircle": "rgb(15, 23, 42)",
    "--boxShadow":
      "0 0 rgba(195, 195, 195, 0.82), 0 0 rgba(195, 195, 195, 0.82),0 1px 3px 0 rgba(195, 195, 195, 0.82), 0 1px 2px -1px rgba(195, 195, 195, 0.82)",

    "--hover-users": "rgb(229, 231, 235)",
    "--hover-users-text": "rgb(79, 70, 229)",
  };

  const darkStyles = {
    "--nav": "rgb(15, 23, 42)",
    "--boxcolor": "rgb(15, 23, 42)",
    "--textcircle": "rgb(255, 255, 255)",
    "--textcolor2": "#fff",
    "--hidden-list": "rgb(15, 23, 42)",
    "--textcolor3": "#fff",
    "--arrow-down": "rgb(64 74 97)",
    "--cardbox": "rgb(47 55 68)",
    "--cardbox2": "#444f62",
    "--boxShadow":
      "0 0 rgba(195, 195, 195, 0.10), 0 0 rgba(195, 195, 195, 0.10),0 1px 3px 0 rgba(195, 195, 195, 0.10), 0 1px 2px -1px rgba(195, 195, 195, 0.10)",
    "--hover-users": "rgb(17 33 66)",
    "--hover-users-text": "rgb(79, 70, 229)",
  };
  const applyStyles = (isDarkMode) => {
    const styles = isDarkMode ? darkStyles : lightStyles;
    Object.entries(styles).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // ذخیره مقدار newDarkMode در لوکال استوریج
    localStorage.setItem("darkMode", newDarkMode.toString());

    // اعمال استایل‌ها بر اساس مود دارک جدید
    applyStyles(newDarkMode);
  };

  // بررسی مقدار از localStorage در هنگام بارگذاری اولیه
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      const isDarkMode = savedDarkMode === "true";
      setDarkMode(isDarkMode);
      applyStyles(isDarkMode);
    }
  }, []);

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
