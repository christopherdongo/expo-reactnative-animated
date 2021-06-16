import React from 'react'
import Deck from './src/components/Deck';
import {View, ScrollView,Text} from 'react-native'
import {Card, Button, ListItem, Image} from 'react-native-elements'


const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class App extends React.Component{

  renderCard(item){
    return(
      <Card 
      key={item.id}
      >
        <Card.Title
        style={{ textAlign:'left'}}
        >{item.text}</Card.Title>
        <Image 
        source={{uri:item.uri}}
        />

        <Text
        style={{marginBottom:10}}
        >
          I can customize the card further
        </Text>
        <Button 
        icon={{name:'code',color:'#fff'}}
        backgroundColor= '#03a9f4'
        title="View Now"
        />

      </Card>
    )
  }

  render(){

    return(
      <View
      style={{paddingVertical:20}}
      >
      <ScrollView
      >
      <Deck
      data={DATA}
      renderCard={this.renderCard}
      />

      </ScrollView>
      </View>
     
    )
  }
}


export default App

