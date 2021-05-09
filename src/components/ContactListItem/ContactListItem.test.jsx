import { render } from '@testing-library/react';
import React from 'react';
import ContactListItem from './ContactListItem';

describe('ContactListItem', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ContactListItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ContactListItem')).toBeTruthy();
    });
});
