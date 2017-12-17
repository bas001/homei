var mock = [];
mock.push({
    "id": 1,
    "titel": "Meine erste Aufgabe",
    "beschreibung": "Cool"});
mock.push({
    "id": 2,
    "titel": "Zweite Aufgabe",
    "beschreibung": "Viel zu tun"});

let fetchTasks = function fetchLatin() {
    return Promise.resolve(
        fetch(`http://localhost:8080/tasks`)
            .then(function(result) {
                console.log("ok");
                return result.json()
            })
            .catch(()=>mock)
    );
};

export {fetchTasks}
