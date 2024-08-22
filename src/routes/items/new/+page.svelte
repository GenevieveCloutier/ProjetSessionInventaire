<script>
    import '/src/app.css';
    import BoutonSoumettre from '../../../components/boutonSoumettre.svelte';
    import Entete from "../../../components/entete.svelte";

    export let data;

    const items = data.item;

   
</script>

<Entete/>
<h1>Nouvel Item</h1>

<form method="POST" action="?/new">
    <label for="nom">Nom</label>
    <input type="text" name="nom" id="nom">

    <label for="description">Description</label>
    <input type="text" name="description" id="description">

    <label for="categorie">Catégorie</label>
    <select name="categorie" id="categorie">
        <option value="">Veuillez sélectionner</option>
        <option value="outilsElectriques">Outil électrique</option>
        <option value="outilsPneumatiques">Outil pneumatique</option>
        <option value="outilsManuels">Outil manuel</option>
        <option value="divers">Divers</option>
    </select>

    <label for="quantite">Quantite</label>
    <input type="number" name="quantite" id="quantite">

    <label for="statut">Statut</label>
    <select name="statut_item" id="statut_item">
        <option value="">Veuillez sélectionner</option>
        <option value="disponible">Disponible</option>
        <option value="nonDisponible">Non disponible</option>
    </select>

    <label for="image">Insérer une image</label>
    <input type="file" name="image" id="image"> <!--vérifier car ça ne fonctionne pas-->

    <BoutonSoumettre texte={"Ajouter"} /> 
</form>