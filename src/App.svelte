<script>
import { text } from "svelte/internal";
import Interior from "./interior.svelte";


export let  valor;
export let idCliente
 let nombre="";
 function gestionarClick(){
   alert("ok");
 }

 function chequear(e){
 const target= e.target;
nombre= e.target.value;
 
 }

</script>


<h1>Svelte</h1>
<Interior prg="Ventas" idCliente={idCliente} deuda={valor}/>

<hr>


 <input type="text" placeholder="ingrese su nombre" class="texto" on:keyup={chequear} name="cli">
 <button disabled={nombre.length<=0} > ingresar </button>
 {#if nombre.length<=0}
  <p>No me has dicho tu nombre</p>
  {:else}
   <p>Buen dia  {nombre}</p>
   <tr></tr>
   <p class="caracteres">cantidad de caracter es de {nombre.length} </p>
  {/if}



<style>
.boton{
  font-size: 1rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color:black;
  background-color: blueviolet;
}

.texto{
  font-size: 2rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

p{
  font-size: 25px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color:royalblue;
  
}
h1{
   font-size: 7rem;
  font-family: Georgia, 'Times New Roman', Times, serif ;

}  

.caracteres{
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
}
.title{
  font-size: 1rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color:aquamarine;
}
</style>