import { render } from '@testing-library/react';
import React from 'react';
import Filter from './Filter';

describe('Filter', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Filter {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Filter')).toBeTruthy();
    });
});
