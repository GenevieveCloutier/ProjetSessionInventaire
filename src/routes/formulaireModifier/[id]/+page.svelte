<script>
    import { onMount } from 'svelte';
    import { updateItem } from '$lib/db/controllers/items.controller'; 

    export let params; 
    let item = null;
    let editing = false;

    onMount(async () => {
        try {
            const response = await fetchItem(params.id); 
            item = response;
        } catch (error) {
            console.error("Error fetching item:", error);
        }
    });


    function startEditing() {
        editing = true;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const updatedItem = {
                id: item.id,
                nom: formData.get('nom'),
                description: formData.get('description'),
                categorie: formData.get('categorie'),
                quantite: parseInt(formData.get('quantite')),
                statut_item: formData.get('statut_item')
            };

            const response = await updateItem(updatedItem);

            if (response.success) {
                alert('Item updated successfully!');
                editing = false;
            } else {
                console.error('Failed to update item.');
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    }
</script>

<div class="container">
    <h1>{item ? 'Modifier l\'outil' : 'Chargement...'}</h1>

    {#if item}
        {#if !editing}
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
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nom}</td>
                        <td>{item.description}</td>
                        <td>{item.categorie}</td>
                        <td>{item.quantite}</td>
                        <td>{item.statut_item}</td>
                        <td>
                            <button class="button modify" on:click={startEditing}>Modifier</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        {/if}

        {#if editing}
            <form on:submit={handleSubmit}>
                <label>
                    Nom:
                    <input type="text" name="nom" value={item.nom} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={item.description} />
                </label>
                <label>
                    Categorie:
                    <input type="text" name="categorie" value={item.categorie} />
                </label>
                <label>
                    Quantite:
                    <input type="number" name="quantite" value={item.quantite} />
                </label>
                <label>
                    Statut:
                    <input type="text" name="statut_item" value={item.statut_item} />
                </label>
                <button type="submit">Update</button>
                <button type="button" on:click={() => editing = false}>Cancel</button>
            </form>
        {/if}
    {:else}
        <p>Item not found</p>
    {/if}
</div>

<style>
        body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px auto;
        padding: 20px;
        width: 60%;
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    .form-title {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    .form-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr; 
        grid-gap: 20px;
        width: 100%;
        align-items: start; 
    }

    .form-left {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .form-group label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    .form-group input,
    .form-group textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    textarea {
        resize: vertical;
    }

    .form-right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .photo-upload {
        margin-bottom: 20px;
    }

    .form-right label {
        font-weight: bold;
        margin-bottom: 10px;
    }

    input[type="file"] {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    .button-column {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        grid-column: 3;
    }
</style>
