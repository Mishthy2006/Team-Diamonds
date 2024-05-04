import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase';
import GoogleButton from 'react-google-button'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signin = ({ onAccountIconClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  const signinuser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/'); // Navigate to "/"
        {onAccountIconClick()}
      })
      .catch(e => alert(e.message));
  }

  const signinwithgoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/'); 
        {onAccountIconClick()}

      })
      .catch(error => alert(error.message));
  }

  return (
    <div className='fixed top-0 right-0 h-full w-96 border border-gray-200 bg-white z-50 '>
            <svg onClick={onAccountIconClick} style={{ marginLeft: '340px', marginTop: '20px' }} className='cursor-pointer  ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
        <path d="M 11.5 11 C 11.372 11 11.243984 11.048984 11.146484 11.146484 C 11.049484 11.244484 11 11.372 11 11.5 C 11 11.628 11.048484 11.755516 11.146484 11.853516 L 24.292969 25 L 11.146484 38.146484 C 10.951484 38.341484 10.951484 38.658516 11.146484 38.853516 C 11.244484 38.950516 11.372 39 11.5 39 C 11.628 39 11.755516 38.951516 11.853516 38.853516 L 25 25.707031 L 38.146484 38.853516 C 38.341484 39.048516 38.658516 39.048516 38.853516 38.853516 C 39.048516 38.657516 39.049516 38.342484 38.853516 38.146484 L 25.707031 25 L 38.853516 11.853516 C 39.048516 11.658516 39.048516 11.341484 38.853516 11.146484 C 38.657516 10.951484 38.342484 10.950484 38.146484 11.146484 L 25 24.292969 L 11.853516 11.146484 C 11.756016 11.048984 11.628 11 11.5 11 z"></path>
      </svg>
      <div className='h-full flex flex-col my-10 items-center'>

        <h1 className='text-2xl font-semibold mb-6'>Sign In</h1>
        <form className='w-full px-4'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm my-2 font-medium text-center text-[#6D6672]'>Email Address:<span className='text-red-500'> *</span></label>
            <input value={email} onChange={e => setEmail(e.target.value)} type='email' id='email' name='email' placeholder='Email Address' className='p-3 block my-4 w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm my-2 font-medium text-center text-[#6D6672]'>Password:<span className='text-red-500'> *</span></label>
            <input value={password} onChange={e => setPassword(e.target.value)} type='password' id='password' name='password' placeholder='Password' className='p-3 block my-4 w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
          </div>
          <button onClick={signinuser} className='bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 border border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white' style={{ position: 'absolute', top: '53%', left: '52.5%', transform: 'translate(-50%, -50%)' }}>Sign In</button>
          <a href="#"><h1 className='pt-24 mx-24 text-[#782474] w-full'>Forgot your passaword?</h1></a> 
          <GoogleButton className='mx-16 my-5'
            onClick={() => { signinwithgoogle() }}
          />
        </form>

      </div>
    </div>
  );
}

export default Signin;
