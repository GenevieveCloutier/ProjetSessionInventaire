<script>
    import Entete from '../../../components/entete.svelte';
    import BoutonSoumettre from '../../../components/boutonSoumettre.svelte';
    import '/src/app.css';
	import EnregistrerAnnuler from '../../../components/enregistrerAnnuler.svelte';
    export let data;
    const role = data.role;

    function effacerTexte(){
        this.value = "";
    }

</script>

<Entete />
<div class="login-container">
    <div class="login-box">
    <h2>Modifier le rôle # {role.id}</h2>

    <form method="POST" action="?/editerRole">

    <div class="input-group">
    <label for="idRole">Identifant du rôle:</label>
    <input type="number" name="idRole" value={role.id} readonly><br><br>
    </div>
    <div class="input-group">
    <label for="nom">Nom du rôle:</label>
    <input type="text" name="nom" value={role.nom} on:click={effacerTexte}><br><br>
    </div>
    <label for="description">Description du rôle:</label>
    <textarea name="description"  cols="38" rows="10" value={role.description} on:click={effacerTexte}></textarea>
    
    <div class="centrer">
        <EnregistrerAnnuler lien={"/roles"} />
    </div>
    </form>
    </div>
</div>

<style>

    .centrer, h2{
        text-align: center;
    }
</style>