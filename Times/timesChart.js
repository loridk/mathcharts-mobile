/**
 * Created by Lori DK on 2/22/2015.
 */

var j;
var getNum;

do {
    j = prompt('Which times table would you like to see?');
}while (j == "" || isNaN(j));

do {
    getNum = prompt('What number would you like it to go up to?');
}while (getNum == "" || isNaN(getNum));


var setNum = parseInt(getNum) + 1;
var i = 1;


document.write('<table>');
document.write('<tr>');

while (i < setNum) {

    document.write('<td class="' + j +  '">');

    document.write(j + ' x ' + i + ' = <strong>' + (i * j) + '</strong><br />');


    document.write('</td>');


    if (i % 3 == 0) {
        document.write('</tr>');
        document.write('<tr>');
    }

    i++;
    //document.write('Test ' + j);
}

document.write('</tr>');
document.write('</table>');


//document.getElementById('output').innerHTML = msg;