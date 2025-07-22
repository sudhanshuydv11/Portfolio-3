<script lang="ts">
import { holdMouseDown } from "../custom-actions/hold-mouse-down/hold-mouse-down";
import {
	handleMouseMoveHold,
	handleMouseUpHold,
	handleMouseDownHold,
} from "./utils";

export let name: string = "";
</script>

<div use:holdMouseDown={{handleMouseMoveHold,handleMouseUpHold,handleMouseDownHold}}>
	{name}
</div>

<style>
div{
    text-align: center;
    padding: 1rem;
    background:red;

}
</style>
