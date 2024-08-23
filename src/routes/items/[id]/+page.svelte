<script>
    import '/src/app.css';
    import Entete from '../../../components/entete.svelte';
    import BoutonGris from '../../../components/boutonGris.svelte';
    import BoutonSoumettre from '../../../components/boutonSoumettre.svelte';

    import EnregistrerAnnuler from '../../../components/enregistrerAnnuler.svelte';

    export let data;
    const item = data.item;

    function effacerData() {
        document.getElementById('qty').value = '';
        document.getElementById('date_emprunt').value = '';
        document.getElementById('date_retour_prevue').value = '';
        document.getElementById('user_id').value = '';
        document.getElementById('date_retour_effective').value = '';
    }

</script>

<Entete/>
<div class="boite-1">
    <div class="container">
        <div class="gauche">
            <img class="imgProduit" src="/src/images/{item.image}" width="200" height="230" alt={item.nom}>
            <h1>#{item.id}</h1>
            <h1>{item.nom}</h1>
            <p>Description: {item.description}</p>
            <p>Catégorie: {item.categorie}</p>
            <p>Quantite: {item.quantite}</p>
            <p>Statut: {item.statut_item}</p>
        </div>
    </div>

    <div class="droite" id="formLocation">
            <form method="POST" action="?/locations/new"> <!--pas certaine que action est correcte!! non, ce n'est pas correcte-->
                <div class="input-group">
                    <label for="item_id"># item:  </label>
                    <input type="number" id="item_id" bind:value="{item.id}" readonly>
                </div>
                <div class="input-group">
                    <label for="qty">Quantité:  </label>
                    <input type="number" id="qty">
                </div>
                <label for="date_emprunt">Date de début de location:   </label>
                <div class="input-group">
                    <input type="text" id="date_emprunt">
                </div>
                <label for="date_retour_prevue">Date de retour de location:   </label>
                <div class="input-group">
                    <input type="text" id="date_retour_prevue">
                </div>
                <div class="input-group"> 
                    <label for="user_id"># utilisateur:  </label>
                    <input type="number" id="user_id"> <!--quand les cessions vont être active, on devrait mettre le id automatique + readonly-->
                </div>
                
                <input type="date" id="date_retour_effective" value="" hidden>
                <BoutonSoumettre texte="Soumettre" />
                <BoutonGris fonction={effacerData} texte="Effacer le formulaire" />
                
            </form>
    </div>
</div>