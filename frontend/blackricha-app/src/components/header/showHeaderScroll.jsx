import { useEffect, useState } from 'react';

const useScrollHeader = () => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setShowHeader(true);
      } else if (prevScrollPos < currentScrollPos && currentScrollPos > 140) {
        setShowHeader(false);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showHeader;
};

export default useScrollHeader;
