import { render } from '@testing-library/react';
import React from 'react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ContactForm {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ContactForm')).toBeTruthy();
    });
});
