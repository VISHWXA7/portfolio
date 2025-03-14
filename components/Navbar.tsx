import { socialMedia } from "../data/index";



const Navbar = () => {
  
  return (
    <header className="top-0 left-0 right-0 z-50 relative bg-transparent mt-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors">
            Vishwaa
          </a>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a
              key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center"
              >
                  {/* eslint-disable @next/next/no-img-element */}
                  <img 
                  src={info.img} 
                  alt="icons" 
                  width={25} 
                  height={25} 
                  />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;