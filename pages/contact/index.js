import {useState,useRef} from 'react'

//email
import emailjs from '@emailjs/browser'

//framer
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import { BsArrowRight } from 'react-icons/bs'


const Contact=()=>{
  const formRef=useRef();
  const [form,setForm]=useState(
    {
      name:'',
      email:'',
      subject:'',
      message:'',
    }
  );

  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;

    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();

    setLoading(true);
    emailjs.send(
      'service_epchor9',
      'template_z80dsmq',
      {
        from_name:form.name,
        to_name:"Ronald Gitonga",
        from_email:'form.email',
        to_email:'rgatuiku@gmail.com',
        from_subject:form.subject,
        message:form.message

      },
      'TwFsrPqxSmJVbbCD5'

    )
    .then(()=>{
      setLoading(false);
      alert('Thank you.I will get back to you as soon as possible');
      setForm(
        {
        name:'',
        email:'',
        subject:'',
        message:''
      }
      )

    },(error)=>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong')
    })

  }
  return(
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center
      justify-center h-full'>
        {/* text and Form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center mb-12'>
            Let's <span className='text-accent'>Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col gap-6 w-full mx-auto '>
            {/*input group */}
            <div className='flex gap-x-6 w-full'>
              <input name='name' value={form.name} onChange={handleChange} type='text' placeholder='name' className='input'/> 
              <input name='email' value={form.email} onChange={handleChange} type='text' placeholder='email' className='input'/> 

            </div>
            <input name='subject' value={form.subject} onChange={handleChange} type='text' placeholder='subject' className='input'/> 
            <textarea  name='message' value={form.message} onChange={handleChange} className='textarea' placeholder='message'></textarea>
            <button  type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex 
            items-center justify-center overflow-hidden hover:border-accent group'>

              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500'>
                {loading ? 'Sending..': "Let's Talk"}
                </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex 
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
            

          </motion.form>
        </div>
      </div>
    </div>
  )
};
export default Contact;