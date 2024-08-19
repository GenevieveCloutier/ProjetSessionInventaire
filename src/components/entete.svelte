<script>
   import BoutonGris from "./boutonGris.svelte";
    export let data;

    function deconnecter(){

    }
</script>

<body data-sveltekit-preload-data="hover">
    <nav id="navbar">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="/src/images/logoBlanc2.png" alt="Logo image">
        <BoutonGris on:click(deconnecter) texte="Déconnexion" id="boutonGris"></BoutonGris>
    </nav>

</body>