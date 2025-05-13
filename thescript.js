const popTrial = document.getElementById("pop-trial");
const popUp = document.getElementById("pop-up");
const popUpText = document.getElementById("pop-up-text");
const closePopUp = document.getElementById("close-pop-up");
const quickPose = document.getElementById("quick-pose");
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
I bring the producer's mindset, let those concepts flow.

I am ready to move from hospitality to the ICT workplace.
`
}

let theWorkpieces = [];
const mobileApp = new Workpiece(
    "Mobile App",
    "Mean mobile app, meant to get those thumbs going like a gambler on the pokies."
);
mobileApp.addSection(
    new Section(
        "This be the diagram.", "theheeler1.png"
    )
);
mobileApp.addSection(
    new Section(
        "Showing off the skills on the river.", "theheeler3.png"
    )
);
theWorkpieces.push(mobileApp);
const dataB = new Workpiece(
    "Database Stuff",
    "Get that data organised like a palace."
);
dataB.addSection(
    new Section(
        "Data on the whiteboard.", "theheeler4.png"
    )
);
theWorkpieces.push(dataB);

const webMate = new Workpiece(
    "Interactive website.",
    "Surfing like shark bait, mate."
);
webMate.addSection(
    new Section(
        "Pen to paper, happy papa time.", "theheeler5.png"
    )
);

theWorkpieces.push(webMate);

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
    workpieceCollapsed.className = "workpiece-collapsed";
    newWorkpieceElement.appendChild(workpieceCollapsed);
    let thisPieceCollapsed = true;
    expandBtn.onclick = function() {
        if (thisPieceCollapsed) {
            workpieceCollapsed.style.display = "block";
        } else {
            workpieceCollapsed.style.display = "none";
        }
        thisPieceCollapsed = !thisPieceCollapsed;
    }
    for (let j = 0; j < theContent.sections.length; j++) {
        const theSection = theContent.sections[j];
        const newSectionElement = document.createElement("div");
        newSectionElement.className = "workpiece-section";
        const imgContainer = document.createElement("div");
        imgContainer.className = "section-img-container";
        const theImg = document.createElement("img");
        theImg.src = theSection.imageLink;
        newSectionElement.appendChild(imgContainer);
        imgContainer.appendChild(theImg);
        const detail = document.createElement("div");
        detail.className = "section-text";
        detail.innerText = theSection.detail;
        newSectionElement.appendChild(detail);
        detail.onclick = function () {
            popUp.style.display = "flex";
            popUpText.textContent = theSection.detail;
        }
        workpieceCollapsed.appendChild(newSectionElement);
    }
    relevance.appendChild(newWorkpieceElement);
}