
<script>
    import '/src/app.css';
    import Entete from '../../../components/entete.svelte';
    import BoutonBrun from '../../../components/boutonBrun.svelte';
	import Recherche from '../../../components/recherche.svelte';

    export let data;
    const items = data.items;
    const recherche = data.itemRecherche;
   
</script>

<Entete/>
<Recherche />

{#each recherche as r}
<h1>Résultats de recherche</h1>
<div class="grid-container" id="outilRecherche">
    <div class="grid-item">
    <ul>
        <img src="../src/images/{r.image}" width="200" height="230" alt={r.nom}>
        <h2>{r.nom}</h2>
        <p>qty disponible: {r.quantite}</p>
        <p>date de disponibilité: {r.description}</p>
        <h3>#{r.id}</h3>
        <BoutonBrun lien={`../items/${r.id}`}  texte={"Louer"} />
    </ul>
    </div>
</div>
{/each}


<h1 id="titreTous">Tous les outils pneumatiques</h1>
<div class= "grid-container" id="tousOutils">
    {#each items as item}
        {#if (item.categorie=="Outil pneumatique") }
            <div class="grid-item">
                <ul>
                    <img src="../src/images/{item.image}" width="200" height="230" alt={item.nom}>
                    <h2>{item.nom}</h2>
                    <p>qty disponible: {item.quantite}</p>
                    <h3>#{item.id}</h3>
                    <BoutonBrun lien={`../items/${item.id}`}  texte={"Louer"} />
                </ul>
            </div>
        {/if}
    {/each}
</div>


