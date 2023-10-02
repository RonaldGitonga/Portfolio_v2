
//icons
import { BsArrowRight } from 'react-icons/bs';

//images
import Image from 'next/image';

//sanity images
import {client, urlFor} from '../sanity/lib/client';
//swiper

import {Swiper, SwiperSlide} from 'swiper/react';
//swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'




//import swiper modules
import {Pagination} from 'swiper'





// data
const workSlides = {
 
      images: [
        {
          title: 'vazi',
          path: '/vazi.png',
          link:'vazi.ronaldgitonga.com'
        },
        {
          title: 'Prolog7',
          path: '/prolog7.png',
          link:'prolog7.ronaldgitonga.com'
        },
        {
          title: 'Furniture Fortress',
          path: '/ffortress.png',
          link:'furniturefortress.ronaldgitonga.com'
        },
        {
          title: 'SokoDuka',
          path: '/sokoduka2.png',
         link:'sokoDuka.ronaldgitonga.com'
        },
        {
          title: 'Kiota Crypto',
          path: '/kiotacrypto.png',
         link:'kiotacrypto.ronaldgitonga.com'
        },
        {
          title: 'GPT3',
          path: '/gpt3.png',
         link:'gpt3.ronaldgitonga.com'
        },
        {
          title: 'Flixster',
          path: '/flixster.png',
         link:'flixster.ronaldgitonga.com'
        },



      ],
  
};


const WorkSlider =() => {

  return (
  <Swiper
  
    spaceBetween={10}
  
    pagination={{
      clickable:true
    }}
    modules={[Pagination ]}
    className='h-[280px] sm:h-[480px]'



   >
    {/* remember to insert gql query to fetch works  */}
    {workSlides.images.map((image,index)=>{ 
      return(
        <SwiperSlide key={index}>
          <div className='flex  cursor-pointer lg:my-[90px] '>
            <div className='relative rounded-lg overflow-hidden flex
                items-center justify-center group' key={index}>
                  <div className='flex items-center justify-center relative overflow-hidden group' >
                    {/* images */}

                    <Image
                    src={image.path}
                    width={500}
                    height={500}
                    alt=''
                    />

                    {/* overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] 
                    to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-200'>

                    </div>
                    {/* title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
                    group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                        <a href={`http://${image.link}`}className='delay-100'>{image.title}</a>

                         {/* title part 2 */}
                         <div className='translate-y-[500%] group-hover:translate-y-0 transition-all
                         duration-300 delay-150'></div>

                          {/* icon */}
                        <div className='text-xl translate-y-[500%]
                        group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                          
                        
                      </div>
                    </div>

                  </div>
                </div>
             
         
          </div>
       
        </SwiperSlide>
      )

    })}

  </Swiper>
)};

export default WorkSlider;

