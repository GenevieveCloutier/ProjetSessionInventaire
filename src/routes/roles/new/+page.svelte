<script>
    import Entete from '../../../components/entete.svelte';
    import BoutonSoumettre from '../../../components/boutonSoumettre.svelte';
    import '/src/app.css';
	import EnregistrerAnnuler from '../../../components/enregistrerAnnuler.svelte';
    export let data;
    const role = data.role;

</script>

<Entete />
<div class="login-container">
    <div class="login-box">
    <h2>Ajouter un nouveau rôle</h2>

    <form method="POST" action="?/new">
    <div class="input-group">
    <label for="nom">Nom du rôle:</label>
    <input type="text" name="nom"><br><br>
    </div>

    <div class="input-group">
    <label for="description">Description du rôle:</label>
    <textarea name="description"  cols="38" rows="10"></textarea>
    </div>
    <div class="centrer">
       <EnregistrerAnnuler lien={"/roles"}/>
    </div>
    </form>
    </div>
</div>

<style>
    .centrer, h2{
        text-align: center;
    }
</style>