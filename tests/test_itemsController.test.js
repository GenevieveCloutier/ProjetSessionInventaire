
const { newItem, findAll, findOne, rechercher, findAllItemsWithoutImage, removeItem, updateItem, markItemAsAvailable } = require("../src/lib/db/controllers/items.controller.js");

//Fonction newItem
test('devrait creer un outil', async () => {

  const mockDataValues = {
    id: 1,
    nom: 'Test Outil',
    description: 'Test Description',
    categorie: 'Test Categorie',
    quantite: 10,
    image: 'test-image.jpg',
    statut_item: 'Disponible',
  };


  const result = await newItem(
    'Test Outil',
    'Test Description',
    'Test Categorie',
    10,
    'test-image.jpg',
    'Disponible'
  );

  expect(result).toBe(mockDataValues);
});


//Fonction findAll
test('devrait retourner tous les outils avec statut_item different de "Supprimé"', async () => {
  const mockData = [
    { dataValues: { id: 1, nom: 'Item 1', statut_item: 'Disponible' } },
    { dataValues: { id: 2, nom: 'Item 2', statut_item: 'Disponible' } },
  ];

  const result = await findAll();

  expect(result).toBeCalledWith({
    where: {
      statut_item: {
        [Op.not]: 'Supprimé',
      },
    },
  });

  expect(result).toBe([
    { id: 1, nom: 'Item 1', statut_item: 'Disponible' },
    { id: 2, nom: 'Item 2', statut_item: 'Disponible' },
  ]);
});


//Fonction findOne
test('devrait retourner un outil"', async () => {
  const mockData = { dataValues: { id: 1, name: 'Test Item' } };

  const result = await findOne({ id: 1 });

  expect(result).toBeBe(mockData);


});

//Fonction rechercher
test('rechercher un ou plusieurs outils', async () => {
  const mockItems = [
      { dataValues: { id: 1, nom: 'Test Item 1', description: 'Description 1', categorie: 'Category 1' } },
      { dataValues: { id: 2, nom: 'Test Item 2', description: 'Description 2', categorie: 'Category 2' } }
  ];

  const result = await rechercher('Test');

  expect(result).toEqual(mockItems.map(item => item.dataValues));
});
  

//Fonction findAllItemsWithoutImage
test('trouve des outils sans image', async () => {
  const mockItems = [
    { dataValues: { id: 1, nom: 'Item 1', description: 'Description 1', categorie: 'Category 1', quantite: 10, statut_item: 'Disponible' } },
    { dataValues: { id: 2, nom: 'Item 2', description: 'Description 2', categorie: 'Category 2', quantite: 20, statut_item: 'Emprunté' } }
];

const result = await findAllItemsWithoutImage();

expect(result).toEqual(mockItems.map(item => item.dataValues));
});


//Fonction removeItem
test('supprime un outil', async () => {
  const mockItem = { 
    statut_item: 'Disponible', 
  };
  
  const result = await removeItem(1);


  expect(mockItem.statut_item).toBe('Supprimé');
});


//Fonction updateItem
test('supprime un outil', async () => {
  const updatedItem = {
    id: 1,
    nom: 'Updated Item',
    description: 'Updated Description',
    categorie: 'Updated Category',
    quantite: 15,
    statut_item: 'Updated Status'
};

const result = await updateItem(updatedItem);

expect(result).toBe(updatedItem);

});


//Fonction markItemAsAvailable
test('rendre un outil disponible', async () => {
  const mockItem = { 
    statut_item: 'Disponible', 
    id: 1
};

const result = await markItemAsAvailable(mockItem.id);

expect(mockItem.statut_item).toBe('Disponible');

});
