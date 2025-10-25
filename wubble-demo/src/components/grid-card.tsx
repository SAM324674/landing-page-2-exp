import React from 'react';
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/ui/grid-pattern';

export function GridCard({
	className,
	children,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'group bg-card hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 relative isolate z-0 flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border hover:border-primary px-5 py-4 transition-all duration-300',
				className,
			)}
			{...props}
		>
			<div className="absolute inset-0">
				<div className="absolute -inset-[25%] -skew-y-12 [mask-image:linear-gradient(225deg,black,transparent)]">
					<GridPattern
						width={30}
						height={30}
						x={0}
						y={0}
						squares={getRandomPattern(5)}
						className="fill-border/50 stroke-border absolute inset-0 size-full translate-y-2 transition-transform duration-150 ease-out group-hover:translate-y-0"
					/>
				</div>
				<div
					className={cn(
						'absolute -inset-[10%] opacity-0 blur-[50px] transition-opacity duration-300 group-hover:opacity-20',
						'bg-gradient-to-br from-[#a855f7] to-[#e879f9]',
					)}
				/>
			</div>
			{children}
		</div>
	);
}

function getRandomPattern(length?: number): [x: number, y: number][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}
