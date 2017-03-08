function MainCtrl($scope) {

  var self = this;

  //Data for example purposes.
  $scope.textBlocks = [{
      "type": "text",
      "title": "Dresses",
      "body": "The upcoming collection for summer 2017"
  },
  {
      "type": "text",
      "title": "Jumpers",
      "body": "Some generic talk about how about how great jumpers are"
  }]

  $scope.productBlocks = [{
      "type": "Mens New",
      "products": [167687, 168012]
  },
  {
      "type": "Jumpers",
      "products": [167790, 168013]
  }]

  $scope.products =
    [{
    "id": 167687,
    "title": "A Kind of Guise Mindelo T-Shirt (White)",
    "price": "80.00",
    "retailer": "Oipolloi",
    "image": "https://static.grabble.com/products/167687/149509c8ea32f07ab0027064b9b2b7ce.jpg"
  }, {
    "id": 167790,
    "title": "Linen-Cotton crew pullover",
    "price": "29.95",
    "retailer": "Gap",
    "image": "https://static.grabble.com/products/167790/dba4bd52b9764818c780fb4e471fa741.jpg"
  }, {
    "id": 168012,
    "title": "ASOS Skinny Blazer In Cotton",
    "price": "65.00",
    "retailer": "ASOS",
    "image": "https://static.grabble.com/products/168012/324927f3437e024b7301bdc05c542c28.jpg"
  }, {
    "id": 168013,
    "title": "Julep Printed Crew Neck Jumper",
    "price": "50.00",
    "retailer": "French Connection",
    "image": "https://static.grabble.com/products/168013/c1385ee4ba25e9c67cbade7071a9670c.jpg"
  }]




  //START: Code for Text Blocks

  var indexToEdit = null;

  //Using the indexToEdit to decide if it's an existing block we are editing or a new one.
  self.addOrUpdateTextBlock = function() {
    if (indexToEdit != null) {
      $scope.textBlocks[indexToEdit].title = self.titleTextBlock;
      $scope.textBlocks[indexToEdit].body = self.bodyTextBlock;
      indexToEdit = null;
    } else {
      $scope.textBlocks.push({"type": "text", "title": self.titleTextBlock, "body": self.bodyTextBlock})
    }

    //Once updated/new clear the form and hide editor div
    self.resetForm();
    $scope.showHideTextBlockEditor = false;
  }

  //When cancel pressed, clear form and hide editor div
  self.hideTextBlockEditor = function(){
    self.resetForm();
    $scope.showHideTextBlockEditor = false;
  }

  self.resetForm = function(){
    indexToEdit = null;
    self.titleTextBlock = '';
    self.bodyTextBlock = '';
  }

  //If edit pressed, show editor div and fill fields with item being edited
  self.editTextBlock = function(iToEdit) {
    $scope.showHideTextBlockEditor = true;
    indexToEdit = iToEdit
    self.titleTextBlock = $scope.textBlocks[iToEdit].title;
    self.bodyTextBlock = $scope.textBlocks[iToEdit].body;
  }

  self.deleteTextBlock = function(iToDelete) {
    $scope.textBlocks.splice(iToDelete, 1)
  }

  //END: Code for Text Blocks


  //START: Code for Products Block

  self.showHideProductsEditor = function(){
    $scope.showHideProductsEditor = true;
  }

  //END: Code for Products Block

}
