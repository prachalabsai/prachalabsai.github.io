import React, { useRef, useEffect, useState, useCallback } from 'react';
import { THEORY_LENSES, PROBLEM_SPACES } from '../../data/visionData';

interface OrbitingNode {
  id: string;
  name: string;
  shortName: string;
  angle: number;
  angularSpeed: number;
  orbitRadiusX: number;
  orbitRadiusY: number;
  orbitTilt: number;
  nodeRadius: number;
  type: 'core' | 'theory' | 'problem';
  trail: { x: number; y: number; alpha: number }[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  colorIndex: number;
}

interface FlowParticle {
  progress: number;
  speed: number;
  fromId: string;
  toId: string;
  size: number;
}

interface AgenticCanvasProps {
  onNodeClick?: (nodeId: string, nodeType: 'core' | 'theory' | 'problem') => void;
  hoveredNode?: string | null;
}

export const AgenticCanvas: React.FC<AgenticCanvasProps> = ({ onNodeClick, hoveredNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 700 });
  const [internalHovered, setInternalHovered] = useState<string | null>(null);

  const nodesRef = useRef<OrbitingNode[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const flowParticlesRef = useRef<FlowParticle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);
  const pulseRef = useRef(0);

  const effectiveHovered = hoveredNode ?? internalHovered;

  const getColor = useCallback((varName: string) => {
    return getComputedStyle(document.body).getPropertyValue(varName).trim() || '#ffffff';
  }, []);

  // Get node position based on current angle
  const getNodePosition = useCallback((node: OrbitingNode, centerX: number, centerY: number) => {
    if (node.type === 'core') {
      return { x: centerX, y: centerY };
    }

    // Elliptical orbit with tilt
    const x = centerX + Math.cos(node.angle) * node.orbitRadiusX;
    const y = centerY + Math.sin(node.angle) * node.orbitRadiusY * Math.cos(node.orbitTilt);

    return { x, y };
  }, []);

  // Initialize nodes with orbital parameters
  const initializeNodes = useCallback((width: number, height: number) => {
    const nodes: OrbitingNode[] = [];
    const baseTheoryRadius = Math.min(width, height) * 0.22;
    const baseProblemRadius = Math.min(width, height) * 0.38;

    // Core node (stationary)
    nodes.push({
      id: 'core',
      name: 'AGENTS',
      shortName: 'AGENTS',
      angle: 0,
      angularSpeed: 0,
      orbitRadiusX: 0,
      orbitRadiusY: 0,
      orbitTilt: 0,
      nodeRadius: Math.min(width, height) * 0.09,
      type: 'core',
      trail: [],
    });

    // Theory nodes - inner elliptical orbits with varying speeds
    THEORY_LENSES.forEach((lens, i) => {
      const baseAngle = (i / THEORY_LENSES.length) * Math.PI * 2;
      const radiusVariation = 0.9 + Math.random() * 0.2;
      const speedVariation = 0.8 + Math.random() * 0.4;

      nodes.push({
        id: lens.id,
        name: lens.name,
        shortName: lens.shortName,
        angle: baseAngle,
        angularSpeed: 0.003 * speedVariation * (i % 2 === 0 ? 1 : -1), // Alternate directions
        orbitRadiusX: baseTheoryRadius * radiusVariation,
        orbitRadiusY: baseTheoryRadius * radiusVariation * (0.7 + Math.random() * 0.3), // Ellipse
        orbitTilt: (Math.random() - 0.5) * 0.3, // Slight tilt variation
        nodeRadius: Math.min(width, height) * 0.042,
        type: 'theory',
        trail: [],
      });
    });

    // Problem nodes - outer orbits, slower
    PROBLEM_SPACES.forEach((space, i) => {
      const baseAngle = (i / PROBLEM_SPACES.length) * Math.PI * 2 + Math.PI / 10;
      const radiusVariation = 0.95 + Math.random() * 0.1;
      const speedVariation = 0.7 + Math.random() * 0.6;

      nodes.push({
        id: space.id,
        name: space.name,
        shortName: space.name,
        angle: baseAngle,
        angularSpeed: 0.0015 * speedVariation * (i % 2 === 0 ? 1 : -1),
        orbitRadiusX: baseProblemRadius * radiusVariation,
        orbitRadiusY: baseProblemRadius * radiusVariation * (0.75 + Math.random() * 0.25),
        orbitTilt: (Math.random() - 0.5) * 0.2,
        nodeRadius: Math.min(width, height) * 0.035,
        type: 'problem',
        trail: [],
      });
    });

    nodesRef.current = nodes;
  }, []);

  // Initialize ambient particles
  const initializeParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 50 + Math.random() * (Math.min(width, height) * 0.45);

      particles.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
        size: 1 + Math.random() * 2,
        colorIndex: Math.floor(Math.random() * 3),
      });
    }

    particlesRef.current = particles;

    // Flow particles along connections
    const flowParticles: FlowParticle[] = [];

    // Core to theories
    THEORY_LENSES.forEach((lens) => {
      for (let i = 0; i < 3; i++) {
        flowParticles.push({
          progress: Math.random(),
          speed: 0.004 + Math.random() * 0.003,
          fromId: 'core',
          toId: lens.id,
          size: 2 + Math.random() * 2,
        });
      }
    });

    // Theories to problems
    PROBLEM_SPACES.forEach((space) => {
      space.connectedTheories.slice(0, 2).forEach(theoryId => {
        flowParticles.push({
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.002,
          fromId: theoryId,
          toId: space.id,
          size: 1.5 + Math.random() * 1.5,
        });
      });
    });

    flowParticlesRef.current = flowParticles;
  }, []);

  // Main draw function
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = dimensions;
    const centerX = width / 2;
    const centerY = height / 2;

    // Get theme colors
    const accentPrimary = getColor('--accent-primary');
    const accentSecondary = getColor('--accent-secondary');
    const textMain = getColor('--text-main');
    const textMuted = getColor('--text-muted');
    const borderMain = getColor('--border-main');
    const bgCard = getColor('--bg-card');

    const colors = [accentPrimary, accentSecondary, textMuted];

    // Update time
    timeRef.current += 0.016;
    pulseRef.current = Math.sin(timeRef.current * 2) * 0.5 + 0.5;

    // Clear with slight fade for trail effect
    ctx.fillStyle = 'rgba(26, 25, 24, 0.15)';
    ctx.fillRect(0, 0, width, height);

    // Update node positions
    nodesRef.current.forEach(node => {
      if (node.type !== 'core') {
        node.angle += node.angularSpeed;

        // Update trail
        const pos = getNodePosition(node, centerX, centerY);
        node.trail.unshift({ x: pos.x, y: pos.y, alpha: 1 });
        if (node.trail.length > 20) node.trail.pop();
        node.trail.forEach((t, i) => { t.alpha = 1 - (i / 20); });
      }
    });

    // Draw orbital paths (faint ellipses)
    ctx.strokeStyle = borderMain;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.15;
    ctx.setLineDash([2, 4]);

    nodesRef.current.forEach(node => {
      if (node.type !== 'core') {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, node.orbitRadiusX, node.orbitRadiusY * Math.cos(node.orbitTilt), 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    ctx.setLineDash([]);
    ctx.globalAlpha = 1;

    // Draw node trails (comet effect)
    nodesRef.current.forEach(node => {
      if (node.type !== 'core' && node.trail.length > 1) {
        const trailColor = node.type === 'theory' ? accentSecondary : textMuted;

        for (let i = 1; i < node.trail.length; i++) {
          const t = node.trail[i];
          const prevT = node.trail[i - 1];

          ctx.strokeStyle = trailColor;
          ctx.globalAlpha = t.alpha * 0.3;
          ctx.lineWidth = (1 - i / node.trail.length) * 3;

          ctx.beginPath();
          ctx.moveTo(prevT.x, prevT.y);
          ctx.lineTo(t.x, t.y);
          ctx.stroke();
        }
      }
    });

    ctx.globalAlpha = 1;

    // Draw connections
    const nodePositions = new Map<string, { x: number; y: number }>();
    nodesRef.current.forEach(node => {
      nodePositions.set(node.id, getNodePosition(node, centerX, centerY));
    });

    // Core to theory connections
    const corePos = nodePositions.get('core')!;
    nodesRef.current.filter(n => n.type === 'theory').forEach(theory => {
      const theoryPos = nodePositions.get(theory.id)!;
      const isHighlighted = effectiveHovered === 'core' || effectiveHovered === theory.id;

      // Gradient line
      const gradient = ctx.createLinearGradient(corePos.x, corePos.y, theoryPos.x, theoryPos.y);
      gradient.addColorStop(0, accentPrimary + (isHighlighted ? '80' : '30'));
      gradient.addColorStop(1, accentSecondary + (isHighlighted ? '80' : '30'));

      ctx.strokeStyle = gradient;
      ctx.lineWidth = isHighlighted ? 2 : 1;
      ctx.globalAlpha = isHighlighted ? 0.8 : 0.3;

      ctx.beginPath();
      ctx.moveTo(corePos.x, corePos.y);
      ctx.lineTo(theoryPos.x, theoryPos.y);
      ctx.stroke();
    });

    // Theory to problem connections
    PROBLEM_SPACES.forEach(space => {
      const problemNode = nodesRef.current.find(n => n.id === space.id);
      if (!problemNode) return;
      const problemPos = nodePositions.get(space.id)!;

      space.connectedTheories.forEach(theoryId => {
        const theoryPos = nodePositions.get(theoryId);
        if (!theoryPos) return;

        const isHighlighted = effectiveHovered === space.id || effectiveHovered === theoryId;

        ctx.strokeStyle = accentSecondary;
        ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
        ctx.globalAlpha = isHighlighted ? 0.6 : 0.15;

        ctx.beginPath();
        ctx.moveTo(theoryPos.x, theoryPos.y);
        ctx.lineTo(problemPos.x, problemPos.y);
        ctx.stroke();
      });
    });

    ctx.globalAlpha = 1;

    // Draw and update ambient particles
    particlesRef.current.forEach(particle => {
      // Gentle spiral motion toward/away from center
      const dx = particle.x - centerX;
      const dy = particle.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      // Orbital drift
      particle.x += Math.cos(angle + Math.PI / 2) * 0.2;
      particle.y += Math.sin(angle + Math.PI / 2) * 0.2;
      particle.x += particle.vx;
      particle.y += particle.vy;

      particle.life++;
      if (particle.life > particle.maxLife) {
        // Respawn
        const newAngle = Math.random() * Math.PI * 2;
        const newRadius = 50 + Math.random() * (Math.min(width, height) * 0.45);
        particle.x = centerX + Math.cos(newAngle) * newRadius;
        particle.y = centerY + Math.sin(newAngle) * newRadius;
        particle.life = 0;
      }

      const lifeRatio = particle.life / particle.maxLife;
      const alpha = lifeRatio < 0.1 ? lifeRatio * 10 : lifeRatio > 0.9 ? (1 - lifeRatio) * 10 : 1;

      ctx.fillStyle = colors[particle.colorIndex];
      ctx.globalAlpha = alpha * 0.4;
      ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
    });

    // Draw flow particles
    flowParticlesRef.current.forEach(fp => {
      fp.progress += fp.speed;
      if (fp.progress > 1) fp.progress = 0;

      const fromPos = nodePositions.get(fp.fromId);
      const toPos = nodePositions.get(fp.toId);
      if (!fromPos || !toPos) return;

      // Bezier curve for smooth flow
      const midX = (fromPos.x + toPos.x) / 2 + (Math.random() - 0.5) * 20;
      const midY = (fromPos.y + toPos.y) / 2 + (Math.random() - 0.5) * 20;

      const t = fp.progress;
      const x = (1-t)*(1-t)*fromPos.x + 2*(1-t)*t*midX + t*t*toPos.x;
      const y = (1-t)*(1-t)*fromPos.y + 2*(1-t)*t*midY + t*t*toPos.y;

      const alpha = Math.sin(fp.progress * Math.PI);
      ctx.fillStyle = accentSecondary;
      ctx.globalAlpha = alpha * 0.8;
      ctx.beginPath();
      ctx.arc(x, y, fp.size, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;

    // Draw nodes
    nodesRef.current.forEach(node => {
      const pos = getNodePosition(node, centerX, centerY);
      const isHovered = effectiveHovered === node.id;
      const scale = isHovered ? 1.2 : 1;
      const drawRadius = node.nodeRadius * scale;

      // Glow effect
      if (isHovered || node.type === 'core') {
        const glowSize = node.type === 'core' ? drawRadius * (2 + pulseRef.current * 0.5) : drawRadius * 2;
        const gradient = ctx.createRadialGradient(pos.x, pos.y, drawRadius * 0.5, pos.x, pos.y, glowSize);
        const glowColor = node.type === 'core' ? accentPrimary :
                         node.type === 'theory' ? accentSecondary : textMuted;
        gradient.addColorStop(0, glowColor + '60');
        gradient.addColorStop(0.5, glowColor + '20');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Node body
      if (node.type === 'core') {
        // Pulsing gradient core
        const coreGradient = ctx.createRadialGradient(
          pos.x - drawRadius * 0.3, pos.y - drawRadius * 0.3, 0,
          pos.x, pos.y, drawRadius * (1 + pulseRef.current * 0.1)
        );
        coreGradient.addColorStop(0, '#ff6b5b');
        coreGradient.addColorStop(0.6, accentPrimary);
        coreGradient.addColorStop(1, '#8B1A1A');
        ctx.fillStyle = coreGradient;
      } else if (node.type === 'theory') {
        const theoryGradient = ctx.createRadialGradient(
          pos.x - drawRadius * 0.2, pos.y - drawRadius * 0.2, 0,
          pos.x, pos.y, drawRadius
        );
        theoryGradient.addColorStop(0, isHovered ? accentSecondary : bgCard);
        theoryGradient.addColorStop(1, isHovered ? '#d98c38' : bgCard);
        ctx.fillStyle = theoryGradient;
      } else {
        ctx.fillStyle = isHovered ? textMuted : bgCard;
      }

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, drawRadius, 0, Math.PI * 2);
      ctx.fill();

      // Node border
      ctx.strokeStyle = node.type === 'core' ? accentPrimary :
                       node.type === 'theory' ? accentSecondary : textMuted;
      ctx.lineWidth = isHovered ? 3 : 1.5;
      ctx.stroke();

      // Inner ring for visual depth
      if (node.type === 'theory' || node.type === 'problem') {
        ctx.strokeStyle = node.type === 'theory' ? accentSecondary + '40' : textMuted + '40';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, drawRadius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Labels
      ctx.fillStyle = node.type === 'core' ? '#fff' : textMain;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (node.type === 'core') {
        ctx.font = `bold ${Math.max(12, drawRadius * 0.35)}px "VT323", monospace`;
        ctx.fillText('AGENTS', pos.x, pos.y - 8);
        ctx.font = `${Math.max(8, drawRadius * 0.18)}px "Space Mono", monospace`;
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fillText('Human | AI | Co-existence', pos.x, pos.y + 12);
      } else {
        ctx.font = `${Math.max(9, drawRadius * 0.55)}px "Space Mono", monospace`;
        const displayName = node.shortName.length > 10 ?
          node.shortName.substring(0, 9) + '..' : node.shortName;
        ctx.fillText(displayName, pos.x, pos.y);
      }
    });

    animationRef.current = requestAnimationFrame(draw);
  }, [dimensions, getColor, effectiveHovered, getNodePosition]);

  // Mouse handling
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    let foundNode: string | null = null;

    for (const node of nodesRef.current) {
      const pos = getNodePosition(node, centerX, centerY);
      const dx = mouseX - pos.x;
      const dy = mouseY - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < node.nodeRadius * 1.3) {
        foundNode = node.id;
        break;
      }
    }

    setInternalHovered(foundNode);
  }, [dimensions, getNodePosition]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    for (const node of nodesRef.current) {
      const pos = getNodePosition(node, centerX, centerY);
      const dx = mouseX - pos.x;
      const dy = mouseY - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < node.nodeRadius * 1.3) {
        onNodeClick?.(node.id, node.type);
        break;
      }
    }
  }, [dimensions, getNodePosition, onNodeClick]);

  // Setup
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = Math.min(containerRef.current.offsetWidth, 750);
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    initializeNodes(dimensions.width, dimensions.height);
    initializeParticles(dimensions.width, dimensions.height);
  }, [dimensions, initializeNodes, initializeParticles]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(draw);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      initializeParticles(dimensions.width, dimensions.height);
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [dimensions, initializeParticles]);

  return (
    <div ref={containerRef} className="relative w-full flex justify-center">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setInternalHovered(null)}
        onClick={handleClick}
        className="cursor-pointer"
        style={{ width: dimensions.width, height: dimensions.height }}
      />
    </div>
  );
};
