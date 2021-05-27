/**
 * @jest-environment jsdom
 */
/* eslint-disable max-len */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SongPage from './SongPage'


const server = setupServer(
    rest.get('http://musicbrainz.org/ws/2/recording', (req, res, ctx) => {
        return res (
            ctx.json({
                recordings: [{
                    'id': 'boog',
                    'title': 'big boog',
                    'first-release-date': 'string of dates',
                }] })
            )
        })
);

describe('Song Page', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    it('should render a list of songs', async () => {
        render(<MemoryRouter><SongPage /></MemoryRouter>)

        await screen.findByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'songs list'});
        expect(ul).not.toBeEmptyDOMElement()
    })
})