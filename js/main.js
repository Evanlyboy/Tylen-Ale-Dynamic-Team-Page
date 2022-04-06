(() => {

    const personInfo = document.querySelector(".personInfo"),
    Info = document.querySelectorAll(".box"),
    employeeBox = document.querySelector(".employeeBox"),
    hiddenEmployees = document.querySelector(".hiddenEmployees"),
    buttonEvan = document.querySelector("#Evan"),
    buttonMatt = document.querySelector("#Matt"),
    MattBox = document.querySelector("#MattBox"),
    EvanBox = document.querySelector("#EvanBox");

    const personData = [
        "Hi There",

        "Evan Info Here",
    ];

    function playInfo() {
        console.log("Texxxxxxxxxxt")

        personInfo.textContent = personData[index];
    }

    function showEvan() {
        if(employeeBox.childElementCount > 0) {
            hiddenEmployees.appendChild(employeeBox.firstElementChild);
            console.log("traceback online");
        }
        employeeBox.appendChild(EvanBox);

    }

    function showMatt() {
        if(employeeBox.childElementCount > 0) {
            hiddenEmployees.appendChild(employeeBox.firstElementChild);
            console.log("traceback online");
        }
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
    // when button is clicked, changeinfo
    buttonEvan.addEventListener("click", showEvan);
    buttonMatt.addEventListener("click", showMatt);

})();