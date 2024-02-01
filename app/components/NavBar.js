'use client';
import { slideIn, navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { handleMailClick } from './setMail';

export default function NavBar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative mxs:px-16 px-[14px] py-5 "
      id="about"
    >
      <div class="flex items-center justify-between md:flex">
        <div class="text-xl text-white sm:px-1 md:text-center">
          <Link href={'/'}>
            <h1 class="inline-block ">
              Ishu<span class="font-bold text-indigo-300">OnCode</span>
            </h1>
          </Link>
        </div>
        <div className=" text-black-500 flex  hidden  items-center justify-center  md:flex">
          <div className=" text-black-500 flex  hidden  items-center justify-center  md:flex">
            <Link href={'/'}>
              <span className="animation-hover relative inline-block cursor-pointer duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5 md:px-5 md:py-2">
                About
              </span>
            </Link>
            <Link href="/#work">
              <span className="animation-hover relative inline-block cursor-pointer duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5 md:px-5 md:py-2">
                Projects
              </span>
            </Link>
            <a
              href="https://drive.google.com/file/d/1euVWoFUGhQUOaXRxTMqqH5wL1Uj3RVRB/view?usp=drive_link"
              target="_blank"
            >
              <span className="animation-hover relative inline-block cursor-pointer duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5 md:px-5 md:py-2">
                Resume
              </span>
            </a>
            <button
              className="animation-hover relative inline-block cursor-pointer duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5 md:px-5 md:py-2"
              onClick={handleMailClick}
            >
              Mail
            </button>
            <Link href={'/Contact'}>
              <span className="animation-hover relative inline-block cursor-pointer duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5 md:px-5 md:py-2">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
