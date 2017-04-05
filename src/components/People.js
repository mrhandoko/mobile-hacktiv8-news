import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native'

class People extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      people: [],
      searchKeyword: ''
    }
  }

  componentDidMount () {
    const self = this
    fetch('https://hn.algolia.com/api/v1/search?query=redux').then((response) => {
      return response.json()
    }).then((data) => {
      self.setState({
        people: data.hits
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://wordpress.codepolitan.com/wp-content/uploads/2016/10/tim-hacktiv8-700x466.jpg'}} style={{width: '100%', height: '20%', resizeMode: 'cover', margin: 0}}>
          <View style={styles.header}>
            <Image source={{uri: 'https://hacktiv8.com/img/logo-hacktiv8_bordered--md5--f7ee5fc69819b5ef3849344c119f5e18.png'}}
              style={{width: 100, height: 100, resizeMode: 'contain', margin: 20}} />
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
        </Image>
        <View style={styles.content}>
          <TextInput style={{ height: 30, borderColor: 'gray', borderWidth: 1 }} />
          <ScrollView style={{ height: '50%', width: '100%' }}>
            {
              this.state.people.map((item, index) => {
                return (
                  <View key={index} style={{ height: 100, padding: 5, margin: 5, backgroundColor: '#F4B350', flexDirection: 'row'}}>
                    <Image style={{ width: 70, height: 70, resizeMode: 'contain' }} source={{ uri: 'https://hacktiv8.com/img/logo-hacktiv8_bordered--md5--f7ee5fc69819b5ef3849344c119f5e18.png' }} />
                    <View style={{ flexDirection: 'column', padding:10, width: '75%' }}>
                      <Text style={{ padding: 5, width: '100%' }}>{item.title}</Text>
                      <TouchableOpacity style={{ height: 20, backgroundColor: 'white', width: 260, borderWidth: 1, borderColor: 'red' }}><Text>Read More...</Text></TouchableOpacity>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonNavNews} onPress={() => this.props.navigator.pop()}><Text style={{ width: '100%', textAlign: 'center', marginTop: 3, color: 'white'}}>News</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonNavPeople}><Text style={{ width: '100%', textAlign: 'center', marginTop: 3, color: 'white'}}>People</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  header: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    height: '73%',
    width: '100%'
  },
  footer: {
    height: '7%',
    width: '100%',
    flexDirection: 'row'
  },
  buttonNavNews: {
    marginRight: 0.5,
    backgroundColor: '#4183D7',
    padding: '3%',
    width: '50%'
  },
  buttonNavPeople: {
    marginLeft: 0.5,
    backgroundColor: '#4183D7',
    padding: '3%',
    width: '50%'
  }
})

export default People
