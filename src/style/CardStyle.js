import { StyleSheet } from "react-native";

export default StyleSheet.create({
    banner_slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    banner_img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    logo_icon: {
        position: 'absolute',
        top: 30,
        right: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 1,
    },
    logo_bg: {
        height: 70,
        backgroundColor: '#000',
        opacity: 0.2,
        width: '80%',
        position: 'absolute',
        top: 24,
        right: 0
    },
    art_card: {
        alignItems: 'center',
        width: 170,
        height: '94%',
        marginLeft: 16,
    },
    art_img: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: 12,
    },
    art_img_bg: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 12,
        borderBottomEndRadius: 12,
        padding: 8,
    },
    artDetail_card: {
        height: '45%'
    },
    artDetail_img: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    artDetail_title: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        bottom: 30,
        left: 40,
        padding: 16,
        borderTopLeftRadius: 20,
        borderBottomEndRadius: 20,
        width: 240,
        height: 80
    },
    artDetail_textArea: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingRight: 6
    },
    artDetail_btn: {
        backgroundColor: '#B8860B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '70%',
        margin: 10,
        padding: 8,
        borderRadius: 20
    },
    detail_img: {
        width: 140,
        height: '80%',
        borderRadius: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        transform: [{ translateY: 1 }, { translateX: 1 }],
    },
})