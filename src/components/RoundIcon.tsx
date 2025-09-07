import React from 'react';
import Image from 'next/image';

interface RoundIconProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

const RoundIcon: React.FC<RoundIconProps> = ({ 
  src, 
  alt = 'Icon', 
  size = 40, 
  className = '' 
}) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={`${size}px`}
      />
    </div>
  );
};

export default RoundIcon;
