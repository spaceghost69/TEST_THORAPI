import { useEffect, useState } from 'react';

const FullSizeContainer = ({ children, className = '', style = {} }) => {
  const [dimensions, setDimensions] = useState({
    width: '100%',
    height: '100%',
  });

  useEffect(() => {
    const handleResize = () => {
      const parent = document.documentElement; // Default to the viewport
      setDimensions({
        width: parent.clientWidth,
        height: parent.clientHeight,
      });
    };

    handleResize(); // Initialize dimensions on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`full-size-container ${className}`}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FullSizeContainer;
