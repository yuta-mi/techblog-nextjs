"use client";

import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Card({ title, description, href, icon, onClick }: CardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const CardContent = (
    <div 
      className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
      onClick={!href ? handleClick : undefined}
    >
      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative flex items-start space-x-4">
        {icon && (
          <div className="flex-shrink-0 p-2 bg-gray-100 text-gray-600 rounded-xl group-hover:bg-gray-200 group-hover:text-gray-700 transition-all duration-300">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Hover indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block" onClick={handleClick}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
} 