export const fields = {
  title: {
    type: 'string',
    label: 'Title',
    placeholder: 'A Great Title',
    required: true,
  },
  description: {
    type: 'string',
    label: 'Description',
    placeholder: 'A great description',
    multiline: true,
    required: true,
  },
  author: {
    type: 'select',
    isArray: true,
    label: 'Author',
    required: true,
    isMulti: true,
  },
  episode: {
    type: 'number',
    label: 'Episode',
    placeholder: 0,
    required: true,
  },
  season: {
    type: 'number',
    label: 'Season',
    placeholder: 0,
    required: true,
  },
  releaseDate: {
    type: 'date',
    label: 'Release Date',
    required: true,
  },
  slug: {
    type: 'string',
    label: 'Slug',
    placeholder: 'a-great-title',
    required: true,
  },
  spotifyId: {
    type: 'string',
    label: 'Spotify ID',
    placeholder: '7jwdjqGaFHQeQoly9ByCzP',
  },
  type: {
    type: 'constant',
    label: 'Type',
    fixedValue: 'episode',
    required: true,
  },
};
