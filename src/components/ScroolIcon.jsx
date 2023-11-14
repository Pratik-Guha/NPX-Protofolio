import React, { useState, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const ScrollIcon = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop = st;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIconClick = () => {
    // Your logic for handling the icon click goes here
    console.log('Icon clicked!');
  };

  return (
    <div className='  '>
      {scrollDirection === 'down' && (
        <BsChevronDown className='absolute text-6xl left-[50%] bottom-[5%] translate-x-[-50%] duration-700 animate-bounce'  onClick={handleIconClick} />
      )}
    </div>
  );
};

export default ScrollIcon;
