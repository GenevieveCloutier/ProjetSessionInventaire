<script>
    import '/src/app.css';
    import Entete from '../../../components/entete.svelte';
    import BoutonBrun from '../../../components/boutonBrun.svelte';
	import Recherche from '../../../components/recherche.svelte';

    export let data;
    const items = data.items;
    const recherche = data.itemRecherche; // donne tous les items "Pelle"

    console.log(items)

</script>

<Entete/>
<Recherche />

<div class="grid-container">
    {#each items as item}
        {#if (item.categorie=="Outil manuel") }
            
        <div class="grid-item">
            <ul>
                <img src="/src/images/{item.image}" width="200" height="230" alt={item.nom}>
                <h2>{item.nom}</h2>
                <p>qty disponible: {item.quantite}</p>
                 <!--Je n'ai pas encore trouvé comment afficher la bonne qty
                <p>qty disponible: {items.filter(item => item.statut_item === "disponible").length}</p> -->
                <p>date de disponibilité: {item.description}</p>
                <h3>#{item.id}</h3>
                <BoutonBrun lien={`items/${item.id}`}  texte={"Louer"} />
            </ul>
        </div>
        {/if}
    {/each}
</div>
