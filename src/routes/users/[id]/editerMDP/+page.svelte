<script>
    import '/src/app.css';
    import Entete from "../../../../components/entete.svelte";
    import BoutonSoumettre from '../../../../components/boutonSoumettre.svelte';

    function validerMDP(){
        let MDP1= document.querySelector("#MDP1").value;
        console.log(MDP1)
    }

</script>

<Entete />

<div class="login-container">
    <div class="login-box">
    <h1>Modifier mon mot de passe</h1>
    <input type="password" name="password1" id="MDP1" placeholder="Nouveau mot de passe"><br><br>
    <input type="password" name="password2" id="MDP2" placeholder="Entrez à nouveau votre mot de passe" on:blur={validerMDP} ><br><br>
    <BoutonSoumettre texte={"Enregistrer"} />

    </div>
</div>