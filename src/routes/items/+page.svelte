
<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';
	import Recherche from '../../components/recherche.svelte';

    export let data;
    const items = data.items;
    let recherche = data.itemRecherche;

    function annulerRecherche(){
        recherche = '';
    }

</script>

<Entete/>
<Recherche />

{#if recherche !=''}
    <h1>Résultat de recherche:</h1>
    <BoutonBrun lien={"/items"} fonction={annulerRecherche} texte={"Retour à tous les outils"}/>
    <div class="grid-container" id="outilRecherche">
        {#each recherche as r}
        <div class="grid-item">
        <ul>
            <img src="src/images/{r.image}" width="200" height="230" alt={r.nom}>
            <h2>{r.nom}</h2>
            <p>qty disponible: {r.quantite}</p>
            <p>date de disponibilité: {r.description}</p>
            <h3>#{r.id}</h3>
            <BoutonBrun lien={`items/${r.id}`}  texte={"Louer"} />
        </ul>
        </div>
        {:else}
        <p>Aucun résultat n'a été trouvé pour la recherche</p>
        {/each}
    </div>
{/if}


{#if recherche == ''}

    <h1 id="titreTous">Tous les outils</h1>
    <div class= "grid-container" id="tousOutils">
        {#each items as item}
            <div class="grid-item">
                <ul>
                    <img src="../src/images/{item.image}" width="200" height="230" alt={item.nom}>
                    <h2>{item.nom}</h2>
                    <p>qty disponible: {item.quantite}</p>
                    <!-- <p>date de disponibilité: {item.description}</p> -->
                    <h3>#{item.id}</h3>
                    <BoutonBrun lien={`items/${item.id}`}  texte={"Louer"} />
                </ul>
            </div>
        {:else}
        <p>Il n'y a pas d'outils dans le catalogue pour le moment!</p>
        {/each}
    </div>
{/if}

