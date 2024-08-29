<script>
    import Entete from '../../../components/entete.svelte';
    import BoutonSoumettre from '../../../components/boutonSoumettre.svelte';
    import '/src/app.css';

    export let data;
    const role = data.role;

    function effacerTexte(){
        this.value = "";
    }

</script>

<Entete />
<div class="login-container">
    <div class="login-box">
    <h2>Modifier le rôle {role.nom}</h2>
    <p>Il n'est pas permis de modifier l'identifiant ou le nom du rôle car ceci comprometterait l'intégrité 
        de la plateforme!</p>

    <form method="POST" action="?/editerRole">

    <div class="input-group">
    <label for="idRole">Identifant du rôle:</label>
    <input type="number" name="idRole" value={role.id} readonly><br><br>
    </div>
    <div class="input-group">
    <label for="nom">Nom du rôle:</label>
    <input type="text" name="nom" value={role.nom} readonly><br><br>
    </div>
    <label for="description">Description du rôle:</label>
    <textarea name="description"  cols="38" rows="10" value={role.description} on:click={effacerTexte}></textarea>
    
    <div class="centrer">
        <BoutonSoumettre texte={"Modifier"}/>
        <a href = "/roles" ><button>Annuler</button></a>
    </div>
    </form>
    </div>
</div>

<style>

    .centrer, h2{
        text-align: center;
    }
    
    p{  
        text-align: center
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