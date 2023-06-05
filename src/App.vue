<script setup> 
import './components/Login.vue' 
import HelloWorld from './components/HelloWorld.vue' 
// initialize components based on data attribute selectors 
</script> 

<template> 
  <HelloWorld /> 
</template>

<script>

  let myScript = document.createElement( 'script' );
    myScript.setAttribute( 'src', './assets/js/app.js' );
    document.body.appendChild( myScript );

  let dop = document.createElement( 'script' );
    dop.setAttribute( 'src', './assets/js/pages/dashboard-job.init.js' );
    document.body.appendChild( dop );

  let bx = document.createElement( 'script' );
    bx.setAttribute( 'src', 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js' );
    document.body.appendChild( bx );

  let metis = document.createElement( 'script' );
    metis.setAttribute( 'src', 'https://unpkg.com/metismenu' );
    document.body.appendChild( metis );
</script>

