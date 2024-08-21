<script>
    import { page } from "$app/stores";
    import { goto} from "$app/navigation"; //importer goto
    $:routeId = $page.route.id;
  
      function deconnecter(){
          goto('/login');
      };
      
  </script>
  
  <body data-sveltekit-preload-data="hover">
      <nav id="navbar">
          <a href = "/"> <img src="/src/images/logoBlanc2.png" class="imageEntete" alt="Logo"></a>
          <div class="dropdown">
            <a href = "/items" class:active = {routeId == '/items'} class="catalogue" >Catalogue</a>
            <div class="dropdown-content">
                <a href="/items/outilsElectriques" class= {routeId == '/items/outilsElectriques'}>OUTILS ÉLECTRIQUES</a>
                <a href="/items/outilsPneumatiques" class= {routeId == '/items/outilsPneumatiques'}>OUTILS PNEUMATIQUES</a>
                <a href="/items/outilsManuels" class= {routeId == '/items/outilsManuels'}>OUTILS MANUELS</a>
                <a href="/items/divers" class= {routeId == '/items/divers'}>DIVERS</a>
            </div>

            </div>
          <!--mettre à jour avec user_id quand login est fini-->
          <a href = "/users" class:active = {routeId == '/users'} class="compte" >Mon compte</a>
          <button class="deconnexion" on:click={deconnecter}>Déconnexion</button>
       </nav>
   </body>
  <style>
  
  #navbar { 
      margin-top:50px;
      background-color: black;
      height: 100px;
      display: flex;
      align-items: center;
      position: relative;
  }
  
  .imageEntete{
      width: 100px;
      }
  
  a{
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0 50px;
  }
  .catalogue{
      position: relative;
      display: inline-block;
      cursor: pointer;
  }
  
  .compte {
    position: relative;
    display: inline-block;

  }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #695C4B;
        min-width: 70px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        top: 70%;
        left: 12%;
    } 
    .dropdown-content a {
        color: black;
        padding: 1px 1px;
        text-decoration: none;
        display: block;
    }
    .dropdown-content a:hover {
        background-color: white;
        display:block;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown:hover .catalogue {
        background-color: gray;
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
  