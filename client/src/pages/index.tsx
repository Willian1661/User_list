import React from 'react';
import { createRoot } from "react-dom/client";
import '../styles/custom.css';
import { getData} from '../api/Users';
import Table from '../components/Table';

const tableSection = document.createElement('section');
document.body.insertAdjacentElement('afterbegin', tableSection).setAttribute('class','flex items-center justify-center h-screen');

createRoot(tableSection).render(
    <Table
        title='User List'
        data={getData()}
    />);
