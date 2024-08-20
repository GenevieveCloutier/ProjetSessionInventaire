<script>
    import '/src/app.css';
    import Entete2liens from '../../components/entete2liens.svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';
    import BoutonGris from '../../components/boutonGris.svelte';
    let fonction = undefined;
    export let data;

    const items = data.items;

    console.log(items)

    function louer(){
        // j'ai ajouté la fonction pour que le serveur ne plante pas
        console.log("fonctionne")
    }

</script>

<Entete2liens/>
<div id="barreRecherche">

    
</div>
<div class="grid-container">
    {#each items as item}
        <div class="grid-item">
            <ul>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="./images/{item.image}" width="250" height="300">
                <h2>{item.nom}</h2>
                <p>qty disponible: {item.quantite}</p>
                <p>date de disponibilité: {item.description}</p> <!-- à changer pour la date-->
                <h3>Id #{item.id}</h3><BoutonBrun on:click(louer) texte="Louer"></BoutonBrun>
            </ul>
        </div>
    {/each}
</div>
