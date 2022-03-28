import logo from '../assests/img/Artboard-9.png';
import logotwo from '../assests/img/Artboard-20.png';

//style

import "./Atropos.css"



export const HeroIntro = () => {
    return (

      <>
      <div className="lg:justify-center hidden lg:flex relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 lg:h-[95vh]" id = "AboutMe">
      <div className="inset-y-0 shrink-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full shrink-0 h-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            // src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            src = {logo}
            alt=""
          />
        </div>
        <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:mr-5">
              <div >
            <h1 className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider border-solid border-2 border-slate-200  text-gray-400 uppercase rounded-md shadow-slate-900">
              Ernest Arreola
            </h1>
            </div>
            <h2 className="mb-5 font text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Software Engineer
              {/* <br className="hidden md:block" />
               {' '}
              <span className="inline-block text-deep-purple-accent-400">
              </span> */}
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Software Engineer based out of Los Angeles, California. 
            </p>
            <div className="flex items-center">
              <a
                href="#Projects"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
              >
                Projects
              </a>
              <a
                href="#Contact"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

          
      <div class="relative">
  <img src= {logotwo} class="absolute inset-0 object-cover w-full h-full" alt="" />
  <div class="lg:hidden relative bg-black-900 bg-opacity-30 py-28 h-fit">
    <div class=" px-4 py-4 md:h-[65vh] md:py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 lg:py-20">
      <div class="h-full flex items-center px-6 justify-between xl:flex-row">
      <div class="w-full md:w-9/12 xl:w-8/12">
            <span class="font-bold  tracking-widest text-white" style = {{fontFamily: 'Nunito Sans'}}> Ernest Arreola </span>
          <h1 class="text-6xl md:text-7xl text-bold font-bold text-white" style = {{fontFamily: 'Nunito Sans'}}>
            software <br class="" /> engineer
          </h1>
          <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
          </p>

          <div className="flex my-8 items-center border-solid border-white">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6  font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-transparent border border-white hover: focus:shadow-outline focus:outline-none"
              >
                Projects
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 text-white hover:text-deep-purple-accent-700"
              >
                Contact Me
              </a>
            </div>
        </div>

      </div>
    </div>
  </div>
</div>



      </>
    );
  };
