const races = ["dragonborn", "dwarf", "elf", "gnome", "half-elf", "halfling", "half-orc", "human", "tiefling"];
const classes = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];
const genders = ["Female", "Male", "Intersex", "Transgender", "NonBinary", "GenderQueer", "Other"];
const pronouns = ["She/Her", "He/Him", "They/Them", "Other"];


function onLoad() {

    // grabbing #root
    const root = document.getElementById("root");

    // creating sheet div for form
    const sheet = document.createElement("div");
    sheet.classList.add("sheet");
    root.appendChild(sheet);

    // creating character sheet
    const characterSheet = document.createElement("div");
    characterSheet.classList.add("character_sheet");
    root.appendChild(characterSheet);

    // creating form in sheet
    const form = document.createElement("form");
    sheet.appendChild(form);

    // creating label and input for the character's name inside form
    const nameInput = `
        <label for="name">Your Character's Name:</label>
        <input type="text" id="name">
    `;
    form.insertAdjacentHTML("beforeend", nameInput);

    // creating wrapping div for races and classes select tags
    const selectDIV = document.createElement("div");
    selectDIV.setAttribute("id", "selectDIV");
    form.appendChild(selectDIV);

    // RACES SELECTION
    // creating wrapping div for race select tag
    const racesDIV = document.createElement("div");
    racesDIV.setAttribute("id", "racesDIV");
    selectDIV.appendChild(racesDIV);

    // creating label for race select inside form
    const racelLabel = `
        <label for="race">Choose Race:</label>
    `;
    racesDIV.insertAdjacentHTML("beforeend", racelLabel)

    // creating select tag inside form
    const raceSelect = document.createElement("select");
    raceSelect.setAttribute("id", "race");
    racesDIV.appendChild(raceSelect);

    const raceOptionPlaceholder = `
        <option value="" disabled selected>Choose Race</option>
    `;
    raceSelect.insertAdjacentHTML("afterbegin", raceOptionPlaceholder);

    // iterating through races and putting the values into option tags inside raceSelect
    for (r of races) {
        const raceOption = `
            <option value="${r}">${r}</option>
        `;
        raceSelect.insertAdjacentHTML("beforeend", raceOption)
    }

    // CLASSES SELECTION
    // creating wrapping div for class select tag
    const classDIV = document.createElement("div");
    classDIV.setAttribute("id", "classDIV");
    selectDIV.appendChild(classDIV);

    // creating label for class select inside form
    const classlLabel = `
        <label for="class">Choose Class:</label>
    `;
    classDIV.insertAdjacentHTML("beforeend", classlLabel)

    // creating select tag inside form
    const classSelect = document.createElement("select");
    classSelect.setAttribute("id", "class");
    classDIV.appendChild(classSelect);

    const classOptionPlaceholder = `
        <option value="" disabled selected>Choose Class</option>
    `;
    classSelect.insertAdjacentHTML("afterbegin", classOptionPlaceholder);

    // iterating through classes and putting the values into option tags inside classSelect
    for (c of classes) {
        const classOption = `
            <option value="${c}">${c}</option>
        `;
        classSelect.insertAdjacentHTML("beforeend", classOption)
    }

    // creating wrapping div for gender and pronoun div tags
    const checkboxDIV = document.createElement("div");
    checkboxDIV.setAttribute("id", "checkboxDIV");
    form.appendChild(checkboxDIV);

    // GENDERS SELECTION
    // creating wrapping div for gender div and label
    const genderDIV = document.createElement("div");
    genderDIV.setAttribute("id", "genderDIV");
    checkboxDIV.appendChild(genderDIV);

    // creating label for gender select inside form
    const genderlLabel = `
        <label for="gender">Choose Gender:</label>
    `;
    genderDIV.insertAdjacentHTML("beforeend", genderlLabel)

    // creating select tag inside form
    const genderSelect = document.createElement("div");
    genderSelect.setAttribute("id", "gender");
    genderDIV.appendChild(genderSelect);


    // iterating through genders and putting the values into option tags inside genderSelect
    for (g of genders) {
        const genderOption = `
            <div id="${g}">
                <input type="checkbox" name="${g}" id="${g}">
                <label for="${g}" value="${g}">${g}</label>
            </div>
        `;
        genderSelect.insertAdjacentHTML("beforeend", genderOption)
    }

    // PRONOUNS SELECTION
    // creating wrapping div for pronoun div and label
    const pronounDIV = document.createElement("div");
    pronounDIV.setAttribute("id", "pronounDIV");
    checkboxDIV.appendChild(pronounDIV);

    // creating label for pronoun select inside form
    const pronounlLabel = `
        <label for="pronoun">Choose Pronouns:</label>
    `;
    pronounDIV.insertAdjacentHTML("beforeend", pronounlLabel)

    // creating select tag inside form
    const pronounSelect = document.createElement("div");
    pronounSelect.setAttribute("id", "pronoun");
    pronounDIV.appendChild(pronounSelect);


    // iterating through pronouns and putting the values into option tags inside pronounSelect
    for (p of pronouns) {
        const pronounOption = `
            <div id="${p}">
                <input type="checkbox" name="${p}" id="${p}">
                <label for="${p}" value="${p}">${p}</label>
            </div>
        `;
        pronounSelect.insertAdjacentHTML("beforeend", pronounOption)
    }


    // creating wrapping div for races icons
    const raceIconDIV = document.createElement("div");
    raceIconDIV.setAttribute("id", "raceIconDIV");
    characterSheet.appendChild(raceIconDIV);

    // grabbing the races select tag
    const racesSelection = document.getElementById("race");
    
    // creating img tag inside racesIconDIV
    let raceIcon = document.createElement("img");
    raceIconDIV.appendChild(raceIcon);

    // event listener to grab changes in selection options
    racesSelection.addEventListener("change", svgChangeRace);

    // function with for cicle (of races) and changing the img src if each value is selected 
    function svgChangeRace() {
        for (r of races) {
            if (racesSelection.value == r) {                
                raceIcon.setAttribute("src", `./img/races/${r}.svg`);
            }
        }
    }

    // creating wrapping div for classes icons
    const classIconDIV = document.createElement("div");
    classIconDIV.setAttribute("id", "classIconDIV");
    characterSheet.appendChild(classIconDIV);

    // grabbing the races select tag
    const classesSelection = document.getElementById("class");
    
    // creating img tag inside racesIconDIV
    let classIcon = document.createElement("img");
    classIconDIV.appendChild(classIcon);

    // event listener to grab changes in selection options
    classesSelection.addEventListener("change", svgChangeClass);

    // function with for cicle (of classes) and changing the img src if each value is selected 
    function svgChangeClass() {
        for (c of classes) {
            if (classesSelection.value == c) {                
                classIcon.setAttribute("src", `./img/classes/${c}.svg`);
            }
        }
    }

    // creating button inside character sheet
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = "Create My Character";
    characterSheet.appendChild(button);

}
window.addEventListener("load", onLoad)