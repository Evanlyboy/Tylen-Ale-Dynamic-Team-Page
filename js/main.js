(() => {

    personInfo = "",
    profilePic = "",
    Info = document.querySelectorAll(".box"),
    employeeBox = document.querySelector(".employeeBox"),
    hiddenEmployees = document.querySelector(".hiddenEmployees"),
    buttonEvan = document.querySelector("#Evan"),
    buttonMatt = document.querySelector("#Matt"),
    MattBox = document.querySelector("#MattBox"),
    EvanBox = document.querySelector("#EvanBox");


    // Arrays
    const MattData = [
        0,
        "Hi There",
        "chad.jpg",
    ]

    const EvanData = [
        1,
        "Evan is the guy who built the code",
        "evaNFT.jpg"
    ]

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    function childChecker() {
        // if there is more than one child in the employeebox, get rid of it
        if(employeeBox.childElementCount > 0) {
            hiddenEmployees.appendChild(employeeBox.firstElementChild);
            console.log("element booter online");
            // yeah, punt that child. fucker.
        }

        if(personInfo != "") {
            // delete inner html that's already on the page
            document.getElementsByClassName("personInfo").innerHTML = "";
            // delete everything in our variable
            personInfo.innerHTML = "";
            console.log("String deleter online");
        }
    }

    // A conversion function that will take the name from the button and return an array based on that name
    function nameConverter(name) {
        if (name === "Matt") {
            return MattData;
        }
        else if (name === "Evan") {
            return EvanData;
        }
    }

    /* ---> Legacy code, less efficient solution

        const descriptionData = [
        "Hi There",
        "Evan is the guy who built the code",
    ];

    const pictureData = [
        "chad.jpg",
        "evaNFT.jpg",
    ];

    // function showEvan() {
    //     childChecker();

    //     //-----> Okay, this next part is ineffecient. Need to connect the EvanBox tag to one variable and then target seperate tags within that. Update: got it I think

    //     // get the specific info we need from the array. Needs to be this way so it comes out as a string
    //     let currentInfo = document.createTextNode(descriptionData[1]);

    //     // target the specific personinfo within the evanbox
    //     personInfo = EvanBox.getElementsByClassName("personInfo")[0];
    //     profilePic = EvanBox.getElementsByClassName("img")[0];

    //     // add the array information
    //     personInfo.append(currentInfo);
    //     profilePic.src = `images/${pictureData[1]}`

    //      // add our changes to the employeeBox
    //     employeeBox.appendChild(EvanBox);

    // }

    // // piecePaths.forEach((piece, index) => {
    // //     puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg`

    // function showMatt() {
    //     childChecker();

    //     let currentInfo = document.createTextNode(descriptionData[0]);

    //     // target the specific personinfo within the evanbox
    //     personInfo = MattBox.getElementsByClassName("personInfo")[0];
    //     profilePic = MattBox.getElementsByClassName("img")[0];

    //     // add the array information
    //     personInfo.append(currentInfo);
    //     profilePic.src = `images/${pictureData[0]}`

    //     // make everything visible
    //     employeeBox.appendChild(MattBox);
    // }
        // -----> If I could find a way to pass another variable through these event listeners, I could make the code a lot more efficient...
    // buttonEvan.addEventListener("click", showEvan);
    // buttonMatt.addEventListener("click", showMatt);
    */

    // trying to make this more efficient is killing me
    // VICTORY!!!
    function showEmployee(event, name) {
        childChecker();

        // converts the passed in name to an array we can use here
        let employeeData = nameConverter(name);

        // the current info is the documentation we want to use on the page. Set up this way to flush later
        let currentInfo = document.createTextNode(employeeData[1]);

        // set the ID of the Div we want to move
        let nameBox = document.querySelector(`#${name}Box`);

        // target the specific personinfo within the nameBox
        personInfo = nameBox.getElementsByClassName("personInfo")[0];
        profilePic = nameBox.getElementsByClassName("img")[0];

        // add the array information
        personInfo.append(currentInfo);
        profilePic.src = `images/${employeeData[2]}`

        // make everything visible
        employeeBox.appendChild(nameBox);
    }

    // when button is clicked, run the fucntion of the targeted person
    buttonEvan.addEventListener("click", (event)=>showEmployee(event,"Evan"));
    buttonMatt.addEventListener("click", (event)=>showEmployee(event,"Matt"));

})();