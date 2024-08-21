<script>
    import BoutonSoumettre from "./boutonSoumettre.svelte";
    export let lien;
</script>

<div class="centrer">
    <BoutonSoumettre texte="Modifier"/> 
    <a href = {lien}><button>Annuler</button></a>
</div>
<style>
    button {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background-color: gray;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #695C4B;
    }
    .centrer{
        text-align: center;
    }
    button:disabled{
      background-color: lightgrey;
    }
</style>