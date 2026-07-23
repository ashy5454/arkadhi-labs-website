import React, { useEffect, useRef } from 'react';

/**
 * CrystalMotionCanvas Component
 * Renders subtle faceted geometric line-art for optional atmospheric backgrounds.
 * Dynamic cursor tracking & scroll-triggered facet opacity shifts.
 */
export default function CrystalMotionCanvas({ theme: _theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    let scrollY = window.scrollY;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let nodes = [];
    const NODE_COUNT = Math.min(Math.floor((width * height) / 22000), 55);

    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          phase: Math.random() * Math.PI * 2,
          speed: 0.006 + Math.random() * 0.008,
          size: 1.8 + Math.random() * 2.2,
          opacity: 0.3 + Math.random() * 0.5
        });
      }
    }

    initNodes();

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const scrollFactor = (scrollY * 0.0005) % (Math.PI * 2);

      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.phase += node.speed;
          node.x += node.vx + Math.sin(node.phase) * 0.25;
          node.y += node.vy + Math.cos(node.phase) * 0.25;

          if (node.x < -60) node.x = width + 60;
          if (node.x > width + 60) node.x = -60;
          if (node.y < -60) node.y = height + 60;
          if (node.y > height + 60) node.y = -60;

          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 200;
            node.x -= (dx / dist) * force * 2;
            node.y -= (dy / dist) * force * 2;
          }
        }
      });

      const maxDistance = 240;

      // Draw facet lines and polyhedral triangular fills
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx1 = nodes[i].x - nodes[j].x;
          const dy1 = nodes[i].y - nodes[j].y;
          const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

          if (dist1 < maxDistance) {
            const lineAlpha = (1 - dist1 / maxDistance) * 0.22;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(20, 153, 156, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Find 3rd vertex to build dynamic crystalline facet plane
            for (let k = j + 1; k < nodes.length; k++) {
              const dx2 = nodes[j].x - nodes[k].x;
              const dy2 = nodes[j].y - nodes[k].y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              const dx3 = nodes[i].x - nodes[k].x;
              const dy3 = nodes[i].y - nodes[k].y;
              const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

              if (dist2 < maxDistance && dist3 < maxDistance) {
                const facetAlpha = (1 - (dist1 + dist2 + dist3) / (maxDistance * 3)) * 
                                   (0.04 + Math.sin(frame * 0.02 + i + scrollFactor) * 0.025);

                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.lineTo(nodes[k].x, nodes[k].y);
                ctx.closePath();

                ctx.fillStyle = i % 2 === 0
                  ? `rgba(20, 153, 156, ${facetAlpha * 1.8})`
                  : `rgba(252, 122, 92, ${facetAlpha * 0.8})`;
                ctx.fill();
              }
            }
          }
        }
      }

      // Draw node dots with Tech Teal glow
      nodes.forEach((node, idx) => {
        const pulse = Math.sin(frame * 0.04 + node.phase) * 0.5 + 0.5;
        const nodeAlpha = 0.4 + pulse * 0.4;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * (0.9 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = idx % 5 === 0 ? `rgba(252, 122, 92, ${nodeAlpha})` : `rgba(20, 153, 156, ${nodeAlpha})`;
        ctx.shadowColor = '#14999C';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
