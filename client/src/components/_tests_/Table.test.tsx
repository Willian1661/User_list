import React from "react";
import Table from "../Table";
import getData from "../../lib/api";
import renderer from 'react-test-renderer';

jest.mock('../../lib/api');

describe('Table component', () => {
    it('is rendenring Table component', async () => {

        const component = renderer.create(
            <Table data={getData()} title="foo" />
        );
        expect(component).toMatchSnapshot();

    });
});