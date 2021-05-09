import { render } from '@testing-library/react';
import React from 'react';
import ButtonForm from './ButtonForm';

describe('ButtonForm', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ButtonForm {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ButtonForm')).toBeTruthy();
    });
});
