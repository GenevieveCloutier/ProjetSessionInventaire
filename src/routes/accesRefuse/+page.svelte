<script>
    import BoutonBrun from "../../components/boutonBrun.svelte";
    import Entete from "../../components/entete.svelte";
    import '/src/app.css';
</script>

<Entete />

<div class="login-container">
    <div class="login-box centrer">
        <h1>Accès refusé!</h1>
        <BoutonBrun lien={"/items"} texte={"Retour au catalogue"}/>
    </div>
</div>

<style>
    .centrer{
        text-align: center;
    }
</style>