<script>
    import '/src/app.css';
    import Entete from '/src/components/entete.svelte';
    import BoutonBrun from '../../components/boutonBrun.svelte';
    export let data;

    const roles = data.roles;

    console.log(roles)

</script>
<Entete />
<div class="boite-1">
    <h1>Rôles enregistrés</h1>
<table>
    <tr>
        <th>Identifiant</th>
        <th>Nom</th>
        <th>Description</th>
        <th class="sansBordure"></th>
    </tr>
    {#each roles as role}
    <tr>
        <td>{role.id}</td>
        <td>{role.nom}</td>
        <td>{role.description}</td>
        <td class="sansBordure"><a href = "/roles/{role.id}"> <img src="/src/images/edit.png" alt="modifier le rôle"></a></td>
    </tr>   
    {/each}

</table>
<BoutonBrun lien={"/roles/new"} texte={"Ajouter un rôle"}/>
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