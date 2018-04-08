import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Modal,
    Dimensions,
    Image
} from 'react-native';

var Screenwidth = Dimensions.get('window').width;  
class PhotoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }
    pressAction() {

        this.setState({
            isShow: true
        });
    }
    shutDown() {
        this.setState({
            isShow: false
        });
    }
    render() {
      return ( <View>
            <Modal visible={this.state.isShow} animationType='slide' transparent={true}>
                <TouchableHighlight onPress={() => this.shutDown()} style={{ flex: 1, backgroundColor: 'rgb(0, 0, 0)',justifyContent:'center'}}>
                    <View style={{height:200,width:Screenwidth,backgroundColor:'white'}}> 
                        <Image source={{uri:'https://img.zcool.cn/community/0190b359772978a8012193a34ea33b.jpg@1280w_1l_2o_100sh.jpg'}} style = {{backgroundColor:'red',flex:1}}/>
                    </View>
                </TouchableHighlight>
            </Modal>
        </View>
      )
    }
}
export default class App extends Component {
    pressAction(){
        this.photoView.pressAction();
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>this.pressAction()}>
                    <View style={{ backgroundColor: 'red', width:100, height: 100 }}></View>
                </TouchableOpacity>
                <PhotoView ref ={(photoView)=>{
                    this.photoView = photoView;
                }}/>
            </View>
        );
    }
}
