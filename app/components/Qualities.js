'use client';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from './CustomText';
import { QualitiesData } from '@/constant/data';
import { fadeIn } from '@/utils/motion';

export default function Qualities() {
  return (
    <motion.div
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative sm:h-[900px] lg:h-[800px] h-[990px] "
    >
      {/* <TypingText title="| Design Philosophy and Expertise" /> */}
      <TitleText
        title={
          <>
            <p className="font-semi-bold mt-[15px] text-center text-[34px] text-indigo-300">
              Design Philosophy and Expertise
            </p>
          </>
        }
      />
     
      <div className="flex">
        <div className="ml-[15%] mt-[20px] z-[1] ">
          {QualitiesData.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn('bottom', 'spring', index * 0.5, 0.75)}
            >
              <TypingText
                title={feature.title}
                textsize="text-lg"
                textStyles=" mt-[50px] text-indigo-300"
              />
              <p className="text-[28px] font-black text-[#E2E8F0]">
                {feature.typingtext}{' '}
              </p>
              <p className="mt-[10px] w-[65%] text-[#9BA2AE]">{feature.text}</p>
            </motion.div>
          ))}
        </div>
        <div className=" absolute lg:left-[500px] sm:left-[260px] xs:left-[24px] sm:top-[100px] xs:top-[350px] z-0 lg:h-[500px] h-[300px]  w-[300px] rotate-[-80.13deg] bg-[#2d4898bf] blur-[200px]"></div>
      
      </div>
    </motion.div>
  );
}
