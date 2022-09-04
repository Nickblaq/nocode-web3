import { useState, useEffect } from "react";
import {Menu,MenuHandler,MenuList,MenuItem, Navbar,MobileNav,Typography,Button,IconButton} from "@material-tailwind/react";
import Link from "next/link";

const NavMenu = () => {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Create", path: "/createcoin" },
          { title: "My Contracts", path: "/contracts" },
      { title: "Swap", path: "/swap" },
      { title: "Locked Liquidity", path: "/locked" },
  
  ]

  const navList = (
    <ul className="mb-45 mt-2 flex gap-2 mb-0 mt-0 items-center gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Create
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Swap
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Locked Liquidity
        </a>
      </Typography>
    </ul>
  );

    return (
        <>
        <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:space-x-6">
                    <div className="flex justify-between md:gap-32">
                        <Link href="/">
                            <Typography 
                            as='h1'
                            variant='large'
                            className='font-black text-3xl  font-serif'
                            >PISSAR</Typography>
                        </Link>
                        <div className="hidden md:block">{navList}</div>
                        <div className="md:hidden">
                        <Menu>
      <MenuHandler>
        <p className="text-xl font-bold">Open Menu</p>
      </MenuHandler>
      <MenuList>
        {
        navigation.map((item, idx) => (
            <Link href={item.path} key={idx}>
            <MenuItem>
            {item.title}
            </MenuItem>
            </Link>
        ))
    }
      </MenuList>
    </Menu>
    </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavMenu;