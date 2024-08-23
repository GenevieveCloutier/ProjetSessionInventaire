
<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';
	import Recherche from '../../components/recherche.svelte';

    export let data;
    const items = data.items;

    //console.log(items)

    function louer(){
        console.log("fonctionne")
        // ne devrait pas être ici mais sur la page /item/[id]
    }

</script>

<Entete/>
<Recherche />

<div class="grid-container">
    {#each items as item}
        <div class="grid-item">
            <ul>
                <img class="imgProduit" src="/src/images/{item.image}" width="250" height="300" alt={item.nom}>
                <h2>{item.nom}</h2>
                <p>qty disponible: {item.quantite}</p>
                 <!--Je n'ai pas encore trouvé comment afficher la bonne qty
                <p>qty disponible: {items.filter(item => item.statut_item === "disponible").length}</p> -->
                <p>date de disponibilité: {item.description}</p>
                <h3>#{item.id}</h3>
                <!--pour que la prop fonctionne: backticks et $ devant {item.id} et je pense que le lien devrait être sur item[id]
                pas sur location/new..., pour afficher les détails avant de louer. Puis de la page item[id] on peut louer l'outil-->
                <BoutonBrun lien={`./locations/new/${item.id}`}  texte={"Louer"} /> <!--mon lien n'est pas correct, je regarde ça plus tard-->
            </ul>
        </div>
    {/each}
</div>

<style>

    .imgProduit{
        width: 200px;
    }
   
</style>

