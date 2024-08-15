<script>

    export let data;

    const amandes = data.amandes;

    console.log(amandes)

</script>

<h1>Amandes</h1>
{#each amandes as amande}
    {amande.montant}
{/each}