  <body data-sveltekit-preload-data="hover">
      <nav id="navbar">
          <a href = "/"> <img src="/src/images/logoBlanc2.png" class="imageEntete" alt="Logo"></a>
          <a href="/login"><button class="connexion">Connexion</button></a>
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
  
  .connexion{
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

    
  </style>