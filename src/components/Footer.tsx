interface FooterProps {
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
	return (
		<footer className={`p-6 text-white ${className}`}>
			<div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
				<div className="text-center text-sm text-white/80">
					<p>© 2024 Sikku Kolam Generator. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
