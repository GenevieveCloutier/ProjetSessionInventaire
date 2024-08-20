<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';
    let fonction = undefined;
    export let data;

    const items = data.items;

    console.log(items)

    function louer(){
        // j'ai ajouté la fonction pour que le serveur ne plante pas
        console.log("fonctionne")
    }

</script>

<Entete/>

<div class="grid-container">
    {#each items as item}
        <div class="grid-item">
            <ul>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="./images/{item.image}">
                <h2>{item.nom}</h2>
                <p>qty disponible: {item.quantite}</p>
                <p>date de disponibilité: {item.description}</p>
                <!--pour t'aider: voici la bonne façon d'utiliser les props pour le component bouton brun:
                 <BoutonBrun fonction={louer} texte={"Louer"} />-->
                <h3>Id #{item.id}</h3><BoutonBrun on:click(louer) texte="Louer"></BoutonBrun>
            </ul>
        </div>
    {/each}
</div>