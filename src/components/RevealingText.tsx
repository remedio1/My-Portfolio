import React from 'react';

type RevealingTextProps = {
  text: string;
  as?: React.ElementType; // Permite especificar el tipo de elemento (span, h1, etc.)
  href?: string; // Opcional para links
  className?: string;
  letterDelay?: number;
  duration?: number;
  revealColor?: string; // Tailwind color class
  originalColor?: string; // Tailwind color class
  
};

const RevealingText: React.FC<RevealingTextProps> = ({
  text,
  as: Tag = 'span',
  href,
  className = '',
  letterDelay = 0.04,
  duration = 0.5,
  revealColor = '',
  originalColor = '',
  
}) => {
  const Wrapper = href ? 'a' : Tag;

  
  
  return (
    <Wrapper
      
      className={`group inline-block relative overflow-hidden ${className}`}
    >
      <div className="items-center justify-center flex relative">
        {/* Texto Original */}
        <span 
          className={` flex relative leading-tight transition-transform duration-${duration * 1000} ease-in-out group-hover:-translate-y-full ${originalColor}`}
          style={{ transitionDuration: `${duration}s` }}
        >
          {text.split('').map((letter : string, index : number) => (
            <span 
              key={`original-${index}`} 
              className=" transition-all group-hover:opacity-100 group-hover:translate-y-0"
              style={{ 
                transitionDelay: `${index * letterDelay}s`,
                transitionDuration: `${duration}s`,
                transitionProperty: 'all',
                transitionTimingFunction: 'ease-in-out'
              }}
            >
              {letter}
            </span>
          ))}
        </span>

        {/* Texto de Revelação */}
        <span 
          className={`flex absolute top-0 left-0 translate-y-full leading-tight transition-transform duration-${duration * 1000} ease-in-out group-hover:translate-y-0 ${revealColor}`}
          style={{ transitionDuration: `${duration}s` }}
        >
          {text.split('').map((letter : string, index : number) => (
            <span 
              key={`reveal-${index}`} 
              className="inline-block opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
              style={{ 
                transitionDelay: `${index * letterDelay}s`,
                transitionDuration: `${duration}s`,
                transitionProperty: 'all'
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>
    </Wrapper>
  );
};

export default RevealingText;