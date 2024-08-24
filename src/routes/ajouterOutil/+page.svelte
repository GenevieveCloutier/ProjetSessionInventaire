<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { goto } from '$app/navigation';

    let nom = '';
    let description = '';
    let categorie = '';
    let quantite = 0;
    let image = null;

    function handleFileChange(event) {
        image = event.target.files[0];
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('description', description);
        formData.append('categorie', categorie);
        formData.append('quantite', quantite);
        formData.append('image', image);

        try {
            const response = await fetch('/ajouterOutil', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            alert("Votre outil a été créé!");
            window.location.reload(); 

      
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
</script>

<Entete />

<div class="form-container">

    <h2 class="form-title">Ajouter un outil</h2>

    <div class="form-grid">

        <div class="form-left">
            <form method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" bind:value={nom} placeholder="Entrez le nom" required />
                </div>
            
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" bind:value={description} placeholder="Entrez la description" required></textarea>
                </div>
            
                <div class="form-group">
                    <label for="categorie">Categorie</label>
                    <input type="text" id="categorie" name="categorie" bind:value={categorie} placeholder="Entrez la catégorie" required />
                </div>
            
                <div class="form-group">
                    <label for="quantite">Quantité</label>
                    <input type="number" id="quantite" name="quantite" bind:value={quantite} placeholder="Entrez la quantité" required />
                </div>
            
            </form>
            
        </div>

        <div class="form-right">
            <div class="photo-upload">
                <label for="photo-upload">Téléverser une photo</label>
                <input type="file" id="photo-upload" accept="image/*" on:change={handleFileChange} />
            </div>
        </div>

        <div class="button-column">
            <button class="ajouter-button" type="submit" on:click={handleSubmit}>Ajouter</button>
        </div>
    </div>
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

    .ajouter-button {
        background-color: #5A5A5A;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    .ajouter-button:hover {
        background-color: #4A4A4A;
    }
</style>
