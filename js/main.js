(() => {

    Info = document.querySelectorAll(".box"),
    employeeBox = document.querySelector(".employeeBox"),
    hiddenEmployees = document.querySelector(".hiddenEmployees"),
    buttonEvan = document.querySelector("#Evan"),
    buttonMatt = document.querySelector("#Matt"),
    MattBox = document.querySelector("#MattBox"),
    EvanBox = document.querySelector("#EvanBox");

    const personData = [
        "Hi There",
        "Evan is the guy who built the code",
    ];

    function playInfo() {
        console.log("Texxxxxxxxxxt")

        personInfo.textContent = personData[index];
    }

    function childChecker() {
                    // if there is more than one child in the employeebox, get rid of it
        if(employeeBox.childElementCount > 0) {
            hiddenEmployees.appendChild(employeeBox.firstElementChild);
            console.log("traceback online");
            // yeah, punt that child. fucker.
        }
        
    }

    function showEvan() {
        childChecker();
        // get the specific info we need from the array
        let currentInfo = document.createTextNode(personData[1]);
        // target the specific personinfo within the evanbox
        let personInfo = document.getElementById("EvanBox").getElementsByClassName("personInfo")[0];
        // add the array information
        personInfo.append(currentInfo);
        // make everything visible
        employeeBox.appendChild(EvanBox);
        

    }

    function showMatt() {
        childChecker();
        employeeBox.appendChild(MattBox);
    }

    // function buttonPressed (event) {
    //     event.dataTransfer.setData("guyThatWasClickedOn", event.target.id);
    //     console.log(guyThatWasClickedOn);
    //     changeInfo(guyThatWasClickedOn);
    // }

    // function changeInfo(employee) {
    //     console.log("here i am");
    //     employees.classList.add("showEmployee");
    // }

    Info.forEach(box => box.addEventListener("click", playInfo));
    // when button is clicked, run the fucntion of the targetted person
    buttonEvan.addEventListener("click", showEvan);
    buttonMatt.addEventListener("click", showMatt);

})();