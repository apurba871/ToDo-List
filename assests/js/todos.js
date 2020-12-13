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

$("ul").on("click", "li", function() {
//$("li").click(function() {
	$(this).toggleClass("completed");
});

//Click on X to delete todo

$("ul").on("click", "span", function() {
//$("span").click(function(event) {
	$(this).parent().remove(); //removing the li when the span is clicked
	event.stopPropagation(); //stops event bubbling
});

$("input[type='text']").keypress(function(event) {
	//console.log('You pressed a key');
	if (event.which === 13) {//enter key
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); //clear input
		//create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});