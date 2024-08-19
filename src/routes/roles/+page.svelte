<script>
    import '/src/app.css';
    export let data;
    import Entete from '../../components/entete.svelte';

    const roles = data.roles;

    console.log(roles)

</script>

<Entete/>
<h1>Roles</h1>

{#each roles as role}
    <h2>Role : {role.id}</h2>
    <p>{role.nom}</p>
    <p>{role.description}</p>
    <a href="./roles/{role.id}">Lien</a>
{/each}