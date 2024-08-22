<script>
    import '/src/app.css';
    export let data;
    const item = data.item;

</script>

<h1>Item : {item.id}</h1>
<p>Nom : {item.nom}</p>
<p>Description : {item.description}</p>
<p>Catégorie : {item.categorie}</p>
<p>Quantite : {item.quantite}</p>
<p>Statut : {item.statut_item}</p>
