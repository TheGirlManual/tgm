/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Image, Heading, Text, Box, Flex } from 'rebass';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';

export function ProfilePage() {
  useInjectReducer({ key: 'profilePage', reducer });

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100vw"
      height="80vh"
    >
      <Box width={0.9} flex="1" bg="primary">
        <Heading color="black" sx={{ fontSize: [120, 160] }}>
          Essi Kiiski
        </Heading>
        <Heading color="#333" sx={{ fontSize: [30, 36] }}>
          Political Scientist
        </Heading>
        <Text color="#333" sx={{ fontSize: [20, 30] }}>
          Brussels
        </Text>
      </Box>
      <Box
        width={0.9}
        flex="1"
        bg="secondary"
        sx={{ position: 'relative' }}
        mt={3}
        p={5}
      >
        <Text
          color="primary"
          width="60%"
          fontSize={[18, 20, 22, 28]}
          lineHeight={1.8}
        >
          Essi Kiiski is a Bachelor of Political Science and Master in Violin
          Performance. She currently works in Brussels at the heart of EU
          decision-making and has followed topics from social and health policy
          to equality and women’s rights. Before her career change she worked as
          a freelancer violinist with the London Philharmonic Orchestra and as a
          violin teacher.
        </Text>
        <Image
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zoom: 1.1,
          }}
          src="https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fessi-kiiski-nobg.png?alt=media&token=55eeb710-a285-4efb-a248-18aa78ad1d3f"
        />
      </Box>
    </Flex>
  );
}

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfilePage);
