import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition} from '@headlessui/react'
import { ethers, utils } from 'ethers';
import {Menu,MenuHandler,MenuList,MenuItem, Navbar,MobileNav,Typography,Button,IconButton} from "@material-tailwind/react";
import Link from "next/link";
import {   useAccount, useConnect , useDisconnect, useNetwork, useSwitchNetwork, useBalance} from 'wagmi'
import {BsThreeDots} from 'react-icons/bs'
import { useIsMounted } from "../hooks/useIsMounted";

const NavMenu = () => {
  let [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState(false)


  const { error: chainError, isLoading: isswitchLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()
    const { address, connector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
    const { chain, chains } = useNetwork()

    const { disconnect } = useDisconnect()
    function closeModal() {
        console.log('close modal')
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

      const truncateAddress = (oxAddress) => {
        // This help solves the null error
        if (oxAddress == null) return '';
        return oxAddress.slice(0, 6) + "..." + oxAddress.slice(-5);
      };

      const isMounted = useIsMounted()


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
        <Link href="/createcoin" className="flex items-center">
          Create
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link href="/swap" className="flex items-center">
          Swap
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <Link href="/locked" className="flex items-center">
          Locked Liquidity
        </Link>
      </Typography>
    </ul>
  );
  //  <p className="text-lg font-semibold px-2 py-1 rounded-lg border border-opacity-70 border-gray-500">Open Menu</p>

    return (
        <>
        <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:space-x-6">
                    <div className="flex justify-between md:gap-32">
                        <Link href="/">
                            <Typography 
                            as='h1'
                            variant='large'
                            className='font-black text-3xl  font-serif cursor-pointer'
                            >PISSAR</Typography>
                        </Link>
                        <div className="hidden md:flex items-center gap-2">
                          <div className="mr-8">{navList}</div>
                          <p
                        onClick={openModal}
                        className=" text-lg font-semibold px-2 py-1 rounded-lg border border-opacity-70 border-gray-500 cursor-pointer">{isConnected ? 'Account' : 'Connect'}</p>
                          </div>
                        <div className="md:hidden flex items-center justify-center gap-3">
                        <p
                        onClick={openModal}
                        className="text-lg font-semibold px-2 py-1 rounded-lg border border-opacity-70 border-gray-500 cursor-pointer">{isConnected ? 'Account' : 'Connect'}</p>
                        <Menu
                        open= {state}
                        animate={{
                          mount: { y: 0 },
                          unmount: { y: 25 },
                        }}
                        >
      <div onClick={()=>setState(!state)}>
      <MenuHandler
      
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </MenuHandler>
      </div>
      <MenuList className="bg-gray-900">
        {
        navigation.map((item, idx) => (
            <Link href={item.path} key={idx}>
            <MenuItem
            onClick={()=>setState(false)}
            className="hover:bg-gray-700 active:bg-gray-700 ">
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


            <Transition appear show={isOpen} as={Fragment}> 
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto py-8"
        //   design the modal full body here
          onClose={closeModal}
        >
                 <div className="flex items-center min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-gray-900 rounded-md shadow-lg border border-opacity-70 border-gray-500">
                        <div className="mt-3">
                            <Dialog.Title>
                            <div className="flex items-center justify-between h-12 mx-auto px-8">
                                <p className='text-xl font-bold'>{isConnected ? 'User profile' : 'Connect your wallet'}</p>
                                <div
                                className="justify-self-end"
                                onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>

                            </div>
                            </Dialog.Title>
                            <div className="mt-2 text-center flex flex-col">
                            {isConnected ?
 (
      <div>
        {!switchNetwork &&
        <div className='flex justify-center items-center'>
            <p className='pr-2'>Click to switch:</p>{" "}
        {chains.map((x) => (
        <button
        className='bg-red-500 py-2 px-2  rounded-sm'
          disabled={!switchNetwork || x.id === chain?.id}
          key={x.id}
          onClick={() => switchNetwork?.(x.id)}
        >
          {x.name}
          {isswitchLoading && pendingChainId === x.id && ' switching'}
        </button>
      ))}
      </div>
      }
{/* <p> Balance: {data?.formatted} {data?.symbol}</p> */}
      <div className='text-center'>{chainError && chainError.message}</div>
        <div className='pb-6 flex items-center justify-center gap-4'>
            {/* User Connected address: {" "} */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>


            {
            truncateAddress(address)
        }</div>
        <div className='pb-6 flex items-center justify-center gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
</svg>


           {connector?.name} wallet</div>
        {chain && <div className='pb-6 flex items-center justify-center gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>


        {chain?.name}</div>}
        <div className=''>
        <button
        className='text-lg font-semibold px-2 py-1 rounded-lg border border-opacity-70 border-gray-500'
        onClick={disconnect}>Disconnect</button>
        </div>
      </div>
    )
    :
    (
        <div className='flex flex-col gap-3'>
                            {connectors.map((connector) => (
                              <div
                              key={connector.id}
                              className={!connector.ready ? 'hidden' : 'block'}>
        <button
        className='
        w-full text-lg font-semibold px-2 py-1 rounded-lg border border-opacity-70 border-gray-500'
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' Unsupported network'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            'connecting...'}
        </button>
        </div>
         ))}
         </div>
         )
  }

  

                            </div>
                        </div>
            {!isConnected && 
                        <div className='flex items-center '>
                            <a 
                            target="_blank" rel="noopener noreferrer" 
                            href='https://metamask.io/'>
                        <div className="flex justify-center items-center py-4">
                            <p className='text-white underline'>Get metamask</p>
                    </div>
                        </a>
{/*         
                        <button
        className='bg-red-500 py-2 px-2  rounded-sm mt-4 mb-2'
        onClick={closeModal}>Close</button> */}
                        </div>
                        }
                        </div>

            </Transition.Child>
            </div>

        </Dialog>
        </Transition>
        </>
    )
}

export default NavMenu;