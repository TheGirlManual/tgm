/**
 *
 * HeadTags
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function HeadTags({ title, description }) {
  return (
    <Helmet>
      <title>{`The Girl Manual - ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

HeadTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeadTags;
