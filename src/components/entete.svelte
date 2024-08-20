<script>
   import BoutonGris from "./boutonGris.svelte";
    //export let data; pourquoi faire? Je ne pense pas que ce soit nécessaire ici

    function deconnecter(){
        console.log("fonctionne")
    }
</script>

<body data-sveltekit-preload-data="hover">
    <nav id="navbar">
        <!-- tu avais une erreur à cause du mot image dans ton alt, svelte dit que c'est un doublon 
         et pas nécessaire de mettre ce mot -->
        <img src="/src/images/logoBlanc2.png" alt="Logo">

        <BoutonGris fonction = {deconnecter} texte="Déconnexion"></BoutonGris>
        <!-- Ton code pour que tu voies les erreurs, Martine:
        <BoutonGris on:click(deconnecter) texte="Déconnexion" id="boutonGris"></BoutonGris>-->
    </nav>

</body>