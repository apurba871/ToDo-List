//alert('Connected!');

//Check off specific todo by clicking

// $("li").click(function() {
// 	// if li is gray
// 		// turn it black
// 	// else
// 		// turn it gray
// 	//console.log($(this).css("color"));
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		// $(this).css("color", "black");
// 		// $(this).css("text-decoration", "none");
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}
	
// 	else {
// 		// $(this).css("color", "gray");
// 		// $(this).css("text-decoration", "line-through");
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// })

$("li").click(function() {
	$(this).toggleClass("completed");
})