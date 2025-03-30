import React from 'react';

const Bubble = ({ icon, link, className }) => {
  const classNames = `Bubble ${className}`;

  const isImageUrl =
    typeof icon === 'string' && icon.startsWith('http');

  return (
    <a href={link} className={classNames}>
      {isImageUrl ? (
        <img
          src={icon}
          alt="bubble icon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%'
          }}
        />
      ) : (
        <span>{icon}</span>
      )}
    </a>
  );
};

Bubble.defaultProps = {
  icon: '🔘',
  link: '#',
  className: '',
};

export default Bubble;
