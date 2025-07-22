import type { StartingCoordiantes } from "../custom-actions/hold-mouse-down/types";

export const handleMouseMoveHold = (
	e: MouseEvent,
	node: HTMLElement,
	startingCoordinates: StartingCoordiantes,
) => {
	const normalizedX = e.clientX - startingCoordinates.x;
	const normalizedY = e.clientY - startingCoordinates.y;
	const angle = 45 * (Math.PI / 180);
	const maxCoordinate =
		Math.abs(normalizedX) > Math.abs(normalizedY) ? normalizedX : normalizedY;
	const x = Math.cos(angle) * maxCoordinate;
	const y = Math.sin(angle) * maxCoordinate;

	node.style.transform = `translate(${x}px,${y}px)`;
};

export const handleMouseUpHold = (node: HTMLElement) => {
	node.style.transition = "0.5s";
	node.style.transform = `translate(${0}px,${0}px)`;
};

export const handleMouseDownHold = (node: HTMLElement) => {
	node.style.transition = "0s";
};
