import {StyleSheet} from 'react-native';
import Colors from "../util/colors";

export default StyleSheet.create({
    listItemWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 16
    },

    listItemIconWrapper: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center'
    },

    listItemTitle: {
        fontSize: 17,
        color: "#000"
    },
    listItemSubtitle: {
        fontSize: 12,
        color: "#cccccc"
    },
})
