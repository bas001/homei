let mock = [];
mock.push({
    "id": 1,
    "titel": "Meine erste Aufgabe",
    "beschreibung": "Cool"
});
mock.push({
    "id": 2,
    "titel": "Zweite Aufgabe",
    "beschreibung": "Viel zu tun"
});


let getAllTasks = function get () {
    return fetch('aufgaben',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET",
        })
        .then(function (result) {
                return result.json();
            }
        );
};

let postTask = function post(task) {
    return fetch('aufgaben',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({titel: task.title, beschreibung: task.description})
        })
        .then(function (result) {
            return result.json();
            }
        );
};

let patchTask = function patch(task) {
    return fetch('aufgaben',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify({id: task.id, titel: task.title, beschreibung: task.description})
        })
        .then(function (result) {
                return result.json();
            }
        );
};

export {getAllTasks, postTask, patchTask}