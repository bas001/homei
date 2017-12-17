jest.mock('./FetchLatin');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {fetchLatin} from "./FetchLatin"
import TestUtils from "react-addons-test-utils";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

it('renders latin text', () => {
    var json = {"item1" : {"userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit"}};

    var mock = [];
    mock.push({"userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit"});
    fetchLatin.mockImplementation(() => mock);


    let renderer = TestUtils.createRenderer();

    renderer.render(
        <App />
    );

    let todolist = renderer.getRenderOutput();

    expect(todolist).toBe("asdf");
});





