<script>
    import BoutonGris from "./boutonGris.svelte";
 
     function deconnecter(){
         console.log("fonctionne")
     }
 </script>
 
 <body data-sveltekit-preload-data="hover">
     <nav class="navbar navbar-expend-sm bg dark navbar-dark" id="navbar">
         <img src="/src/images/logoBlanc2.png" alt="Logo">
         <BoutonGris fonction = {deconnecter} texte="Déconnexion"></BoutonGris>
     </nav>
 
 </body>