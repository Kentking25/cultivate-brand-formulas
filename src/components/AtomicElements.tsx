
import { useEffect, useState } from 'react';

const FloatingAtom = ({ delay = 0, size = 'small', className = '', style = {} }) => {
  const sizeClasses = {
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4'
  };

  return (
    <div 
      className={`absolute rounded-full bg-cultivate/20 animate-float ${sizeClasses[size]} ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      <div className="w-full h-full rounded-full bg-cultivate/40 animate-pulse-slow"></div>
    </div>
  );
};

const MolecularBond = ({ className = '' }) => {
  return (
    <div className={`molecular-bond ${className}`}></div>
  );
};

const AtomicStructure = ({ className = '' }) => {
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      {/* Central atom */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cultivate rounded-full"></div>
      
      {/* Orbital rings */}
      <div className="absolute inset-0 rounded-full border border-cultivate/30 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute inset-2 rounded-full border border-charcoal/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      
      {/* Orbiting electrons */}
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-charcoal rounded-full transform -translate-x-1/2 animate-orbit"></div>
      <div className="absolute top-1/2 right-0 w-2 h-2 bg-cultivate rounded-full transform -translate-y-1/2 animate-orbit" style={{ animationDelay: '10s' }}></div>
    </div>
  );
};

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const newElements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)]
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <FloatingAtom
          key={element.id}
          delay={element.delay}
          size={element.size}
          className="absolute"
          style={{
            top: `${element.top}%`,
            left: `${element.left}%`
          }}
        />
      ))}
    </div>
  );
};

export { FloatingAtom, MolecularBond, AtomicStructure, FloatingElements };
