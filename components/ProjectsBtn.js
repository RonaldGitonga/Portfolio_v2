//image
import Image from "next/image";
//next router
import { useRouter } from "next/router";

//link
import Link from "next/link";
//icons
import {HiArrowRight} from 'react-icons/hi2'





const ProjectsBtn = () => {
  const router=useRouter();

  
  return (
    <div className="mx-auto xl:mx-0 cursor-pointer">
      <Link href={'/work'}
      className="relative w-[185px] h-[185px] flex justify-center items-center 
      bg-circleStar bg-cover bg-center bg-no-repeat group">
        
        <Image src={'/rounded-text.png'} 
        width={141} 
        height={141} 
        alt="roundedtext"
        className="animate-spin-slow w-full h-full max-w-[141px] max-h-[141px] cursor-pointer"/>

        <HiArrowRight  onClick={()=>router.push('/work')} className="absolute text-4xl group-hover:translate-x-2
        transition-all duration-300 cursor-pointer"/>




      </Link>
    </div>

  )
};

export default ProjectsBtn;
