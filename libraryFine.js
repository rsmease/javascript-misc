process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////


function main() {
    var returnDate = readLine().split(' ');
    var dueDate = readLine().split(' ');

    var hackosDue = 0 //assume no Hackos due; catch all cases where payment is due;

    if (returnDate[2] === dueDate[2] && returnDate[1] === dueDate[1]) {
        if (returnDate[0] > dueDate[0]) {
            hackosDue = (returnDate[0] - dueDate[0])*15;
        } 
    } else if (returnDate[2] === dueDate[2] && returnDate[1] > dueDate[1]) {
        hackosDue = (returnDate[1] - dueDate[1])*500;
    } else if (returnDate[2] > dueDate[2]) {
        hackosDue = (returnDate[2] - dueDate[2])*10000;
    }

    console.log(hackosDue);

}
