<script>
    import BoutonBrun from '../components/boutonBrun.svelte'
	import EnteteVide from '../components/enteteVide.svelte';
    import '/src/app.css';
    
</script>
<EnteteVide />
<div class="boite-1">
    <div class="centrer">
        <h1>Bienvenue!</h1>
        <p>Pour utiliser cette plateforme de location d'outils de l'entreprise <strong>IGMP Construction</strong>, vous devez avoir un compte.</p>
        <p>Si vous avez un compte, vous pouvez vous connecter ici: </p>
        <BoutonBrun lien={"/login"} texte={"Connexion"} />
        <p>Si vous n'avez pas de compte et que vous êtes employé dans notre entreprise, veuillez contacter votre supérieur immédiat!</p>
    </div>
        <img class="logoNoir" src = "src/images/logoNoirRecadre.png" alt="logo_IGMP_Construction">
</div>


<style>
    .centrer{
        text-align: center;
        font-size: 1.1em;
    }

    .logoNoir{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top:auto;
    }
</style>