import { render, screen } from '@testing-library/react';
import ProductDetail from '../../src/components/ProductDetail';
import { products } from "../mocks/data";
import { http, HttpResponse } from 'msw';
import { server } from "../mocks/server";

describe('ProductDetail', () => {
    it('should render the list of products', async () => {
        render(<ProductDetail productId={1} />);

        expect(await screen.findByText(new RegExp(products[0].name))).toBeInTheDocument();
        expect(await screen.findByText(new RegExp(products[0].price.toString()))).toBeInTheDocument();
    })

    it('should render a message if there is no product', async () => {
        server.use(http.get('/products/1', () => HttpResponse.json(null)));
        render(<ProductDetail productId={1} />);

        const message = await screen.findByText(/not found/i);
        expect(message).toBeInTheDocument();
    })

    it('should render error message for invalid product', async () => {
        render(<ProductDetail productId={0} />);

        const message = await screen.findByText(/invalid/i);
        expect(message).toBeInTheDocument();
    })
})