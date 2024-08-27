<script>
    import BoutonSoumettre from '../../../../components/boutonSoumettre.svelte';
	import Entete from '../../../../components/entete.svelte';
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
        <input type="tel" name="telephone" value = {user.telephone} on:click={effacerTexte} required >
        <div class="input-group">
        <label for="email">Courriel</label>
        <input type="text" name="email" value = {user.email} on:click={effacerTexte} required><br><br>
        </div>

        <div class="centrer">
            <BoutonSoumettre texte={"Modifier"}/>
            <a href = "/users/{user.id}" ><button>Annuler</button></a>
        </div>
    </form>
    </div>
</div>

<style>
    h2{
        text-align: center;
        padding: 10px;
    }
    button {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: gray;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
    }
  
    button:hover {
      background-color: #695C4B;
    }

    .centrer{
        text-align: center;
    }



</style>
