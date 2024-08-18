<script>
    import '/src/app.css';
    export let data;

    const amendes = data.amendes;

    console.log(amendes)

</script>

<h1>Amendes</h1>
{#each amendes as amende}
    {amende.montant}
{/each}