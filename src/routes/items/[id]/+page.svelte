<script>
    import { page } from "$app/stores";
    import '/src/app.css';
    import Entete from '../../../components/entete.svelte';
    import BoutonGris from '../../../components/boutonGris.svelte';
    import BoutonSoumettre from '../../../components/boutonSoumettre.svelte';

    export let data;
    const item = data.item;
    
     const user = $page.data.user
     console.log("==================" + user.id)

    function effacerData() {
        //document.getElementById('qty').value = '';
        document.getElementById('date_emprunt').value = '';
        document.getElementById('date_retour_prevue').value = '';
        document.getElementById('user_id').value = '';
        document.getElementById('date_retour_effective').value = '';
    }

</script>

<Entete/>
<div class="boite-1" id="boite_1">
    <div class="container1">
        <div class="gauche">
            <img src="../src/images/{item.image}" width="200" height="230" alt={item.nom}> <!--pourquoi ça ne fonctionne plus-->
            <h1>#{item.id}</h1>
            <h1>{item.nom}</h1>
            <p>Description: {item.description}</p>
            <p>Catégorie: {item.categorie}</p>
            <p>Quantite: {item.quantite}</p>
            <p>Statut: {item.statut_item}</p>
        </div>
    </div>

    <div class="droite" id="formLocation">
            <form method="POST" action= "?/newLocation">
                <div class="form-group">
                <label for="item_id"># item:  </label>
                    <input type="number" id="item_id" name="item_id" value="{item.id}" readonly>
                </div>
                <!-- <div class="form-group">
                <label for="qty">Quantité:  </label>
                    <input type="number" name="quantite" id="qty">
                </div> -->
                <div class="form-group">
                <label for="date_emprunt">Date de début de location:   </label>
                    <input type="date" name="date_emprunt" id="date_emprunt">
                </div>
                <div class="form-group">
                <label for="date_retour_prevue">Date de retour de location:   </label>
                    <input type="date" name="date_retour_prevue" id="date_retour_prevue">
                </div>
                <div class="form-group">
                <label for="user_id"># utilisateur:  </label>
                    <input type="number" name="user_id" id="user_id" value=2 readonly> <!--quand les cessions vont être active, on devrait mettre le id automatique + readonly-->
                </div>

                <input type="date" id="date_retour_effective" name="date_retour_effective" value="" hidden>
                
                <!-- <p id="messageErreur" hidden = true>"Quantité insuffisante"</p> ça ne fonctionne pas-->

                <div id="boutonEnvoi"><BoutonSoumettre texte="Soumettre" /> </div>   
            </form>
            <div id="boutonEfface"><BoutonGris fonction={effacerData} texte="Effacer le formulaire" /></div>
    </div>
</div>

<style>
    #boite_1{
        display: flex;
    }

    .container1{
        flex: 1;
    }

    .gauche{
        padding: 20px;
    }

    .droite{
        flex: 1;
        padding: 20px;
    }

    .form-group {
        display: flex;
        align-items: center;
        margin-bottom: 25px; 
    }

    label {
        width: 200px;
        margin-right: 10px;
    }

    input{
        flex: 1;
        background-color: #ccc;
        color: black;   
    }

    #boutonEnvoi, #boutonEfface  {
        margin-top: 20px;
    }
    
    #messageErreur{
        background-color: rgba(255, 0, 0, 0.199);
        color: red;
        width: 90%;
        padding: 15px;
    }

</style>


