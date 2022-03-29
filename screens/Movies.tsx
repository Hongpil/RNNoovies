import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// const Title = styled.Text`
//   color: blue;
// `;
const Title = styled.Text`
  color: ${props => (props.selected ? 'blue' : 'red')};
`;

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
  navigation: {navigate},
}) => (
  <Btn onPress={() => navigate('Stack', {screen: 'Three'})}>
    {/* <Title>Movies</Title> */}
    <Title selected={false}>Movies</Title>
    <Title selected={true}>Movies</Title>
  </Btn>
);
export default Movies;
