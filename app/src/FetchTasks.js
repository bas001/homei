var mock = [];
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


let fetchTasks = function fetchLatin() {
    return fetch('aufgaben')
        .then(function (result) {
                var contentType = result.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return result.json();
                }
                throw new TypeError("Oops, we haven't got JSON!");
            }
        );
        //.catch(()=>mock)
};

export {fetchTasks}
