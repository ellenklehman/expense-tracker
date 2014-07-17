$(document).ready(function() {
  var newBigCategory;
  var newBigPurchase;

  $("form#purchase").submit(function (event) {
    event.preventDefault();

  var Purchase = {
    pDescription: "",
    cost: 0,
    quantity: 0,
    total: function() {
      return this.cost * this.quantity;
    }
  };

  var Category = {
    cDescription: "",
    expenses: []
  };

  var newPurchase =Object.create(Purchase);
  newPurchase.pDescription = $('#description').val();
  newPurchase.cost = parseInt($('#cost').val());
  newPurchase.quantity = parseInt($('#quantity').val());



    $('#expenses').append("<tr> <td>" + newPurchase.pDescription + "</td>" +
                          "<td>$"+ newPurchase.cost + "</td>" +
                          "<td>"+ newPurchase.quantity + "</td>" +
                          "<td>"+ newPurchase.total() + "</td></tr>");
  });


$("form#categories").submit(function (event) {
    event.preventDefault();
    var catName = $("#category").val();
    $('ul#category-list').append("<li>"+catName+"</li>");
    $("#category").val('');

    $("#category-list li").last().click(function (){
      $('#cat').text("");
      $("#cat").text(catName);
    });

 var newCategory = Object.create(Category);
 newCategory.cDescription = catName;

});


});





