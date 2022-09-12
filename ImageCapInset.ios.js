import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

class ImageCapInset extends Component {
  render() {
    return (
      <ImageBackground
        {...this.props}
        resizeMode={'stretch'}
      />
    );
  }
}

export default ImageCapInset;
