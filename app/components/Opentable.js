'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { roll180, fadeIn } from '@/utils/motion';
import { TypingText } from './CustomText';
import { OpenTableFeatures } from '@/constant/data';
import { check } from '@/constant/svgFile';
import Link from 'next/link';

export default function OpenTable() {
  const [changeImageNumber, setImageNumberHandler] = useState('1');
  const setImage = () => {
    changeImageNumber === '1'
      ? setImageNumberHandler('2')
      : setImageNumberHandler('1');
  };
  return (
    <motion.div
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" relative lg:h-[650px] sm:h-[1058px] xs:h-[1355px]  "
    >
        <div className=" absolute lg:right-[125px] right-[170px] lg:top-[-103px] top-[428px] z-0 lg:h-[500px] h-[400px]  w-[400px] rotate-[-53.13deg] bg-[#2d4898bf] blur-[200px]"></div>
      <div className="lg:flex  h-[400px]">
        <div className="mt-[-80px] lg:flex-1">
       
          <div className="text-center">
            <TypingText title="| OpenTable " />
          </div>
          <div className="mx-[70px] mt-[30px]">
            <ul className="ml-6 list-outside  font-bold leading-[35px] text-gray-300  ">
              {OpenTableFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('bottom', 'spring', index * 0.5, 0.75)}
                >
                  <div className="relative right-[30px] top-[25px]">
                    {check}
                  </div>
                  {feature}
                </motion.div>
              ))}
            </ul>
          </div>
          <Link href="https://open-table-git-master-ishuoncode.vercel.app/">
            <button
              className={`ml-[85px] mt-[30px] w-[200px] rounded-[10px] bg-indigo-500 p-[10px] font-semibold  text-white hover:bg-[#4a4fef]`}
            >
              Click to visit
            </button>
          </Link>
        </div>
        <div className="z-[1] lg:flex-1 ">
          <div className=" lg:ml-[0px] mt-[100px] lg:mt-[0px] w-[100%] ">
          
            <motion.div variants={roll180(0.3, 1,-180)}>
              <Image
                src={`/assest/OpenTable-${changeImageNumber}.png`}
                alt={`OpenTable-${changeImageNumber}`}
                height={700}
                width={500}
                className=" h-[334px] w-auto lg:w-[500px]  cursor-pointer rounded-[15px] z-[1] mx-auto xl:mr-[20%] "
                onClick={setImage}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
