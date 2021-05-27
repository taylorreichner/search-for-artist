/**
 * @jest-environment jsdom
 */
/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SearchPage from './SearchPage';
import userEvent from '@testing-library/user-event';

const server = setupServer(
    rest.get('http://musicbrainz.org/ws/2/artist', (req, res, ctx) => {
        return res (
            ctx.json({
                artists: [{
                    id: 'id',
                    name: 'bob dylan'
                }]
            })
        )
    })
)

describe('Search page', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    it('should render list of artists after click', async () => {
        render(<MemoryRouter><SearchPage /></MemoryRouter>)

        const input = await screen.findByLabelText('artist');
        userEvent.type(input, 'bob dylan');

        const submitButton = await screen.findByRole('button', {
            name: 'find-artist',
        });
        userEvent.click(submitButton);

        screen.getByText('Loading...');

        return waitFor(() => {
            const artists = screen.getAllByText('bob dylan', {
                exact: false
            });
            expect(artists).toHaveLength(1);
        })
    })
})