const popTrial = document.getElementById("pop-trial");
const popUp = document.getElementById("pop-up");
const popUpText = document.getElementById("pop-up-text");
const closePopUp = document.getElementById("close-pop-up");
closePopUp.onclick = function() {
    popUp.style.display = "none";
    popUpText.textContent = "";
}
let theContents = [];
theContents.push("Mean mobile app, meant to get those thumbs going like a gambler on the pokies.");
theContents.push("Database stuff. Get that data organised like a palace.");
theContents.push("Interactive website. Surfing like shark bait, mate.");
theContents.push(
`
giurghrshgrsdlgrsg
sghrsigsrihgisrhightrhghgrtg
dghrdiughhgz.galdrnglerg
ghairugnlgrignearga
aphrguargiaerigbaergnblstng
ahguirhgiargiuerg
giuargiarg
baurihgiareuhgiurgreg
heurihgiaergirg
8888888888

gregregreg
eergrgerg
ergeg
`
);

for (let i = 0; i < theContents.length; i++) {
    const newElement = document.createElement("div");
    newElement.id = "stuff" + i;
    newElement.className = "scroll-item";
    newElement.textContent = theContents[i];
    newElement.onclick = function () {
        popUp.style.display = "flex";
        popUpText.textContent = theContents[i];
    }
    popTrial.appendChild(newElement);
}