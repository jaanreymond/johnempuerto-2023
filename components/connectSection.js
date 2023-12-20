import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { logEvent } from "../utils/analytics"

const ConnectSection = (props) => {
   useEffect(() => {
      if (typeof window !== "undefined") {
         gsap.registerPlugin(ScrollTrigger);
      }
      //Connect section
      const connectTl = gsap.timeline({
         scrollTrigger: {
            trigger: "#connect",
            start: "center bottom",
            end: "=-300",
         }
      });
      connectTl.fromTo("#connect .section-line", 1, {
         width: 0,
      }, {
         width: "4rem",
         ease: "power3.inOut"
      }).from("#connect .section-category", 1.5, {
         x: -10,
         opacity: 0,
         stagger: 0.3,
         delay: -0.5,
         ease: "power3.out"
      }).from(".connect-h2", 1, {
         x: -70,
         opacity: 0,
         stagger: 0.3,
         skewX: 3,
         delay: -1.5,
         ease: "power3.out"
      }).from(".connect-content", 1, {
         y: -20,
         opacity: 0,
         stagger: 0.3,
         delay: -0.75,
         ease: "power3.out"
      }).from("#connect .connect-cta", 1, {
         y: -20,
         opacity: 0,
         stagger: 0.3,
         delay: -0.75,
         ease: "power3.out"
      });

      //footer section
      const footerTl = gsap.timeline({
         scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            end: "=-300",
         }
      });
      footerTl.from("footer", 1.5, {
         y: -30,
         opacity: 0,
         ease: "power3.inOut"
      });
   })

   return (
      <section
         id='connect'
         className={'pt-26 md:pt-32 pb-14 md:pb-0 overflow-x-hidden' + (props.sectionNumber % 2 === 0 ? ' bg-backgroundTwo ' : ((props.sectionNumber % 2) != 0 ? ' bg-backgroundOne' : ''))}
      >
         <div className='container pb-36 md:pb-48'>
            <div className='flex flex-row items-center'>
               <div className='section-line h-1 w-16 bg-primaryBrand mr-6'></div>
               <p className='section-category text-greyText text-base font-medium'>Connect</p>
            </div>

            <h2 className='text-white font-semibold text-4xl lg:text-secheader mt-8'>
               <div className="connect-h2">Interested in working with me</div>
               <div className="connect-h2">or perhaps just talk?</div>
            </h2>

            <p className='connect-content text-greyText font-normal text-base mt-6 leading-loose'>
               Reach me on social media or by sending an<br></br> email to <a href="mailto:johnaempuerto@gmail.com?subject=Contact from johnempuerto.com&amp;body=Hey John, I'm contacting you because..." target="_blank" onClick={() => logEvent("Contact me", "Email link clicked")} className="text-primaryBrand ease-in-out duration-200 border-b-1 border-backgroundTwo hover:border-primaryBrand">johnaempuerto@gmail.com</a>
            </p>

            <div className="connect-cta">
               <a
                  href="mailto:johnaempuerto@gmail.com?subject=Contact from johnempuerto.vercel.app/&amp;body=Hey John, I'm contacting you because..."
                  onClick={() => logEvent("Contact me", "Contact me button clicked")}
                  className='text-white text-base font-medium bg-primaryBrand hover:bg-primaryGrey ease-in-out duration-300 px-8 py-4 mt-12 inline-flex w-auto'
               >
                  Drop an email
						</a>
            </div>
         </div>
         <footer className='container pb-10 text-gray-600 flex flex-col-reverse md:flex-row justify-between items-center lg:items-center'>
            <p className='hover:text-greyText ease-in-out duration-300 mb-5 md:mb-0'>
<<<<<<< HEAD
               &copy; 2023 John Empuerto
=======
               &copy; 2020 John Empuerto
>>>>>>> new-branch
					</p>

            <div className='flex flex-row text-white mb-10 md:mb-0'>
               <a
<<<<<<< HEAD
                  href='https://www.behance.net/janreymond'
=======
                  href='https://www.behance.net/johnempuerto'
>>>>>>> new-branch
                  target='_blank'
                  className='text-xl mx-1 p-4 bg-primaryGrey hover:bg-primaryBrand ease-in-out duration-300'
               >
                  <FaBehance />
               </a>
               <a
                  href='https://github.com/jaanreymond'
                  target='_blank'
                  className='text-xl mx-1 p-4 bg-primaryGrey hover:bg-primaryBrand ease-in-out duration-300'
               >
                  <FaGithub />
               </a>
               <a
<<<<<<< HEAD
                  href='https://www.linkedin.com/in/jempuerto/'
=======
                  href='https://www.linkedin.com/in/john-raymond-empuerto-718b941a3/'
>>>>>>> new-branch
                  target='_blank'
                  className='text-xl mx-1 p-4 bg-primaryGrey hover:bg-primaryBrand ease-in-out duration-300'
               >
                  <FaLinkedin />
               </a>
            </div>
         </footer>
      </section>
   )
}

export default ConnectSection;