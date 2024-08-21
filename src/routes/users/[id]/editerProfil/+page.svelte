
<script>
    import BoutonSoumettre from '../../../../components/boutonSoumettre.svelte';
	import EnregistrerAnnuler from '../../../../components/enregistrerAnnuler.svelte';
	import Entete from '../../../../components/entete.svelte';
    let fonction = undefined;
    import '/src/app.css';
    export let data;

    const user = data.user;

    function effacerTexte(){
        this.value = "";
    }

</script>

<Entete />
<div class="login-container">
    <div class="login-box">
    <h2>Modifier mon profil</h2>
    
    <form method="POST" action="?/editerProfil">
        <div class="input-group">
        <label for="idUser">Identifiant de l'employé</label>
        <input type="text" name="idUser" value={user.id} readonly>
        </div>

        <div class="input-group">
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom" value={user.prenom} on:click={effacerTexte} required>
        </div>

        <div class="input-group">
        <label for="nom">Nom</label>
        <input type="text" name="nom" value = {user.nom} on:click={effacerTexte} required >
        </div>

        <div class="input-group">
        <label for="telephone">Téléphone</label>
        <input type="text" name="telephone" value = {user.telephone} on:click={effacerTexte} required >
        <div class="input-group">
        <label for="email">Courriel</label>
        <input type="text" name="email" value = {user.email} on:click={effacerTexte} required><br><br>
        </div>
        <!-- input pour modifier le role mais ce champs s'Affiche juste si c'est un admin?-->
        <EnregistrerAnnuler lien={`users/${user.id}`} />
    </form>
    </div>
</div>

<style>
    h2{
        text-align: center;
        padding: 10px;
    }


</style>
