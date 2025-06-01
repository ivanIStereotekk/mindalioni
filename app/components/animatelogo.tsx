import React from 'react';

interface AnimatedLogoProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  width = 300, 
  height = 300, 
  className = '', 
  style = {} 
}) => {
  return (
    <svg 
      viewBox="50 0 300 300" 
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      {/* Определения градиентов */}
      <defs>
        {/* Внешнее свечение для логотипа */}
        <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.4"/>
          <stop offset="70%" stopColor="#0080FF" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
        </radialGradient>
        
        <linearGradient id="outerCircleGradient" x1="30%" y1="20%" x2="70%" y2="80%">
          <stop offset="0%" stopColor="#B532FF" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#00CFFF" stopOpacity="0.9"/>
        </linearGradient>
        
        <linearGradient id="innerCircleGradient" x1="40%" y1="30%" x2="60%" y2="70%">
          <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#00FFFF" stopOpacity="0.8"/>
        </linearGradient>
        
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="90%" stopColor="#00FFFF"/>
        </radialGradient>
        
        <linearGradient id="connectGradient" x1="30%" y1="30%" x2="70%" y2="70%">
          <stop offset="0%" stopColor="#A37FFF"/>
          <stop offset="100%" stopColor="#00D5FF"/>
        </linearGradient>
        
        {/* Дополнительное свечение за центральной звездой */}
        <radialGradient id="centerBackglow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#0000FF" stopOpacity="0"/>
        </radialGradient>
        
        {/* Голубоватый градиент для центра - более яркий */}
        <radialGradient id="blueGlowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="50%" stopColor="#00D5FF"/>
          <stop offset="100%" stopColor="#007BFF"/>
        </radialGradient>
        
        {/* Голубоватый градиент для треугольников - более яркий */}
        <linearGradient id="blueTriangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D5FF"/>
          <stop offset="50%" stopColor="#1E90FF"/>
          <stop offset="100%" stopColor="#0066FF"/>
        </linearGradient>
      </defs>

      {/* Внешнее свечение для усиления эффекта логотипа */}
      <ellipse cx="200" cy="140" rx="160" ry="160" fill="url(#outerGlow)" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" begin="0.5s"/>
      </ellipse>
      
      {/* Внешнее круговое обрамление - асимметричное */}
      <ellipse 
        cx="205" 
        cy="140" 
        rx="100" 
        ry="95" 
        stroke="url(#outerCircleGradient)" 
        strokeWidth="5" 
        fill="none" 
        opacity="0.7" 
        transform="rotate(15 205 140)"
      >
        <animate attributeName="strokeWidth" values="5;7;5" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.7;0.9;0.7" dur="6s" repeatCount="indefinite"/>
      </ellipse>
      
      {/* Внутреннее круговое обрамление - асимметричное */}
      <ellipse 
        cx="195" 
        cy="140" 
        rx="80" 
        ry="75" 
        stroke="url(#innerCircleGradient)" 
        strokeWidth="4" 
        fill="none" 
        opacity="0.8" 
        transform="rotate(-10 195 140)"
      >
        <animate attributeName="strokeWidth" values="4;6;4" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;1;0.8" dur="7s" repeatCount="indefinite" begin="1s"/>
      </ellipse>
      
      {/* Группа технологических узлов с дополнительным поворотом на 20 градусов */}
      <g transform="rotate(20 200 140)">
        {/* Технологические узлы - с усиленным мерцанием */}
        <circle cx="200" cy="45" r="8" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3.2s" repeatCount="indefinite"/>
          <animate attributeName="r" values="8;10;8" dur="3.7s" repeatCount="indefinite"/>
        </circle>
        <circle cx="190" cy="235" r="8" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4.1s" repeatCount="indefinite" begin="0.5s"/>
          <animate attributeName="r" values="8;10;8" dur="4.3s" repeatCount="indefinite" begin="0.7s"/>
        </circle>
        <circle cx="105" cy="145" r="8" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3.7s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="r" values="8;10;8" dur="3.2s" repeatCount="indefinite" begin="1.2s"/>
        </circle>
        <circle cx="295" cy="135" r="8" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
          <animate attributeName="r" values="8;10;8" dur="3.8s" repeatCount="indefinite" begin="0.9s"/>
        </circle>
        
        <circle cx="145" cy="95" r="7" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4.3s" repeatCount="indefinite" begin="0.8s"/>
          <animate attributeName="r" values="7;9;7" dur="3.9s" repeatCount="indefinite" begin="1.1s"/>
        </circle>
        <circle cx="255" cy="85" r="7" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3.9s" repeatCount="indefinite" begin="1.2s"/>
          <animate attributeName="r" values="7;9;7" dur="4.2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="155" cy="185" r="7" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" begin="2s"/>
          <animate attributeName="r" values="7;9;7" dur="4.1s" repeatCount="indefinite" begin="1.8s"/>
        </circle>
        <circle cx="245" cy="195" r="7" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" begin="0.3s"/>
          <animate attributeName="r" values="7;9;7" dur="3.6s" repeatCount="indefinite" begin="0.2s"/>
        </circle>
      </g>
      
      {/* Соединительные линии - тоже с поворотом и пульсацией */}
      <g transform="rotate(20 200 140)">
        <path 
          d="M145 95 C170 118, 175 120, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.8" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="4.3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="5.1s" repeatCount="indefinite"/>
        </path>
        <path 
          d="M255 85 C228 112, 225 115, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.8" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="4.7s" repeatCount="indefinite" begin="0.7s"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4.9s" repeatCount="indefinite" begin="0.5s"/>
        </path>
        <path 
          d="M155 185 C178 162, 180 160, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.8" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="5.3s" repeatCount="indefinite" begin="1.2s"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4.5s" repeatCount="indefinite" begin="1s"/>
        </path>
        <path 
          d="M245 195 C222 168, 220 165, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.8" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4.7s" repeatCount="indefinite" begin="0.3s"/>
        </path>
        
        <path 
          d="M200 45 C200 90, 200 100, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.7" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="5.7s" repeatCount="indefinite" begin="0.9s"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4.2s" repeatCount="indefinite" begin="1.7s"/>
        </path>
        <path 
          d="M190 235 C195 190, 195 170, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.7" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="4.1s" repeatCount="indefinite" begin="0.6s"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="5.3s" repeatCount="indefinite" begin="1.2s"/>
        </path>
        <path 
          d="M105 145 C150 142, 170 140, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.7" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="4.9s" repeatCount="indefinite" begin="0.4s"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4.4s" repeatCount="indefinite" begin="0.8s"/>
        </path>
        <path 
          d="M295 135 C250 138, 230 140, 200 140" 
          stroke="url(#connectGradient)" 
          strokeWidth="4" 
          fill="none" 
          opacity="0.7" 
          strokeLinecap="round"
        >
          <animate attributeName="strokeWidth" values="4;5.5;4" dur="5.1s" repeatCount="indefinite" begin="1.3s"/>
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4.8s" repeatCount="indefinite" begin="0.1s"/>
        </path>
      </g>
      
      {/* Дополнительное свечение вокруг центральной звезды */}
      <circle cx="200" cy="140" r="35" fill="url(#centerBackglow)" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="r" values="35;40;35" dur="6s" repeatCount="indefinite"/>
      </circle>
      
      {/* Центральная фигура - смещена на 42 градуса */}
      <g transform="rotate(42 200 140)">
        {/* Центральный мерцающий круг - голубоватый с усиленным свечением */}
        <circle cx="200" cy="140" r="15" fill="url(#blueGlowGradient)">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="r" values="15;17;15" dur="2s" repeatCount="indefinite"/>
        </circle>
        
        {/* Четыре острых треугольника, направленных наружу - с усиленным эффектом */}
        {/* Верхний треугольник */}
        <path 
          d="M190 125 L210 125 L200 85 Z" 
          fill="url(#blueTriangleGradient)"
        >
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </path>
        
        {/* Правый треугольник */}
        <path 
          d="M215 130 L215 150 L255 140 Z" 
          fill="url(#blueTriangleGradient)"
        >
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </path>
        
        {/* Нижний треугольник */}
        <path 
          d="M190 155 L210 155 L200 195 Z" 
          fill="url(#blueTriangleGradient)"
        >
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </path>
        
        {/* Левый треугольник */}
        <path 
          d="M185 130 L185 150 L145 140 Z" 
          fill="url(#blueTriangleGradient)"
        >
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </path>
        
        {/* Вращение центральной фигуры - ПО ЧАСОВОЙ СТРЕЛКЕ */}
        <animateTransform 
          attributeName="transform"
          type="rotate"
          from="0 200 140"
          to="360 200 140"
          dur="20s"
          repeatCount="indefinite"
          additive="sum"/>
      </g>
    </svg>
  );
};

export default AnimatedLogo;