
import React, { useState } from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
// 載入Swiper圖片輪播套件
import Swiper from 'react-native-swiper';
// 載入自製元件
import { BannerCard } from './Card'

export const Banner = props => (
    <Swiper style={styles.wrapper} autoplay autoplayTimeout={5} >
        <BannerCard bannerImg={require('../image/banner/banner_1.jpg')} place={'2020桃園地景藝術節/聚會所'} name={'梭溫措'} />
        <BannerCard bannerImg={require('../image/banner/banner_2.jpg')} place={'中台灣影視基地/時間影格'} name={'章芙菱'} />
        <BannerCard bannerImg={require('../image/banner/banner_3.jpg')} place={'台江文化中文/二的三次方'} name={'李維造物'} />
        <BannerCard bannerImg={require('../image/banner/banner_4.jpg')} place={'花蓮靜浦部落太陽廣場/交織'} name={'撒部:噶照'} />
        <BannerCard bannerImg={require('../image/banner/banner_5.jpg')} place={'臺中醫院/美好泉源'} name={'賴亭玟、馬君輔'} />
        <BannerCard bannerImg={require('../image/banner/banner_6.jpg')} place={'臺南市美術館/\nShadow in Motion'} name={'別音設計'} />
        <BannerCard bannerImg={require('../image/banner/banner_7.jpg')} place={'臺南市美術館/\n輪飛碟舞 悠遊時光'} name={'大衛葛斯坦'} />
    </Swiper>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
