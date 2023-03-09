import { MdClose, MdFacebook, MdHome, MdList, MdMenu, MdMic, MdMore, MdSearch, MdTag} from 'react-icons/md'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import { useState } from 'react'

function Nav() {
  const [show, setShow] = useState(false);

  return (
    <nav className='border-b-2 bg-primary'>

      {/* Container  */}
      
      <div className="container max-w-[1200px] mx-auto flex justify-between px-4 py-2">

          <div className='flex items-center gap-3'>

            <button className='hover:text-textHover md:hidden hover:bg-blue-100 h-full px-2 rounded-md' onClick={() => setShow(true)}>
              <MdMenu size={28} />
            </button>

            <Link to='/' className=''>
              <img src="/resized_logo_UQww2soKuUsjaOGNB38o.png" className='h-10' alt="" />
            </Link>

            <div className='relative hidden md:block'>
           
              <input type="text" name='search' placeholder='Search..' className='border rounded-md py-[5px] px-2'/>
              
              <button className='hover:bg-blue-100 absolute top-0 hover:text-textHover rounded-md right-0 bottom-0 px-[5px]'>
                <MdSearch size={24} />
              </button>
          
            </div>

          </div>

          <div className='flex gap-2 items-center'>
            
            <MdSearch size={30} className='md:hidden' />

            <Link to='/login' className='text-md md:flex gap-2 items-center px-3 py-1 hover:bg-blue-100 hover:text-textHover hover:underline hidden'>
              Login
            </Link>

            <Link to='/signup' className='text-md text-textHover flex gap-2 items-center border px-3 py-1 rounded-lg border-textHover hover:bg-textHover hover:text-primary hover:underline'>
              Create Account
            </Link>

          </div>

        
        {/* Side bar  */}

        
          <section className='fixed' 
            style={{
              transform: !show && 'translateX(-3000px)',
              transition: 'transform ease-in-out 500'
            }}
          >
            
            {/* overlay  */}

            <div className='fixed top-0 bottom-0 bg-neutral-600 opacity-50 left-0 right-0'
            >
            </div>

            <article className='fixed p-3 max-w-[300px] bg-primary top-0 bottom-0 left-0'>
            
              <h3 className='flex text-md font-bold items-center justify-between'>
                Dev Community
                
                <button className='h-10 w-10 rounded-md text-center grid place-content-center hover:text-textHover hover:bg-blue-100' onClick={() => setShow(false)}>
                  <MdClose size={22} />
                </button>

              </h3 >
              
              <main className='mt-5'>

                <div className="flex flex-col gap-5 px-3">
                  <h3 className='font-bold'>
                    DEV Community is a community of 1,022,645 amazing developers 
                  </h3>

                  <p className='text-gray-600'>
                    We're a place where coders share, stay up-to-date and grow their careers
                  </p>

                  <div className='flex flex-col gap-1'>

                    <Link to='/signup' className='text-md text-textHover flex gap-2 items-center border px-3 py-1 rounded-lg border-textHover hover:bg-textHover w-full justify-center hover:text-primary hover:underline'>
                      Create Account
                    </Link>

                    <Link to="/login" className='text-gray-500 hover:text-textHover hover:bg-blue-100 hover:underline rounded-md py-2 w-full text-center'>
                      Login
                    </Link>

                  </div>

                </div>

                <ul>
                
                  <li className='rounded gap-4
                      hover:bg-blue-100 hover:underline py-2 px-2 flex items-end'>
                  
                    <MdHome size={24} className='border-b-2' />

                    <Link to="/" className='hover:text-textHover w-full'>
                      Home
                    </Link>

                  </li>
              
                  <li className='rounded gap-4
                      hover:bg-blue-100 hover:underline py-2 px-2 flex items-end'>
                  
                    <MdList  size={24} className='border-b-2' />

                    <Link to="/" className='hover:text-textHover w-full'>
                      Listing
                    </Link>
                    
                  </li>
              
                  <li className='rounded gap-4
                      hover:bg-blue-100 hover:underline py-2 px-2 flex items-end'>
                  
                    <MdMic size={24} className='border-b-2' />

                    <Link to="/" className='hover:text-textHover w-full'>
                      Podcast
                    </Link>
                    
                  </li>
            
                  <li className='rounded gap-4
                      hover:bg-blue-100 hover:underline py-2 px-2 flex items-end'>
                  
                    <MdTag size={24} className='border-b-2' />

                    <Link to="/" className='hover:text-textHover w-full'>
                      Tag
                    </Link>
                    
                  </li>

                  <li className='rounded gap-4
                      hover:bg-blue-100 hover:underline py-2 px-2 flex items-end'>
                  
                    <MdMore size={24} className='border-b-2' />

                    <Link to="/" className='hover:text-textHover w-full'>
                      About
                    </Link>
                    
                  </li>

                </ul>

                <ul className='flex justify-between mt-12 max-w-[200px]'>

                  <li>
                      <Link to="/" className='text-gray-600 hover:text-textHover'>
                        <FaTwitter size={24} />
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className='text-gray-600 hover:text-textHover'>
                        <FaFacebook size={24} />
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className='text-gray-600 hover:text-textHover'>
                        <FaGithub size={24} />
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className='text-gray-600 hover:text-textHover'>
                        <FaInstagram size={24} />
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className='text-gray-600 hover:text-textHover'>
                        <FaLinkedin size={24} />
                      </Link>
                    </li>

                </ul>

              </main>

            </article>


          </section>



        
      </div>

    </nav>
  )
}

export default Nav