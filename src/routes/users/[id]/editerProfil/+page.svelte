<script>
    import BoutonSoumettre from '../../../../components/boutonSoumettre.svelte';
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
    <h1>Modifier mon profil</h1>
    
    <form method="POST" action="?/editerProfil">
        <input type="text" name="prenom" value={user.prenom} on:click={effacerTexte} required><br><br>
        <input type="text" name="nom" value = {user.nom} on:click={effacerTexte} required ><br><br>
        <input type="text" name="telephone" value = {user.telephone} on:click={effacerTexte} required ><br><br>
        <input type="text" name="email" value = {user.email} on:click={effacerTexte} required><br><br>
        <!-- input pour modifier le role mais ce champs s'Affiche juste si c'est un admin?-->

        <BoutonSoumettre texte="Modifier"/> 
        <a href = "/users/{user.id}"><button>Annuler</button></a>
    </form>
    </div>
</div>

<style>
    button {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: gray;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #695C4B;
    }
</style>
