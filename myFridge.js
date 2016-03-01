pProducts = new Mongo.Collection("products")


if (Meteor.isClient) {

  Template.productList.helpers({
    products: function () {
      return Products.find({place: "List"})
    }
  });


  hola(fasdfasd,fsdf){
    return "hoola"
  }

  Template.productList.onRendered(function() {
    var templateInstance = this;
    templateInstance.$('#supermarket').droppable({
      drop: function(e, ui){
        var query = {_id: ui.draggable.data('id')}
        var changes = {$set: {place: "List"}}
        Products.update(query, changes)
      }
    })
  })

  Template.productListItem.helpers({

  })

  Template.productListItem.onRendered(function() {
    var templateInstance = this;
    templateInstance.$('.draggable').draggable({
      cursor: "crosshair",


      helper: "original"
    })
  })

  Template.fridge.helpers({
    products: function () {
      return Products.find({place: "Fridge"})
    }
  });

  Template.fridge.onRendered(function(){
    var templateInstance = this;
    templateInstance.$('#fridge').droppable({
      drop: function(e, ui) {
        var query = { _id: $(ui.draggable).data('id')}
        var changes = { $set: {place: 'Fridge'} }
        Products.update(query, changes)
      }
    })
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Products.remove({})

    Products.insert({
      name: "Milk",
      img: "/milk.png",
      place: "Fridge"
    })

    Products.insert({
      name: "bread",
      img: "/bread.png",
      place: "List"
    })
  });
}
