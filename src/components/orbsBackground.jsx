import React, { useEffect, useRef } from 'react';

const GlowingOrbsBackground = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		let animationFrameId;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const colors = [
			{ r: 147, g: 51, b: 234 },
			{ r: 75, g: 0, b: 130 },
		];

		class Orb {
			constructor(color, isBottomRight = false) {
				this.radius = Math.random() * 200 + 300;
				this.isBottomRight = isBottomRight;

				if (isBottomRight) {
					this.x = canvas.width - this.radius;
					this.y = canvas.height - this.radius;
				} else {
					this.x = Math.random() * canvas.width;
					this.y = Math.random() * canvas.height;
				}
				this.speedX = (Math.random() - 0.5) * 1;
				this.speedY = (Math.random() - 0.5) * 1;
				this.color = color;
			}

			update() {
				if (!this.isBottomRight) {
					this.x += this.speedX;
					this.y += this.speedY;

					if (this.x < 0 || this.x > canvas.width) {
						this.speedX *= -1;
					}

					if (this.y < 0 || this.y > canvas.height) {
						this.speedY *= -1;
					}
				}
			}

			draw() {
				ctx.beginPath();
				const gradient = ctx.createRadialGradient(
					this.x, this.y, 0,
					this.x, this.y, this.radius
				);
				gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`);
				gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
				ctx.fillStyle = gradient;
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		const orbs = [
			new Orb(colors[0], true),
			new Orb(colors[1]),
		];

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.filter = 'blur(80px)';
			orbs.forEach(orb => {
				orb.update();
				orb.draw();
			});
			ctx.filter = 'none';

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

		return (
			<canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10 opacity-60" />
		);
};

export default GlowingOrbsBackground;