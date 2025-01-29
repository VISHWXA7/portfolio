import { navLinks, socialMedia } from "../data/index";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors">
            Vishwaa
          </a>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center"
              >
                {/* eslint-disable @next/next/no-img-element */}
                <img 
                src={info.img} 
                alt="icons" 
                width={25} 
                height={25} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;