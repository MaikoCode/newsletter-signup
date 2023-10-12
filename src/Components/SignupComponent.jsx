
import {useState, useEffect} from 'react'
import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import illustrationMobile from '../assets/images/illustration-sign-up-mobile.svg'
import iconList from '../assets/images/icon-list.svg'
import {useNavigate} from "react-router-dom"
import { useEmailValidation } from '../context/EmailValidationContext'



export default function SignupComponent() {
    
    const [email, setEmail] = useState('')
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()
    const { setEmailValidated } = useEmailValidation()
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;



    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(emailRegex.test(email)){
            setEmailValidated(true);
            navigate("/validated");
            setIsError(false);
        } else {
            setIsError(true);
        }
    }

    useEffect(() => {

        const handleSize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleSize)

        return () => {
            window.removeEventListener('resize', handleSize)
        }

    }, [])


  return (
    <div className=" bg-white flex flex-col md:flex-row-reverse md:w-[800px] md:h-[500px] md:rounded-lg md:mt-10">
        <div className='mb-10 md:mb-0 md:ml-12 md:w-[45%]'>
            <img 
            className='w-full md:h-full md:py-6'
            src={isMobile ? illustrationMobile : illustrationDesktop}
            alt="illustration" />
        </div>


        <div className='p-4 md:pl-6 md:pt-12 md:w-[45%]'>
            <h2 className='text-5xl md:text-4xl font-bold mb-5 md:mb-3'>Stay updated!</h2>
            <p className='text-xl md:text-base mb-7 md:mb-4'>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul className='text-xl mb-7 md:text-base'>
                <li className='flex mb-2 md:mb-1'>
                    <img
                    className='w-5 h-5 mr-3 mt-1'
                    src={iconList} alt="icon list" />
                    <span>Product discovery and building what matters</span>
                </li>
                <li className='flex mb-2 md:mb-1'>
                    <img
                    className='w-5 h-5 mr-3 mt-1'
                    src={iconList} alt="icon list" />
                    <span>Measuring to ensure updates are a success</span>
                </li>
                <li className='flex mb-2 md:mb-1'>
                    <img
                    className='w-5 h-5 mr-3 mt-1'
                    src={iconList} alt="icon list" />
                    <span>And much more!</span>
                </li>
            </ul>

            <form>
                <label htmlFor="email" className='text-dark-slate-grey font-bold'>
                    <span className='pr-[20%]'>Email address</span>
                    { isError && <span className=' text-tomato'>Valid email required</span>}
                </label><br/>

               <input 
                type="text"
                value={email} 
                onChange={handleEmailChange}
                className={`text-dark-slate-grey border rounded-lg w-full p-4 mt-2 mb-5 md:mb-3 focus:outline-none focus:border-dark-slate-grey ${isError ? 'bg-light-tomato text-tomato border-tomato focus:border-tomato ' : ''}`}
                placeholder='email@company.com'/>



                <button type='submit'
                onClick={handleSubmit}
                className='w-full p-4 rounded-lg bg-dark-slate-grey text-white text-lg md:text-base
                hover:hover-effect'>Subscribe to monthly newsletter</button>
            </form>

        </div>

    </div>
  )
}
