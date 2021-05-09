import { render } from '@testing-library/react';
import React from 'react';
import ContactList from './ContactList';

describe('ContactList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ContactList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ContactList')).toBeTruthy();
    });
});
