<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { goto } from '$app/navigation';

    function handleRedirect(route) {
        goto(route);
    }

    function handleSubmit() {
        console.log("Form submitted!");
    }
</script>

<Entete />


<div class="form-container">

    <h2 class="form-title">Ajouter un outil</h2>


    <div class="form-grid">

        <div class="form-left">
            <form>
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" placeholder="Entrez le nom" />
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Entrez la description"></textarea>
                </div>

                <div class="form-group">
                    <label for="categorie">Categorie</label>
                    <input type="text" id="categorie" placeholder="Entrez la catégorie" />
                </div>

                <div class="form-group">
                    <label for="quantite">Quantité</label>
                    <input type="number" id="quantite" placeholder="Entrez la quantité" />
                </div>
            </form>
        </div>


        <div class="form-right">
            <div class="photo-upload">
                <label for="photo-upload">Téléverser une photo</label>
                <input type="file" id="photo-upload" accept="image/*" />
            </div>
        </div>

        <div class="button-column">
            <button class="ajouter-button" on:click={handleSubmit}>Ajouter</button>
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
