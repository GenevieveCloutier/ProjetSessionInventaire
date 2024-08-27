<script>
    import '/src/app.css';
    import Entete from "../../../../components/entete.svelte";
	import EnregistrerAnnuler from '../../../../components/enregistrerAnnuler.svelte';
	import BoutonSoumettre from '../../../../components/boutonSoumettre.svelte';
    export let data;

    const user = data.user;

    function validerMDP(){
        let MDP1= document.querySelector("#MDP1");
        let MDP2= document.querySelector("#MDP2");
        let messageErreur = document.querySelector("#messageErreur");
        let boutonEditerMDP = document.querySelector("#boutonEditerMDP");
        messageErreur.hidden = true;

        if(MDP1.value != MDP2.value){
            messageErreur.hidden = false;
            boutonEditerMDP.disabled = true;
        }
        else
        {
            messageErreur.hidden = true;
            boutonEditerMDP.disabled = false;
            MDP1.value= "";
            MDP2.value= "";
        }
    };

    function nouvelEssai(){
        let MDP2= document.querySelector("#MDP2");
        MDP2.value= "";
        let messageErreur = document.querySelector("#messageErreur");
        let boutonEditerMDP = document.querySelector("#boutonEditerMDP");
        messageErreur.hidden = true;
        boutonEditerMDP.disabled = false;  
    }

</script>

<Entete />

<div class="login-container">
    <div class="login-box">
    <h2>Modifier mon mot de passe</h2>
    <form method="POST" action="?/editerMDP">
        <input type="text" name="user_id" value={user.id} hidden readonly >
        <div class="input-group">
        <label for="password1">Nouveau mot de passe:</label>
        <input type="password" name="password1" id="MDP1" on:change{validerMDP} required>
        </div>
        <div class="input-group">
        <label for="password1">Confirmation du nouveau mot de passe:</label>
        <input type="password" name="password2" id="MDP2" on:blur={validerMDP} on:focus={nouvelEssai} required><br><br>
        <p id="messageErreur" hidden >"Les mots de passe entrés ne sont pas identiques"</p>

        <div class="centrer">
            <BoutonSoumettre texte={"Modifier"}/>
            <a href = "/users/{user.id}" ><button>Annuler</button></a>
        </div>
    </form>

    </div>
</div>

<style>
    #messageErreur{
        background-color: rgba(255, 0, 0, 0.199);
        color: red;
        width: 90%;
        padding: 15px;
    }

    h2{
        text-align: center;
    }
    button {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: gray;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
    }
  
    button:hover {
      background-color: #695C4B;
    }

    .centrer{
        text-align: center;
    }



</style>