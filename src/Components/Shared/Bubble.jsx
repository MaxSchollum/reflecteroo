import React from 'react'


const Bubble = ({icon, link, className}) => {
  
  const classNames = `Bubble ${className}`;

  return (
    <a 
      href={link} 
      className={classNames}>
      {icon}
    </a>
  );
};


Bubble.defaultProps = {
  icon: "🔘",
  link: "#",
  className: "",
};

export default Bubble