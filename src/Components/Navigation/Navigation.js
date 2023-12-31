import React from "react";
import {
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { useWindowScroll } from 'react-use';
export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  const { user } = useSelector(state => state.auth);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 
     text-white">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/"
          className="flex items-center">
          Home
        </Link>
      </Typography>

      {user?.email && <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/developers"
          className="flex items-center">
          Developers
        </Link>
      </Typography>}
      {user?.email &&
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal"
        >
          <Link to="/companies"
            className="flex items-center">
            Companies
          </Link>
        </Typography>
      }
      {user?.email &&
        <Typography
          as="li"
          variant="small"
          className="p-1 font-normal"
        >
          <Link to="/circulars"
            className="flex items-center">
            Circulars
          </Link>
        </Typography>
      }
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link to="/contactPage" className="flex items-center">
          Contact us
        </Link>
      </Typography>



      <UserMenu />
    </ul>
  );

  const { y } = useWindowScroll();

  const path = window.location.pathname === "/";


  return (

    <div className={`${y > "896" && "bg-light-blue-900"} ${!path && "bg-light-blue-900 "} fixed    inset-0 z-10 border-none h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4`}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to='/'

          className="mr-4 cursor-pointer py-1.5 font-medium text-current text-white "
        >
          Developer
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      {<Collapse open={openNav}>
        {navList}
      </Collapse>}
    </div>

  );
}