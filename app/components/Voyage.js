'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { roll180, fadeIn } from '@/utils/motion';
import { TypingText } from './CustomText';
import { VoyageFeatures } from '@/constant/data';
import { check } from '@/constant/svgFile';
import Link from 'next/link';
import useWindowWidth from '@/hooks/WindowWidth';

export default function Voyage() {
  const [changeImageNumber, setImageNumberHandler] = useState('1');
  
  const windowWidth = useWindowWidth();

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
      className="relative lg:h-[710px] sm:h-[1058px] sm:h-[1140px] h-[1450px] flex-col"
    >
      {/* <div className=' absolute h-[500px] w-[400px] left-[300px] mt-[20px] top-[20px]  z-[2] bg-[green] rotate-[-53.13deg]'></div> */}
      <div className=" absolute sm:left-[101px] xs:left-[-138px] left-[-83px] sm:top-[-173px] xs:top-[-260px] z-0 h-[500px]  min-h-screen md:w-[400px] w-[200px] rotate-[-53.13deg] bg-[#2d4898bf] blur-[200px]"
      style={{zIndex:"-1"}}></div>
      <div className=" lg:flex h-[400px] ">
        <div className=" lg:flex-1 ">
          {windowWidth < 492 ? <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
            <div className="  xl:mx-[20%] lg:mx-[7%] " style={{zIndex:"10"}}>
              {' '}
              <Image
                src={`/assest/Voyage-${changeImageNumber}.png`}
                alt={`Voyage-${changeImageNumber}`}
                height={700}
                width={500}
                className=" h-[334px] w-auto mx-auto cursor-pointer rounded-[15px]  "
                onClick={setImage}
                
              />
            </div>
          </motion.div>:<motion.div variants={roll180( 0.3, 1)}>
            <div className="  xl:mx-[20%] lg:mx-[7%] " style={{zIndex:"10"}}>
              {' '}
              <Image
                src={`/assest/Voyage-${changeImageNumber}.png`}
                alt={`Voyage-${changeImageNumber}`}
                height={700}
                width={500}
                className=" h-[334px] w-auto mx-auto cursor-pointer rounded-[15px]  "
                onClick={setImage}
                
              />
            </div>
          </motion.div>}
          
        </div>
        <div className="lg:mt-[-87px] mt-[76px] flex-1">
          <div className="text-center">
            <TypingText title="| Voyage " />
          </div>
          <div className="mx-[70px] mt-[30px]">
            <ul className="ml-6 list-outside  font-bold leading-[35px] text-gray-300  ">
              {VoyageFeatures.map((feature, index) => (
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
          <Link
            href="https://voyage-nnyl.onrender.com/"
            target="_blank" 
          >
            <button
              className={`ml-[85px] mt-[30px] w-[200px] rounded-[10px] bg-indigo-500 p-[10px] font-semibold  text-white hover:bg-[#4a4fef]`}
            >
              Click to visit
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
