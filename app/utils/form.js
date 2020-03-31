/* eslint-disable no-template-curly-in-string */
import moment from 'moment';
import * as yup from 'yup';
import { camelCase, values } from 'lodash';

export const dataTypeToYup = {
  string: yup.string(),
  number: yup.number(),
  select: yup.mixed(),
  constant: yup.string(),
  date: yup
    .mixed()
    .test('is-date', '${path} is not a valid date', value =>
      moment(value).isValid(),
    )
    .transform(value => moment(value).unix()),
};

export const makeSchema = fields => {
  const components = values(fields).reduce(
    (schema, entry) => ({
      ...schema,
      [camelCase(entry.label)]: dataTypeToYup[entry.type],
    }),
    {},
  );

  return yup.object(components);
};

export const makeResolver = schema => data => {
  try {
    return {
      values: schema.validateSync(data),
      errors: {},
    };
  } catch (err) {
    const errors = [...err.inner, { path: err.path, message: err.message }];
    return {
      values: {},
      errors: errors.reduce(
        (prev, cur) => ({
          ...prev,
          [cur.path]: JSON.stringify(err.message),
        }),
        {},
      ),
    };
  }
};
