(() => {

    const personInfo = document.querySelector(".personInfo"),
    Info = document.querySelectorAll(".box");

    const personData = [
        "Hi There",

        "Evan Info Here",
    ];

    function playInfo() {
        console.log("Texxxxxxxxxxt")

        personInfo.textContent = personData[index];
    }

    Info.forEach(box => box.addEventListener("click", playInfo));

})();