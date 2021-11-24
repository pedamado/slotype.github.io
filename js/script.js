// SLOType v0.5 very messy alpha
// Pedro Amado (FBAUP / i2ADS) & Ana Catarina Silva (IPCA / ID+ CAOS)
// v4: 2020-01-04. v5 2020-10-21 You may and should abuse this code, but remember to keep your code clean kids! ;)

// Category //Main Features //Users //Context //Constraints //Something Completely Different
// easy = 1 // medium = 2 // advanced = 3

var myCode;
var codeDif;
var codeCat;
var codeFeata;
var codeFeat;
var codeUser;
var codeContx;
var codeConst;
var codeVar;
var codeSomething;

var myCat;
var myFeata;
var myFeat;
var myUsr;
var myContx;
var myConst;
var myVar;
var mySomthDif;

// must include the array objects (objects.js)
// set a variable to "store" the selected difficulty level
var myDif;

// and a default "easy" class
var myAtt;

// Hide the contents / app sections

$().ready = function() {
    console.log('js starting');

    $("nav").hide();

}
// event handlers to display & hide difficulty menu when user hovers mouse on header
//$('#menu').on('click', showNav);
//$('header').on('mouseleave', hideNav);

$("nav").on("mouseleave", toggleNav);

// if user on phone or tablet toggle on tap (there's no hover…)
$("#menu").on("click", toggleNav);

// prevent the menu to close when user clicks the li difficulty element
$("ul li").on("click", function(e) {
    //e.preventDefault();
    e.stopPropagation();
});

    lock();

myCode = $("#myCode"); // full string

codeDif = $("#codeDif"); // easy medium advanced
codeCat = $("#codeCat");
codeFeata = $("#codeFeata");
codeFeat = $("#codeFeat");
codeUser = $("#codeUser");
codeContx = $("#codeContx");
codeConst = $("#codeConst");
codeVar = $("#codeVar");
codeSomething = $("#CodeSomething");

// set it to a default of "1" & "easy"
myDif = "1";
myAtt = "easy";
myCode = "E";
codeDif = myDif;

var rn0 = 0;
var rn1 = 0;
var rn2 = 0;
var rn3 = 0;
var rn4 = 0;
var rn5 = 1;
var rn6 = 0;
var rn7 = 0;

codeCat = rn0;
codeFeata = rn1;
codeFeat = rn2;
codeUser = rn3;
codeContx = rn4;
codeConst = rn5;
codeVar = rn6;
codeSomething = rn7;
toggleNav();
$("#menu").removeClass("fas fa-times").addClass("fas fa-bars");

function showNav() {
    //$('ul').slideRight(150);
    $("nav").toggle("slide"); // jquery UI
}

function hideNav() {
    $("nav").hide();
}

function toggleNav() {
    $("nav").toggle("slide"); // jquery UI

    if ($("#menu").hasClass("fas fa-bars")) {
        $("#menu").removeClass("fas fa-bars").addClass("fas fa-times");
    } else {
        $("#menu").removeClass("fas fa-times").addClass("fas fa-bars");
    }
}

function setDifficulty(e) {
    // turn off display of all sections
    $("section").hide();

    // select the id property of the li element and stores it in a text variable (eg. li id="easy" clicked = "easy")
    myAtt = $(this).attr("id");

    // the previous stores the id as text (eg. "easy"). we will use it to show sections with this class (eg. ".easy"). In order to do so, we have to add (concatenate) a "." to the previous "text"
    myAtt = "." + myAtt; // transforms the myAtt into a "class". From "easy" to ".easy"

    // and use it to get jQuery to select and turn on all the sections that have it as a class
    $(myAtt).show();

    // set the selected difficuty
    myDif = $(this).attr("dif");
    codeDif = myDif;

    // assign random values to the section p
    randomize();
    lock();
    if (myDif == 1 || myDif == 2) {
        $("#feat i").hide();
    }
    saveToLocalStorage();
}

function setDif() {
    if (myDif == "1") {
        myCat = catl1;
        myFeata = featal1;
        myFeat = featl1;
        myUsr = userl1;
        myContx = contxl1;
        myConst = constl1;
        myVar = varl1;
        mySomthDif = somethingl1;

        //$('#myCode').text('E' + '.');
        myCode = "E";
    } else if (myDif == "2") {
        myCat = catl2;
        myFeat = featl2;
        myFeata = featal2;
        myUsr = userl2;
        myContx = contxl2;
        myConst = constl2;
        myVar = varl2;
        mySomthDif = somethingl2;

        //$('#myCode').text('M' + '.');
        myCode = "M";
    } else if (myDif == "3") {
        myCat = catl3;
        myFeata = featal3;
        myFeat = featl3;
        myUsr = userl3;
        myContx = contxl3;
        myConst = constl3;
        myVar = varl3;
        mySomthDif = somethingl3;

        //$('#myCode').text('A' + '.');
        myCode = "A";
    }
}

function randomize() {
    // if the difficulty level chosen is one, the new temprary array is set equal to the respective list
    //  myCat // myFeat // myUsr //  myContx // myConst //  mySomthDif;
    // eg. click on easy = dif = 1 = myCat=catl1
    // catl1 featl1 userl1 contxl1 constl1 somethingl1. needs to be updated…)

    //$("#myCode").text("");

    console.log('randomizing…');

    setDif();

    if (!$("p#cat").hasClass("locked")) {
        rn0 = Math.floor(Math.random() * myCat.length);
        // seleciona o elemento "categoria easy" e muda o texto do p
        $("p#cat")
            .text(myCat[rn0])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    //$('#myCode').append(rn0);
    codeCat = rn0;

    if (!$("p#feata").hasClass("locked")) {
        rn1 = Math.floor(Math.random() * myFeata.length);
        $("p#feata")
            .text(myFeata[rn1])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    //$('#myCode').append(rn1);
    codeFeata = rn1;

    if (!$("p#feat").hasClass("locked")) {
        rn2 = Math.floor(Math.random() * myFeat.length);
        $("p#feat")
            .text(myFeat[rn2])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    if (myDif < 3) {
        $("#feat i").hide();
    }

    //$('#myCode').append(rn2);
    codeFeat = rn2;

    if (!$("p#usr").hasClass("locked")) {
        rn3 = Math.floor(Math.random() * myUsr.length);
        $("p#usr")
            .text(myUsr[rn3])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    // if (rn3 > 9) {
    //     rn3 = rn3.toString(16);
    // }

    //$('#myCode').append(rn3 + '.');
    codeUser = rn3;

    if (!$("p#contx").hasClass("locked")) {
        rn4 = Math.floor(Math.random() * myContx.length);
        $("p#contx")
            .text(myContx[rn4])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    //$('#myCode').append(rn4);
    codeContx = rn4;

    if (!$("p#const").hasClass("locked")) {
        rn5 = Math.floor(Math.random() * myConst.length);
        $("p#const")
            .text(myConst[rn5])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    //$('#myCode').append(rn5 + '.');
    codeConst = rn5;

    if (!$("p#var").hasClass("locked")) {
        rn6 = Math.floor(Math.random() * myVar.length);
        $("p#var")
            .text(myVar[rn6])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    //$('#myCode').append(rn6);
    codeVar = rn6;

    if (!$("p#diff").hasClass("locked")) {
        rn7 = Math.floor(Math.random() * mySomthDif.length);
        $("p#diff")
            .text(mySomthDif[rn7])
            .append('<i class="lock fas fa-lock-open"></i>')
            .removeClass("locked");
    }

    //$('#myCode').append(rn7);
  
    codeSomething = rn7;

    setCode();

    lock();

}

function slotypeObject() {
    
    this.codeDif = document.querySelector('#codeDif').textContent;
    this.codeCat = document.querySelector('#codeCat').textContent;
    this.codeFeata = document.querySelector('#codeFeata').textContent;
    this.codeFeat = document.querySelector('#codeFeat').textContent;
    this.codeUser = document.querySelector('#codeUser').textContent;
    this.codeContx = document.querySelector('#codeContx').textContent;
    this.codeConst = document.querySelector('#codeConst').textContent;
    this.codeVar = document.querySelector('#codeVar').textContent;
    this.codeSomething = document.querySelector('#codeSomething').textContent;

    this.update = function() {
        this.codeDif = document.querySelector('#codeDif').textContent;
        this.codeCat = document.querySelector('#codeCat').textContent;
        this.codeFeata = document.querySelector('#codeFeata').textContent;
        this.codeFeat = document.querySelector('#codeFeat').textContent;
        this.codeUser = document.querySelector('#codeUser').textContent;
        this.codeContx = document.querySelector('#codeContx').textContent;
        this.codeConst = document.querySelector('#codeConst').textContent;
        this.codeVar = document.querySelector('#codeVar').textContent;
        this.codeSomething = document.querySelector('#codeSomething').textContent;
    }
    
    // console.log(`current obj: ${this.codeDif} ${this.codeCat} ${this.codeFeata} ${this.codeFeat} ${this.codeUser} ${this.codeContx} ${this.codeConst} ${this.codeVar} ${this.codeSomething}`);
    
}

function setCode() {
    //Current settings are: (mode) ${myCode} and (params) ${codeCat} ${codeFeata} ${codeFeat} ${codeUser} ${codeContx} ${codeConst}  ${codeSomething}
    codeCat = rn0;
    codeFeata = rn1;
    codeFeat = rn2;
    codeUser = rn3;
    codeUser = rn3;
    codeContx = rn4;
    codeConst = rn5;
    codeVar = rn6;
    codeSomething = rn7;

    if (myDif == "1") {
        myCode = "E";
    } else if (myDif == "2") {
        
        myCode = "M";
    } else if (myDif == "3") {
        
        myCode = "A";
    }

    document.querySelector( "#myCode" ).innerHTML = `<span id="codeDif">${myCode}</span> . 
                                                    <span id="codeCat">${codeCat}</span>
                                                    <span id="codeFeata">${codeFeata}</span>
                                                    <span id="codeFeat">${codeFeat}</span>
                                                    <span id="codeUser">${codeUser}</span>
                                                    <span id="codeContx">${codeContx}</span>
                                                    <span id="codeConst">${codeConst}</span>
                                                    <span id="codeVar">${codeVar}</span>
                                                    <span id="codeSomething">${codeSomething}</span>`;
                        
}


$("#myCode").text(myCode + ".");

// initialize like a li was already clicked
$("section").hide();
$(".easy").show();
$("#feat i").hide();

// when user clicks a specific difficulty filter link
$("li").on("click", setDifficulty);

// when users click on the big CTA button, all categories get randomized
$("#rand").on("click", randomizeAndSave);

function randomizeAndSave() {
    randomize();
    setCode();
    saveToLocalStorage();
}

randomize();

lock();

// wehn user clicks on a specific section only that section gets refreshed. needs to be redone…
$("#category").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn0 = Math.floor(Math.random() * myCat.length);
        $("p#cat").text(myCat[rn0]).append('<i class="lock fas fa-lock-open"></i>');
        $(this).removeClass("locked");

        //changeCode(rn0, 2);

        codeCat = rn0;
        setCode();
        saveToLocalStorage();

    }
    lock();
});

$("#feature-alt").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn1 = Math.floor(Math.random() * myFeata.length);
        $("p#feata").text(myFeata[rn1]).append('<i class="lock fas fa-lock-open"></i>');
        $(this).removeClass("locked");

        //changeCode(rn1, 3);

        codeFeata = rn1;
        setCode();
        saveToLocalStorage();
    }
    lock();
});

$("#feature").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn2 = Math.floor(Math.random() * myFeat.length);
        $("p#feat")
            .text(myFeat[rn2])
            .append('<i class="lock fas fa-lock-open"></i>');

        // hide the lock icon
        if (myDif == 1 || myDif == 2) {
            $("#feat i").hide();
        }

        $(this).removeClass("locked");

        //changeCode(rn2, 4);

        codeFeat = rn2;
        setCode();
        saveToLocalStorage();
    }

    lock();

});

$("#users").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn3 = Math.floor(Math.random() * myUsr.length);
        $("p#usr").text(myUsr[rn3]).append('<i class="lock fas fa-lock-open"></i>');
        $(this).removeClass("locked");

        //changeCode(rn3, 5);

        codeUser = rn3;
        setCode();
        saveToLocalStorage();
    }

    lock();
});

$("#context").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn4 = Math.floor(Math.random() * myContx.length);
        $("p#contx")
            .text(myContx[rn4])
            .append('<i class="lock fas fa-lock-open"></i>');
        $(this).removeClass("locked");

        //changeCode(rn4, 7);

        codeContx = rn4;
        setCode();
        saveToLocalStorage();
    }

    lock();
});

$("#constraints").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn5 = Math.floor(Math.random() * myConst.length);
        $("p#const")
            .text(myConst[rn5])
            .append('<i class="lock fas fa-lock-open"></i>');
        $(this).removeClass("locked");

        //changeCode(rn5, 8);

        codeConst = rn5;
        setCode();
        saveToLocalStorage();
    }
    lock();
});

// Newwwww >> variants are slant, back slant and upright
$("#variants").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn6 = Math.floor(Math.random() * myVar.length);
        $("p#var").text(myVar[rn6]).append('<i class="lock fas fa-lock-open"></i>');
        $(this).removeClass("locked");

        //changeCode(rn6, 10);

        codeVar = rn6;
        setCode();
        saveToLocalStorage();
    }

    lock();

});

$("#different").on("click", function () {
    if ($(this).children("p").hasClass("locked")) {
        // nothing
    } else {
        rn7 = Math.floor(Math.random() * mySomthDif.length);
        $("p#diff").text(mySomthDif[rn7])
            .append('<i class="lock fas fa-lock-open"></i>');
        $(this).removeClass("locked");

        //changeCode(rn7, 11);

        codeSomething = rn7;
        setCode();
        saveToLocalStorage();
    }
    lock();
});

function lock() {
    $(".lock").on("click", function (e) {
        e.stopPropagation();

        if ($(this).hasClass("fas fa-lock-open")) {
            $(this).removeClass("fas fa-lock-open").addClass("fas fa-lock");
            $(this).parent().addClass("locked");
        } else {
            $(this).removeClass("fas fa-lock").addClass("fas fa-lock-open");
            $(this).parent().removeClass("locked");
        }
    });

    //share();
}

document.querySelector('#actions').addEventListener('click', function(e) {

    console.log(e.target);

    if(e.target.id === "share") {
        share();
    }

    e.preventDefault;
    
});

function share() {
    var destination = "pamado@fba.up.pt";
    var ccdestination = "acsilva@ipca.pt";
    //var subject = "SLOType briefing: " + $("#myCode").text();
    let code = document.querySelector('#myCode');

    // codeCat = rn0;
    // codeFeata = rn1;
    // codeFeat = rn2;
    // codeUser = rn3;
    // codeUser = rn3;
    // codeContx = rn4;
    // codeConst = rn5;
    // codeVar = rn6;
    // codeSomething = rn7;
    // myCode = "E";

    var subject = `SLOType briefing: ${myCode}.${codeCat}${codeFeata}${codeFeat}${codeUser}${codeContx}${codeConst}${codeVar}${codeSomething}`;
    var body =
        `This is your SLOType generated briefing: ${myCode}.${codeCat}${codeFeata}${codeFeat}${codeUser}${codeContx}${codeConst}${codeVar}${codeSomething}`;

    if (myDif >= "1") {
        body =
            body + "\n"+ "Context of Application: " + $("p#cat").text() + "; \n%0D%0A ";
        body = body + "Stroke Contrast: " + $("p#feat").text() + "; \n%0D%0A ";
    }

    if (myDif >= "3") {
        body = body + "Stroke Construction: " + $("p#feata").text() + "; \n%0D%0A ";
    }

    if (myDif >= "2") {
        body = body + "Classification: " + $("p#usr").text() + "; \n%0D%0A ";
        body = body + "Weight: " + $("p#contx").text() + "; \n%0D%0A ";
        body = body + "Width: " + $("p#const").text() + "; \n%0D%0A ";
    }

    if (myDif >= "3") {
        body = body + "Slant: " + $("p#var").text() + "; \n%0D%0A ";
        body =
            body +
            "And now… for something completely diferent. Serendipity: " +
            $("p#diff").text() +
            " ; \n%0D%0A ";
    }

    var hreftext =
        "mailto:" +
        destination +
        "?subject=" +
        subject +
        "&body=" +
        body +
        "&cc=" +
        ccdestination;

    // <a href="mailto:manish@simplygraphix.com?subject=Feedback for webdevelopersnotes.com&body=The Tips and Tricks section is great &cc=anotheremailaddress@anotherdomain.com &bcc=onemore@anotherdomain.com">Send me an email</a>

    $("header a").attr("href", hreftext);
}

function changeCode(newCode, index) {
    // if (newCode > 9) {
    //     newCode = newCode.toString(16);
    // }

    // var ts = $("#myCode").text();
    // ts = ts.substr(0, index) + newCode + ts.substr(index + 1);
    // $("#myCode").text(ts);
}
