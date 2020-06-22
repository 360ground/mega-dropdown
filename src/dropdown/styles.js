import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    dropdownModal: {
        margin: 0,
        justifyContent: 'flex-end'
    },
    dropdownWrapper: {
        height: 400,
        backgroundColor: '#FFFFFF',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    },
    dropdownHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCCCCC",
        marginBottom: 5
    },
    dropdownHeaderTitle: {
        color: "#3768A7",
        fontSize: 20,
        fontWeight: 'bold'
    }
})
