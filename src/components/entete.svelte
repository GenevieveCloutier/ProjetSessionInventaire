<script>
    import { page } from "$app/stores";

    $:routeId = $page.route.id;
  
      function deconnecter(){
          console.log("fonctionne")
      };
      
  </script>
  
  <body data-sveltekit-preload-data="hover">
      <nav id="navbar">
          <a href = "/"> <img src="/src/images/logoBlanc2.png" class="imageEntete" alt="Logo"></a>
          <a href = "/catalogue" class:active = {routeId == '/catalogue'} class="catalogue">Catalogue</a>
          <a href = "/users" class:active = {routeId == '/users/[id]'} class="compte" >Mon compte</a>
<!-- changer le lien de /users pour aller chercher le compte de l'utilisateur connecté-->
          <button class="deconnexion" on:click={deconnecter}>Déconnexion</button>
       </nav>
   </body>
  <style>
  
  #navbar { 
      margin-top:50px;
      background-color: black;
      height: 100px;
      position: relative;
  }
  
  .imageEntete{
      width: 100px
      }
  
  a{
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .catalogue{
      margin: 0;
      position: absolute;
      top: 50%;
      left: 17%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
  
  }
  
  .compte {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 30%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
  
  }
  
  .deconnexion {
      position: absolute;
      top: 50%;
      left: 90%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      cursor: pointer;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: none;
      border-radius: 5px;;
      outline: none;
      padding: 10px 16px;
      background-color: gray;
      color: white;
      font-size: 18px;
  }
    .active {
      cursor: pointer;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: none;
      border-radius: 5px;;
      outline: none;
      padding: 10px 16px;
      background-color: gray;
      color: white;
      font-size: 18px;
    }
    
  </style>
  