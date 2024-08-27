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
{#each users as user}
    <!-- la mise en forme des données est à faire, qui s'en occupe? -->
    <h2>Utilisateur : {user.id}</h2>
    <p>{user.nom}</p>
    <p>{user.userAuthToken}</p>
    <p>{user.prenom}</p>
    <p>Role : {user.role.nom}</p>
    <p>Description role : {user.role.description}</p>
    <p>Password : {user.password}</p>
    <a href="./users/{user.id}">Lien</a>

{:else}
    <p>Il n'y a pas d'utilisateur pour le moment!<br>
        <BoutonBrun lien={"/users/new"} texte={"Ajouter un utilisateur"}/></p>
{/each}

</div>