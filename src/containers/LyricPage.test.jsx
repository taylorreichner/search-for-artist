/**
 * @jest-environment jsdom
 */
/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import LyricPage from './LyricPage';


const server = setupServer(
  rest.get('https://api.lyrics.ovh/v1/:artist/:title', (req, res, ctx) => {
    const { artist, title } = req.params;
    console.log(artist, title);
    return res(
      ctx.json({
        lyrics: '(feat. Lil Wayne, Eminem & Kanye West)\r\n[Chorus:]\r\nIt may not mean nothing to ya\'ll\r\nBut understand nothing was done for me\r\nSo I don\'t plan on stopping at all\n\nI want this shit forever man, ever man, ever man\n\nI\'m shutting shit down at the mall\n\nAnd telling every girl she the one for me\n\nAnd I ain\'t even planning to call\n\nI want this shit forever man, ever man, ever man\n\n\n\n[Verse 1: Drake]\n\nLast name ever, first name greatest\n\nLike a sprained ankle boy ain\'t nothing to play with\n\nIt started off local but thanks to all the haters\n\nI know G4 pilots on a first name basis\n\nAnd your city faded off to brown, nino\n\nShe insists she got more class, we know\n\nSwimming in the money come and find me, nemo\n\nIf I was at the club you know I ball, kimo\n\nDrop the mixtape that shit sounded like an album\n\nWho\'d have thought a country wide tour would be the outcome\n\nLabels want my name beside the X like malcom\n\nEverybody got a deal, I did it without one\n\nYeah, nigga I\'m about my business\n\nKilling all these rappers you would swear I had a hit list\n\nEveryone who doubted me is asking for forgiveness\n\nIf you ain\'t been a part of it at least you got to witness\n\nBitches\n\n\n\n[Chorus:]\n\nIt may not mean nothing to ya\'ll\n\nBut understand nothing was done for me\n\nSo I don\'t plan on stopping at all\n\nI want this shit forever man, ever man, ever man\n\nI\'m shutting shit down at the mall\n\nAnd telling every girl she the one for me\n\nAnd I ain\'t even planning to call\n\nI want this shit forever man, ever man, ever man\n\n\n\n[Verse 2: Kanye West]\n\nI used to have hood dreams, big fame, big chains\n\nI stuck my dick inside this life until that bitch came\n\nI went hard all fall like the ball teams\n\nJust so I can make it rain all spring\n\nYa\'ll seen my story my glory\n\nI had raped the game young you can call it statutory\n\nWhen a nigga blow up they gon\' build statues for me\n\nOld money benjamin button, what nothin\'\n\nNow superbad chicks giving me MacLovin\'\n\nYou would think I ran the world like Michelles husband\n\nYou would think these niggas know me when they really doesn\'t\n\nLike they was down with the old me no you fucking wasn\'t\n\nYou\'re such a fucking loser\n\nHe didn\'t even go to class mueller\n\nTrade the Grammy plaques just to have my granny back\n\nRemember she had that bad hip like a fanny pack\n\nChasing the stardom would turn you to a maniac\n\nAll the way in hollywood and I can\'t even act\n\nThey pull their cameras out and god damn they snap\n\nI used to want this thing forever ya\'ll can have it back\n\n\n\n[Chorus:]\n\nIt may not mean nothing to ya\'ll\n\nBut understand nothing was done for me\n\nSo I don\'t plan on stopping at all\n\nI want this shit forever man, ever man, ever man\n\nI\'m shutting shit down at the mall\n\nAnd telling every girl she the one for me\n\nAnd I ain\'t even planning to call\n\nI want this shit forever man, ever man, ever man\n\n\n\n[Verse 3: Lil Wayne]\n\nOkay, hello it\'s the martian, space jam jordans\n\nI want this shit forever, wake up and smell the Garden\n\nFresher than the harvest, step up to the target\n\nIf I had one guess than I guess I\'m just New Orleans\n\nAnd I will never stop like I\'m running from the cops\n\nHopped up in my car and told my chauffeur to the top\n\nLife is such a fucking roller coaster then it drops\n\nBut what should I scream for this is my theme park\n\nMy mind shine even when my thoughts seem dark\n\nPistol on my side you don\'t wanna hear that thing talk\n\nLet the king talk check the price and pay attention\n\nLil Wayne that\'s what they got to say or mention\n\nI\'m like Nevada in the middle of the summer\n\nI\'m resting in the lead I need a pillow and a cover\n\nShhhh, my foots sleeping on the gas\n\nNo brake pads no such thing as last\n\n\n\n[Chorus:]\n\nIt may not mean nothing to ya\'ll\n\nBut understand nothing was done for me\n\nSo I don\'t plan on stopping at all\n\nI want this shit forever man, ever man, ever man\n\nI\'m shutting shit down at the mall\n\nAnd telling every girl she the one for me\n\nAnd I ain\'t even planning to call\n\nI want this shit forever man, ever man, ever man\n\n\n\n[Verse 4: Eminem]\n\nThere they go, back in stadiums as shady spits his flow\n\nNuts they go, macademia they go so ballistic whoa\n\nHe can make them look like posers, he\'s wondering if he should spit this slow\n\nFuck no go for broke, his cup just runneth over, oh no\n\nHe ain\'t had of a buzz like this since the last time that he overdosed\n\nThey\'ve been waiting patiently for pinnochio to poke his nose\n\nBack into the game and they know rap will never be the same as before\n\nBashing in the brains of these hoes and establishing a name as he goes\n\nThe passion of the flame is ignited, you can\'t put it out once we light it\n\nThis shit is exactly what the fuck that I\'m talking about when we riot\n\nYou dealin\' with a few true villians, whose stayin\' inside of the booth truth spillin\'\n\nAnd spit true feelings, until our tooth fillings come flying up out of our mouths now rewind it\n\nPayback motherfucker for the way that you doubted me hows it taste\n\nWhen I slap the taste out of your mouth with the bass so loud that it shakes the place\n\nI\'m hannibal lecters so just incase your thinking of saving face\n\nYou ain\'t gonna have no face to save by the time I\'m through with this place so drake\n\n\n\n[Chorus:]\n\nIt may not mean nothing to ya\'ll\n\nBut understand nothing was done for me\n\nSo I don\'t plan on stopping at all\n\nI want this shit forever man, ever man, ever man\n\nI\'m shutting shit down at the mall\n\nAnd telling every girl she the one for me\n\nAnd I ain\'t even planning to call\n\nI want this shit forever man, ever man, ever man'
      })
    );
  })
);

describe('Lyric Page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('should render a list of Lyrics', async () => {
    render(<MemoryRouter><LyricPage /></MemoryRouter>);

    await screen.findByText('Loading...');

    return waitFor(() => {

      const section = screen.getByRole('list', { name: 'lyrics list' });
      expect(section).not.toBeEmptyDOMElement();
    });

  });
});
