<script>
   function fech(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({
                    nombre:"dario torres",
                    edad:11,
                    ocupacion:"Pescador"                   
                })             
            },3000)
        })
   }
   function fech_error(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
               /* resolve({
                    nombre:"dario torres",
                    edad:11,
                    ocupacion:"Pescador"
                   
                }) */
                reject("no se conecta al servidor")
            },5000)
        })
   }
</script>

{#await fech()}
    <p>Recuperando la informacion aguarde ....</p>
{:then payload}
    <p>Nombre: {payload.nombre}</p>
    <p>Edad:{payload.edad}</p>
    <p>Ocupacion: {payload.ocupacion}</p>
{:catch e}
    <p><strong>Error:: {e} </strong></p>
{/await}
<hr>
{#await fech_error()}
    <p>Recuperando la informacion aguarde ....</p>
{:then payload}
    <p>Nombre: {payload.nombre}</p>
    <p>Edad:{payload.edad}</p>
    <p>Ocupacion: {payload.ocupacion}</p>
{:catch e}
    <p><strong>Error:: {e} </strong></p>
{/await}
