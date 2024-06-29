import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name="Mosh" />);
        const heading = screen.queryByRole('heading');
        
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/hello mosh/i); 
    })

    it('should render login button when name is not provided', () => {
        render(<Greet name="" />);
        const button = screen.queryByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    })
})