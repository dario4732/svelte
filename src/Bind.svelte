<script>
    let nombre="local" ;
    let valorU="google.com";
    let opcion=false;
    let sel=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    let sele="lunes";

    function ver(e){
    const target= e.target;
    nombre= e.target.value;
    }
</script>

<p> tu servidor actual es => <strong>{nombre}</strong> </p>
<p><input type="text" value={nombre} on:keyup = {ver} />  </p>
<hr>
<p> tu servidor secundario =><strong>{valorU}</strong>  </p>
<p><input type="text" bind:value={valorU}></p>

{#if opcion}
    <p>Si esta de  Acuerdo</p>
{:else}
    <p>No esta de Acuerdo</p>
{/if}
<input type="checkbox" bind:checked={opcion} value={opcion}>

<hr>
<select bind:value={sele}>
    {#each sel as s}
    <option value={s}>{s}</option>  
    {/each}
</select>

<p>Su franco  sera el {sele}</p>