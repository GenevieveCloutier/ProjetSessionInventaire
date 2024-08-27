<script>
    import '/src/app.css';
    import Entete from '../../components/entete.svelte';
    import { onMount } from 'svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';

    export let data;
    const users = data.users;

</script>

<Entete />
<div class="boite-1">
    <h1>Tous les utilisateurs</h1>
<table>
    <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Rôle</th>
        <th>Statut</th>
        <th class="sansBordure"></th>
    </tr>
    {#each users as user}
    <tr>
        <td>{user.prenom}</td>
        <td>{user.nom}</td>
        <td>{user.role.nom}</td>
        <td>{user.statut_user}</td>
        <td class="sansBordure"><a href = "/users/{user.id}/detailsUser"> <img src="/src/images/edit.png" alt="modifier l'utilisateur"></a></td>
    </tr>   
    {/each}

</table>
<BoutonBrun lien={"/users/new"} texte={"Ajouter un utilsateur"}/>
</div>

<style>
    .sansBordure{
        border-top: 1px solid white;
        border-right: 1px solid white;
        border-bottom: 1px solid white;
        background-color: white;
    }
    img{
        width: 20px;
    }
</style>