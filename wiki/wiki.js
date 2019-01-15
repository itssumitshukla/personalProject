$(document).ready(function(){
	$('#wikiSearch').click(function(){
		let searchParams = $('#search').val();
		let searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchParams + "&format=json&callback=?";	

        //this ist he ajax method. look into the document to append child elements better. Refer to bootstrap too.
		$.ajax({
			type: "GET", 
			url: searchUrl, 
			async: false, 
			dataType: "json", 
			success: function(data) {
				$('#search').html('');
				for (var i = 0; i < data[1].length; i++) {
					$('#searchResults').append("<li><a href=" + data[3][i] + ">" + data[1][i] +   "</a><h4>" + data[2][i] + "</h4></li>");
				}
			}, 
			error: function(error) {
				alert("Error!");
			}
		});
	})
});

//clear button
$('#clear').click(function(){
    $('#search').empty(); // this isnt working
    $('#searchResults').remove();
})