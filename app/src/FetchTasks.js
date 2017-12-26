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
                let contentType = result.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return result.json();
                }
                throw new TypeError("Oops, we haven't got JSON!");
            }
        );
    //.catch(()=>mock)
};

let postTask = function post(task, handlePost) {
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
                let contentType = result.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    result.json().then(function (taskDto) {
                        handlePost(taskDto)
                        }
                    );
                    return result;
                }
                throw new TypeError("Oops, we haven't got JSON!");
            }
        );
    //.catch(()=>mock)
};

export {getAllTasks}
export {postTask}
