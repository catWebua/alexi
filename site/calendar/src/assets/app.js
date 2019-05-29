function getNote() {
    if(localStorage.getItem('note1')){
        var note1 =localStorage.getItem('note1');

    } else {
        var note1 = '';
    }

    if(localStorage.getItem('note2')){
        var note2 =localStorage.getItem('note2');

    } else {
        var note2 = '';
    }

    if(localStorage.getItem('note3')){
        var note3 =localStorage.getItem('note3');

    } else {
        var note3 = '';
    }

    if(localStorage.getItem('note4')){
        var note4 =localStorage.getItem('note4');

    } else {
        var note4 = '';
    }

    if(localStorage.getItem('note5')){
        var note5 =localStorage.getItem('note5');

    } else {
        var note5 = '';
    }

    if(localStorage.getItem('note6')){
        var note6 =localStorage.getItem('note6');

    } else {
        var note6 = '';
    }

    if(localStorage.getItem('note7')){
        var note7 =localStorage.getItem('note7');

    } else {
        var note7 = '';
    }

    if(localStorage.getItem('note8')){
        var note8 =localStorage.getItem('note8');

    } else {
        var note8 = '';
    }

    if(localStorage.getItem('note9')){
        var note9 =localStorage.getItem('note9');

    } else {
        var note9 = '';
    }

    if(localStorage.getItem('note10')){
        var note10 =localStorage.getItem('note10');

    } else {
        var note10 = '';
    }

    if(localStorage.getItem('note11')){
        var note11 =localStorage.getItem('note11');

    } else {
        var note11 = '';
    }

    if(localStorage.getItem('note12')){
        var note12 =localStorage.getItem('note12');

    } else {
        var note12 = '';
    }

    if(localStorage.getItem('note13')){
        var note13 =localStorage.getItem('note13');

    } else {
        var note13 = '';
    }

    if(localStorage.getItem('note14')){
        var note14 =localStorage.getItem('note14');

    } else {
        var note14 = '';
    }

    if(localStorage.getItem('note15')){
        var note15 =localStorage.getItem('note15');

    } else {
        var note15 = '';
    }

    if(localStorage.getItem('note16')){
        var note16 =localStorage.getItem('note16');

    } else {
        var note16 = '';
    }

    if(localStorage.getItem('note17')){
        var note17 =localStorage.getItem('note17');

    } else {
        var note17 = '';
    }

    if(localStorage.getItem('note18')){
        var note18 =localStorage.getItem('note18');

    } else {
        var note18 = '';
    }

    if(localStorage.getItem('note19')){
        var note19 =localStorage.getItem('note19');

    } else {
        var note19 = '';
    }



    window.onload = function(){
        document.getElementById('note1').innerHTML = note1;
        document.getElementById('note2').innerHTML = note2;
        document.getElementById('note3').innerHTML = note3;
        document.getElementById('note4').innerHTML = note4;
        document.getElementById('note5').innerHTML = note5;
        document.getElementById('note6').innerHTML = note6;
        document.getElementById('note7').innerHTML = note7;
        document.getElementById('note8').innerHTML = note8;
        document.getElementById('note9').innerHTML = note9;
        document.getElementById('note10').innerHTML = note10;
        document.getElementById('note11').innerHTML = note11;
        document.getElementById('note12').innerHTML = note12;
        document.getElementById('note13').innerHTML = note13;
        document.getElementById('note14').innerHTML = note14;
        document.getElementById('note15').innerHTML = note15;
        document.getElementById('note16').innerHTML = note16;
        document.getElementById('note17').innerHTML = note17;
        document.getElementById('note18').innerHTML = note18;
        document.getElementById('note19').innerHTML = note19;
    }
}

function saveNote(id) {
    var note1 = document.getElementById('note1').innerHTML;
        note2 = document.getElementById('note2').innerHTML;
        note3 = document.getElementById('note3').innerHTML;
        note4 = document.getElementById('note4').innerHTML;
        note5 = document.getElementById('note5').innerHTML;
        note6 = document.getElementById('note6').innerHTML;
        note7 = document.getElementById('note7').innerHTML;
        note8 = document.getElementById('note8').innerHTML;
        note9 = document.getElementById('note9').innerHTML;
        note10 = document.getElementById('note10').innerHTML;
        note11 = document.getElementById('note11').innerHTML;
        note12 = document.getElementById('note12').innerHTML;
        note13 = document.getElementById('note13').innerHTML;
        note14 = document.getElementById('note14').innerHTML;
        note15 = document.getElementById('note15').innerHTML;
        note16 = document.getElementById('note16').innerHTML;
        note17 = document.getElementById('note17').innerHTML;
        note18 = document.getElementById('note18').innerHTML;
        note19 = document.getElementById('note19').innerHTML;


    localStorage.setItem('note1', note1);
    localStorage.setItem('note2', note2);
    localStorage.setItem('note3', note3);
    localStorage.setItem('note4', note4);
    localStorage.setItem('note5', note5);
    localStorage.setItem('note6', note6);
    localStorage.setItem('note7', note7);
    localStorage.setItem('note8', note8);
    localStorage.setItem('note9', note9);
    localStorage.setItem('note10', note10);
    localStorage.setItem('note11', note11);
    localStorage.setItem('note12', note12);
    localStorage.setItem('note13', note13);
    localStorage.setItem('note14', note14);
    localStorage.setItem('note15', note15);
    localStorage.setItem('note16', note16);
    localStorage.setItem('note17', note17);
    localStorage.setItem('note18', note18);
    localStorage.setItem('note19', note19);
}


    var styleNote1 = document.getElementById('note1');
    function onclickStyleNote1() {

        styleNote1.style.display = 'block';
        localStorage.setItem('hide1', styleNote1.style.display);
    }

    if (localStorage.getItem('hide1') == 'block') {
        document.getElementById('note1').style.display = 'block';
    }



    var styleNote2 = document.getElementById('note2');
    function onclickStyleNote2() {

        styleNote2.style.display = 'block';
        localStorage.setItem('hide2', styleNote2.style.display);
    }

    if (localStorage.getItem('hide2') == 'block') {
        document.getElementById('note2').style.display = 'block';
    }



    var styleNote3 = document.getElementById('note3');
    function onclickStyleNote3() {

        styleNote3.style.display = 'block';
        localStorage.setItem('hide3', styleNote3.style.display);
    }

    if (localStorage.getItem('hide3') == 'block') {
        document.getElementById('note3').style.display = 'block';
    }


    var styleNote4 = document.getElementById('note4');
    function onclickStyleNote4() {

        styleNote4.style.display = 'block';
        localStorage.setItem('hide4', styleNote4.style.display);
    }

    if (localStorage.getItem('hide4') == 'block') {
        document.getElementById('note4').style.display = 'block';
    }


    var styleNote5 = document.getElementById('note5');
    function onclickStyleNote5() {

        styleNote5.style.display = 'block';
        localStorage.setItem('hide5', styleNote5.style.display);
    }

    if (localStorage.getItem('hide5') == 'block') {
        document.getElementById('note5').style.display = 'block';
    }



    var styleNote6 = document.getElementById('note6');
    function onclickStyleNote6() {

        styleNote6.style.display = 'block';
        localStorage.setItem('hide6', styleNote6.style.display);
    }

    if (localStorage.getItem('hide6') == 'block') {
        document.getElementById('note6').style.display = 'block';
    }



    var styleNote7 = document.getElementById('note7');
    function onclickStyleNote7() {

        styleNote7.style.display = 'block';
        localStorage.setItem('hide7', styleNote7.style.display);
    }

    if (localStorage.getItem('hide7') == 'block') {
        document.getElementById('note7').style.display = 'block';
    }



    var styleNote8 = document.getElementById('note8');
    function onclickStyleNote8() {

        styleNote8.style.display = 'block';
        localStorage.setItem('hide8', styleNote8.style.display);
    }

    if (localStorage.getItem('hide8') == 'block') {
        document.getElementById('note8').style.display = 'block';
    }



    var styleNote9 = document.getElementById('note9');
    function onclickStyleNote9() {

        styleNote9.style.display = 'block';
        localStorage.setItem('hide9', styleNote9.style.display);
    }

    if (localStorage.getItem('hide9') == 'block') {
        document.getElementById('note9').style.display = 'block';
    }


    var styleNote10 = document.getElementById('note10');
    function onclickStyleNote10() {

        styleNote10.style.display = 'block';
        localStorage.setItem('hide10', styleNote10.style.display);
    }

    if (localStorage.getItem('hide10') == 'block') {
        document.getElementById('note10').style.display = 'block';
    }

var styleNote11 = document.getElementById('note11');
function onclickStyleNote11() {

    styleNote11.style.display = 'block';
    localStorage.setItem('hide11', styleNote11.style.display);
}

if (localStorage.getItem('hide11') == 'block') {
    document.getElementById('note11').style.display = 'block';
}



var styleNote12 = document.getElementById('note12');
function onclickStyleNote12() {

    styleNote12.style.display = 'block';
    localStorage.setItem('hide12', styleNote12.style.display);
}

if (localStorage.getItem('hide12') == 'block') {
    document.getElementById('note12').style.display = 'block';
}



var styleNote13 = document.getElementById('note13');
function onclickStyleNote13() {

    styleNote13.style.display = 'block';
    localStorage.setItem('hide13', styleNote13.style.display);
}

if (localStorage.getItem('hide13') == 'block') {
    document.getElementById('note13').style.display = 'block';
}


var styleNote14 = document.getElementById('note14');
function onclickStyleNote14() {

    styleNote14.style.display = 'block';
    localStorage.setItem('hide14', styleNote14.style.display);
}

if (localStorage.getItem('hide14') == 'block') {
    document.getElementById('note14').style.display = 'block';
}


var styleNote15 = document.getElementById('note15');
function onclickStyleNote15() {

    styleNote15.style.display = 'block';
    localStorage.setItem('hide15', styleNote15.style.display);
}

if (localStorage.getItem('hide15') == 'block') {
    document.getElementById('note15').style.display = 'block';
}



var styleNote16 = document.getElementById('note16');
function onclickStyleNote16() {

    styleNote6.style.display = 'block';
    localStorage.setItem('hide16', styleNote16.style.display);
}

if (localStorage.getItem('hide16') == 'block') {
    document.getElementById('note16').style.display = 'block';
}



var styleNote17 = document.getElementById('note17');
function onclickStyleNote17() {

    styleNote17.style.display = 'block';
    localStorage.setItem('hide', styleNote17.style.display);
}

if (localStorage.getItem('hide17') == 'block') {
    document.getElementById('note17').style.display = 'block';
}



var styleNote18 = document.getElementById('note18');
function onclickStyleNote8() {

    styleNote18.style.display = 'block';
    localStorage.setItem('hide18', styleNote8.style.display);
}

if (localStorage.getItem('hide18') == 'block') {
    document.getElementById('note18').style.display = 'block';
}



var styleNote19 = document.getElementById('note19');
function onclickStyleNote19() {

    styleNote19.style.display = 'block';
    localStorage.setItem('hide19', styleNote19.style.display);
}

if (localStorage.getItem('hide19') == 'block') {
    document.getElementById('note19').style.display = 'block';
}

