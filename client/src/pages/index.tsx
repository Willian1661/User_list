import React from 'react';
import { createRoot } from "react-dom/client";
import '../styles/custom.css';
import { getData} from '../lib/api';
import Table from '../components/Table';

const tableSection = document.createElement('section');
document.body.insertAdjacentElement('afterbegin', tableSection);

createRoot(tableSection).render(
    <Table
        title='User List'
        data={getData()}
    />);

    getData().then(data => {
        const mockedData = Promise.resolve(data[0]);
        console.log(mockedData);
    });
    