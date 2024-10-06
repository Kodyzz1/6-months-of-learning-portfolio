import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ text }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.innerHTML = ''; // Clear any previous text
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the delay as needed

      return () => clearInterval(interval); // Clean up on unmount or text change
    }
  }, [text]);

  return <div ref={elementRef}></div>;
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Typewriter;
