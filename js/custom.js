
$( document ).ready(function() {
    
	var boxColors = ['red','orange','yellow','green','blue'];
	var boxOrientation = ['portrait','landscape'];
	var i = 0;

	boxColors.forEach(function(entry) {
	    $('.main-wrapper').append('<div id="'+entry+'" class="box box-'+boxOrientation[0]+' portrait-position-'+i+'">&nbsp;</div>');
	    i++;
	});


    $('.play-button').on('click',function(){
    	

    	var i=0;
    	boxColors.forEach(function(entry) {
    		var el= $('#'+entry);
    	    el.removeClass('box-'+boxOrientation[0], 500 , "linear");
    	    el.removeClass(boxOrientation[0]+'-position-'+i, 500 , "linear");
    	    i++;
    	});
    	
    	setTimeout(function(){
    		boxColors = shuffle(boxColors);
    		boxOrientation = shuffle(boxOrientation);

    		i=0;
    		boxColors.forEach(function(entry) {
    			var el= $('#'+entry);
    		    el.addClass('box-'+boxOrientation[0], 1000 , "swing" );
    		    el.addClass(boxOrientation[0]+'-position-'+i , 1000 , "swing");
    		    i++;
    		});
    	}, 600);

    	

    	
    	// var i=0;
    	// boxColors.forEach(function(entry) {
    	// 	var el= $('#'+entry);
    	//     el.removeClass('box-'+boxOrientation[0], 1500 , "linear");
    	//     el.removeClass(boxOrientation[0]+'-position-'+i, 1500 , "linear");
    	//     i++;
    	// });
    	

    	// boxColors = shuffle(boxColors);
    	// boxOrientation = shuffle(boxOrientation);

    	// i=0;
    	// boxColors.forEach(function(entry) {
    	// 	var el= $('#'+entry);
    	//     el.addClass('box-'+boxOrientation[0], 1500 , "swing" );
    	//     el.addClass(boxOrientation[0]+'-position-'+i , 1500 , "swing");
    	//     i++;
    	// });







    });






    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
});
