import { render, screen, waitFor } from '@testing-library/react'
import TagList from '../../src/components/TagList';

describe('TagList', () => {
    it('should render tags', async () => {
        render(<TagList />);

        // await waitFor(() => {
        //     const listItems = screen.getAllByRole('listitem');
        //     expect(listItems.length).toBeGreaterThan(0);
        // }); //default timeout: 1000
        const listItems = await screen.findAllByRole('listitem');
        //findBy - comb. of waitFor and get query
        expect(listItems.length).toBeGreaterThan(0);
    })
})