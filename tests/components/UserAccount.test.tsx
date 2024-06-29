import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';


describe('UserAccount', () => {
    it('should render username', () => {
        const user : User = {
            id: 1,
            name: "Mosh",
        };
        render(<UserAccount user={user} />);
        const nameUser = screen.getByText(user.name);

        expect(nameUser).toBeInTheDocument();
    })

    it('should render edit button if it is admin', () => {
        const user : User = {
            id: 1,
            name: "Mosh",
            isAdmin: true,
        };
        render(<UserAccount user={user} />);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    })

    it('should not render edit button if it is not admin', () => {
        const user : User = {
            id: 1,
            name: "Mosh",
            isAdmin: false,
        };
        render(<UserAccount user={user} />);
        const button = screen.queryByRole('button'); 
        
        expect(button).not.toBeInTheDocument();
    })
})
