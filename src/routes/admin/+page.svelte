<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { goto } from '$app/navigation'; 


    function handleRedirect(route) {
        goto(route);
    }
</script>


<Entete />
<h1>Bienvenu au Portail Administrateur!</h1>

<div class="button-container">
    <div class="row">
        <button on:click={() => handleRedirect('/ajouterOutil')}>Ajouter un outil</button>
        <button on:click={() => handleRedirect('/modifierSupprimerOutil')}>Modifier ou supprimer un outil</button>
    </div>
    <div class="row">
        <button on:click={() => handleRedirect('/')}>Remettre un outil en stock</button>
        <button on:click={() => handleRedirect('/')}>Outils en cours de location</button>
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
