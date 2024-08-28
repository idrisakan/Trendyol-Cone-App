import {View, StyleSheet, FlatList, Text} from 'react-native';
import appColors from '../../theme/colors';
import witgets from '../../widgets/witgets';
import Categories from '../../widgets/categories';
import BestSeller from '../../widgets/bestSeller';
import ForYou from '../../widgets/forYou';
import screenStyle from '../../styles/screenStyles';
import Introduction from '../../widgets/introduction';

const HomeScreen = ({na}) => {
  const widgesItem = ({item}) => {
    switch (item.name) {
    
      case 'introduction':
        return <Introduction item={item}/>;
      case 'bestSeller':
        return <BestSeller item={item}/>;
      case 'forYou':
        return <ForYou item={item}/>;
    }
  };
  return (
    <View style={screenStyle.container}>
      <FlatList data={witgets} renderItem={widgesItem} />
    </View>
  );
};


export default HomeScreen;
