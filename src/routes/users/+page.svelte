<script>
    import '/src/app.css';
    export let data;
    import Entete from '../../components/entete.svelte';

    const users = data.users;

</script>

<Entete/>
<div class="boite-1">
    <h1>Utilisateursss</h1>
{#each users as user}
    <h2>Utilisateur : {user.id}</h2>
    <p>{user.nom}</p>
    <p>{user.prenom}</p>
    <p>Role : {user.role.nom}</p>
    <p>Description role : {user.role.description}</p>
    <p>Password : {user.password}</p>
    <a href="./users/{user.id}">Lien</a>
{/each}
</div>