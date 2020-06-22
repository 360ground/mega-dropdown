import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Colors from "../util/colors";
import ListIcon from 'react-native-vector-icons/FontAwesome5';
import styles from "./styles";

const ListItem = ({onListItemClicked, item, index}) => {
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#E9EFFB"
            onPress={() => onListItemClicked && onListItemClicked(item, index)}>
            <View style={styles.listItemWrapper}>
                <View style={[styles.listItemIconWrapper, {backgroundColor: Colors[index],}]}>
                    <ListIcon name={item.icon} size={30} color={"#FFF"}/>
                </View>

                <View>
                    <Text style={styles.listItemTitle}>{item.title}</Text>
                    <Text
                        style={styles.listItemSubtitle}>{item.subtitle}</Text>
                </View>
            </View>

        </TouchableHighlight>
    );
};

ListItem.propTypes = {};
ListItem.defaultProps = {};

export default ListItem;
