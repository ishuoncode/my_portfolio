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
      className="relative lg:px-6 lg:py-5 sm:px-16 sm:px-1 sm:py-1 "
      id="about"
    >
      <div className="col-start-1 col-end-2 md:flex items-center justify-between ">
        <Link href={'/'}>
          <h1 className="text-xl text-white sm:px-1 md:text-center ">
            Ishu<span className="font-bold text-indigo-300">OnCode</span>
          </h1>
        </Link>
        <div className=" hidden text-black-500  flex  items-center justify-center  md:flex">
          <Link href={'/'}>
            <span className="animation-hover relative inline-block cursor-pointer md:px-5 md:py-2 duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5">
              About
            </span>
          </Link>
          <Link href="/#work">
            <span className="animation-hover relative inline-block cursor-pointer md:px-5 md:py-2 duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5">
              Projects
            </span>
          </Link>
          <a
            href="https://drive.google.com/file/d/1p72uUYCW8iLbL__Qv32L0Miml_C5lzbu/view?usp=drive_link"
            target="_blank"
          >
            <span className="animation-hover relative inline-block cursor-pointer md:px-5 md:py-2 duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5">
              Resume
            </span>
          </a>
          <button
            className="animation-hover relative inline-block cursor-pointer md:px-5 md:py-2 duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5"
            onClick={handleMailClick}
          >
            Mail
          </button>
          <Link href={'/Contact'}>
            <span className="animation-hover relative inline-block cursor-pointer md:px-5 md:py-2 duration-500 hover:scale-[1.2] sm:px-2.5 sm:py-2.5">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
