const storageUrl =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com';

const fileExt = Modernizr.webp ? 'webp' : 'png';

export function imagePathForFile({ path }) {
  const [file, ...rest] = path.reverse();

  const pathComponents = ['assets', 'img', ...rest, `${file}.${fileExt}`];
  const resource = pathComponents.join('%2F');

  return `${storageUrl}/o/${resource}?alt=media`;
}
