import {FilterStatus} from "./FilterSwitch";

let mock = [];
mock.push({
    "id": 2,
    "titel": "Zweite Aufgabe",
    "beschreibung": "Viel zu tun"
});

mock.push({
    "id": 1,
    "titel": "Meine erste Aufgabe",
    "beschreibung": "Cool"
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
        )
        .catch(() => Promise.reject("inError"));
};

let getAllTasksByStatus = function get (status) {
    status = status === FilterStatus.Open ? 'OFFEN' : 'ERLEDIGT';
    return fetch('aufgaben?status=' + status,
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
        )
        .catch(() => Promise.reject("inError"))

};

let postTask = function post(taskRequest) {
    return fetch('aufgaben',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: taskRequest
        })
        .then(function (result) {
                return result.json();
            }
        )
        .catch(() => Promise.reject("inError"))
};

let patchTask = function patch(taskRequest) {
    return fetch('aufgaben',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: taskRequest
        })
        .then(function (result) {
                return result.json();
            }
        )
        .catch(() => Promise.reject("inError"))
};

export {getAllTasks, postTask, patchTask, getAllTasksByStatus}