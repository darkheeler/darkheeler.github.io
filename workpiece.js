class Workpiece {

    constructor(
        name,
        description
    ) {
        this.name = name;
        this.description = description;
        this.sections = [];
    }

    addSection(section) {
        this.sections.push(section);
    }
}

class Section {

    constructor(
        detail,
        imageLink
    ) {
        this.detail = detail;
        this.imageLink = imageLink;
    }
}