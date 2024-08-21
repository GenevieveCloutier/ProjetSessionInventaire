<script>
    import '/src/app.css';
    import Entete from '../../../components/entete.svelte';
    import BoutonBrun from '../../../components/boutonBrun.svelte';
    export let data;
    let fonction = undefined;

    const user = data.user;
    const location = data.locations;

</script>
<Entete />

<div class="boite-1">
        <h1>Compte de {user.prenom}</h1>

    <div class="container">
        <div class="gauche">
            <h2>Locations</h2>
            <table class="table-1">
                <tr>
                    <th>Date d'emprunt</th>
                    <th>Date de retour prévue</th>
                    <th>Date de retour réelle</th>
                    <th>Outil loué</th>
                    <th>Statut</th>
                </tr>
 
                {#each location as location}
                <tr>
                    <td>{location.date_emprunt}</td>
                    <td>{location.date_retour_prevue}</td>
                    <td>{location.date_retour_effective}</td>
                    <td>{location.item.nom}</td>
                    <td>{location.statut_location}</td>
                </tr>
                {/each}
        
            </table>
        </div>


        <div class="droite">
        <h2>Détails du compte</h2>
            <a href="/users/{user.id}/editerMDP">Modifier mon mot de passe</a>
            <table class="table-2">
                <tr>
                    <td><img src="/src/images/user.png" alt="icone profil"></td>
                    <td class="caseDroite"><strong>{user.prenom} {user.nom}</strong></td>
                </tr>
                <tr>
                    <td><img src="/src/images/phone.png" alt="icone téléphone"></td>
                    <td class="caseDroite">{user.telephone}</td>
                </tr>
                <tr>
                    <td><img src="/src/images/mail.png" alt="icone courriel"></td>
                    <td class="caseDroite">{user.email}</td>
                </tr>
                <tr>
                    <td></td>
                    <td class="caseDroite" id="boutonEdit">
                        <a href = "{user.id}/editerProfil"><img src="/src/images/edit.png" alt="icone éditer"></a></td>
                        
                </tr>
            </table>
            
        </div>
    </div>
    <BoutonBrun lien={"/items"} texte={"Retour au catalogue"} />
</div>

<style>

    .droite{
        flex-basis: 30%;
    }

    .gauche{
        flex-basis: 70%;
    }

    img{
        width: 20px;
    }

    .table-2{
        background-color: white;
        border:none;
    }

    .table-2 > tr > td{
        padding-top: 15px;
        border:none;
    }

    .caseDroite{
        width: 85%;
        padding-left: 20px;
    }

    #boutonEdit{
        text-align: right;
    }
    a{
        color: #695C4B;
    }
    
</style>


