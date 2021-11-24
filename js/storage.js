console.log('storage intialized');

// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// define the local storage structure container
let myLocalStorage;
let undo = 0;

// check if there is anything in local storage
checkLocalStorage();

function checkLocalStorage() {

    console.log('checking local storage');

    if (localStorage.getItem("slotype") !== null) {
        // this will get a JSON object in strings that has to be parsed into an array
        myLocalStorage = localStorage.getItem("slotype");
        myLocalStorage = Array.from(JSON.parse(myLocalStorage));

        console.log("checkLocalStorage -> myLocalStorage", myLocalStorage);

    } else {
        console.log('Nothing in storage. Initializing storage variable');
        myLocalStorage = [];
    }
}

let saveBtn;
saveBtn = document.querySelector('#save');

saveBtn.addEventListener('click', saveClick);

function saveClick(e) {

    saveToLocalStorage();

    // avoid colateral clicks
    e.preventDefault();
}

function saveToLocalStorage() {

    if (myLocalStorage === null) {
        checkLocalStorage();
    }
    // get current variables/list properties
    let obj = getCurrentSettings();

    // add to current array of spins
    myLocalStorage.push(obj);
    console.log("saveToLocalStorage -> myLocalStorage", myLocalStorage)

    // stringify the array into a json string object to save into slotype local storage 
    let myJSON = JSON.stringify(myLocalStorage);
    localStorage.setItem("slotype", myJSON);

    console.log('Saving slotype');

    if (myLocalStorage.length > 0) {
        $(undoBtn).show();
    } else {
        $(undoBtn).hide();
    }

    

}

function getCurrentSettings() {
    // define temporary arrays to store the selected categories 
    // Category //Main Features //Users //Context //Constraints //Something Completely Different

    // create a new Object;
    let saveObj = new slotypeObject();

    return saveObj;
    // console.log(`Current settings are: (mode) ${myCode} and (params) ${codeCat} ${codeFeata} ${codeFeat} ${codeUser} ${codeContx} ${codeConst} ${codeDif} ${codeSomething}`);
}



const undoBtn = document.querySelector('#undo');

const actionsBtn = document.querySelector('#actions');

$(undoBtn).hide();

if (myLocalStorage.length > 0) {
    $(undoBtn).show();
}

actionsBtn.addEventListener('click', getPreviousSettings);

function getPreviousSettings(e) {

    console.log("getPreviousSettings -> e.target", e.target);

    if(e.target.id === "undo" ){
        
        if (myLocalStorage.length <= 1) {
            console.log('there are no undos available');
            $(undoBtn).hide();
        } else {
            console.log('undoing…');
            myLocalStorage.pop();

            console.log("getPreviousSettings -> myLocalStorage", myLocalStorage)

            // and set the current UI to the last array item
            setSlotype();

            if (myLocalStorage.length > 0) {
                $(undoBtn).show();
            } else {
                $(undoBtn).hide();
            }
        }

        // hide the lock icon
        if (myLocalStorage[myLocalStorage.length-1].codeDif === "E" || myLocalStorage[myLocalStorage.length-1].codeDif === "M") {
            $("#feat i").hide();
        }

        e.stopPropagation();
        e.preventDefault();
    }
}

function setSlotype() {
    let lastSettings = myLocalStorage[myLocalStorage.length - 1];
    console.log("setSlotype -> lastSettings", lastSettings);

    myCode = lastSettings.codeDif;

    let stringDif = lastSettings.codeDif;
    $("section").hide();

    if (stringDif == "E") {
        myDif = 1;
        $(".easy").show();
        
    } else if (stringDif == "M") {
        myDif = 2;
        
        $(".medium").show();
        
    } else if (stringDif == "A") {
        myDif = 3;
        
        $(".advanced").show();
    }

    rn0 = parseInt(lastSettings.codeCat);
    rn1 = parseInt(lastSettings.codeFeata);
    rn2 = parseInt(lastSettings.codeFeat);
    rn3 = parseInt(lastSettings.codeUser);
    rn4 = parseInt(lastSettings.codeContx);
    rn5 = parseInt(lastSettings.codeConst);
    rn6 = parseInt(lastSettings.codeVar);
    rn7 = parseInt(lastSettings.codeSomething);

    setCode();

    //$("p#cat").text(myCat[rn0]);
    document.querySelector('p#cat').childNodes[0].nodeValue = myCat[rn0];
    
    //$("p#feata").text(myFeata[rn1]);
    document.querySelector('p#feata').childNodes[0].nodeValue = myFeata[rn1];
    
    //$("p#feat").text(myFeat[rn2]);
    document.querySelector('p#feat').childNodes[0].nodeValue = myFeat[rn2];
    
    //$("p#usr").text(myUsr[rn3]);
    document.querySelector('p#usr').childNodes[0].nodeValue = myUsr[rn3];
    
    //$("p#contx").text(myContx[rn4]);
    document.querySelector('p#contx').childNodes[0].nodeValue = myContx[rn4];
    
    //$("p#const").text(myConst[rn5]);
    document.querySelector('p#const').childNodes[0].nodeValue = myConst[rn5];
    
    //$("p#var").text(myVar[rn6]);
    document.querySelector('p#var').childNodes[0].nodeValue = myVar[rn6];
    
    //$("p#diff").text(mySomthDif[rn7]);
    document.querySelector('p#diff').childNodes[0].nodeValue = mySomthDif[rn7];
    
    // hide the lock icon
    if (myDif == 1 || myDif == 2) {
        $("#feat i").hide();
    }
    
}




