import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../components/App'

describe('App tests', () => {
    it('should contains the heading 1', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('World of War Cat');
    });
});