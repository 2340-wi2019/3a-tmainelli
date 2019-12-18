$(document).ready(function() {
    $('#action').click(function() {
	//DO NOT CHANGE CODE BELOW
        var num1 = parseInt($('#num1').val());
        var num2 = parseInt($('#num2').val());
        clear();
        addNumbers(num1, num2);
        var result = multiplyNumbers(num1, num2);
        $('#result-mult').text(result);
	//DO NOT CHANGE CODE ABOVE

    });

	/*
	 Below this comment, create a function 
	 named addNumbers, which accepts two parameters.
	 The function should add the two parameters together
	 and write the result to the element with the id
	 result-add
    */
    
    function addNumbers(num1, num2) {
        addNumbers = num1 + num2;
        
    }

    $('#result-add').text(addNumbers);

     /*
	 Below this comment, create a function
	 named multiplyNumbers, which accepts two parameters.
	 The function should multiply the two parameters together
	 and return the result.
    */
    
    function multiplyNumbers(num1, num2) {
        multiplyNumbers = num1 * num2;
        return result;
    }
    
    /*
	 Below this comment, create a function named
	 clear, which accepts no parameters. The function
	 should clear the contents of the elements with the
	 ids of result-add and result-mult 
    */
    
    function clear() {
        clear('#rsult-add');
        clear('#result-mult');
    }

    clear();

});