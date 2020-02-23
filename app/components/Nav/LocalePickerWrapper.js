import React from 'react';
import LocalePicker from 'containers/LocalePicker';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 120px;
  margin-left: auto;
`;

export default () => (
  <Wrapper>
    <LocalePicker />
  </Wrapper>
);
