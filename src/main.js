import './app.css'
import App from './App.svelte'


const app = new App({
  target: document.getElementById('app'),
  props:{
    valor:"10.2563,12", 
    idCliente:24825574,
  }
})

export default app
