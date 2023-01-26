<script>
let input;
let button;

function focusLabel(){
    if (input){
        input.focus()
    }    
 }

 function focusButton(){
    if (input){
        button.focus()
    }    
 }
</script>

<input type="text" placeholder="ingrese un valor" bind:this={input} />
<button type="button" on:click={focusLabel}>buscar cosas</button>

<input type="text" placeholder="ingrese un valor" on:keypress={focusButton}  />
<button type="button" bind:this={button} >buscar cosas</button>

<style>


</style>