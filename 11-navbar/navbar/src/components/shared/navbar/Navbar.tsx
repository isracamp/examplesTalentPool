import { useState, useRef, useEffect, FC } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../../../constants/Navigation';
import logo from '../../../logo.svg';

const Navbar: FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<any>(null);
  const linksRef = useRef<any>(null);
  const setToggleNavbar = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    if (!linksRef.current || !linksContainerRef.current) {
      return;
    }
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (!showLinks) {
      linksContainerRef.current.style.height = '0px';
      return;
    }
    linksContainerRef.current.style.height = `${linksHeight}px`;
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={setToggleNavbar}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
