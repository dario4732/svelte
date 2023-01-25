<script>
    import App from "./App.svelte";
    import Await from "./Await.svelte";



    export let nombre;
    export let estado;
    export let cuotas;
    export let id;

</script>

{#if estado }
   <p class="tachado" > {nombre}</p>
    
   {:else}
   <p> Id de tarjeta <strong>{id } </strong> {nombre} en {cuotas} cuotas</p> 
{/if}





<style>

    .tachado{
        text-decoration: line-through;
    }
</style>