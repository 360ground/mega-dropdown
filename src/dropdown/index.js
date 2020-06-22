import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import PropsType from "prop-types";
import Icon from 'react-native-vector-icons/AntDesign'
import ListIcon from 'react-native-vector-icons/FontAwesome5';
import ListItem from "../listitem";
import styles from "./styles";


const colors = [
    "#009900",
    "#696969",
    "#999900",
    "#CC00CC",
    "#000099",
];


const DropDown = ({
                      title,
                      data,
                      triggerComponent,
                      children,
                      onListItemClicked
                  }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>

            <TouchableOpacity onPress={toggleModal}>
                {triggerComponent}
            </TouchableOpacity>
            <Modal
                onBackButtonPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['down']}
                style={styles.dropdownModal}
                isVisible={isModalVisible}>
                {
                    children ?
                        children :
                        <View
                            style={styles.dropdownWrapper}>
                            <View style={styles.dropdownHeader}>
                                <Text style={styles.dropdownHeaderTitle}>{title}</Text>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Icon name={"close"} size={24}/>
                                </TouchableOpacity>

                            </View>

                            <FlatList
                                data={data}
                                keyExtractor={() => data.title}
                                renderItem={({item, index}) => {
                                    return (
                                        <ListItem index={index} onListItemClicked={onListItemClicked} item={item}/>
                                    )
                                }}
                            />
                        </View>
                }

            </Modal>
        </View>
    );
};

DropDown.propTypes = {

    title: PropsType.string,

    data: PropsType.array,

    children: PropsType.node,

    triggerComponent: PropsType.node,

    onListItemClicked: PropsType.func

};
DropDown.defaultProps = {};

export default DropDown;
