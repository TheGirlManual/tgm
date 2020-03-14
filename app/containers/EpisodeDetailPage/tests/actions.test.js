import { getTranscript } from '../actions';
import { GET_EPISODE_TRANSCRIPT } from '../constants';

describe('EpisodeDetailPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: GET_EPISODE_TRANSCRIPT,
      };
      expect(getTranscript()).toEqual(expected);
    });
  });
});
