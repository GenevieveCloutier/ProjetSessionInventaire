<script>
    import BoutonBrun from "../../components/boutonBrun.svelte";
    let fonction = undefined;
    import Entete from "../../components/entete.svelte";
    import '/src/app.css';
</script>

<Entete />

<div class="login-container">
    <div class="login-box">

<h3>Merci!</h3><!-- passer le nom utilisateur ici quand le login sera fait-->
<p>Ta demande a bien été envoyée!</p>
<BoutonBrun lien={"/items"} texte={"Retour au catalogue"}/>

    </div>
</div>