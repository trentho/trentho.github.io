/**
 * AnimatedBackground Component
 * Animated gradient mesh background with multiple layers
 * Creates dynamic, theme-aware background effects
 */

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface AnimatedBackgroundProps {
  layers?: number;
  speed?: number;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  layers = 3,
  speed = 1,
  className = '',
}) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let time = 0;

    // Create gradient blobs
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update time
      time += 0.005 * speed;

      // Draw animated gradient layers
      for (let i = 0; i < layers; i++) {
        const layerOffset = (i / layers) * Math.PI * 2;
        
        // Calculate blob position
        const x = canvas.width / 2 + Math.cos(time + layerOffset) * (canvas.width * 0.3);
        const y = canvas.height / 2 + Math.sin(time + layerOffset) * (canvas.height * 0.3);
        
        // Calculate blob size
        const size = (canvas.width * 0.4) + Math.sin(time * 2 + layerOffset) * (canvas.width * 0.1);

        // Create radial gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        
        // Theme-aware colors
        if (theme === 'dark') {
          gradient.addColorStop(0, `rgba(99, 102, 241, ${0.15 / (i + 1)})`); // Primary
          gradient.addColorStop(0.5, `rgba(236, 72, 153, ${0.1 / (i + 1)})`); // Secondary
          gradient.addColorStop(1, 'rgba(20, 184, 166, 0)'); // Accent
        } else {
          gradient.addColorStop(0, `rgba(99, 102, 241, ${0.1 / (i + 1)})`); // Primary
          gradient.addColorStop(0.5, `rgba(236, 72, 153, ${0.08 / (i + 1)})`); // Secondary
          gradient.addColorStop(1, 'rgba(20, 184, 166, 0)'); // Accent
        }

        // Draw blob
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [layers, speed, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`animated-background ${className}`}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBackground;