import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import CardStyle from '../style/CardStyle';
import TextStyle from '../style/TextStyle';


export const BannerCard = props => (
    <TouchableOpacity onPress={props.cardOnPress} style={{ flex: 1 }}>
        <View style={CardStyle.banner_slide}>
            <Image source={props.bannerImg} style={CardStyle.banner_img} />
            {/* <View style={CardStyle.logo_bg}></View>
            <Image source={require('../image/logo-small.png')} style={CardStyle.logo_icon} /> */}
            {/* <View> */}
            <Text style={TextStyle.banner_title}>{props.place}</Text>
            <Text style={TextStyle.banner_text}>{props.name}</Text>
            {/* </View> */}
        </View>
    </TouchableOpacity>
)

export const ArtCard = props => (
    <TouchableOpacity onPress={props.cardOnPress} style={CardStyle.art_card}>
        <Image source={props.artImg} style={CardStyle.art_img} />
        <View style={CardStyle.art_img_bg}>
            <Text style={TextStyle.art_text} ellipsizeMode={'tail'} numberOfLines={3}>{props.artText}</Text>
        </View>
    </TouchableOpacity>
)

export const ArtDetailCard = props => (
    <View style={{ backgroundColor: '#282828', width: '100%', height: '100%' }}>
        <View style={CardStyle.artDetail_card}>
            <Image source={props.artImg} style={CardStyle.artDetail_img} />
            <View style={CardStyle.artDetail_title}>
                <Text style={TextStyle.detail_name} ellipsizeMode={'tail'} numberOfLines={1}>{props.artName}</Text>
                <Text style={TextStyle.detail_author} ellipsizeMode={'tail'} numberOfLines={1}>{props.artAuthor}</Text>
            </View>
        </View>
        <View>
            <Text style={TextStyle.detail_Intro} ellipsizeMode={'tail'} numberOfLines={5}>{props.artIntro}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
            <View style={CardStyle.artDetail_textArea}>
                <Text style={TextStyle.detailText_text} >{props.artCity}</Text>
                <Text style={TextStyle.detailText_title}>地點</Text>
            </View>
            <View style={CardStyle.artDetail_textArea}>
                <Text style={TextStyle.detailText_text}>{props.artYear}</Text>
                <Text style={TextStyle.detailText_title}>年份</Text>
            </View>
            <View style={CardStyle.artDetail_textArea}>
                <Text style={TextStyle.detailText_text}>{props.artRate}</Text>
                <Text style={TextStyle.detailText_title}>點閱數</Text>
            </View>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <Text style={TextStyle.detailText_text} >{props.artSize}</Text>
            <Text style={TextStyle.detailText_title}>尺寸</Text>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <Text style={TextStyle.detailText_text} >{props.artMaterial}</Text>
            <Text style={TextStyle.detailText_title}>材質</Text>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <Text style={TextStyle.detailText_text}>{props.artAddress}</Text>
            <Text style={TextStyle.detailText_title}>地點</Text>
        </View>
        <TouchableOpacity onPress={props.cardOnPress} style={CardStyle.artDetail_btn}>
            <Text style={TextStyle.detailText_btn}>返回</Text>
        </TouchableOpacity>
    </View>
)
