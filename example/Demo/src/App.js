import React, {Component} from 'react';
import {StatusBar, Text, View, ScrollView} from 'react-native';
import styles from './App.style';
import LottieView from 'lottie-react-native';
import DropDown from "mega-dropdown";

// import PropTypes from 'prop-types';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <View>
        <DropDown
            onListItemClicked={(item, index)=> alert(`You clicked item ${JSON.stringify(item)} at index ${index}` )}
            triggerComponent={ <Text>Open the dropdown</Text>}
            title={"የክፍያ ቁጥር ይምረጡ"}
            data={[
              {title: "ሞባይል - 0922122763", icon: "phone", subtitle: "ጊዜ ከ ቀን 1 - 5"},
              {title: "መብራት - 0922122763", icon: "lightbulb", subtitle: "ጊዜ ከ ቀን 1 - 5"},
              {title: "ትራፊክ ቅጣት - 0922122763", icon: "traffic-light", subtitle: "ጊዜ ከ ቀን 1 - 5"},
              {title: "ትራፊክ ቅጣት - 0922122763", icon: "traffic-light", subtitle: "ጊዜ ከ ቀን 1 - 5"},
            ]}

        />
      </View>

    );
  }
}

export default App;
