import React from "react";
import Table from "../Table";
import { getData } from "../../lib/api";
import { render, waitFor } from '@testing-library/react';

jest.mock('../../lib/api', () => ({
    getData: () => Promise.resolve([
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496',
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
    ])
})
);

describe('Table component', () => {
    it('is rendenring Table component', async () => {

        const { getByText } = render(<Table data={getData()} title="foo" />)

        await waitFor(() => getByText("Leanne Graham"))

        expect(getByText('foo')).toBeTruthy();
        expect(getByText('Leanne Graham')).toBeTruthy();
    });
});