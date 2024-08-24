<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { goto } from '$app/navigation';
    import { invalidateAll } from '$app/navigation';

    export let data;
    let items = data.items;

    $: items = data.items;
    console.log("Item id is " + items.itemId);
    async function handleModify(itemId) {
        goto(`/modify/${itemId}`);
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
                alert("L'outil a été supprimé avec succès!")
                window.location.reload(); 
                if (response.ok) {

                    const result = await response.json();
                    if (result.success) {

                    } else {
                        console.error("Failed to remove item:", result.error);
                    }
                } else {
                    console.error("Failed to remove item.");
                }
            } catch (error) {
                console.error("Error removing item:", error);
            }
        }
    }
</script>

<Entete />

<div class="container">
    <h1>Modfier ou supprimer un outil</h1>

    {#if items && items.length > 0}
        <table>
            <thead>
                <tr>
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
                        <td>{item.nom}</td>
                        <td>{item.description}</td>
                        <td>{item.categorie}</td>
                        <td>{item.quantite}</td>
                        <td>{item.statut_item}</td>
                        <td>
                            <button class="button modify" on:click={() => handleModify(item.id)}>Modifier</button>
                            <button class="button delete" on:click={() => removeItem(item.id)}>Supprimer</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>No items found in the database.</p>
    {/if}
</div>

<style>
    h1 {
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
</style>
