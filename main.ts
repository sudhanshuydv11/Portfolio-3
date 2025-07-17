import App from "./src/app.svelte";
import { mount } from "svelte";

const root = document.getElementById("app");

if (root) {
	mount(App, {
		target: root,
	});
} else {
	throw new Error("#app element not found");
}
