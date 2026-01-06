import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
  pulsePhase: number;
  connections: number[];
}

interface DataPacket {
  startNode: number;
  endNode: number;
  progress: number;
  speed: number;
  color: string;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeNetwork();
    };

    const initializeNetwork = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      const layers = 5;
      
      nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
        const layer = Math.floor(Math.random() * layers);
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1.5 + Math.random() * 2 + layer * 0.5,
          layer,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: []
        };
      });

      // Pre-calculate connections for neural network effect
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 180 && Math.abs(node.layer - other.layer) <= 1) {
              node.connections.push(j);
            }
          }
        });
      });

      packetsRef.current = [];
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    window.addEventListener('mouseleave', handleMouseLeave);

    const colors = {
      primary: { r: 0, g: 209, b: 209 },      // Cyan
      secondary: { r: 147, g: 51, b: 234 },    // Purple
      accent: { r: 59, g: 130, b: 246 },       // Blue
      glow: { r: 0, g: 255, b: 255 }           // Bright cyan
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      timeRef.current += 0.016;

      // Create gradient background overlay
      ctx.fillStyle = 'rgba(10, 15, 30, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const packets = packetsRef.current;
      const mouse = mouseRef.current;
      const time = timeRef.current;

      // Spawn new data packets occasionally
      if (Math.random() < 0.02 && packets.length < 20) {
        const startIdx = Math.floor(Math.random() * nodes.length);
        const startNode = nodes[startIdx];
        if (startNode.connections.length > 0) {
          const endIdx = startNode.connections[Math.floor(Math.random() * startNode.connections.length)];
          packets.push({
            startNode: startIdx,
            endNode: endIdx,
            progress: 0,
            speed: 0.02 + Math.random() * 0.03,
            color: Math.random() > 0.5 ? 'primary' : 'secondary'
          });
        }
      }

      // Update and draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(j => {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.15;
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            
            const layerBlend = (node.layer + other.layer) / 8;
            const r = Math.floor(colors.primary.r * (1 - layerBlend) + colors.secondary.r * layerBlend);
            const g = Math.floor(colors.primary.g * (1 - layerBlend) + colors.secondary.g * layerBlend);
            const b = Math.floor(colors.primary.b * (1 - layerBlend) + colors.secondary.b * layerBlend);

            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${opacity * 0.5})`);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Update and draw data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const startNode = nodes[packet.startNode];
        const endNode = nodes[packet.endNode];
        const x = startNode.x + (endNode.x - startNode.x) * packet.progress;
        const y = startNode.y + (endNode.y - startNode.y) * packet.progress;

        const color = packet.color === 'primary' ? colors.primary : colors.secondary;
        
        // Glowing packet
        const glowRadius = 8;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core packet
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
        ctx.fill();
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges with padding
        const padding = 50;
        if (node.x < padding || node.x > canvas.width - padding) node.vx *= -1;
        if (node.y < padding || node.y > canvas.height - padding) node.vy *= -1;

        node.x = Math.max(padding, Math.min(canvas.width - padding, node.x));
        node.y = Math.max(padding, Math.min(canvas.height - padding, node.y));

        // Pulsing effect
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.7;
        const displayRadius = node.radius * pulse;

        // Layer-based color blending
        const layerRatio = node.layer / 4;
        const r = Math.floor(colors.primary.r * (1 - layerRatio) + colors.accent.r * layerRatio);
        const g = Math.floor(colors.primary.g * (1 - layerRatio) + colors.accent.g * layerRatio);
        const b = Math.floor(colors.primary.b * (1 - layerRatio) + colors.accent.b * layerRatio);

        // Mouse interaction
        const mouseDx = node.x - mouse.x;
        const mouseDy = node.y - mouse.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        let nodeOpacity = 0.6;
        let glowIntensity = 0;

        if (mouseDistance < 250) {
          const proximity = 1 - mouseDistance / 250;
          nodeOpacity = 0.6 + proximity * 0.4;
          glowIntensity = proximity;

          // Draw connection to mouse
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          const gradient = ctx.createLinearGradient(node.x, node.y, mouse.x, mouse.y);
          gradient.addColorStop(0, `rgba(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b}, ${proximity * 0.6})`);
          gradient.addColorStop(1, `rgba(${colors.secondary.r}, ${colors.secondary.g}, ${colors.secondary.b}, 0)`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Attract slightly
          node.vx += (mouse.x - node.x) * 0.00008;
          node.vy += (mouse.y - node.y) * 0.00008;
        }

        // Draw node glow
        if (glowIntensity > 0) {
          const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, displayRadius * 4);
          glowGradient.addColorStop(0, `rgba(${colors.glow.r}, ${colors.glow.g}, ${colors.glow.b}, ${glowIntensity * 0.4})`);
          glowGradient.addColorStop(1, `rgba(${colors.glow.r}, ${colors.glow.g}, ${colors.glow.b}, 0)`);
          ctx.beginPath();
          ctx.arc(node.x, node.y, displayRadius * 4, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, displayRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${nodeOpacity})`;
        ctx.fill();

        // Limit velocity
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 0.8) {
          node.vx = (node.vx / speed) * 0.8;
          node.vy = (node.vy / speed) * 0.8;
        }
      });

      // Draw floating AI symbols occasionally
      const symbolCount = 3;
      for (let i = 0; i < symbolCount; i++) {
        const x = (canvas.width / (symbolCount + 1)) * (i + 1) + Math.sin(time * 0.5 + i * 2) * 50;
        const y = canvas.height * 0.3 + Math.cos(time * 0.3 + i * 1.5) * 100;
        const opacity = 0.03 + Math.sin(time + i) * 0.02;
        
        ctx.font = '80px monospace';
        ctx.fillStyle = `rgba(0, 209, 209, ${opacity})`;
        ctx.textAlign = 'center';
        const symbols = ['◇', '⬡', '◈'];
        ctx.fillText(symbols[i], x, y);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, hsl(222, 47%, 6%) 0%, hsl(230, 50%, 10%) 50%, hsl(250, 40%, 12%) 100%)' }}
    />
  );
};

export default AnimatedBackground;
