<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    export let data;

    const amendes = data.amendes;

    console.log(amendes)

</script>

<Entete/>
<h1>Amendes</h1>
{#each amendes as amende}
    {amende.montant}
{/each}