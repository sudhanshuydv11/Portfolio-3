export const holdMouseDown = (
	node: HTMLElement,
	{ handleMouseDownHold, handleMouseUpHold, handleMouseMoveHold },
) => {
	let holding = false;
	let startingCoordinates = {};
	const handleMouseDown = (e: MouseEvent) => {
		holding = true;
		startingCoordinates = { x: e.clientX, y: e.clientY };
		handleMouseDownHold(node);
	};
	const handleMouseUp = () => {
		if (holding) {
			holding = false;
			handleMouseUpHold(node);
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (holding) {
			handleMouseMoveHold(e, node, startingCoordinates);
		}
	};

	// make it happen on cursor position rather than node
	node.addEventListener("mousedown", handleMouseDown);
	document.addEventListener("mouseup", handleMouseUp);
	document.addEventListener("mousemove", handleMouseMove);
};
