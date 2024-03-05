import React from 'react'


const Bubble = ({ icon, link, className }) => {
  const classNames = `Bubble ${className}`;
  const isImage = typeof icon === 'string' && icon.endsWith('.jpeg'); // Check if the icon is a JPEG image
  const bubbleStyle = {
    opacity: isImage ? 1 : 0.5 // Set opacity based on whether it's an image or not
  };

  return (
    <a href={link} className={classNames} style={bubbleStyle}>
      {isImage ? (
        <img src={icon} alt="bubble icon" />
      ) : (
        <span>{icon}</span>
      )}
    </a>
  );
};


Bubble.defaultProps = {
  icon: "🔘",
  link: "#",
  className: "",
};

export default Bubble