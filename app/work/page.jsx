"use client";


import { motion } from "framer-motion";
import React, { useState } from "react";


import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'project 1',
    description: "Linkedin project is an excellent showcase of my full-stack development capabilities, demonstrating proficiency in both frontend and backend technologies, authentication management, and user interface design.",
    stack: [{ name: "NEXT.JS"}, { name: "REACT.JS"}, { name: "MongoDB"}, { name: "Clerk"},{ name: "ShadcnUI"},],
    image: "/work/project1.png",
    live: "https://linkedin-clone-payal.vercel.app/",
    github: "https://github.com/PayalKumari10/LinkedIn_Clone",
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'project 2',
    description: "This project showcases a sleek and modern portfolio website built using Next.js 14, Tailwind CSS, and Framer Motion. It highlights smooth animations, responsive design, and optimized performance, offering a seamless user experience.",
    stack: [{ name: "Next.js"}, { name: "Tailwind.css"}, { name: "Framer Motion"}],
    image: "/work/project2.png",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'Full Stack',
    title: 'project 3',
    description: "AI-powered object detector using TensorFlow for real-time detection, Next.js for server-side rendering, React for dynamic UI, and Tailwind CSS for responsive design. Upload images to instantly detect and highlight objects, showcasing machine learning in a web app.",
    stack: [{ name: "Tailwind.css"}, { name: "Next.js"}, { name: "React.js"},{ name: "TensorFlow"}],
    image: "/work/project3.png",
    live: "https://thief-detector-payal.vercel.app/",
    github: "https://github.com/PayalKumari10/Thief-Detector",
  },
];

const  Work = () => {
  const [project, setProject] = useState(projects[0]);

 const handleSlideChange = (swiper) => {
  //get current slide index
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index
  setProject(projects[currentIndex]);
 };

  return (
     <motion.section 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4,ease: "easeIn"},
      }}
       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
         
    <div className="container mx-auto">
      <div className="flex felx-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/* outline num */}
            <div className="text-8xl leading-none font-extrabold
             text-transparent text-outline">
              {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project</h2>

                {/* project description */}
                <p className="text-white/60">{project.description}</p>

                {/* stack  */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index)=> {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {/* remove the last commo */}
                        {index !== project.stack.length - 1 && ","}
                        </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* button */}
                <div className="flex items-center gap-4">
                    {/* live project button */}
                  <Link target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5
                       flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl
                         group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                    {/*github project button */}
                  <Link  target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5
                       flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl
                         group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                </div>
          </div>
        </div>

        <div className="w-full xl:w-[50%]">
          <Swiper 
            spaceBetween={30}
            slidesPerView={1}
             className="xl:h-[520px] mb-12"
             onSlideChange={handleSlideChange}
             >
            {projects.map((project, index)=> {
              return ( 
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center
                item-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/* image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      fill
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      alt=""/>
                  </div>
                </div>
              </SwiperSlide>
              );
            })}
            {/* slider button */}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between 
             xl:w-max xl:justify-none" 
             btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
             h-[44px] flex justify-center items-center transition-all"/>
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Work;