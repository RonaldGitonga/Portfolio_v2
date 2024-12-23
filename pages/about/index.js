import React,{useState} from "react";


// icons

import {
 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaRaspberryPi,
  FaFigma,
  FaPhp,
  FaJava,
  FaNodeJs
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiPrisma,
  SiPostgresql,


  SiMongodb,
  SiArduino,
  SiTailwindcss,
} from "react-icons/si";
import {GrGraphQl, }from 'react-icons/gr';


//  data
//to be replaced with sanity/graphql dashboard data
const aboutData = [
  {
    title: 'Technologies',
    info: [
      {
        title: 'Front End ',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTailwindcss/>,
          <SiFramer />,
          
        ],
      },
      {
        title: 'Back End ',
        icons: [<FaPhp/>,<FaJava/>,<FaNodeJs/>,<SiMongodb/>,<SiPostgresql/>,<GrGraphQl/>,<SiPrisma/>, ],
      },
      {
        title: 'IoT',
        icons: [<SiArduino/>, <FaRaspberryPi/> ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, ],
      },
    ],
  },

  {
    title: 'experience',
    info: [
   
      {
        title: 'Software Engineer - Kiota Systems',
        stage: '2020 - Present',
      },
      {
        title: 'Digital Financial Services Intern - KCB BANK',
        stage: '2019 - 2020',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Bachelors Business Information Technology - Strathmore University, NBI, KE',
        stage: '2020',
      },
      {
        title: ' Cisco Certified Network Associate',
        stage: '2015',
      },
      {
        title: 'Microsoft Office Specialist - Makini College, NBI, KE',
        stage: '2012',
      },
    ],
  },
];

//framer 
import {motion } from 'framer-motion'
import { fadeIn } from "../../variants";

//components
import Avatar from "../../components/Avatar";
import Circles from '../../components/Circles'

//counter
import CountUp from "react-countup";

const About = () => {
  const[index,setIndex]=useState(0);
  return (
    <div className="h-full   bg-primary/30 py-32 text-center xl:text-left "  >
      <Circles className/>
      {/* {avatar image} */}
      {/* <motion.div 
           variants={fadeIn('up',0.5)}
           initial='hidden'
           animate='show'
           exit='hidden'
           transition={{duration:1,ease:'easeInOut'}}
        className="w-full h-full max-w-[400px] max-h-[400px] absolute -bottom-1
        lg:bottom-0 lg:right-[8%]">
          <Avatar/>
        </motion.div>  */}

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2 
            variants={fadeIn('right',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          
            className="h2">
            Captivating <span className="text-accent">stories</span> birth magnificent designs
           
          </motion.h2>
          <motion.p 
            variants={fadeIn('right',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            
            className="max-w-[500px] mx-auto xl:mx-4 mb-6 xl:mb:12 px-2 xl:px-0">
            4 years ago, I began freelancing as software engineer. Since then I have
            done remote work for clients and organizations as well as collaborated on digital products
            for both business and consumer use.
              
          </motion.p>
         {/* {counters} */}
         <motion.div 
            variants={fadeIn('right',0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* {experience} */}
            <div className="relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0">

              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2"> 
                <CountUp start={0} end={4} duration={10}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">Years of experience</div>


            </div>
          {/* {projects} */}

            <div className="relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0">

              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2"> 
                <CountUp start={0} end={32} duration={10}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">Completed Projects</div>


            </div>

          

          </div>

         </motion.div>
        </div>
        {/* {info} */}
        <motion.div 
            variants={fadeIn('left',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
         {/* { about data pulled from api} */}
         {aboutData.map((data,itemIndex)=>{
          return(
            <div key={itemIndex}
            className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} xl:mt-[50px] cursor-pointer capitalize xl:text-lg relative after:w-8
            after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            onClick={()=>setIndex(itemIndex)}>

              {data.title}

            </div>
          )
         })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((info,itemIndex)=>{
              return(
                <div key={itemIndex} className="flex flex-1 flex-col md:flex-row 
                max-w-max gap-x-2 items-center text-white/60">
                  {/* {title} */}
                  <div className="font-light mb-2 md:mb-0">{info.title}</div>

                  <div className="hidden md:flex "> - </div>

                  <div>{info.stage}</div>
                  <div className="flex gap-x-4">
                  {/* {icons} */}
                    {info.icons?.map((icon,index)=>{
                      return(
                        <div key={index}
                        className="text-2xl text-white">
                          {icon }
                        </div>
                      )
                    })}

                  </div>
   
                </div>
              )
            })}
        </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
