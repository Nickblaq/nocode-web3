import { useState } from 'react'
import { Button } from '@material-tailwind/react'
import {FaLaptopCode} from 'react-icons/fa'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {BsEmojiSmile} from 'react-icons/bs'
import {AiOutlineSafety} from 'react-icons/ai'
import Link from 'next/link'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {


  


  return (
   <div className='animate__animated animate__fadeInUp'>
   <section>
  <div className="px-4 pt-16 md:pb-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
      >
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="/intro3.gif"
          alt="Man using a computer"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl text-[#1ab675]">BINANCE TOKEN GENERATOR</h2>

        <p className="mt-4">
        Our mission is to make token creation easy and accessible for everyone. You can create your own token in less than 1 minute.
        </p>

      <Link href='/createcoin'>
        <div
          className="inline-flex items-center px-8 py-3 mt-8 text-white bg-[#1ab675] border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/get-started"
        >
          <span className="text-sm font-medium"> Get Started </span>

          <svg
            className="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>



<section className="">
  <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl text-[#1ab675]">Features</h2>

      <p className="mt-4 text-gray-300">
       A no-code token generator that allows people from diverse backgrounds to create their tokens without needing to write any line of code.
      </p>
    </div>

    <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <FaLaptopCode className='h-8 w-8 text-[#1ab675]' />

        <h3 className="mt-4 text-xl font-bold text-[#1ab675]">No coding required</h3>

        <p className="mt-1 text-sm text-gray-300">
        You don&apos;t need to be a developer or have any programming knowledge.
        </p>
      </div>

      <div
        className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <RiMoneyDollarCircleLine className='h-8 w-8 text-[#1ab675]' />

        <h3 className="mt-4 text-xl font-bold text-[#1ab675]">Make money</h3>

        <p className="mt-1 text-sm text-gray-300">
        Potential to make millions of dollar with your own tokens!
        </p>
      </div>

      <div
        className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <BsEmojiSmile className='h-8 w-8 text-[#1ab675]' />

        <h3 className="mt-4 text-xl font-bold text-[#1ab675]">Be proud</h3>

        <p className="mt-1 text-sm text-gray-300">
        Share your tokens with your family, friends and the world.
        </p>
      </div>

      <div
       className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
        href="/services/digital-campaigns"
      >
        <AiOutlineSafety className='h-8 w-8 text-[#1ab675]' />

        <h3 className="mt-4 text-xl font-bold text-[#1ab675]">Safe</h3>

        <p className="mt-1 text-sm text-gray-300">
        All contracts are fully tested and audited.
        </p>
      </div>
    </div>
  </div>
</section>

<ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
   </div>
  )
}










// Welcome to Mint
// Powered by TrustSwap
// Create your own token within minutes with only a few clicks of your mouse.

// img
// No Coding Experience Required
// Our token generator makes it easy for anyone to create a token in minutes.

// img
// Powerful Plug-in Features
// Advanced features can be easily added to your token with the press of a button.

// img
// Tokens Sent To Metamask
// Have your new token sent directly to your Metamask wallet upon creation.