<script>
    import Tarea from "./Tarea.svelte";
    import Await from "./Await.svelte";
    import Bind from "./Bind.svelte";
    export let prg;
    export let idCliente; 
    export let deuda;
    let tarjetas=["master","visa","American"]
    let ser=""
    let elementos=[{id:211,nombre:"Visa",estado:false,cuotas:3},
                   {id:21,nombre:"Master",estado:true,cuotas:12},
                   {id:909090,nombre:"Amex",estado:false,cuotas:6},
                   {id:823333,nombre:"Cabal",estado:false,cuotas:1},
                   {id:212123333,nombre:"Crediguia",estado:false,cuotas:4}
                  ]
    
 function ver(e){
 const target= e.target;
 ser= e.target.value;
 
 }
</script>
 
<h1>Modulo de {prg} </h1>
<hr>
<p>Su codigo de cliente es <strong>{idCliente}</strong>   y  su deuda es de $ <strong>{deuda}</strong> </p>


 
  <input type="search" name="lbl_1" id="1" on:keyup={ver}>

 <p></p>
 {#if ser=="master"}    
 <tr>{ser}  en 12 cuotas con  25 % de recargo</tr>
{/if}

<hr>
<p>Usted puede Abonar con las siguientes tarjetas</p>
<hr>    
{#each elementos as e,num(e.id)}

<div>
  <Tarea nombre={e.nombre} estado={e.estado} cuotas={e.cuotas} id={e.id} /> 
</div>

{/each}
<hr>
<Await/>

<hr>
<Bind/>
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