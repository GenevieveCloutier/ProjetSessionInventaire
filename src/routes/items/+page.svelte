<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    export let data;

    const items = data.items;

    console.log(items)

</script>

<Entete/>
<h1>Items</h1>

{#each items as item}
    <h2>Item : {item.id}</h2>
    <p>{item.nom}</p>
    <p>{item.description}</p>
    <p>{item.quantite}</p>
    <a href="./items/{item.id}">Lien</a>
{/each}