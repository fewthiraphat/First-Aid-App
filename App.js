import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet ,Button ,Alert , Image ,Dimensions,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Linking} from 'react-native'


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
let lang = 2;
let langButton = '';
const [greeting , setGreeting] = useState('Hello');
const [name , setName] = useState('Thiraphat');
const clickLang = () =>{
  if(lang % 2 ==0){
  setName('ธีรภัทร');
  setGreeting('สวัสดี');
  lang+=1;
  }
  else{
    setName('Thiraphat');
    setGreeting('Hello');
  }
};
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> Alert('image clicked')}>
    <Image source={require('./assets/hospital.jpg')} style={styles.hospital}/>
    </TouchableOpacity>
      <Text style={styles.paragraph}>
        {greeting} {name}!
      </Text>
      <View style={styles.buttonContainer1}>
        <Button title='เปลี่ยนภาษา' onPress={clickLang}/>
        </View>
      <View style={styles.buttonContainer2}>
        <Button title="โทร" onPress={()=>{Linking.openURL('tel:0633438782');}}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer1 :{
    marginLeft:30,
    marginRight:30
  },
  buttonContainer2:{
    marginTop:20,
    marginLeft:30,
    marginRight:30
  },
  hospital:{
    width:370 ,
    height:210,
  }
});
