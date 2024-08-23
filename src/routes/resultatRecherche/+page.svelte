<script>
     import '/src/app.css';
     import Entete from '../../components/entete.svelte';
     export let data;
     const items = data.items;
     const recherche = data.itemRecherche;
     
</script>

<div classs="boite-1">
    <h1>Résultat de recherche</h1>
<Entete />

{#each recherche as r}
    {r.nom}
{/each}
</div>