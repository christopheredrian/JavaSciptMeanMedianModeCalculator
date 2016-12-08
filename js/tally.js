$(document).ready(function () {

    /** First section is for the  Tallying */

    /**
     * A function for that inputs an array and outputs a Map of the tally of each number
     * @param array - array of numbers to be tallied
     * @return object(map) - Map of number and tally
     */
    var tallyArray = function (arr) {
        var tallied = {};
        arr.forEach(function (valueStr) {
            // var number = Number.parseInt(valueStr.trim()); // this only supports integer
            var number = valueStr.trim();
            // Can be reduced to --> 
            // tallied[number] = (tallied[number] == undefined ? tallied[number] = 1 : (tallied[number]++));
            if (tallied[number] == undefined) {
                tallied[number] = 1;
            } else {
                tallied[number]++;
            }
        });
        console.log(tallied);
        return tallied;
    };

    /**
     * Converts a specified string to an array with a comma "," as a separator
     * @param string
     * @return array - array of strings
     */
    var stringToArray = function (str) {
        return str.trim().split(',');
    }

    /**
     * EventHandler for the #tallyBtn
     */
    $('#tallyBtn').click(function () {
        var numbers = stringToArray($('#numberArea').val()); // array
        var numbersArray = tallyArray(numbers);
        $('#frequencyRows').empty(); // Empty the tbody
        for (var key in numbersArray) {
            var tr = $('<tr>');
            var currentValue = $('<td>').text(key);
            var currentFrequency = $('<td>').text(numbersArray[key]);
            tr.append(currentValue);
            tr.append(currentFrequency);
            $("#frequencyRows").append(tr);
            console.log(`${key}:${numbersArray[key]}`);
        }



    });

});