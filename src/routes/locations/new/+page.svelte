 <script>
    import '/src/app.css';
    import Entete from '../../../components/entete.svelte';
    export let data;
    const item = data.item;
    const user = data.user;

</script>

<Entete />

<div class="boite-1">
    <div class="gauche">
        <img src="/src/images/{item.image}" width="250" height="300" alt={item.nom}>
        <h1>{item.nom}</h1>
        <p>{item.id}</p>
        <p>{item.description}</p>
        <p>{item.quantite}</p>
    </div>
    
</div>  