import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from '../../src/components/SearchBox';

describe('SearchBox', () => {
    const renderSearchBox = () => {
        const onChange = vi.fn();
        render(<SearchBox onChange={onChange} />);
        return {
            input: screen.getByPlaceholderText(/search/i),
            user: userEvent.setup(),
            onChange,
        }
    }
    
    it('it should render an input field for searching', () => {
        //user.type(input, 'World'); user.type(input, 'search{enter}')
        const { input } = renderSearchBox();
        expect(input).toBeInTheDocument();
    });

    it('should call onChange when Enter is pressed', async () => {
        const { input, onChange, user } = renderSearchBox();
        const searchTerm = "SearchTerm";

        // await user.type(input, "SearchTerm{enter}");
        await user.type(input, searchTerm + "{enter}");

        expect(onChange).toHaveBeenCalledWith(searchTerm)
    })
    
    it('should not call onChange if input field is empty', async () => {
        const { input, onChange, user } = renderSearchBox();
        
        await user.type(input, "{enter}");

        expect(onChange).not.toHaveBeenCalled()
    })
})