<script>

    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    export let data;

    const locations = data.locations;

    console.log(locations)

</script>

<Entete/>
<div class="boite-1">
    <h1>Locations</h1>
        {#each locations as location}
            id:{location.id}<br>
            date retour prévue: {location.date_retour_prevue}<br>
            date retour effective{location.date_retour_effective}<br>
            nom item:{location.item.nom}<br>
           statut location: {location.statut_location}<br>
           <hr>
        {/each}
        
</div>