<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';
    export let data;

    const items = data.items;

    console.log(items)

</script>

<Entete/>
<h1>Items</h1>
<div class="boite_2">
    {#each items as item}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="./images/{item.image}">
        <p>{item.nom}</p>
        <p>{item.description}</p>
        <p>{item.quantite}</p>
        <h3>Item : {item.id}</h3><BoutonBrun on:click(louer) texte="Louer"></BoutonBrun>
    {/each}
</div>