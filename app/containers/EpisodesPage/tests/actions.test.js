import { getEpisodes } from '../actions';
import { GET_EPISODES } from '../constants';

describe('EpisodesPage actions', () => {
  describe('get episodes', () => {
    it('has a type of GET_EPISODES', () => {
      const expected = {
        type: GET_EPISODES,
      };
      expect(getEpisodes()).toEqual(expected);
    });
  });
});
