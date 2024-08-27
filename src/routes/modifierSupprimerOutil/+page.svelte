<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    let items = [];
    let showForm = false;
    let currentItem = {};
    let loading = false;

    export let data;


    let item = data.item;
    let formData = { ...item };
    onMount(() => {
        items = data.items;
    });

    function handleModify(itemId) {
    currentItem = items.find(item => item.id === itemId);
    formData = { ...currentItem }; 
    showForm = true;
}


    async function handleSubmit(event) {
    event.preventDefault();

    try {
        console.log("formData.id:", formData.id); 
        const form = new FormData();
        form.append('action', 'update');
        form.append('id', formData.id);
        form.append('nom', formData.nom);
        form.append('description', formData.description);
        form.append('categorie', formData.categorie);
        form.append('quantite', formData.quantite);
        form.append('statut_item', formData.statut_item);

        const response = await fetch('/modifierSupprimerOutil', {
            method: 'POST',
            body: form
        });

        const result = await response.json(); 

        alert("L'outil a été modifié avec succès!");
        window.location.href = '/modifierSupprimerOutil'; 

        console.log("response is ", result);

        
    } catch (error) {
        console.error('Error updating item:', error);
        alert('Error updating item');
    }
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
                    alert("L'outil a été supprimé avec succès !");
                    items = items.filter(item => item.id !== itemId);
                } else {
                    console.error("Failed to delete item.");
                }
            } catch (error) {
                console.error("Error deleting item:", error);
            }
        }
    }
</script>

<Entete />
<h1>Modifier ou Supprimer un Outil</h1>
<div class="container">
    

    {#if !showForm}
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
                        {#if item.statut_item === 'disponible' || item.statut_item === 'Disponible'}
                        <tr>
                            <td>{item.id}</td>
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
                        {/if}
                    {/each}
                </tbody>
            </table>
        {:else}
            <h2>Il n'y a aucun outil dans votre base de données.</h2>
        {/if}
    {/if}

    {#if showForm}
        <div class="form-wrapper">
            <form on:submit={handleSubmit}>
                <div>
                    <label for="nom">Nom:</label>
                    <input type="text" id="nom" name="nom" bind:value={formData.nom} required />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" bind:value={formData.description} required></textarea>
                </div>
                <div>
                    <label for="categorie">Categorie:</label>
                    <input type="text" id="categorie" name="categorie" bind:value={formData.categorie} required />
                </div>
                <div>
                    <label for="quantite">Quantite:</label>
                    <input type="number" id="quantite" name="quantite" bind:value={formData.quantite} required />
                </div>
                <div>
                    <label for="statut_item">Statut:</label>
                    <input type="text" id="statut_item" name="statut_item" bind:value={formData.statut_item} required />
                </div>
                
                <div>
                    <button type="submit" class="button" disabled={loading}>{loading ? 'En cours...' : 'Modifier l\'outil'}</button>
                    <button type="button" class="button cancel" on:click={() => showForm = false}>Annuler</button>
                </div>
            </form>
        </div>
    {/if}
</div>

<style>

    h1 {
        color: white;
        text-align: center;
    }
    .container {
        margin: 70px auto 50px; 
        width: 80%;
        text-align: center;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th, td {
        padding: 10px;
        border: 1px solid #ddd;
    }

    th {
        background-color: #f4f4f4;
    }

    .button {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    .button.delete {
        background-color: #dc3545;
    }

    .button.cancel {
        background-color: #6c757d;
    }

    .button:hover {
        opacity: 0.8;
    }

    form div {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-size: 16px;
        color: #333;
    }

    input, textarea {
        width: 100%;
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ddd;
        margin-bottom: 10px;
    }

    .form-wrapper {
        display: flex;
        justify-content: center; 
        align-items: center; 
        margin-top: 20px; 
    }

    form {
        width: 400px;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
</style>
