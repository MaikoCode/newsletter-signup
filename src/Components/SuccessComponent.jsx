import iconSuccess from '../assets/images/icon-success.svg'
import { useEmailValidation } from '../context/EmailValidationContext';
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';


export default function SuccessComponent() {
  const { emailValidated } = useEmailValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!emailValidated) {
        navigate('/');
    }
  }, [emailValidated, navigate]);

  return (
    <div className='p-4  md:p-12 md:pt-6 mt-[25%] md:mt-20  md:bg-white md:rounded-xl md:w-[400px] md:h-[400px]'>

      <img src={iconSuccess} alt="icon success"
      className='w-16 h-16 mb-5'
       />

      <h2 className='flex flex-col text-dark-slate-grey font-bold text-4xl mb-5'>
        <span>Thanks for</span>
        <span>subscribing!</span>
      </h2>

      <p className='text-left mb-20 md:mb-0 md:pb-5'>
      A confirmation email has been sent to <span className='text-dark-slate-grey font-bold'>ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription
      </p>

      <button className='w-full p-4 rounded-lg bg-dark-slate-grey text-white text-lg md:text-base
      hover:hover-effect mt-[80%] md:mt-0'>Dismiss message</button>

    </div>
  )
}
