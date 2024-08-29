<script>
    import '/src/app.css';
    import Entete from '../../../../../components/entete.svelte';

    export let data;
    const user = data.user; // données de l'utilisateur à supprimer
    const userConnecte = data.locals.user.id // données de l'utilisateur connecté (session)

</script>


<Entete />

<div class="login-container">
    <div class="login-box centrer">

        <form method="POST" action="?/supprimerUser">
            
            <h2>Désirez-vous supprimer l'utilisateur</h2>
            <h1>{user.prenom} {user.nom}?</h1>
            <input type="text" name="idUser" value={user.id} hidden>
            <input type="text" name="statut_user" value="supprime" hidden>
            <input type="text" name="role_id" value=4 hidden>
            <a href="/users"><button class="boutonAnnuler">ANNULER</button></a>
            <br><br>
            {#if user.id == userConnecte}
                <p>Vous ne pouvez pas supprimer votre propre compte!</p>
            {/if}
            {#if user.id != userConnecte}
                <button class="boutonSupprimer" type="submit">SUPPRIMER L'UTILISATEUR</button>
            {/if}
        </form>
    </div>
</div>

<style>

.centrer{
    text-align: center;
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
    .boutonSupprimer{
        width: 100%;
        background-color: red;
        color:white;
        margin:auto;
    }

    .boutonAnnuler{
        width: 100%;
        background-color: gray;
        color:white;
        margin:auto;
    }

</style>