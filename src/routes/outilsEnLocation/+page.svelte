<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';

    export let data;
    let locations = data.locations;

    $: locations = data.locations;

    function handleRedirect(route) {
        goto(route);
    }

</script>

<Entete />

<div class="container">
    <h1>Outils en cours de location</h1>

    {#if locations && locations.length > 0}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date d'emprunt</th>
                    <th>Date de retour prévue</th>
                    <th>Date de retour effective</th>
                    <th>Statut de location</th>
                    <th>Utilisateur</th>
                    <th>Outil</th>
                </tr>
            </thead>
            <tbody>
                {#each locations as location}
                    <tr>
                        <td>{location.id}</td>
                        <td>{location.date_emprunt}</td>
                        <td>{location.date_retour_prevue}</td>
                        <td>{location.date_retour_effective}</td>
                        <td>{location.statut_location}</td>
                        <td>{location.user.nom} {location.user.prenom}</td>
                        <td>{location.item.nom}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <h2>Il n'y a aucune location dans votre base de données.</h2>
    {/if}
</div>

<style>
    h1 {
        color: white;
    }
    h2 {
        color: white;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px auto;
        width: 80%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        text-align: left;
    }

    th, td {
        padding: 10px;
        border: 1px solid #ddd;
    }

    th {
        background-color: #f4f4f4;
    }
</style>
