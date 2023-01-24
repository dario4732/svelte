<script>
    export let prg;
    export let idCliente; 
    export let deuda;
    let tarjetas=["master","visa","American"]
    let ser=""
    
 function ver(e){
 const target= e.target;
 ser= e.target.value;
 
 }
</script>
 
<h1>Modulo de {prg} </h1>
<hr>
<p>Su codigo de cliente es  {idCliente} y  su deuda es de $ {deuda}</p>


 
  <input type="search" name="lbl_1" id="1" on:keyup={ver}>

 <p></p>
 {#if ser=="master"}    
 <tr>{ser}  en 12 cuotas con  25 % de recargo</tr>
{/if}

<hr>
{#each tarjetas as tar}
    {#if tar=="master"}    
        <tr>{tar} con  25 de recargo</tr>
    {/if}
    {#if tar=="visa"}    
        <tr>{tar} con  1    5 de recargo</tr>
    {/if}

{/each}
<style>
    h1{
        color: cadetblue;
        font-size: 23px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    p{
        color: chocolate;
        font-size: 22px;
        
    }
</style>