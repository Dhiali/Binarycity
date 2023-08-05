//creating an array of objects

const plants = [

    {"name": "Box lunch supplier",
    "about":"Find out more?" ,
    "description": "Box lunch supplier",
    "image": "plant1.png"},
  
  {
    "name": "Glass repair service",
    "about": "Find out more?",
    "description": "Glass repair service",
    "image": "plant2.png"
  },
  {
    "name": "Bottled water service",
    "about": "Find out more?",
    "description": "Bottled water service",
    "image": "plant3.png"
  },
  {
    "name": "Flooring",
    "about": "Find out more?",
    "description": "Flooring",
    "image": "plant4.png"
  },
  {
    "name": "Children's hospital",
    "about": "Find out more?",
    "description": "Children's hospital",
    "image": "plant5.png"
  }
    
];





$(document).ready(function(){
//select the plants container and add html from our template 
    

//you have to call it only when ready/loaded
    loadPlants();
});


function loadPlants () {
    for (let i = 0; i < plants.length; i++) {
        console.log(plants[i]);

        $("#plantsContainer").append($("#plantCardTemplate").html());

        let currentChild = $("#plantsContainer").children().eq(i+1);

        $(currentChild).find(".card-img-top").attr('src','assets/' + plants[i].image);

        $(currentChild).find("#nameText").text(plants[i].name);

        $(currentChild).find("#priceText").text('R ' + plants[i].price);

        $(currentChild).find("#descriptionText").text(plants[i].description);

        $(currentChild).find("#descriptionText").hide();
        
        
    }
}


$("#plantsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});



$(document).ready(function() {
  // Binds the click event to the "Remove" button
  $('.remove-btn').on('click', function() {
    
    var row = $(this).parent().parent(); // cross two levels up to the parent <tr>

    // Remove the row from the table
    row.remove();
  });
});