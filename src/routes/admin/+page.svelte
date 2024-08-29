<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { onMount } from 'svelte';
    import { page } from "$app/stores";
    import { goto } from '$app/navigation'; 


    function handleRedirect(route) {
        goto(route);
    }

    $:userId = $page.data.user ? $page.data.user.id : null;

    onMount(() => {
    if ($page.data.user.role_id == 1){
        let boutonRole = document.querySelector("#boutonRole");
        let boutonAjoutOutil = document.querySelector("#boutonAjoutOutil");
        let boutonSuppOutil = document.querySelector("#boutonSuppOutil");
        let boutonUsers = document.querySelector("#boutonUsers");
        boutonRole.hidden = false;
        boutonAjoutOutil.hidden = false;
        boutonSuppOutil = false;
        boutonUsers = false;
    }
    else{
        boutonRole.hidden = true;
        boutonAjoutOutil.hidden = true;
        boutonSuppOutil.hidden = true;
        boutonUsers.hidden = true;
    }
});
</script>


<Entete />
<h1>Bienvenue dans le portail Administrateur!</h1>


<div class="button-container">
    <div class="row">
        <button id="boutonAjoutOutil" on:click={() => handleRedirect('/ajouterOutil')}>Ajouter un outil</button>
        <button id="boutonSuppOutil"on:click={() => handleRedirect('/modifierSupprimerOutil')}>Modifier ou supprimer un outil</button>
    </div>
    <div class="row">
        <button id="boutonStockOutil" on:click={() => handleRedirect('/')}>Remettre un outil en stock</button>
        <button id="boutonLocationOutil" on:click={() => handleRedirect('/')}>Outils en cours de location</button>
    </div>
    <div class="row">
        <button id="boutonUsers" on:click={() => handleRedirect('/users')}>Afficher les utilisateurs</button> 
        <button id="boutonRole" on:click={() => handleRedirect('/roles')}>Afficher les rôles</button> 
    </div>
</div>

<style>

    h1 {
        margin-left: 5px;
        color: white;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .button-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 60px); 
        margin-top: -60px; 
        gap: 20px; 
    }

    .row {
        display: flex;
        gap: 30px; 
    }

    button {
        background-color: #5A5A5A;
        color: white;
        padding: 20px 40px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        width: 400px; 
        text-align: center;
    }

    button:hover {
        background-color: #4A4A4A; 
    }
</style>
