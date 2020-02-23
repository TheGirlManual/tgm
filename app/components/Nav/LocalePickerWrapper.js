import React from 'react';
import LocalePicker from 'containers/LocalePicker';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 60px;
`;

export default () => (
  <Wrapper>
    <LocalePicker />
  </Wrapper>
);
