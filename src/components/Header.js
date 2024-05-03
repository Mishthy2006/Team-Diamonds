import React, { useEffect, useState } from 'react';

import Tippy from '@tippyjs/react';
import { data } from './links';
import { Link } from 'react-router-dom';
import { location, appointment, FAQ, logo, search, wishlist, account, cart } from '../assets/index';
import './Header.css';
import image1 from '../assets/Brands/1.webp';
import image2 from '../assets/Brands/2.webp';
import image3 from '../assets/Brands/3.webp';
import image4 from '../assets/Brands/4.webp';
import image5 from '../assets/Brands/5.webp';
import { Cartreducer } from '../redux/reducers/reducer';
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';
import Preloader from './preloader/preloader';




const images = [image1, image2, image3, image4, image5];


const auth = getAuth(app);

export default function Header({ onAccountIconClick }) {
  
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [showSignOut , setShowSignOut] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  


  const cartItems = useSelector((state) =>
    state.Cartreducer.carts);
  console.log(cartItems);
  
  const [hoveredItem, setHoveredItem] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserImage(user.photoURL);
      } 
    });

    return () => unsubscribe();
  }, []);

  const handleMouseEnter = (itemKey) => {
    setHoveredItem(itemKey);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const showSignOutMenu = () => {
    setShowSignOut(!showSignOut);
  }


 

  const signoutaccount = () => {
    setShowPreloader(true); 
    auth.signOut().then(() => {
      setUser(null);
       setTimeout(() => {
        setShowPreloader(false); 
      }, 2000); 
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    
    <div className='header-container relative '>
        {showPreloader && <Preloader />}
    <div className='w-full bg-white fixed top-0 z-50 border-b-2 border-gray-300'>
      <div className='max-w-screen-2xl my-5 mx-7 h-full flex items-center justify-start'>
        <Link to='/location'><Tippy content="Location"><img className='w-8 mx-4 cursor-pointer icon-container' src={location} alt="Location" /></Tippy></Link>
        <Tippy content="Request An Appointment"><img className='w-8 mx-4 cursor-pointer icon-container ' src={appointment} alt="Appointment" /></Tippy>
        <Link to="/faq"><Tippy content="FAQ"><img className='w-8 mx-4 cursor-pointer icon-container ' src={FAQ} alt="FAQ" /></Tippy></Link>
        <Link to='/'><img className='w-1/4 mx-96 cursor-pointer' src={logo} alt="Logo" /></Link>
        <Tippy content="Search"><img className='w-8 mx-5 cursor-pointer icon-container ' src={search} alt="Search" /></Tippy>
        <Tippy content="Wishlist"><img className='w-8 mx-5 cursor-pointer icon-container ' src={wishlist} alt="Wishlist" /></Tippy>
        {user? (
          <div>
          <div onClick={showSignOutMenu} className='flex left:10 '>
            <span className='mr-5 left-10 font-medium  cursor-pointer hover:text-[#782374]'>Welcome {user.displayName}</span>
            <img  style={{marginTop:'4px' , marginRight:'40px'}} src={userImage} alt="User" className="w-10 h-10 cursor-pointer  rounded-full mr-3" />
          </div>
          {showSignOut && (<div className='hover-menu fixed bg-white border h-64 w-80 border-gray-200 right-14 p-2 z-50'>
            <h1 className='font-medium mx-3'>Welcome</h1>
            <h1 className='mx-3 mt-2'>To access account and manage orders</h1>
          <button onClick={signoutaccount} className='bg-transparent text-pink-400 font-serif font-medium text-sm py-2 px-5 border border-gray-400  hover:border hover:border-pink-500 ' style={{ position: 'absolute', top: '45%', left: '24%', transform: 'translate(-50%, -50%)' }}>SIGNOUT</button>
            <hr className='my-5 mx-4'></hr>
            <ul className='my-16 mx-1'>
              <li className='font-thin hover:text-[#782374] font-sans my-1 text-smn mx-3 cursor-pointer'>My Cart</li>
              <li className='font-thin hover:text-[#782374]  font-sans my-1 text-smn mx-3 cursor-pointer'>My Wishlist</li>
              <li className='font-thin hover:text-[#782374]  font-sans text-smn mx-3 cursor-pointer'>Signout</li>
            </ul>
            </div>)}
            </div>
          ) : (
            <div onClick={onAccountIconClick}>
              <Tippy content="Sign In">
                <img className='w-8 h-10 mx-5 cursor-pointer icon-container' src={account} alt="Account" />
              </Tippy>
            </div>
          )}
        <Link to="/cart"><Tippy content="Cart"><img className='w-8 relative mx-5  cursor-pointer icon-container ' src={cart} alt="Cart" title='Cart' /></Tippy></Link>
        <span style={{bottom:'54%'}}className='bg-[#746274] text-white rounded-full bottom-20 absolute right-6  flex items-center justify-center w-6 h-6'>
        {cartItems.length}
      </span>
      </div>
      <div className='flex mx-36 my-8 font-sans font-medium px-4 cursor-pointer'>
        {data.map((item) => (
          <div
            key={item.key}
            index={item.index}
            margins={item.margins}
            to={item.to}
            className='mx-7 nav relative'
            onMouseEnter={() => handleMouseEnter(item.key)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.to}>{item.label}</Link>
            {hoveredItem === item.key && item.children && (
              <div className="absolute top-full border border-x-gray-400 bg-white px-2 font-light text-black shadow-md" style={{ marginLeft: item.margins, marginTop: '6px', width: '1420px', paddingBottom: '30px', paddingTop: '0px' }}>
                <div className='flex'>
                  <div className='children'>
                    {item.children && item.children.map((childItem) => (
                      <div key={childItem.key}>
                        <h3 className="text-sm font-medium font-sans mb-2 px-8" style={{ marginTop: '30px' }}>{childItem.label}</h3>
                        <ul className='text-black px-8'>
                          {childItem.links.map((link) => (


                            <li key={link.label} className='py-1 hover:text-[#782374]'>
                              <Link to={link.to}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className='Children1'>
                    {item.Children1 && item.Children1.map((childItem) => (
                      <div key={childItem.key}>
                        <h3 className="text-sm font-medium font-sans mb-2 px-8" style={{ marginTop: '30px' }}>{childItem.label}</h3>
                        <ul className='text-black px-8'>
                          {childItem.links.map((link) => (
                            <li key={link.label} className='py-1 hover:text-[#782374]'>
                              <Link to={link.to}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className='Children2'>
                    {item.Children2 && item.Children2.map((childItem) => (
                      <div key={childItem.key}>
                        <h3 className="text-sm font-medium font-sans mb-2 px-8" style={{ marginTop: '30px' }}>{childItem.label}</h3>
                        <ul className='text-black px-8'>
                          {childItem.links.map((link) => (
                            <li key={link.label} className='py-1 hover:text-[#782374]'>
                              <a href={link.to}>{link.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className='Children3'>
                    {item.Children3 && item.Children3.map((childItem) => (
                      <div key={childItem.key}>
                        <h3 className="text-sm font-medium font-sans mb-2 px-8" style={{ marginTop: '30px' }}>{childItem.label}</h3>
                        <ul className='text-black px-8'>
                          {childItem.links.map((link) => (
                            <li key={link.label} className='py-1 hover:text-[#782374]'>
                              <a href={link.to}>{link.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className='Children4'>
                    {item.Children4 && item.Children4.map((childItem) => (
                      <div key={childItem.key}>
                        <img className="text-sm font-medium font-sans mb-2 px-4" style={{ marginTop: '30px' }} src={childItem.label[childItem.key]} alt={childItem.key} />
                        <ul className='text-black px-8'>
                          {/* You can add list items or other cont ent here if needed */}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className='Children5'>
                    {item.Children5 && item.Children5.map((childItem) => (
                      <div key={childItem.key}>
                        <h3 className="text-sm font-medium font-sans mb-2 px-8" style={{ marginTop: '30px' }}>{childItem.label}</h3>
                        <ul className='text-black px-8'>
                          {childItem.links.map((link) => (
                            <li key={link.label} className='py-1  hover:text-[#782374]'>
                              <a href={link.to}>{link.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className='Children6'>
                    {item.Children6 && item.Children6.map((childItem) => (
                      <div key={childItem.key}>
                        <h3 className="text-sm font-medium font-sans mb-2 px-8" style={{ marginTop: '30px' }}>{childItem.label}</h3>
                        <ul className='text-black px-8'>
                          {childItem.links.map((link, index) => (
                            <li key={index} className='py-1'>
                              <img className='w-52' src={images[index]} alt={`Design ${index + 1}`} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
    </div>

  );
}
