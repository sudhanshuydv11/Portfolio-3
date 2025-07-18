<script>
import {holdMouseDown} from "./custom-actions/hold.ts"
  let name = 'world';
const handleMouseDownHold=()=>{};
</script>

<main use:holdMouseDown={{handleMouseDownHold}}>
  <h1>Hello {name}!</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1rem;
    background:red;
  }
</style>
