<script>
    let nombre="local" ;
    function ver(e){
 const target= e.target;
 nombre= e.target.value;
 
 }
</script>

<p> tu servidor actual es {nombre} </p>
<p><input type="text" value={nombre} on:keyup = {ver} />  </p>