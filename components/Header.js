import Image from "next/image";

//links
import Link from "next/link";

//components
import Socials from '../components/Socials'

import { motion } from "framer-motion";


const Header = () => {
  return ( 
  <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex -row justify-between items-center 
      gap-y-6 py-8'>
        {/* {logo} */}
      <motion.div className="flex items-center justify-center w-[220px] h-[40px] xl:max-w-[220px] xl:max-h-[40px]">
        <h1 className="animate-pulse"><strong>Ronald </strong> Gitonga  </h1>
      </motion.div>
        {/* {socials} */}
        <Socials/>
      </div>

    </div>
    </header>
)
};

export default Header;
