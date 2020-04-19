const storageUrl =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com';

const fileExt = Modernizr.webp ? 'webp' : 'png';

export function imagePathForFile({ path }) {
  const [file, ...rest] = path.reverse();

  const pathComponents = ['assets', 'img', ...rest];

  const base = pathComponents.concat(`${file}.${fileExt}`).join('%2F');
  const preview = pathComponents
    .concat(`${file}-preview.${fileExt}`)
    .join('%2F');

  const resource = gsPath => `${storageUrl}/o/${gsPath}?alt=media`;

  return [resource(base), resource(preview)];
}
