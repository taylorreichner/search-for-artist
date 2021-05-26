/**
 * @jest-environment jsdom
 */
/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AlbumPage from './AlbumPage';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/release', (req, res, ctx) => {
    return res (
      ctx.json({
        releases: [{
          id: 'boog',
          title: 'bob boog',
          date: '19boog',
        }] })
    );
  })
);

describe('Album Page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('should render a list of albums', async () => {
    render(<MemoryRouter><AlbumPage /></MemoryRouter>);

    await screen.findByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'album list' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
