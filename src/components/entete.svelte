<script>
   import BoutonGris from "./boutonGris.svelte";
    //export let data; pourquoi faire? Je ne pense pas que ce soit nécessaire ici

    function deconnecter(){
        console.log("fonctionne")
    }
</script>

<body data-sveltekit-preload-data="hover">
    <div id="navbar">
        <img src="/src/images/logoBlanc2.png" alt="Logo">

        <BoutonGris fonction = {deconnecter} texte="Déconnexion"></BoutonGris>
    </div>

</body>