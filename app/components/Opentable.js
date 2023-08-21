'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { roll180, fadeIn } from '@/utils/motion';
import { TypingText } from './CustomText';
import { OpenTableFeatures } from '@/constant/data';
import { check } from '@/constant/svgFile';
import Link from 'next/link';
import useWindowWidth from '@/hooks/WindowWidth';

export default function OpenTable() {
  const windowWidth=useWindowWidth()
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
      className=" relative xs:h-[1355px] sm:h-[1058px] lg:h-[650px]  "
    >
      <div
        className=" absolute right-[170px] top-[428px] h-[400px] w-[400px]  rotate-[-53.13deg] bg-[#2d4898bf]  blur-[200px] lg:right-[125px] lg:top-[-103px] lg:h-[500px]"
        style={{ zIndex: '-1' }}
      ></div>
      <div className="h-[400px]  lg:flex">
        <div className="mt-[-80px] lg:flex-1">
          <div className="text-center">
            <TypingText title="| OpenTable " />
          </div>
          <div className="mx-[70px] mt-[30px]">
            <ul className="ml-6 list-outside  font-bold leading-[35px] text-gray-300  ">
              {OpenTableFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('bottom', 'spring', index * 0.3, 0.75)}
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
              className={`z-10 ml-[85px] mt-[30px] w-[200px] rounded-[10px] bg-indigo-500 p-[10px]  font-semibold text-white hover:bg-[#4a4fef]`}
            >
              Click to visit
            </button>
          </Link>
        </div>
        <div className="z-[1] lg:flex-1 " style={{ zIndex: '10' }}>
          <div className=" mt-[100px] w-[100%] lg:ml-[0px] lg:mt-[0px] lg:max-w-max-content xl:ml-[18%] lg:absolute lg:right-[6%]">
            {windowWidth < 990 ? (
              <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
                <Image
                  src={`/assest/OpenTable-${changeImageNumber}.png`}
                  alt={`OpenTable-${changeImageNumber}`}
                  height={700}
                  width={500}
                  className=" z-[1] mx-auto h-[334px]  w-auto cursor-pointer rounded-[15px] lg:w-[500px] xl:mr-[20%] "
                  onClick={setImage}
                />
              </motion.div>
            ) : (
              <motion.div variants={roll180(0.3, 1, -180)} className='ml-[20%]'>
                <Image
                  src={`/assest/OpenTable-${changeImageNumber}.png`}
                  alt={`OpenTable-${changeImageNumber}`}
                  height={700}
                  width={500}
                  className=" z-[1] mx-auto  h-[334px]  w-auto cursor-pointer rounded-[15px] lg:w-[500px] xl:mr-[20%] "
                  onClick={setImage}
                  
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
