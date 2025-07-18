export const holdMouseDown = (node, { handleMouseDownHold }) => {
	let holding = false;
	let startingCoordinates = {};
	const handleMouseDown = (e) => {
		holding = true;
		startingCoordinates = { x: e.x, y: e.y };
		console.log("mousedown");
	};
	const handleMouseUp = () => {
		holding = false;
	};

	const handleMouseMove = (e) => {
		if (holding) {
			e.startingCoordinates = startingCoordinates;
			handleMouseDownHold(e);
			console.log("mousemove");
		}
	};

	node.addEventListener("mousedown", handleMouseDown);
	node.addEventListener("mouseup", handleMouseUp);
	node.addEventListener("mousemove", handleMouseMove);
};
