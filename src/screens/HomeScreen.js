import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

// 載入Banner輪播
import { Banner } from '../components/banner';
import { ArtCard } from '../components/Card'

export default function HomeScreen(props) {

  const [dataSource, setDataSource] = useState([])

  // 確認資料載入完成
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    const REQUEST_URL = 'http://210.69.40.35/api/api/PublicArt'
    fetch(REQUEST_URL)
      .then((response) => response.json())    // 解析資料
      .then((responseData) => {
        setDataSource(responseData)     // 將解析好的資料放到responseData內
      })
      .catch((err) => {   // 抓取錯誤訊息
        console.log('error 是 ', err)
      })
  }

  // 設定每個列表的樣式
  const renderDate = (cases) => {
    return (
      <ArtCard
        artImg={{ uri: cases.RepresentImage ? cases.RepresentImage : 'https://img.freepik.com/free-vector/hand-drawn-404-error-template_23-2147750146.jpg' }}
        artText={cases.Name}
        cardOnPress={() => showArtDetail(cases)}
      />
    )
  }

  // 將資料傳到內頁
  const showArtDetail = (cases) => {
    props.navigation.push('ArtPage', { passProps: cases })
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_bg}>
        <Image source={require('../image/logo-small.png')} style={styles.logo_icon} />
      </View>
      <View style={{ flex: 3 }}>
        <Banner />
      </View>
      <View style={{ width: '100%', marginTop: 16, marginLeft: 16, marginBottom: 26 }}>
        <Text style={styles.title_text}>作品一覽</Text>
        <View style={styles.cut_line}></View>
      </View>
      <View style={{ flex: 2, width: '100%', marginBottom: 10 }}>
        <FlatList
          data={dataSource}   // 數據來源
          renderItem={cases => renderDate(cases.item)}   // 數據解析
          keyExtractor={cases => cases.Id}
          horizontal={true}  // 以水平排列
          initialNumToRender={5}   // 指定一開始渲染的元件數量(不確定是否解決VirtualizedList的警告)
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
  },
  title_text: {
    fontSize: 24,
    color: '#B8860B',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 6
  },
  cut_line: {
    height: 2,
    backgroundColor: '#B8860B',
    width: '80%',
  },
  logo_bg: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 16,
    width: 120,
    height: 30,
  },
  logo_icon: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  }
});
