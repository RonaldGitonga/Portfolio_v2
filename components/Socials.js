//links
import Link from 'next/link'


import { FaGithub,
  FaLinkedin,} from "react-icons/fa"





const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'
  >
    <Link  href={'https://github.com/RonaldGitonga'} className='hover:text-accent transition-all duration-300'>
      <FaGithub/>
    </Link>

    <Link href={'https://www.linkedin.com/in/ronaldgitonga/'} className='hover:text-accent transition-all duration-300'>
      <FaLinkedin/>
    </Link>
  </div>;
};

export default Socials;
