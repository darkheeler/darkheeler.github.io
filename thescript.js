const popTrial = document.getElementById("pop-trial");
const popUp = document.getElementById("pop-up");
const popUpText = document.getElementById("pop-up-text");
const closePopUp = document.getElementById("close-pop-up");
const quickPose = document.getElementById("quick-pose");
//const collapseTestButton = document.getElementById("collapse-test-button");
let collapsed = true;
const collapsedSection = document.getElementById("collapsed-section");
const relevance = document.getElementById("relevance");



closePopUp.onclick = function() {
    popUp.style.display = "none";
    popUpText.textContent = "";
}
quickPose.onclick = function() {
    popUp.style.display = "flex";
    popUpText.textContent =
`
I bring the producer's mindset to 
`
}

/*
collapseTestButton.onclick = function() {
    if (collapsed) {
        collapsedSection.style.display = "block";
    } else {
        collapsedSection.style.display = "none";
    }
    collapsed = !collapsed;
}
    */
let theWorkpieces = [];
/*
theWorkpieces.push("Mean mobile app, meant to get those thumbs going like a gambler on the pokies.");
theWorkpieces.push("Database stuff. Get that data organised like a palace.");
theWorkpieces.push("Interactive website. Surfing like shark bait, mate.");
theWorkpieces.push(
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
*/
const mobileApp = new Workpiece(
    "Mobile App",
    "Mean mobile app, meant to get those thumbs going like a gambler on the pokies."
);
mobileApp.addSection(
    new Section(
        "This be the diagram."
    )
);
theWorkpieces.push(mobileApp);

/*
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
    */

for (let i = 0; i < theWorkpieces.length; i++) {
    const newWorkpieceElement = document.createElement("div");
    const theContent = theWorkpieces[i];
    newWorkpieceElement.id = "workpiece" + i;
    newWorkpieceElement.className = "workpiece";
    const expandBtn = document.createElement("button");
    expandBtn.textContent = "&#9660;";
    newWorkpieceElement.appendChild(expandBtn);
    const heading = document.createElement("h1");
    heading.textContent = theContent.name;
    newWorkpieceElement.appendChild(heading);
    const description = document.createElement("div");
    description.className = "workpiece-desc";
    description.textContent = theContent.description;
    newWorkpieceElement.appendChild(description);
    const workpieceCollapsed = document.createElement("div");
    workpieceCollapsed.className = "workplace-collapsed";
    newWorkpieceElement.appendChild(workpieceCollapsed);
    let thisPieceCollapsed = true;
    expandBtn.onclick = function() {
        if (thisPieceCollapsed) {
            workpieceCollapsed.style.display = "block";
        } else {
            workpieceCollapsed.style.display = "hidden";
        }
        workpieceCollapsed = !workpieceCollapsed;
    }
    for (let j = 0; j < theContent.sections; j++) {
        const theSection = theContent.sections[j];
        const newSectionElement = document.createElement("div");
        newSectionElement.className = "workpiece-section";
        const theImg = document.createElement("img");
        theImg.src = theSection.imageLink;
        newSectionElement.appendChild(theImg);
        const detail = document.createElement("div");
        detail.innerText = theSection.detail;
        newSectionElement.appendChild(detail);
        workpieceCollapsed.appendChild(newSectionElement);
    }
    relevance.appendChild(newWorkpieceElement);
}