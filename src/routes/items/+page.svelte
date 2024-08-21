
<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';
    let fonction = undefined;
    export let data;

    const items = data.items;

    console.log(items)

    function louer(){
        console.log("fonctionne")
    }

</script>

<Entete/>

<div class="grid-container">
    {#each items as item}
        <div class="grid-item">
            <ul>
                <img src="/src/images/{item.image}" width="250" height="300" alt={item.nom}>
                <h2>{item.nom}</h2>
                <p>qty disponible: {item.quantite}</p>
                 <!--Je n'ai pas encore trouvé comment afficher la bonne qty
                <p>qty disponible: {items.filter(item => item.statut_item === "disponible").length}</p> -->
                <p>date de disponibilité: {item.description}</p>
                <h3>#{item.id}</h3>
                <BoutonBrun lien={"./locations/new/{item.id}"}  texte={"Louer"} /> <!--mon lien n'est pas correct, je regarde ça plus tard-->
            </ul>
        </div>
    {/each}
</div>

