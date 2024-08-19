<h1>New Item</h1>

<form method="POST" action="?/new">
    <label for="nom">Nom</label>
    <input type="text" name="nom" id="nom">

    <label for="description">Description</label>
    <input type="text" name="description" id="description">

    <label for="quantite">Quantite</label>
    <input type="number" name="quantite" id="quantite">

    <label for="image">Insérer une image</label>
    <input type="file" name="image" id="image">

    <input type="submit" value="Envoyer">
</form>