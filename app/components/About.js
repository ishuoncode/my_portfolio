'use client';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from './CustomText';
import { fadeIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';
import {
  FramerSvg,
  NextjsSVG,
  ReactSVG,
  TailwindSVG,
  vscode,
  NestSVG
} from '@/constant/svgFile';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className=" absolute   sm:left-[52%] left-[13%] sm:top-[40%] top-[19%]  h-[50vh] w-[204px] rotate-[-53.13deg] bg-[#2d4898bf] blur-[200px] lg:left-[60%] lg:top-[21%] lg:h-[70vh] lg:w-[300px]"
      style={{zIndex:"-1"}}></div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto flex w-full flex-col gap-8 lg:flex-row "
      >
        <section className="mxs:ml-[7%] ml-[4%] mt-[60px]  flex justify-between">
          <div className="mt-[16px] h-[400px] flex-1 items-center ">
            <TypingText title="| About " textStyles={'w-[250px]'} />

            <TitleText
              title={
                <>
                  <p className="mt-[15px] text-[34px] text-indigo-300">
                    Hi! 🤟,
                  </p>
                </>
              }
              textStyles={'w-[300px]'}
            />
            <TitleText
              title={
                <p className="mt-[-7px] sm:w-[453px] w-[323px] text-[#ede9fe]">
                  I&apos;m{' '}
                  <span className="font-bold text-indigo-400">Ishu</span> Singh,
                </p>
              }
              textStyles={'w-[300px]'}
            />
            <p className="mxs:w-[404px] w-[323px] text-[20px] text-white lg:w-[404px]">
              a{' '}
              <span className="  font-semibold  text-indigo-400 ">
                full-stack developer
              </span>{' '}
              who loves intuitive,
              clean and modern UI design.
            </p>
            <div className="mt-[50px] flex sm:w-[500px] w-[257px]  items-center justify-items-center"
            style={{zIndex:"10"}}>
              <div className='cursor-pointer'>
                {/* <button className={`${buttonStyle}`}>Get in Touch</button> */}
                 <a href="/Contact" > 
                  <button className="rounded-[10px] bg-indigo-500 p-[10px] font-semibold  text-white hover:bg-[#4a4fef]">
                    Get in Touch
                  </button>
                </a>
              </div>
              <div className="ml-[20px] cursor-ponter ">
                <a
                  className="flex"
                  href="https://drive.google.com/file/d/1NGAYcadnT74QkiYJ-W-micK4T_KLT39D/view?usp=sharing"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-[10px] h-5 w-5 items-center"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </div>
          <div className=" llg:block z-[1]  flex hidden flex-1 lg:w-[442px] xl:w-[880px] ">
            <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
              <Image
                src="/assest/my-photo.png"
                alt="my-photo"
                height={500}
                width={500}
                // className='w-[80%] lg:w-[80%]'
              />
            </motion.div>
          </div>
        </section>
      </motion.div>
      <div className="  mxs:mx-[7%] ml-[4%] mt-[50px] w-auto flex-col gap-8">
        <p className="text-gray-400">Current favorite tech stack/tools:</p>
        <div className="mt-[15px] flex w-[300px] items-start justify-start">
          {ReactSVG}
          {NextjsSVG}
          {FramerSvg}

          {TailwindSVG}
          {vscode}
          {NestSVG}
        </div>
      </div>
    </>
  );
}
