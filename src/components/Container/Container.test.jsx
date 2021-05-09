import { render } from '@testing-library/react';
import React from 'react';
import Container from './Container';

describe('Container', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Container {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Container')).toBeTruthy();
    });
});
