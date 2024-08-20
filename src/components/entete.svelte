<script>
  import { page } from "$app/stores";
  $:routeId = $page.route.id;

    function deconnecter(){
        console.log("fonctionne")
    };
    
</script>

<body data-sveltekit-preload-data="hover">
    <div id="navbar">
        <img src="/src/images/logoBlanc2.png" alt="Logo">

        <BoutonGris fonction = {deconnecter} texte="Déconnexion"></BoutonGris>
    </div>

</body>