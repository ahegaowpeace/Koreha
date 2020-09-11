import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export class ImageSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://www.google.co.jp/searchbyimage/upload'
    }
  }

  prePage() {
    this.myWebView.goBack()
  }

  postPage() {
    this.myWebView.goForward()
  }

  render() {
    return (
      <View>
        <WebView
          source={require("./Form.html")}
          style={styles.webFrame}
          ref={(ref) => this.myWebView = ref}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="<<"
            onPress={()=>this.prePage()}
          />
          <Text>      </Text>
          <Button
            title=">>"
            onPress={()=>this.postPage()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  webFrame: {
    width: 320,
    height: 500
  },
  buttonWrapper: {
    flex: .1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
