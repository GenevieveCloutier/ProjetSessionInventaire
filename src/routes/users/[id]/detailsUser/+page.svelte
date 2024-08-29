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
    <h2>Modifier l'utilisateur</h2>
    
    <form method="POST" action="?/editerProfilAdmin">
        <div class="input-group">
            <label for="idUser">Identifiant de l'utilisateur</label>
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
      
        </div>
        <div class="input-group">   
            <label for="email">Courriel</label>
            <input type="text" name="email" value = {user.email} on:click={effacerTexte} required><br><br>
        </div>

        <div class="input-group"> 
            <label for="role_id">Rôle actuel:{user.role.nom}</label>  
            <select name="role_id" id="role_id" required>
                <option value="">Veuillez sélectionner</option>
                <option value=2>Employé</option>
                <option value=3>Chef d'équipe</option>
                <option value=1>Administrateur</option>
              </select>
        </div>
        <div class="input-group"> 
                <label for="statut_user">Statut actuel de l'utilisateur: {user.statut_user}</label>
                <select name="statut_user" id="statut_user" required>
                    <option value="">Veuillez sélectionner</option>
                    <option value="actif">Actif</option>
                    <option value="inactif">Inactif</option>
                  </select>
        </div>
        <div class="centrer">
            <BoutonSoumettre texte={"Modifier"}/>
            <a href = "/users" ><button>Annuler</button></a>
        </div>
        <div>
        <br>
        <form method="POST" action="?/supprimerUser">
            <input type="text" name="idUser" value={user.id} hidden>
            <input type="text" name="statut_user" value="supprime" hidden>
            <input type="text" name="role_id" value=4 hidden>
            <button class="boutonSupprimer" type="submit">SUPPRIMER L'UTILISATEUR</button>
        </form>
    </div>
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
    .boutonSupprimer{
        width: 100%;
        background-color: red;
        color:white;
        margin:auto;
    }




</style>
