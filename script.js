function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}

updateTime();
setInterval(updateTime, 1000);

var welcomeScreen = document.querySelector("#welcome");

var welcomeScreenClose = document.querySelector("#welcomeclose");

var welcomeScreenOpen = document.querySelector("#welcomeopen");

var journal = document.querySelector("#journal");

var journalClose = document.querySelector("#journalclose");

var journalOpen = document.querySelector("#journalIcon");

var projects = document.querySelector("#projects");

var projectsClose = document.querySelector("#projectsclose");

var projectsOpen = document.querySelector("#projectsIcon");

var projectsWindow = document.querySelector("#projectsWindow");

var projectsData = [
    {
        title: "AppleWebOS",
        description: "An Operating system in your web browser, currently in first stages, but will be updated."
    },
    {
        title: "Journal App",
        description: "My first desktop application."
    },

    {
        title: "Coming Soon...",
        description: "Planning on adding more soon."
    }
];

var content = [

    {

        title: "Welcome to AppleWebOS",

        date: "2026-06-15",

        content: `
        <h2>Welcome to AppleWebOS</h2>

        <p>
            This is my Journal App.
        </p>
        `
    },

    {
        title: "My First Journal Entry",

        date: "2026-06-15",
        content: `
        <h2>My First Journal Entry</h2>

        <p>
            This is my first journal entry. I am excited to start using this app to document my devlogs for this project. I hope to add updates in the future.
        </p>
        `
    }
];

var sidebar = document.querySelector("#sidebar");

var notesContent = document.querySelector("#notesContent");

function setNotesContent(index) {
    notesContent.innerHTML = content[index].content;
}

function addToSidebar(index) {
    var note = content[index];

    var newDiv = document.createElement("div");

    newDiv.innerHTML = `

    <p>${note.title}</p>

    <p>${note.date}</p>

    `;

    newDiv.addEventListener(
        "click",
        function() {
            setNotesContent(index);
        }
    );

    sidebar.appendChild(newDiv);
}

function loadProjects() {
    projects.innerHTML = "";

    for(
        let i=0;
        i<projectsData.length;
        i++
    ) {
        var card = document.createElement("div");
        card.innerHTML = `
        <h3>
        ${projectsData[i].title}
        </h3>

        <p>
        ${projectsData[i].description}
        </p>
        `;

        projects.appendChild(card);
    }
}



for(
    let i=0;
    i<content.length;
    i++
) {
    addToSidebar(i);
}

setNotesContent(0);
loadProjects();

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "flex";
}

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
});

journalClose.addEventListener("click", function() {
    closeWindow(journal);
});

journalOpen.addEventListener("click", function() {
    openWindow(journal);
});

projectsOpen.addEventListener("click", function() {
    openWindow(projectsWindow);
});

projectsClose.addEventListener("click", function() {
    closeWindow(projectsWindow);
});

dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#journal"));
dragElement(document.querySelector("#projectsWindow"));

function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

