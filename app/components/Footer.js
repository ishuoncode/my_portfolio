"use client"
import { GithubSVG, LinkedinSVG, InstaSVG, EmailSVG } from '@/constant/svgFile';
import { handleMailClick } from './setMail';
import Link from 'next/link';
export default function Footer() {

  return (
    <div className="mx-[10%] mt-8 md:mt-16">
      <div className="h-[414px] md:h-[300px]">
        <div className="mxs:w-[400px] w-[]">
            <Link href="#about">
          <p className="text-[#9BA2AE]">About Me</p></Link>
          <p className="mt-4 text-sm text-gray-300 md:mt-[10px]">
            I&apos;m Ishu Singh, a{' '}
            <strong className="text-indigo-300">full-stack developer</strong>{' '}
            who loves intuitive, clean, and modern UI design.
          </p>

          <div className="mt-4 flex w-full justify-center md:mt-[20px] md:w-[300px] md:gap-3.5">
            <a href='https://www.instagram.com/_._ishurajput/'>{InstaSVG}</a>
            <a href='https://www.linkedin.com/in/ishu-singh-software-developer/'>{LinkedinSVG}</a>
            <a href='https://github.com/ishuoncode'>{GithubSVG}</a>
            <button onClick={handleMailClick}>{EmailSVG}</button>
          </div>
        </div>
        <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700 md:my-8" />
        <div className="mt-2 flex flex-col items-center md:mt-[-24px]">
          <p className="md:mr-2 text-white">
            Ishu<span className="font-bold text-indigo-300 ">OnCode</span>
          </p>

          <span className="text-center">
            Copyright &copy; 2023 <strong>Ishu Singh</strong>. All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
