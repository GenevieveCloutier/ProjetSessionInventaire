<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { goto } from '$app/navigation';

    export let data;
    let items = data.items;

    $: items = data.items;

    async function handleModify(itemId) {
        goto(`/formulaireModifier/${itemId}`);
    }

    async function removeItem(itemId) {
        const userConfirmed = window.confirm("Voulez-vous vraiment supprimer cet outil?");
        if (userConfirmed) {
            try {
                const formData = new FormData();
                formData.append('id', itemId);
                formData.append('action', 'remove');

                const response = await fetch('/modifierSupprimerOutil', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    alert("L'outil a été supprimé avec succès!");
                    window.location.reload();
                } else {
                    console.error("Failed to remove item.");
                }
            } catch (error) {
                console.error("Error removing item:", error);
            }
        }
    }

    async function markAsAvailable(itemId) {
        try {
            const formData = new FormData();
            formData.append('id', itemId);
            formData.append('action', 'markAsAvailable');

            const response = await fetch('/remettreEnStock', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert("L'outil a été remis en stock avec succès!");
                window.location.reload();
            } else {
                console.error("Failed to update item status.");
            }
        } catch (error) {
            console.error("Error updating item status:", error);
        }
    }
</script>

<Entete />

<div class="container">
    <h1>Remettre un outil en stock</h1>

    {#if items && items.length > 0}
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Categorie</th>
                    <th>Quantite</th>
                    <th>Statut</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {#each items as item}
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nom}</td>
                        <td>{item.description}</td>
                        <td>{item.categorie}</td>
                        <td>{item.quantite}</td>
                        <td>{item.statut_item}</td>
  
                        <td>
                            {#if item.statut_item === 'Supprimé'}
                            <button class="button restock" on:click={() => markAsAvailable(item.id)}>Remettre en stock</button>
                            {/if}
                        </td>
                        
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <h2>Il n'y a aucun outil dans votre base de données.</h2>
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

    .button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    }

    .button.modify {
        background-color: #28a745;
    }

    .button.delete {
        background-color: #dc3545;
    }

    .button:hover {
        opacity: 0.8;
    }
    .button.restock {
        background-color: #ffc107;
    }
</style>
