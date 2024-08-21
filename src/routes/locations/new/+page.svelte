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
    <div class="droite">
        <form method="POST" action="?/new">

            <input type="number" name="item_id" id="item_id" value="{item.id}" readonly>

            <label for="quantite">Quantité:</label>
            <input type="number" name="quantite" id="quantite">

            <label for="date_emprunt">Date d'emprunt:</label>
            <input type="date" name="date_emprunt" id="date_emprunt">

            <label for="date_retour_prevue">Date de retour:</label>
            <input type="date" name="date_retour_prevue" id="date_retour_prevue">

            <input type="number" name="user_id" id="user_id" value="{user.id}" readonly>

            <input type="submit" value="Soumettre">
        </form>
    </div>
</div>