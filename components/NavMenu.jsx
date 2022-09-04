import { useState, useEffect } from "react";
import {Menu,MenuHandler,MenuList,MenuItem,Button} from "@material-tailwind/react";
import Link from "next/link";

const NavMenu = () => {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Create", path: "/createcoin" },
      { title: "Careers", path: "javascript:void(0)" },
      { title: "Guides", path: "javascript:void(0)" },
      { title: "Partners", path: "javascript:void(0)" }
  ]

    return (
        <>
        <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                    <div className="flex justify-between">
                        <a href="javascript:void(0)">
                            <img
                                src="https://www.floatui.com/logo.svg" 
                                width={120} 
                                height={50}
                                alt="Float UI logo"
                            />
                        </a>
                        <Menu>
      <MenuHandler>
        <div>Open Menu</div>
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
                </nav>
            </header>
        </>
    )
}

export default NavMenu;