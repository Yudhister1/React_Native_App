
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Modal,
  Dimensions,
  Linking
} from 'react-native';

import { HeaderBackButton } from 'react-navigation-stack';

import {memo}  from 'react';
const screenWidth = Dimensions.get("window").width;

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,

} from "react-native-chart-kit";

import {Button} from 'react-native-elements';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AnalyzeButton} from './Components/AnalyzeButton';
import {SampleButton} from './Components/SampleButton';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';


 class DrawingBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#1C1C1E',
      thickness: 8,
      message: '',
      photoPath: null,
      chosenSample: null,
      scrollEnabled: true,
      path: null,
      overlayVisibility: false,
    };
  }
  updateState = () => {
    console.log('updateState called');
    // let pathChange = JSON.stringify(this.canvas.getPaths());
    this.setState(previousState => {
      return {
        path: JSON.stringify(this.canvas.getPaths()),
      };
    });

  };

  onButtonPress = () => {
    this.setState({
      overlayVisibility: false,
    });
    this.props.navigation.navigate('JSON6') ;
  }

  render() {
    var RNFS = require('react-native-fs');
    var _ = require('lodash');
    // RNFS.downloadFile({
    //   fromUrl:
    //     'https://github.com/kapin-k/dna-demo-app/blob/master/dnademo/ios/background.PNG',
    //   toFile: `${RNFS.DocumentDirectoryPath}/background-board.png`,
    // }).promise.then(r => {
    // console.log('BACKGROUND SET');
    // });
    // var backgroundPath = RNFS.DocumentDirectoryPath + '/background-board.png'
    // console.log('Checking state.path ' + this.state.path)
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Modal
          animationType="slide"
          visible={this.state.overlayVisibility}
          onRequestClose={() => {
            console.log('Modal displaying samples have been closed!');
          }}>
          <TouchableWithoutFeedback
            onPressIn={() => this.setState({overlayVisibility: false})}>
            <View style={styles.mainModalView}>
              <View style={styles.centeredView}>
                {/* SAMPLE 1 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView1}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample1.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 1,
                        });
                      }}>SAMPLE 1</AwesomeButtonRick></View>
                    {/* <TouchableHighlight
                      style={{...styles.openButton}}
                      onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 1,
                        });
                      }}>
                      <Text style={styles.textStyle}>SAMPLE 1</Text>
                    </TouchableHighlight> */}
                  </View>
                </TouchableWithoutFeedback>

                {/* SAMPLE 2 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView2}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample2.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View {...this.props}>
                    <Button
              type="clear"
              icon={<Icon name="play-circle" size={60} color="#34C759" />}
              onPress={() => this.onButtonPress() }
            />
                     </View>
                  </View>
                </TouchableWithoutFeedback>

                {/* SAMPLE 3 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView3}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample3.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 3,
                        });
                      }}>SAMPLE 3</AwesomeButtonRick></View>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <View style={styles.centeredView}>
                {/* SAMPLE 4 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView4}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample4.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 4,
                        });
                      }}>SAMPLE 4</AwesomeButtonRick></View>
                  </View>
                </TouchableWithoutFeedback>

                {/* SAMPLE 5 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView5}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample5.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 5,
                        });
                      }}>SAMPLE 5</AwesomeButtonRick></View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <TouchableWithoutFeedback
                onPress={() => this.setState({overlayVisibility: false})}>
                <View
                  style={{
                    flex: 0.18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 15,
                  }}>
                  <Button
                    type="clear"
                    icon={
                      <Icon
                        name="chevron-triple-down"
                        size={60}
                        color="#606063"
                      />
                    }
                    onPress={() => {
                      this.setState({
                        overlayVisibility: false,
                      });
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <View style={{flex: 1, flexDirection: 'column'}}>
          {/* Place eraser component */}
          <SketchCanvas
            localSourceImage={{
              filename: 'background.png',
              directory:
                '/Users/invenstphonethree/Documents/dna-demo-app/dnademo/background.png',
              mode: 'ScaleToFill',
            }}
            text={[
              {
                text: '<----------- Time (milliseconds) ----------->',
                font: 'Zapfino',
                fontSize: 15,
                position: {x: 441, y: 880},
                anchor: {x: 0, y: 0},
                overlay: 'SketchOnText',
                coordinate: 'Absolute',
                alignment: 'Center',
                fontColor: 'grey',
              },
              {
                text: '2000',
                font: 'Zapfino',
                fontSize: 12,
                position: {x: 1300, y: 888},
                anchor: {x: 0, y: 0},
                overlay: 'SketchOnText',
                coordinate: 'Absolute',
                alignment: 'Center',
                fontColor: 'grey',
              },
              {
                text: '0',
                font: 'Zapfino',
                fontSize: 12,
                position: {x: 10, y: 888},
                anchor: {x: 0, y: 0},
                overlay: 'SketchOnText',
                coordinate: 'Absolute',
                alignment: 'Center',
                fontColor: 'grey',
              },
              // { text: '-2', font: 'Zapfino', fontSize: 12, position: { x: 10, y: 838 }, anchor: { x: 0, y: 0 }, overlay: 'SketchOnText', coordinate: 'Absolute', alignment: 'Center', fontColor: 'grey' },
              // { text: '2', font: 'Zapfino', fontSize: 12, position: { x: 10, y: 10 }, anchor: { x: 0, y: 0 }, overlay: 'SketchOnText', coordinate: 'Absolute', alignment: 'Center', fontColor: 'grey' },
            ]}
            ref={ref => (this.canvas = ref)}
            style={{flex: 1}}
            strokeColor={this.state.color}
            strokeWidth={this.state.thickness}
            onStrokeStart={(x, y) => {
              console.log('x: ', x, ', y: ', y);
              this.setState({message: 'Start'});
            }}
            onStrokeChanged={(x, y) => {
              console.log('x: ', x, ', y: ', y);
              this.setState({message: 'Changed'});
            }}
            onStrokeEnd={() => {
              this.setState({message: 'End'});
              // this.setState({path: JSON.stringify(this.canvas.getPaths())});
              // this.props.onChangeinPath(JSON.stringify(this.canvas.getPaths()));
            }}
            onPathsChange={pathsCount => {
              // console.log('pathsCount', pathsCount);
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            {/* ~~~~~~~~~~~~~~~<SampleButton />~~~~~~~~~~~~~~~ */}
            <Button
              type="clear"
              icon={<Icon name="book" size={60} color="#007AFF" />}
              onPress={() => {
                this.setState({
                  overlayVisibility: true,
                });
              }}
            />

            {/* ~~~~~~~~~~~~~~~<AnalyzeButton />~~~~~~~~~~~~~~~ */}
            <Button
              type="clear"
              icon={<Icon name="play-circle" size={60} color="#34C759" />}
              onPress={() => this.props.navigation.navigate('JSONOuput') }
            

            />

            
          </View>
        </View>
      </View>
    );
  }
}





class Tabs extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      color: '#1C1C1E',
      thickness: 8,
      message: '',
      photoPath: null,
      chosenSample: null,
      scrollEnabled: true,
      path: null,
      overlayVisibility: true,
    };
  
  }
  updateState = () => {
    console.log('updateState called');
    // let pathChange = JSON.stringify(this.canvas.getPaths());
    this.setState(previousState => {
      return {
        path: JSON.stringify(this.canvas.getPaths()),
      };
    });
  };

onButtonPress = () => {
    this.setState({
      overlayVisibility: false,
    });
    this.props.navigation.navigate('JSON') ;
  }


onButtonPress1 = () => {


   this.setState({
      overlayVisibility: false,
    });
      }

render(){ 
  var RNFS = require('react-native-fs');
    var _ = require('lodash');
    return (
  <View>

  <Button title="Press again to see output"
              type="clear"
              icon={<Icon name="book" size={60} color="#007AFF" />}
              onPress={() => {
                this.setState({
                  overlayVisibility: true,
                });
              }}
            />
  
   <Modal
          animationType="slide"
          visible={this.state.overlayVisibility}
          onRequestClose={() => {
            console.log('Modal displaying samples have been closed!');
          }}>
          <TouchableWithoutFeedback
            onPressIn={() => this.setState({overlayVisibility: false})}>

            <View style={styles.mainModalView}>
              <View style={styles.centeredView}>
                {/* SAMPLE 1 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView1}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample1.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => this.props.navigation.navigate('JSONOuput')
                        
                      }>SAMPLE 1</AwesomeButtonRick></View>
                    
                  </View>
                </TouchableWithoutFeedback>

                {/* SAMPLE 2 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>

                  <View style={styles.modalView2}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample2.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View {...this.props}>
                    <Button
              type="clear"
              icon={<Icon name="play-circle" size={60} color="#34C759" />}
              onPress={() => this.onButtonPress() }
            />
                     </View>
                  </View>
                </TouchableWithoutFeedback>

                {/* SAMPLE 3 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView3}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample3.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 3,
                        });
                      }}>SAMPLE 3</AwesomeButtonRick></View>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <View style={styles.centeredView}>
                {/* SAMPLE 4 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView4}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample4.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 4,
                        });
                      }}>SAMPLE 4</AwesomeButtonRick></View>
                  </View>
                </TouchableWithoutFeedback>

                {/* SAMPLE 5 */}
                <TouchableWithoutFeedback
                  onPressIn={() => this.setState({overlayVisibility: false})}>
                  <View style={styles.modalView5}>
                    <Image
                      source={require('./Components/Sample_Screens/Sample5.png')}
                      style={{width: 370, height: 330}}
                    />
                    <View style={{marginTop: 10}}>
                     <AwesomeButtonRick type="secondary" height={30} borderRadius={30} padding={10} paddingTop={5} elevation={3} onPress={() => {
                        this.setState({
                          overlayVisibility: false,
                          chosenSample: 5,
                        });
                      }}>SAMPLE 5</AwesomeButtonRick></View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
               </View>
          </TouchableWithoutFeedback>
        </Modal>

</View>

  );     

}  


}

const b = new Tabs();

const ProfileScreen = React.memo(function ProfileScreen({ navigation }) {



var data = [{'Read': [-0.96, -1.89, -1.84,
-1.82, -1.8, -1.8, -1.74, -1.81, -1.89, -1.77, -1.56, -1.81, -1.69,
-1.76, -1.94, -1.66, -1.7, -1.9, -1.45, -1.23, -1.11, -1.03, -1.28,
-0.95, -1.21, -1.09, -1.15, -1.16, -0.91, -0.72, -0.52, -0.72, -0.51,
0.29, 0.28, 0.45, 0.25, 0.56, 0.45, 0.45, 1.01, 1.3, 1.04, 1.54, 1.37,
1.22, 1.21, 1.16, 1.02, 1.3, 1.01, 0.2, 0.37, 0.5, 0.46, 0.38, 0.33,
0.29, 0.18, -0.15, -0.32, -0.33, -0.2, -0.17, -0.25, -0.35, -0.16,
-0.25, 0.01, 0.36, -0.03, 0.01, -0.13, 0.05, -0.03, 1.02, 0.96, 1.14,
1.08, 1.24, 0.8, 1.08, -0.17, -0.12, -0.21, 0.03, 0.96, 0.78, 0.9,
1.04, 0.97, 0.94, 1.41, 0.89, 1.04, 0.77, 0.86, 1.0, 0.72, 0.92, 0.8,
0.69, 0.93, 0.89, 0.86, 0.77, 0.65, 0.7, 0.69, 1.06, 0.28, -0.28,
-2

-0.33, -0.4, -0.76, -0.57, -0.56, -1.11, -1.03, -1.16, -1.25, -0.91,
-1.29, -0.64, -0.16, -0.07, -0.04, -0.2, -0.21, -0.17, -0.28, 0.05,
-0.49, -0.13, -0.36, -0.0, -0.2, -0.04, 0.32, 0.85, 0.97, 0.77, 0.81,
0.86, 0.81, 1.17, 0.81, 1.12, 0.92, 1.1, 0.82, 0.82, 0.92, -0.45,
-0.97, -1.01, -0.93, -0.99, -1.11, -1.07, -1.03, -0.77, -0.28, 0.24,
0.25, 0.3, 0.28, 0.36, 0.44, 0.42, 0.6, 1.3, 1.36, 1.38, 1.41, 1.59,
1.54, 1.4, 1.52, 1.42, 1.52, 1.37, 1.57, 1.54, 1.25, 1.5, 0.94, 0.5,
0.18, 0.37, 0.34, 0.11, 0.38, 0.49, 0.13, 0.21, 0.18, 0.26, 0.22,
0.14, 0.28, 0.2, -0.03, 0.04, 0.7, 1.12, 0.9, 0.46, 0.9, 0.93, 1.0,
1.41, 0.69, 0.18, -0.0, 0.04, -0.17, 0.05, 0.08, 0.16, -0.16, 0.04,
0.16, 0.24, 1.0, 1.02, 1.06, 1.25, 0.68, 0.85, 0.57, 0.82, 0.58, 0.36,
0.36, 0.44, 0.36, 0.28, 0.44, 0.38, -0.01, 0.01, 0.08, 0.09, -0.15,
0.09, -0.23, 0.04, 0.09, 0.13, 0.11, -0.05, 0.11, 0.16, -0.16, -0.03,
0.03, 0.2, 0.08, 0.03, -0.07, 0.09, -0.08, 0.09, -0.15, 0.04, -0.08,
0.04, 0.08, 0.62, 0.65, 0.5, 0.48, 0.68, 0.77, 0.76, 0.73, 0.69, 0.57,
0.81, 0.49, 0.66, 0.57, 0.74, 0.76, 0.84, 0.61, 0.36, 0.21, 0.26,
-2,
0.52, 0.36, 0.54, 1.29, 1.06, 1.33, 0.72, -0.21, -0.25, -0.31, -0.37,
-0.15, -0.25, -0.13, 1.69, 1.81, 2.07, 1.83, 1.83, 1.9, 1.63, 1.04,
0.46, -0.76, -1.0, -1.56, -1.7, -0.76, -0.75, -0.97, -0.84, -0.65,
-0.77, -0.61, 0.22, 0.32, 0.52, -0.72, -1.31, -1.25, -1.07, -0.87,
-0.85, -0.76, -0.88, -0.72, -0.28, 0.98, 1.09, 0.98, 1.02, 1.04, 1.09,
0.97, 0.89, 0.61, 0.36, 0.44, 0.81, 0.72, 0.66, 0.86, 0.77, 0.24,
-0.63, -0.55, -0.6, -0.57, -0.68, -0.72, -0.79, -0.63, -0.6, -0.63,
-0.81, -0.61, -0.45, -0.56, -0.83, -0.51, -0.44, -0.52, -0.64, -0.72,
-0.49, -0.41, -0.19, 0.38, 0.29, -0.05, -0.27, -0.33, -0.41, -0.15,
-0.48, 0.93, 1.21, 1.52, 1.32, 1.33, 0.76, 0.57, 0.98, 0.26, -0.55,
-0.47, -0.55, -0.81, -0.67, -0.93, -0.83, -0.93, -0.57, -0.85, -0.67,
-0.92, -0.64, -0.77, -0.57, -0.45, -0.92, -0.68, -0.75, -0.75, -0.87,
-0.48, -0.6, -0.59, 0.25, 0.34, 0.3, -0.0, -0.12, -0.31, -0.32, -0.17, 0.9, 0.28, 0.46, 0.52, 0.61,
1.54, 1.87, 1.32, 0.21, 0.44, 0.26, 0.45, 0.56, 0.37, 0.2, 0.38, 0.44,
0.16, 0.25, 0.44, 0.34, 0.21, -0.63, -0.64, -0.52, -0.71, -0.35,
-0.27, -0.17, -0.24, -0.4, -0.37, -0.36, -0.29, -0.44, -0.16, 0.3,
0.7, 0.68, 0.25, 0.88, 0.66, 0.62, 0.3, 0.29, -0.29, -0.23, -0.27,
-0.23, -0.35, -0.11, 0.08, 0.73, 0.54, 0.88, 0.62, 0.74, 0.41, -0.68,
-0.72, -0.72, -0.64, -0.73, -0.83, -0.64, -0.63, -0.55], 'Name':
'49adf045-6329-48f2-aa2f-510d043700d7', 'Confidence': 0.75, 'Time':
1.1e-05} ];


var Confidence = "Confidence : ".concat(data[0].Confidence) ;
var Time = "Time(in sec) : ".concat(data[0].Time) ;
var Link = "https://wikipedia.com/".concat(data[0].Name);


var arr = data[0].Read;

var new_arr = arr.filter(function(x) {
    return x >= -2 && x <= 2;
});

var ar4 = [

-2, -2, -2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
 -2, -2, -2, -2, -2, -2, -2, -2, -2,
-2, -2, -2, -2, -2, -2,-2, -2, -2, -2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2, -2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
-2, -2,-2, -2, -2, -2, -2, -2, -2, -2, -2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
-2, -2, -2, -2, -2,-2, -2, -2, -2, -2,-2, -2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2, -2,
-2,


-0.33, -0.4, -0.76, -0.57, -0.56, -1.11, -1.03, -1.16, -1.25, -0.91,
-1.29, -0.64, -0.16, -0.07, -0.04, -0.2, -0.21, -0.17, -0.28, 0.05,
-0.49, -0.13, -0.36, -0.0, -0.2, -0.04, 0.32, 0.85, 0.97, 0.77, 0.81,


-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
 -2,

-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,
-2, -2, -2, -2, -2, -2, -2, -2, -2, -2,-2,

  
-2, -2

];





var ar2 = [-2, -2];
var ar3 = new_arr.concat(ar2);

var res3 = ar3.filter(x => !ar4.includes(x))

const res = ar3.filter(x => ar4.includes(x)).concat(ar4.filter(x=> ar3.includes(x)));



const res2 = res3.splice(40, 0, 0, -0.33, -0.4, -0.76, -0.57, -0.56, -1.11, -1.03, -1.16, -1.25, -0.91,
-1.29, -0.64, -0.16, -0.07, -0.04, -0.2, -0.21, -0.17, -0.28, 0.05,
-0.49, -0.13, -0.36, -0.0, -0.2, -0.04, 0.32, 0.85, 0.97, 0.77, 0.81,
0.86, 0.81, 1.17, 0.81, 1.12, 0.92, 1.1, 0.82, 0.82, 0.92, -0.45,
-0.97, -1.01, -0.93, -0.99, -1.11, -1.07, -1.03, -0.77, -0.28, 0.24,
0.25, 0.3, 0.28, 0.36, 0.44, 0.42, 0.6, 1.3, 1.36, 1.38, 1.41, 1.59,
1.54, 1.4, 1.52, 1.42, 1.52, 1.37, 1.57, 1.54, 1.25, 1.5, 0.94, 0.5,
0.18, 0.37, 0.34, 0.11, 0.38, 0.49, 0.13, 0.21, 0.18, 0.26, 0.22,
0.14, 0.28, 0.2, -0.03, 0.04, 0.7, 1.12, 0.9, 0.46, 0.9, 0.93, 1.0,
1.41, 0.69, 0.18, -0.0, 0.04, -0.17, 0.05, 0.08, 0.16, -0.16, 0.04,
0.16, 0.24, 1.0, 1.02, 1.06, 1.25, 0.68, 0.85, 0.57, 0.82, 0.58, 0.36,
0.36, 0.44, 0.36, 0.28, 0.44, 0.38, -0.01, 0.01, 0.08, 0.09, -0.15,
0.09, -0.23, 0.04, 0.09, 0.13, 0.11, -0.05, 0.11, 0.16, -0.16, -0.03,
0.03, 0.2, 0.08, 0.03, -0.07, 0.09, -0.08, 0.09, -0.15, 0.04, -0.08,
0.04, 0.08, 0.62, 0.65, 0.5, 0.48, 0.68, 0.77, 0.76, 0.73, 0.69, 0.57,
0.81, 0.49, 0.66, 0.57, 0.74, 0.76, 0.84, 0.61, 0.36, 0.21, 0.26, 0);


  return (
    //<ScrollView>
      <View style={{zIndex:10}}>
  <Text style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 4,
                zIndex:1
              }}>Disease_Name_ : {data[0].Name}</Text>

<View style={{flexDirection: 'row'}}>
  <Text style={{
                textAlign: 'left',
                fontSize: 18,
                padding: 16,
                marginTop: 4,
                zIndex:1,
                paddingLeft: 70 
              }}>{Confidence}</Text>


    <Text style={{
                textAlign: 'right',
                fontSize: 18,
                padding: 16,
                marginTop: 4,
                zIndex:1,
                paddingLeft: 750 ,
                paddingRight: 40 
              }}>{Time}</Text>
</View>
  <LineChart
    data={{
      labels: ["0s", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0.2s", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0.4s", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0.6s", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "0.8s", "", "", "", "", "", "", "", "", "","","","","","","","","","", "1"],
    datasets: [
        {
          data: ar3,
          strokeWidth: 2
          
        },
        {
          data: ar4,
          color: () => '#C7EBFF',
          strokeWidth: 7
          
        }
      ]
    }}


    width={Dimensions.get("window").width} // from react-native
    height={520}
    yAxisLabel=""
    xAxisSuffix="s"
    withInnerLines={false}
withOuterLines={false}

    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
    fromZero: false,
      backgroundColor: "#FFFFFF",
      backgroundGradientFrom: "#FFFFFF",
      backgroundGradientTo: "#000000",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
        strokeWidth: 1400

      },
      tooltip: {
    visible: true,
    labelFontSize: 10
  },
      propsForDots: {
        r: "",
        strokeWidth: "",
        stroke: "#fff000"
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

  


  

<View style={{marginTop: -34}}>

      <Button color="#000000"
        title="LearnMore"
        onPress={() => Linking.openURL(Link) }
      />


    </View>
    </View>
 );     

}

);

const ProfileScreen2 = React.memo(function ProfileScreen2({ navigation }) {
  

var data = [{'Read': [-0.03, -0.37, -0.44, -0.29, -0.4, -1.04, -1.6,
-1.58, -1.61, -1.61, -1.81, -1.58, -1.92, -1.48, -1.56, -1.78, -1.46,
-1.45, -1.8, -1.72, -1.65, -1.29, -1.57, -1.53, -1.24, -0.81, -0.92,
-0.77, -0.59, -0.96, -0.92, -0.79, -1.29, -1.28, -1.2, -1.38, -1.31,
-1.25, -1.42, -1.5, -1.8, -1.86, -1.81, -1.78, -1.92, -1.78, -1.61,
-1.88, -1.69, -0.95, -0.64, -0.64, -0.73, -0.69, -0.68, -0.89, -0.99,
-0.72, -0.73, -0.77, -0.85, -1.05, -0.85, -0.57, -0.64, -0.83, -0.79,
-0.87, -0.63, -0.83, -0.59, -0.57, -0.73, -0.81, -0.91, -0.64, -0.69,
-0.71, -0.05, 0.72, 0.5, 0.56, 0.77, 0.56, 0.61, 0.58, 0.66, 0.56,
0.52, 0.58, 0.68, -0.27, -0.69, -0.99, -0.91, -0.92, -0.87, -0.87,
-1.16, -1.05, -1.19, -1.2, -1.49, -1.12, -1.04, -0.99, -1.53, -1.49,
-1.94, -1.76, -1.8, -1.96, -1.66, -1.74, -1.89, -2.05, -1.76, -1.72,
-2.08, -1.65, -1.94, -1.74, -1.86, -1.81, 1.04, 0.97, 0.82, -0.93,
-1.05, 0.92, -0.25, -1.13, -1.08, -0.81, -0.87, -1.21, -0.93, -1.46,
0.5, 2.1, 1.79, 2.02, 2.18, 1.99, 2.02, 2.09, 1.87, 1.94, 1.08, 0.72,
0.77, 0.28, -0.16, -0.33, -0.16, -0.31, 0.16, 0.66, 0.53, 0.52, 0.54,
0.52, 0.32, 0.41, 0.41, 0.42, 0.44, 0.25, 0.32, -0.32, -0.2, -0.25,
-0.11, -0.15, -0.36, -0.0, -0.01, -0.11, -0.2, -0.39, -0.31, -0.49,
0.58, 0.58, 0.5, 0.53, 0.5, 0.46, 0.42, -0.71, -1.16, -1.11, -0.77,
0.22, 0.97, 0.68, 0.8, 0.7, 0.72, 0.8, 0.64, 0.68, 0.66, 0.74, 0.6,
0.92, 0.82, 0.7, 0.69, 0.88, 0.56, 0.68, 0.45, -0.01, -0.13, -0.08,
-0.95, -1.62, -1.61, -1.46, -1.64, -1.66, -1.41, -1.53, -1.19, 1.85,
1.98, 2.15, 1.55, 0.7, 0.6, 0.72, 0.9, 0.98, 1.46, 0.92, 0.73, 1.06,
0.89, 1.0, 0.92, 0.84, 0.9, 0.78, 0.84, 1.77, 1.75, 1.04, 0.76, 1.04,
0.8, 0.81, 0.76, 1.33, 2.29, 0.82, 0.61, 1.04, 0.73, 0.8, 0.61, 0.64,
0.77, 0.74, 1.02, 0.92, 0.82, 0.93, 0.97, 0.74, 0.86, 0.76, 0.84,
0.97, 0.76, 0.9, 0.76, 0.9, 0.8, 0.74, 0.93, 1.46, 1.09, 0.98, 0.88,
0.86, 0.84, 0.72, 0.42, 0.37, 0.32, 0.61, -0.36, -1.28, -1.21, -1.25,
-1.15, -1.28, -1.0, -1.05, -1.24, -1.12, -1.11, -0.89, -1.12, -1.32,
-1.03, -1.08, -1.32, -1.34, -1.01, -0.77, -1.04, -0.65, -0.71, -0.52,
-0.49, -0.64, -0.8, -0.33, -0.69, -0.64, 0.25, 0.94, 1.09, 0.77, 1.02,
0.86, 1.08, 1.1, 0.9, 0.94, 0.5, 0.29, 0.33, 0.29, 0.01, -0.25, -0.37,
-0.2, -0.43, -0.29, 0.08, 1.02, 0.88, 0.81, -0.64, -0.31, -0.44,
-0.53, -0.63, -0.6, -1.08, -1.08, -1.04, -1.17, -1.25, -1.12, -1.12,
-1.29, -1.36, -1.34, -1.41, -1.56, -1.78, -1.65, -1.65, -2.01, -1.76,
-1.82, -1.81, -1.78, -1.38, -1.52, -1.37, -1.33, -1.58, -1.42, -1.37,
-1.4, -1.36, -1.29, -1.28, -2.04, -1.42, -1.45, -1.27, -1.34, -1.33,
-1.37, -1.17, -1.25, -1.25, -1.15, -1.31, -1.17, -1.4, -1.28, -1.28,
-1.27, -1.42, -1.74, -1.69, -1.62, -1.68, -1.62, -1.64, -1.56, -1.61,
-1.38, -1.45, -1.37, -1.24, -1.54, -1.64, -1.58, -1.68, -1.86, -1.54,
-1.58, -1.73, -1.61, -1.07, -0.77, -0.81, -0.75, -0.73, -0.61, -0.77,
-0.59, -0.63, 0.58, 0.38, 0.45, 0.22, 0.33, 0.14, 0.25, 0.14, -0.8,
-1.53, -1.46, -1.48, -1.4, -1.24, -0.83, -0.85, -0.68, -0.77, -0.71,
-0.89, -0.28, -0.39, 0.11, 1.02, 0.72, 0.86, 1.05, 1.21, 1.13, 1.13,
0.16, -0.61, -0.44, -0.41, 0.58, 1.04, 1.09, 0.74, 1.04, 0.07, -0.11,
-0.13, 0.17, 1.57, 2.33, 1.89, 1.83, 1.97, 1.93, 1.86, 0.96, 0.8,
1.17, 0.89, 1.01, 1.13, 1.13, 0.88, 0.88, 0.54, 0.77, 0.56, 0.73,
0.52, 0.22, -0.76, -0.71, -0.83, -0.56, -0.53, -0.51, -0.88, -0.81,
-0.67, -0.67, -0.87, -0.76, -1.13, -0.93, -0.71, -0.92, -1.85, -1.81,
-1.81, -0.85, -0.75, -0.64, -0.68, -0.72, -0.56, -0.69, -0.95, -0.72,
-0.41, 0.05, 0.61, 0.24, 0.21, 0.22, 0.38, 0.52, 0.09, -1.15, -0.88,
-1.03, -1.11, -0.73, -0.64, -0.72, -0.8, -0.75, -0.73, -0.45, -0.15,
0.81, 0.73, 0.58, 0.58, 0.78, 0.44, -0.43, -0.43, -0.48, -0.57, -0.64,
-0.49, -0.45, -0.69, -0.52, -0.35, 0.26, 0.37, 0.34, 0.24, 0.97, 1.01,
0.77, 0.04, -0.09, -0.16, -0.04, 0.88, 1.17, 0.92, 0.9, 0.82, 0.9,
0.7, 0.97, 0.96, 0.4, 0.29, 0.16, -0.08, -0.28, -0.03, -0.21, -0.33,
-0.55, -0.16, -0.48, -0.4, -0.11, 0.18, 1.24, 1.26, 1.25, 1.26, 1.12,
0.97, 1.13, 1.09, 0.82, 0.69, 0.7, 1.28, 0.96, 0.73, 0.78, 0.89, 1.18,
1.13, 1.32, 1.26, 1.13, 0.92, 0.86, 0.29, 0.2, 0.25, 0.11, 0.58, 0.72,
0.76, 2.34, 2.31, 2.34, 2.31, 2.31, 2.34, 2.38, 2.3, 2.14, 1.25, 0.93,
1.05, 0.97, 0.97, 1.91, 1.49, 0.7, 0.57, 0.57, 0.58, 0.44, 0.73, 0.61,
0.37, 0.26, -0.12, -0.08, -0.28, -0.11, 0.04, 0.32, 0.2, 0.34, 0.45,
0.53, 0.22, 0.11, 0.29, 0.17, 0.2, 1.32, 1.44, 1.28, 1.78, 1.49, 1.38,
1.54, 1.34, 1.32, 0.56, 0.52, 0.49, 0.44, 0.45, 0.5, 0.36, 0.41, 0.58,
0.53, 0.3, 0.48, 0.5, 0.46, -0.11, -0.03, 0.21, -0.04, 0.08, 0.3, 0.6,
1.57, 1.7, 1.49, 1.48, 1.3, 1.37, 1.4, 1.42, 1.42, 1.48, 1.46, 1.18,
1.52, 1.1, 1.29, 1.38, 0.97, 0.04, 0.05, -0.13, -0.08, -0.17, 0.05,
0.16, 0.28, 0.34, 0.33, 0.41, 0.41, 0.54, 0.52, -0.31, -0.8, -1.08,
-0.89, -0.88, -0.8, -0.75, -0.76, -0.68, -0.65, -0.77, -0.68, 0.12,
0.17, -0.04, 0.2, -0.15, -0.2, -0.24, -0.07, -0.16, -0.16, -0.05,
-0.13, -0.13, -0.0, -0.24, 0.01, -0.12, -0.16, -0.05, -0.28, -0.28,
0.03, 0.69, 0.88, 0.61, 0.7, 0.65, 0.84, 0.97, 0.86, 0.88, 0.78, 0.76,
0.96, 0.73, 0.8, 0.82, 0.97, 0.89, 0.77, 0.86, 0.77, 0.9, 0.76, 0.78,
0.54, 0.61, -0.05, 0.12, 0.05, 0.09, 0.13, -0.01, 0.04, 0.38, 1.44,
1.61, 1.22, 1.4, 1.0, 1.02, 1.21, 1.36, 1.41, 1.17, 1.08, -1.13,
-1.73, -1.69, -1.38, -1.49, -1.6, 0.21, 0.3, 0.42, 0.4, 0.34, 0.32,
0.08, 0.14, 0.84, 1.26, 1.08, 1.22, 1.34, 1.29, 1.25, 1.25, 0.57,
0.52, 0.6, 0.44, 0.48, 0.54, 0.44, 0.24, 0.21, 0.32, -0.43, -0.09,
-0.49, -0.57, -1.04, -1.17, -1.15, -1.19, -1.7, -2.0, -1.97, -1.94,
-1.74, -1.88, -1.94, -1.82, -2.02, -1.96, -1.13, -1.05, -0.99, -0.95,
-0.87, -0.92, -0.75, -1.12, -1.54, -1.54, -1.44, -1.46, -1.17, -1.28,
-1.41, -1.17, -1.57, -1.58, -2.57, -2.41, -2.61, -2.29, -2.61, -2.83,
-2.82, -1.98, -2.25, -1.07, -1.36, -1.08, -1.03, -0.88, -1.03, -0.85,
-0.92, -0.75, -0.73, 0.68, 0.93, 0.86, 1.21, 0.89, 1.0, 1.22, 0.92,
1.24, 0.58, 0.34, 0.41, 0.25, 0.4, 0.21, -0.04, 0.03, -0.25, -0.12,
0.01, -0.23, 0.03, 0.74, 1.02, 1.16, 0.54, 0.73, 0.62, 0.58, 0.56,
-0.96, -1.4, -1.53, -1.58, -1.53, -1.7, -1.52, -1.2, -1.07, -0.92,
-1.09, -0.99, -0.91, -0.99, -1.21, -1.01, -0.99, -0.97, -1.09, -0.93,
-1.13, -0.93, -0.92, -0.8, -0.92, 0.32, 0.45, 0.68, 0.14, 0.3, 0.3,
0.22, 0.11, -0.33, -0.44, -0.49, -0.47, -0.47, -0.39, -0.35, -0.48,
-0.4, -0.48, -0.45, -0.35, -0.05, 0.64, 0.36, 0.18, 0.05, -0.71,
-0.52, -0.57, -0.8, -0.47, 0.09, 0.13, -0.09, 0.28, 0.46, 0.52, 0.61,
1.54, 1.87, 1.32, 0.21, 0.44, 0.26, 0.45, 0.56, 0.37, 0.2, 0.38, 0.44,
0.16, 0.25, 0.44, 0.34, 0.21, -0.63, -0.64, -0.52, -0.71, -0.35,
-0.27, -0.17, -0.24, -0.4, -0.37, -0.36, -0.29, -0.44, -0.16, 0.3,
0.7, 0.68, 0.25, 0.88, 0.66, 0.62, 0.3, 0.29, -0.29, -0.23, -0.27,
-0.23, -0.35, -0.11, 0.08, 0.73, 0.54, 0.88, 0.62, 0.74, 0.41, -0.68,
-0.72, -0.72, -0.64, -0.73, -0.83, -0.64, -0.63, -0.55], 'Name':
'49adf045-6329-48f2-aa2f-510d043700d7', 'Confidence': 0.75, 'Time':
1.1e-05} ];


var Confidence = "Confidence : ".concat(data[0].Confidence) ;
var Time = "Time(in sec) : ".concat(data[0].Time) ;
var Link = "https://wikipedia.com/".concat(data[0].Name);

  return (

       <View style={{marginTop: -8,zIndex:10}}>
  <Text style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
                zIndex:1
              }}>Disease_Name_2 : {data[0].Name}</Text>


<View style={{flexDirection: 'row'}}>
  <Text style={{
                textAlign: 'left',
                fontSize: 18,
                padding: 16,
                marginTop: 0,
                zIndex:1,
                paddingLeft: 70 
              }}>{Confidence}</Text>


    <Text style={{
                textAlign: 'right',
                fontSize: 18,
                padding: 16,
                marginTop: 0,
                zIndex:1,
                paddingLeft: 750 ,
                paddingRight: 40 
              }}>{Time}</Text>
</View>


  <LineChart
    data={{
      labels: ["0.2s", "0.4s", "0.6s", "0.8s", "1s"],
      datasets: [
        {
          data: data[0].Read
        }
      ]
    }}


    width={Dimensions.get("window").width} // from react-native
    height={520}
    yAxisLabel=""
    xAxisSuffix="s"
withInnerLines={false}
withOuterLines={false}

    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
    fromZero: false,
      backgroundColor: "#FFFFFF",
      backgroundGradientFrom: "#FFFFFF",
      backgroundGradientTo: "#000000",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      tooltip: {
    visible: true,
    labelFontSize: 10
  },
      propsForDots: {
        r: "",
        strokeWidth: "2",
        stroke: "#000000"
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  

<View style={{marginTop: -37}}>
      <Button color="#000000"
        title="LearnMore"
        onPress={() => Linking.openURL(Link) }
      />

    </View>
    </View>

 );     

}
);


const ProfileScreen3 = React.memo(function ProfileScreen3({ navigation }) {


  var data = [{'Read': [1.45, 1.25, 1.24, 1.45, 1.25, 1.09, 0.81, 0.84,
0.93, 0.96, 1.12, 0.6, 0.86, -0.17, -1.45, -1.38, -1.21, -1.27, -1.05,
-1.38, -1.66, 0.07, 0.03, 0.07, 0.18, 0.14, 0.25, 0.57, 0.11, 0.2,
0.2, 0.22, 0.26, 0.03, 0.3, 0.18, 0.21, 0.05, 0.36, 0.46, 0.68, 0.57,
0.72, 0.37, 0.49, 0.33, -0.24, -0.19, -0.28, -0.12, -0.37, -0.32,
0.21, 0.24, 0.34, 0.4, 0.36, 0.25, -0.91, -0.64, -1.04, -1.04, -0.87,
-0.65, -0.69, -0.12, 0.18, 0.17, 0.29, 0.34, 0.61, 0.44, 0.3, 0.44,
0.82, 0.46, 0.26, 0.26, 0.26, 0.33, 0.03, 0.44, 0.5, 0.44, 0.48, 0.41,
0.41, 0.36, 0.4, 0.44, 0.32, 0.54, 0.37, 0.25, 0.32, 0.41, 0.28, 0.18,
0.45, 0.34, 0.61, 0.42, 0.21, 0.33, 0.37, 0.46, 0.56, 0.3, 0.41, 0.38,
0.4, 0.24, 0.21, 0.34, 0.4, 0.18, 0.32, 0.11, 0.29, 0.08, -1.2, -1.0,
-1.5, -1.45, -1.17, -1.45, -1.4, -1.07, -0.49, -0.79, -0.68, 0.17,
0.29, 0.5, 0.44, 0.41, 0.4, 0.24, 0.3, 0.46, 0.36, 0.32, 0.4, 0.37,
0.42, 0.57, 0.36, 0.48, 0.4, 0.37, 0.28, -0.45, -0.57, -0.23, 0.8,
0.76, 1.06, 1.13, 1.17, 0.78, 0.76, 0.7, 0.6, 0.78, 0.54, 0.81, 0.77,
0.65, 0.53, 0.58, 0.65, 0.42, 0.09, 0.17, 0.18, -0.01, 0.07, 0.25,
0.07, 0.05, -0.43, -1.28, -0.91, -1.12, 0.96, 0.58, 0.98, 0.73, 0.9,
0.98, 1.04, 1.22, 1.02, 0.78, 0.74, 0.62, 0.7, -0.47, -1.58, -1.42,
-1.54, -1.7, -1.52, -0.87, -1.11, -0.95, -0.07, 1.21, 1.3, 1.13, 1.46,
1.46, 1.18, 1.4, 1.37, 1.36, 1.37, 1.1, 1.26, 0.94, 0.42, 0.18, 0.36,
0.28, 0.3, 0.4, 0.12, 0.3, 0.17, 0.05, 0.08, 0.14, 0.22, 0.33, 0.03,
-0.47, -1.38, -1.42, -1.28, -1.49, -1.36, -1.49, -1.37, -1.38, -1.28,
-1.08, -1.13, -1.19, -1.23, -0.65, -0.63, -0.51, -0.52, -0.59, -0.48,
0.07, 0.74, 0.4, 0.56, 0.61, 0.22, -0.8, -1.08, -1.36, -1.33, -1.15,
-0.39, 1.08, 0.74, 0.69, 0.84, 0.7, 1.13, 0.89, 1.04, -0.33, -0.53,
-0.47, -0.65, -0.79, 0.16, 0.66, 0.82, 1.06, 0.2, -0.68, -0.72, -0.92,
-0.49, -0.69, -0.84, -1.04, -1.09, -1.09, -0.99, -1.31, -0.97, -0.79,
0.78, 0.89, 1.18, 1.13, 1.32, 1.26, 1.13, 0.92, 0.86, 0.29, 0.2, 0.25,
0.11, 0.58, 0.72, 0.76, 2.34, 2.31, 2.34, 2.31, 2.31, 2.34, 2.38, 2.3,
2.14, 1.25, 0.93, 1.05, 0.97, 0.97, 1.91, 1.49, 0.7, 0.57, 0.57, 0.58,
-0.25, -0.12, 0.01, -0.23, 0.03, 0.74, 1.02, 1.16, 0.54, 0.73, 0.62,
0.58, 0.56, 0.57, 0.6, 0.46, 0.5, 0.73, 0.04, -0.39, -0.51, -0.53,
-0.63, -0.48, -0.67, -0.57, -0.52, -0.65, -1.08, -0.72, -0.51, -0.43,
-0.52, -0.37, -0.24, 0.29, 0.36, 0.53, 0.41, 0.56, 0.2, 0.3, 0.22,
0.24, 0.05, 0.29, 0.09, 0.26, -0.41, -0.29, -0.35, -0.07, -0.25,
-0.27, -0.56, -0.28, 0.09, 1.01, 1.26, 1.17, 0.98, 1.05, 0.78, -0.13,
-1.21, -1.12, -1.46, -1.44, -1.6, -1.36, -1.4, -0.63, -1.21, -1.17,
-1.37, -1.33, -1.81, -1.46, -1.33, -1.53, -1.54, -1.7, -1.82, -1.76,
-2.14, -1.85, -1.92, -1.98, -1.84, -1.57, -0.72, 1.89, 2.17, 2.15,
2.05, 0.9, 0.58, 0.61, 0.62, 0.94, 0.58, 0.58, 0.57, 0.72, 0.53, 0.57,
0.53, 0.44, 0.4, 0.07, 0.13, 0.11, 0.07, -0.01, -0.0, 0.17, 0.09,
0.28, 0.05, 0.01, -0.45, -0.01, -0.03, -0.41, -0.39, -0.47, -0.37,
-0.51, -0.4, -0.32, -0.44, -0.44, -0.57, -0.37, -0.41, -0.35, -0.36,
-0.4, -0.41, -0.36, -0.23, 0.42, 0.4, 0.52, 0.56, 0.58, 0.53, 0.49,
0.38, 0.5, 0.29, 0.58, 0.48, 0.37, 0.56, 0.53, 0.3, 0.49, 0.42, 0.56,
0.56, 0.66, 0.74, 0.29, 0.28, -0.64, -1.45, -1.42, -1.17, -1.37,
-1.42, -1.0, -1.15, 0.66, 0.84, 1.0, 0.97, 0.16, -0.19, -0.03, -0.11,
-0.12, -0.03, -0.23, -0.25, -0.03, -0.24, 0.03, 0.65, 0.26, 0.41,
0.64, 0.62, 0.97, 0.52, 0.21, -0.28, -0.33, -0.4, -0.25, -0.17, -0.28,
0.08, -0.29, -0.35, -0.35, -0.37, -0.44, -0.84, -0.76, -1.33, -1.7,
-2.26, -2.52, -2.5, -2.64, -2.69, -2.49, -2.62, -2.64, -2.4, -1.03,
-0.93, -0.75, -0.76, -0.64, -0.93, -0.84, -0.76, -0.8, -0.8, 0.57,
0.64, 0.81, 0.77, 0.73, 0.7, 0.8, 0.96, 0.84, 1.01, 0.77, 0.65, 0.84,
0.65, 0.69, 0.64, -0.39, -0.47, -0.49, -0.75, -0.4, -0.48, -0.92,
-0.95, -0.81, -0.53, -0.99, -0.96, -1.4, -1.53, -1.58, -1.53, -1.7,
-1.52, -1.2, -1.07, -0.92, -1.09, -0.99, -0.91, -0.99, -1.21, -1.01,
-0.99, -0.97, -1.09, -0.93, -1.13, -0.93, -0.92, -0.8, -0.92, 0.32,
0.45, 0.68, 0.14, 0.3, 0.3, 0.22, 0.11, -0.33, -0.44, -0.49, -0.47,
-0.47, -0.39, -0.35, -0.48, -0.4, -0.48, -0.45, -0.35, -0.05, 0.64,
0.36, 0.18, 0.05, -0.71, -0.52, -0.57, -0.8, -0.47, 0.09, 0.13, -0.09,
0.28, 0.46, 0.52, 0.61, 1.54, 1.87, 1.32, 0.21, 0.44, 0.26, 0.45,
0.56, 0.37, 0.2, 0.38, 0.44, 0.16, 0.25, 0.44, 0.34, 0.21, -0.63,
-0.64, -0.52, -0.71, -0.35, -0.27, -0.17, -0.24, -0.4, -0.37, -0.36,
-0.29, -0.44, -0.16, 0.3, 0.7, 0.68, 0.25, 0.88, 0.66, 0.62, 0.3,
0.29, -0.29, -0.23, -0.27, -0.23, -0.35, -0.11, 0.08, 0.73, 0.54,
0.88, 0.62, 0.74, 0.41, -0.68, -0.72, -0.72, -0.64, -0.73, -0.83,
-0.64, -0.63, -0.55], 'Name':
'49adf045-6329-48f2-aa2f-510d043700d7', 'Confidence': 0.75, 'Time':
1.1e-05} ];


var Confidence = "Confidence : ".concat(data[0].Confidence) ;
var Time = "Time(in sec) : ".concat(data[0].Time) ;
var Link = "https://wikipedia.com/".concat(data[0].Name);

  return (

    <View style={{marginTop: -8,zIndex:10}}>
  <Text style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>Disease_Name_3 : {data[0].Name}</Text>
<View style={{flexDirection: 'row'}}>
  <Text style={{
                textAlign: 'left',
                fontSize: 18,
                padding: 16,
                marginTop: 0,
                zIndex:1,
                paddingLeft: 70 
              }}>{Confidence}</Text>


    <Text style={{
                textAlign: 'right',
                fontSize: 18,
                padding: 16,
                marginTop: 0,
                zIndex:1,
                paddingLeft: 750 ,
                paddingRight: 40 
              }}>{Time}</Text>
</View>

  <LineChart
    data={{
      labels: ["", "0.2s", "0.3s", "0.4s", "0.5s", "0.6s", "0.7s", "0.8s", "1s"],
      datasets: [
        {
          data:data[0].Read
        }
      ]
    }}


    width={Dimensions.get("window").width} // from react-native
    height={390}
    yAxisLabel=""
    xAxisSuffix="s"
withInnerLines={false}
withOuterLines={false}

    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
    fromZero: true,
      backgroundColor: "#0000ff",
      backgroundGradientFrom: "#0000ff",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      tooltip: {
    visible: true,
    labelFontSize: 10
  },
      propsForDots: {
        r: "0",
        strokeWidth: "2",
        stroke: "#000000"
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  <View style={{marginBottom: 0, backgroundColor: '#F5FCFF' }}>
    
<Button color="#000000"
        title={Confidence} 

        
      > 
      </Button>

<View style={{marginTop: 13 , backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title={Time}

        
      />
<View style={{marginTop: 13, marginBottom: 34, backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title="LearnMore"
        onPress={() => Linking.openURL(Link) }
      />
</View>
</View>
    </View>
    </View>

);     

}
);


const ProfileScreen6 = React.memo(function ProfileScreen6({ navigation }) {
  
var data = [{'Read': [-1.19, -1.23, -0.65, -0.63, -0.51, -0.52, -0.59, -0.48,
0.07, 0.74, 0.4, 0.56, 0.61, 0.22, -0.8, -1.08, -1.36, -1.33, -1.15,
-0.39, 1.08, 0.74, 0.69, 0.84, 0.7, 1.13, 0.89, 1.04, -0.33, -0.53,
-0.47, -0.65, -0.79, 0.16, 0.66, 0.82, 1.06, 0.2, -0.68, -0.72, -0.92,
-0.49, -0.69, -0.84, -1.04, -1.09, -1.09, -0.99, -1.31, -0.97, -0.79,
-0.69, -0.39, 0.36, 0.41, 0.48, 0.25, 0.22, 0.25, -0.03, -1.04, -0.55,
-0.53, -0.76, -0.68, -0.47, -0.52, -0.77, -0.47, 0.62, -1.32, -1.44, 
-1.57, -1.72, -1.61, -1.52, -1.7, -1.77, -1.85, -1.82, -1.84, -2.04,
-2.29, -1.58, -1.69, 0.03, 2.17, 2.06, 2.05, 1.7, 0.68, 0.69, 0.49,
0.57, 0.57, 0.52, 0.64, 0.57, 0.41, 0.57, 0.4, 0.26, 0.2, 0.14, 0.42,
0.34, 0.08, -0.45, -0.39, -0.11, -0.37, -0.56, -0.4, -0.17, -0.44,
-0.33, 0.03, 0.28, 0.24, -0.44, -0.49, -0.32, -0.64, 0.74, 0.92, 1.16,
0.84, 0.98, 0.85, 1.01, 1.01, 1.0, 0.72, 0.66, 0.05, 0.57, 0.36, 0.04,
0.37, 0.4, 0.2, 0.41, 0.09, -0.09, -0.19, -0.44, -0.15, 0.34, -0.59,
-1.41, -1.6, -1.42, -1.36, 1.24, 1.94, 2.02, 2.29, 1.89, 2.05, -0.23,
-1.31, 1.1, 2.03, 1.91, 2.01, 2.13, 2.06, 2.14, 2.31, 2.01, 2.05,
2.14, 2.19, 2.19, 0.69, 0.61, 0.66, 0.74, -0.55, -0.44, -0.8, -0.85,
-0.83, -0.91, -1.03, -1.4, -1.32, -1.37, -1.23, -1.25, -1.0, -0.49,
-0.77, -0.81, -0.68, -0.49, -0.28, -0.59, 0.14, 0.46, 0.5, -0.15,
-0.15, -0.4, -0.07, -0.35, -0.12, -0.17, 0.14, 1.04, 1.05, 1.33, 1.12,
1.24, 1.38, 1.41, 1.22, 0.8, 0.77, 0.24, -0.17, -0.19, -0.04, 1.17,
1.5, 1.53, 1.61, 1.5, 1.42, 1.65, 1.67, 1.55, 1.58, 1.41, 1.0, 1.09,
0.84, 0.93, 0.94, 0.8, 0.72, 0.18, 0.11, -0.47, -1.12, -1.31, -0.48,
-0.43, 0.4, -0.35, -1.03, -0.87, -0.79, -1.24, -0.67, -0.69, -0.6,
0.3, 1.02, 1.08, 0.74, 0.24, 0.25, 0.52, 0.32, 0.28, 0.11, 0.22, 0.08,
0.4, 0.21, 0.21, -0.05, 0.22, -0.13, -1.0, -0.89, -0.84, -1.07, -0.79,
-0.44, -0.2, -0.43, 0.4, 0.11, -0.88, -0.96, -0.85, 0.56, 2.13, 2.1,
2.19, 2.21, 1.74, 1.54, 0.86, 1.14, 1.17, 1.06, 1.08, 0.68, 0.14,
0.25, 0.53, 0.13, -0.81, -0.65, -0.87, -0.99, -0.77, -1.19, -0.71,
-0.53, -0.09, 0.18, -0.27, -0.37, -0.09, -0.56, -0.25, -0.59, -0.48,
-0.55, -0.33, -0.4, -0.05, 0.94, 0.88, 0.74, 1.12, 0.94, 1.02, 1.04,
0.88, 1.08, 1.09, 0.92, 0.85, 0.84, 1.01, 0.93, 0.73, 0.86, 1.04,
0.93, 1.06, 0.93, 0.89, 0.84, 0.82, 0.52, 0.53, 0.56, 0.56, 0.66,
1.01, 0.98, 0.92, 0.85, 0.89, 0.92, 0.88, 0.93, 0.82, 0.85, 0.89,
0.82, 0.86, 1.06, 1.09, 0.82, 1.0, 0.93, 0.89, 0.92, 0.82, 0.98, 1.04,
1.06, 0.9, 0.8, 1.08, 1.01, 0.96, 0.34, 0.34, 0.46, 0.32, 0.26, 0.16,
0.38, 0.2, -0.16, -0.11, -0.4, 0.01, -0.16, 0.05, -0.28, 0.3, 1.24,
1.01, 1.12, 0.61, 0.18, 0.21, 0.13, 0.32, 0.16, 0.26, 0.25, 0.24,
-0.25, -0.04, -0.33, -0.43, -0.24, -0.47, -0.27, 0.68, 0.45, 0.45,
0.22, 0.08, 0.16, -0.89, -1.03, -1.03, -1.28, -1.12, -1.23, -1.27,
-1.34, -1.52, 0.96, 1.17, 0.76, -0.91, -1.07, -0.68, -0.93, -0.8,
-1.0, -1.25, -1.13, -1.04, -0.92, -1.15, -1.11, -1.66, -1.61, -1.5,
-1.86, -1.77, -1.65, -1.49, -1.58, -1.46, -1.49, -1.29, -1.09, -1.03,
-0.85, -0.68, -0.72, -0.81, -0.59, -0.69, -0.72, -0.56, -0.61, -0.56,
0.65, 0.38, 0.53, 0.66, 0.58, 0.58, 0.68, 0.69, 0.5, 0.4, 0.65, 0.45,
0.69, 0.56, 0.93, 0.64, 0.52, 0.72, 0.12, 0.62, 0.6, 1.29, 1.44, 1.95,
1.48, 1.44, 1.42, 1.59, 0.58, 0.36, 0.29, -0.71, -0.64, -0.63, -0.83,
-0.81, -0.84, -1.27, -1.21, -1.17, -1.13, -1.13, -1.53, -1.52, -1.84,
-1.54, -1.48, -1.45, -1.33, -1.61, -1.46, -1.53, -1.54, -1.45, -2.13,
-1.97, -1.76, -2.01, -1.93, -2.02, -2.04, -2.05, -1.12, -0.8, -0.65,
-0.68, -1.25, -0.63, -0.92, -0.8, -0.8, -0.91, -0.75, 0.21, 0.41,
0.53, 0.69, 0.54, 0.33, 0.4, 0.36, 0.5, 0.44, 0.42, 0.13, 0.18, 0.2,
-0.89, -1.29, -1.05, -1.23, -1.01, -1.23, -1.07, -1.07, -0.91, -1.34,
-1.29, -0.97, -0.92, -0.73, -0.59, -0.8, -0.83, -0.71, -0.71, -0.84,
-0.6, -0.35, 0.86, 1.06, 0.65, 0.53, 0.25, -0.15, 0.16, -0.2, -0.45,
-0.63, -0.39, -0.44, -0.23, -0.39, -0.47, -0.51, -0.36, -0.57, -0.36,
1.01, 1.09, 1.06, 0.94, 1.17, 1.13, 1.0, 1.13, 1.02, 0.97, 1.05, 1.2,
1.08, 1.14, 0.88, 1.29, 1.22, 0.8, 0.64, 0.73, 0.65, 0.17, 0.34, 0.46,
0.18, 0.37, 0.36, 0.12, -0.03, -0.05, -0.03, -0.23, 0.72, 0.6, 0.28,
0.6, -0.28, -0.81, -1.2, -0.89, -0.29, -1.42, -1.13, -0.96, -1.27,
-1.04, -0.76, -0.87, -0.63, -0.93, -0.63, 1.18, 0.94, 0.89, 0.97, 1.0,
0.81, 1.13, 1.0, 0.86, 1.12, 0.68, 0.61, 0.57, -0.23, -0.15, -0.96,
-1.16, -1.01, -0.35, 2.37, 2.27, 2.01, 2.26, 2.25, 2.18, 1.98, 2.09,
2.17, 1.86, 1.89, 1.95, 1.97, 1.77, 0.88, -0.15, 0.07, 0.05, -0.17,
-0.05, -0.11, -0.25, -0.13, 0.16, 0.14, 0.29, -0.31, 1.67, 2.01, 1.71,
1.65, 1.65, 1.52, 1.18, 0.73, 0.65, 0.6, 0.64, 0.62, 0.53, 0.49, 0.53,
0.45, 0.56, 0.46, 0.74, 0.62, 0.54, 0.62, 0.93, 0.68, 0.92, 0.77,
0.96, 0.89, 0.77, 0.81, 0.81, 1.1, 1.38, 1.06, 0.89, 0.96, 0.66, 0.96,
1.24, 0.97, 1.12, 1.17, 1.21, 0.74, 0.89, 0.97, 0.97, 1.01, 0.77,
0.94, 1.09, 0.89, 0.6, -0.36, -0.41, -0.56, -0.09, 1.67, 0.33, 0.24,
0.16, 0.13, -0.13, -0.24, -0.99, -0.79, -0.88, -1.08, -1.27, -0.99,
0.14, 0.82, 0.89, 0.45, 0.89, 0.93, -0.35, -1.28, -1.16, -1.48, -0.89,
-0.84, -0.64, -0.72, -0.13, 1.21, 1.25, 1.28, 1.33, 1.28, 1.34, 1.09,
1.17, 1.32, 1.21, 1.33, 1.26, 1.32, 1.22, 1.17, 1.32, 1.21, 1.26,
1.21, 1.3, 1.32, 1.26, 0.82, -0.59, -0.69, -0.79, -0.19, 1.18, 1.17,
1.37, 1.26, 1.32, 1.02, 1.18, 1.21, 1.12, 1.24, 1.14, 1.17, 1.24,
1.21, 1.44, 1.28, 1.25, 1.16, 1.24, 1.08, 1.16, 1.25, 1.2, 1.2, 1.24,
1.21, 1.1, 1.13, 1.33, 1.18, 1.18, 1.2, 1.46, 1.2, 1.37, 1.29, 1.25,
1.22, 1.37, 1.42, 1.2, 1.25, 1.25, 1.21, 0.42, 0.2, 0.21, 0.2, 0.26,
0.3, 0.26, 0.24, 0.34, 0.21, 0.21, -0.91, -1.33, -1.6, -1.42, -1.34,
-1.36, -1.23, -1.45, -1.53, -0.76, -0.73, -0.65, -0.67, -0.81, -0.89,
-0.91, -0.84, -0.79, -0.56, -0.36, 0.42, 0.7, 0.9, 0.88, 0.8, 0.86,
0.78, 0.98, 0.96, 0.85, 0.86, 0.41, -0.03, -0.11, -0.12, -0.16, 0.03,
1.37, 1.82, 1.85, 1.74, 1.93, 0.72, 0.28, 0.29, -0.75, -0.76, -0.99,
-0.83, -1.08, -1.08, -0.95, 0.69, 0.89, 0.81, 0.72, 0.74, 0.92, 0.62,
0.73, 0.12, -1.31, -1.45, -1.04, -0.77, -0.8, -0.84, -0.93, -0.84,
-0.8, -0.81, -0.87, -0.8, -0.83, -0.79, -0.55, 0.4, 0.29, 0.41, -0.28,
0.37, 0.52, 0.26, 0.42, 0.49, 0.46, 0.56, 0.32, 0.45, 0.78, 0.2, 0.73,
0.36, 0.54, 0.56, 0.61, 0.41, 0.26, 0.36, 0.33, 0.3, 0.37, 0.53, 0.45,
0.37, 0.41, 0.05, -0.48, -0.37, -0.44, 0.86, 0.76, 0.69, 0.88, 0.82,
0.72, 0.88, 0.69, -0.07, -0.15, -0.25, -0.21, -0.25, -0.16, -0.19,
-0.32, 0.5, 2.1, 1.79, 2.02, 2.18, 1.99, 2.02, 2.09, 1.87, 1.94, 1.08,
0.72, 0.77, 0.28, -0.16, -0.33, -0.16, -0.31, 0.16, 0.66, 0.53, 0.52,
0.54, 0.52, 0.32, 0.41, 0.41, 0.42, 0.44, 0.25, 0.32, -0.32, -0.2,
-0.25, -0.11, -0.15, -0.36, -0.0, -0.01, -0.11, -0.2, -0.39, -0.31,
-0.49, 0.58, 0.58, 0.5, 0.53, 0.5, 0.46, 0.42, -0.71, -1.16, -1.11,
-0.77, 0.22, 0.97, 0.68, 0.8, 0.7, 0.72, 0.8, 0.64, 0.68, 0.66, 0.74,
0.6, 0.92, 0.82, 0.7, 0.69, 0.88, 0.56, 0.68, 0.45, -0.01, -0.13,
-0.08, -0.95, -1.62, -1.61, -1.46, -1.64, -1.66, -1.41, -1.53, -1.19,
1.85, 1.98, 2.15, 1.55, 0.7, 0.6, 0.72, 0.9, 0.98, 1.46, 0.92, 0.73,
1.06, 0.89, 1.0, 0.92, 0.84, 0.9, 0.78, 0.84, 1.77, 1.75, 1.04, 0.76,
1.04, 0.8, 0.81, 0.76, 1.33, 2.29, 0.82, 0.61, 1.04, 0.73, 0.8, 0.61
], 'Name': '49adf045-6329-48f2-aa2f-510d043700d7',
'Confidence': 0.9, 'Time': 0.061055} ];


var Confidence = "Confidence : ".concat(data[0].Confidence) ;
var Time = "Time(in sec) : ".concat(data[0].Time) ;
var Link = "https://wikipedia.com/".concat(data[0].Name);



  return (
<View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          {/* Place eraser component */}
          <SketchCanvas
            clearComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Clear</Text></View>}
            localSourceImage={{
              filename: 'background.jpg',
              directory: '',
              mode: 'ScaleToFill',
            }}
            
           
            style={{flex: 1, zIndex:10, marginTop: 0, marginBottom: -180}}
           
            
          />

     <View style={{marginTop: -880}}>
  <Text style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: -160,
              }}>Disease_Name_ : {data[0].Name}</Text>

  <LineChart data={{ 
    labels: ["0s", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0.2s", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0.4s", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0.6s", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "0.8s", "", "", "", "", "", "", "", "", "","","","","","","","","","", "1"],
       
  datasets: [
        {
          data: data[0].Read
        }
      ]
    }}

    

    width={Dimensions.get("window").width} // from react-native
    height={520}
    yAxisLabel=""
    xAxisSuffix="s"
withInnerLines={false}
withOuterLines={false}
    yAxisInterval={1} // optional, defaults to 1
    xAxisInterval={1}
    chartConfig={{
      
      fromZero: false,
      backgroundColor: "#0000ff",
      backgroundGradientFrom: "#0000ff",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 0
      },
      tooltip: {
    visible: true,
    labelFontSize: 0
  },
      propsForDots: {
        r: "",
        strokeWidth: "14",
        stroke: "#000000"
      }
    }}
    
    style={{
      marginVertical: 0,
      borderRadius: 0
    }}
  />
  <View style={{marginBottom: 0, backgroundColor: '#F5FCFF' }}>
    
<Button color="#000000"
        title={Confidence} 

        
      > 
      </Button>

<View style={{marginTop: 13 , backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title={Time}

        
      />
<View style={{marginTop: 54, marginBottom: 34, backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title="LearnMore"
        onPress={() => Linking.openURL(Link) }
      />
</View>
</View>
    </View>
    </View>

    <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            
           

            

            
          </View>
    
    </View>
    </View>
  );
}
)


const ProfileScreen4 = React.memo(function ProfileScreen4({ navigation }) {

  var data = [{'Read': [-1.19, -1.23, -0.65, -0.63, -0.51, -0.52, -0.59, -0.48,
0.07, 0.74, 0.4, 0.56, 0.61, 0.22, -0.8, -1.08, -1.36, -1.33, -1.15,
-0.39, 1.08, 0.74, 0.69, 0.84, 0.7, 1.13, 0.89, 1.04, -0.33, -0.53,
-0.47, -0.65, -0.79, 0.16, 0.66, 0.82, 1.06, 0.2, -0.68, -0.72, -0.92,
-0.49, -0.69, -0.84, -1.04, -1.09, -1.09, -0.99, -1.31, -0.97, -0.79,
-0.69, -0.39, 0.36, 0.41, 0.48, 0.25, 0.22, 0.25, -0.03, -1.04, -0.55,
-0.53, -0.76, -0.68, -0.47, -0.52, -0.77, -0.47, 0.62, -1.32, -1.44, 
-1.57, -1.72, -1.61, -1.52, -1.7, -1.77, -1.85, -1.82, -1.84, 
-2.29, -1.58, -1.69, 0.03, 2.17, 1.7, 0.68, 0.69, 0.49,
0.57, 0.57, 0.52, 0.64, 0.57, 0.41, 0.57, 0.4, 0.26, 0.2, 0.14, 0.42,
0.34, 0.08, -0.45, -0.39, -0.11, -0.37, -0.56, -0.4, -0.17, -0.44,
-0.33, 0.03, 0.28, 0.24, -0.44, -0.49, -0.32, -0.64, 0.74, 0.92, 1.16,
0.84, 0.98, 0.85, 1.01, 1.01, 1.0, 0.72, 0.66, 0.05, 0.57, 0.36, 0.04,
0.37, 0.4, 0.2, 0.41, 0.09, -0.09, -0.19, -0.44, -0.15, 0.34, -0.59,
-1.41, -1.6, -1.42, -1.36, 1.24, 1.94,  2.29, 1.89,  -0.23,
-1.31, 1.1,  1.91,  2.13, 2.14, 2.31, 
2.14, 2.19, 2.19, 0.69, 0.61, 0.66, 0.74, -0.55, -0.44, -0.8, -0.85,
-0.83, -0.91, -1.03, -1.4, -1.32, -1.37, -1.23, -1.25, -1.0, -0.49,
-0.77, -0.81, -0.68, -0.49, -0.28, -0.59, 0.14, 0.46, 0.5, -0.15,
-0.15, -0.4, -0.07, -0.35, -0.12, -0.17, 0.14, 1.04, 1.05, 1.33, 1.12,
1.24, 1.38, 1.41, 1.22, 0.8, 0.77, 0.24, -0.17, -0.19, -0.04, 1.17,
1.5, 1.53, 1.61, 1.5, 1.42, 1.65, 1.67, 1.55, 1.58, 1.41, 1.0, 1.09,
0.33, 0.42, 0.25, 0.33, 0.32, 0.33, 0.22, 0.12, 0.36, 0.37, 0.21,
0.29, 0.77, 1.01, 0.88, 0.84, 1.01, 0.84, 0.66, 0.28, -0.36, -0.51,
-0.63, -0.48, -0.67, -0.57, -0.52, -0.65, -1.08, -0.72, -0.51, -0.43,
-0.52, -0.37, -0.24, 0.29, 0.36, 0.53, 0.41, 0.56, 0.2, 0.3, 0.22,
0.24, 0.05, 0.29, 0.09, 0.26, -0.41, -0.29, -0.35, -0.07, -0.25,
-0.27, -0.56, -0.28, 0.09, 1.01, 1.26, 1.17, 0.98, 1.05, 0.78, -0.13,
-1.21, -1.12, -1.46, -1.44, -1.6, -1.36, -1.4, -0.63, -1.21, -1.17,
-1.37, -1.33, -1.81, -1.46, -1.33, -1.53, -1.54, -1.7, -1.82, -1.76,
-2.14, -1.85, -1.92, -1.98, -1.84, -1.57, -0.72, 1.89, 2.17, 2.15,
2.05, 0.9, 0.58, 0.61, 0.62, 0.94, 0.58, 0.58, 0.57, 0.72, 0.53, 0.57,
0.53, 0.44, 0.4, 0.07, 0.13, 0.11, 0.07, -0.01, -0.0, 0.17, 0.09,
0.28, 0.05, 0.01, -0.45, -0.01, -0.03, -0.41, -0.39, -0.47, -0.37,
-0.51, -0.4, -0.32, -0.44, -0.44, -0.57, -0.37, -0.41, -0.35, -0.36,
-0.4, -0.41, -0.36, -0.23, 0.42, 0.4, 0.52, 0.56, 0.58, 0.53, 0.49,
0.38, 0.5, 0.29, 0.58, 0.48, 0.37, 0.56, 0.53, 0.3, 0.49, 0.42, 0.56,
0.56, 0.66, 0.74, 0.29, 0.28, -0.64, -1.45, -1.42, -1.17, -1.37,
-1.42, -1.0, -1.15, 0.66, 0.84, 1.0, 0.97, 0.16, -0.19, -0.03, -0.11,
-0.12, -0.03, -0.23, -0.25, -0.03, -0.24, 0.03, 0.65, 0.26, 0.41,
0.64, 0.62, 0.97, 0.52, 0.21, -0.28, -0.33, -0.4, -0.25, -0.17, -0.28,
0.08, -0.29, -0.35, -0.35, -0.37, -0.44, -0.84, -0.76, -1.33, -1.7,
-2.26, -2.52, -2.5, -2.64, -2.69, -2.49, -2.62, -2.64, -2.4, -1.03,
-0.93, -0.75, -0.76, -0.64, -0.93, -0.84, -0.76, -0.8, -0.8, 0.57,
0.64, 0.81, 0.77, 0.73, 0.7, 0.8, 0.96, 0.84, 1.01, 0.77, 0.65, 0.84,
0.65, 0.69, 0.64, -0.39, -0.47, -0.49, -0.75, -0.4, -0.48, -0.92,
-0.95, -0.81, -0.53, -0.99, -0.96, -1.4, -1.53, -1.58, -1.53, -1.7,
-1.52, -1.2, -1.07, -0.92, -1.09, -0.99, -0.91, -0.99, -1.21, -1.01,
-0.99, -0.97, -1.09, -0.93, -1.13, -0.93, -0.92, -0.8, -0.92, 0.32,
0.45, 0.68, 0.14, 0.3, 0.3, 0.22, 0.11, -0.33, -0.44, -0.49, -0.47,
-0.47, -0.39, -0.35, -0.48, -0.4, -0.48, -0.45, -0.35, -0.05, 0.64,
0.36, 0.18, 0.05, -0.71, -0.52, -0.57, -0.8, -0.47, 0.09, 0.13, -0.09,
0.28, 0.46, 0.52, 0.61, 1.54, 1.87, 1.32, 0.21, 0.44, 0.26, 0.45,
0.56, 0.37, 0.2, 0.38, 0.44, 0.16, 0.25, 0.44, 0.34, 0.21, -0.63,
-0.64, -0.52, -0.71, -0.35, -0.27, -0.17, -0.24, -0.4, -0.37, -0.36,
-0.29, -0.44, -0.16, 0.3, 0.7, 0.68, 0.25, 0.88, 0.66, 0.62, 0.3,
0.29, -0.29, -0.23, -0.27, -0.23, -0.35, -0.11, 0.08, 0.73, 0.54,
0.88, 0.62, 0.74, 0.41, -0.68, -0.72, -0.72, -0.64, -0.73, -0.83,
-0.64, -0.63, -0.55], 'Name':
'49adf045-6329-48f2-aa2f-510d043700d7', 'Confidence': 0.75, 'Time':
1.1e-05} ];


var Confidence = "Confidence : ".concat(data[0].Confidence) ;
var Time = "Time(in sec) : ".concat(data[0].Time) ;
var Link = "https://wikipedia.com/".concat(data[0].Name);

var arr = data[0].Read;

var new_arr = arr.filter(function(x) {
    return x >= -2 && x <= 2;
});



  return (

    <View style={{marginTop: 4}}>
  <Text style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>Disease_Name_4 : {data[0].Name}</Text>

  <LineChart
    data={{
      labels: ["0.2s", "0.4s", "0.6s", "0.8s", "1s"],
      datasets: [
        {
          data: new_arr
        }
      ]
    }}


    width={Dimensions.get("window").width} // from react-native
    height={390}
    yAxisLabel=""
    xAxisSuffix="s"
withInnerLines={false}
withOuterLines={false}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
    fromZero: true,
      backgroundColor: "#0000ff",
      backgroundGradientFrom: "#0000ff",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      tooltip: {
    visible: true,
    labelFontSize: 10
  },
      propsForDots: {
        r: "",
        strokeWidth: "2",
        stroke: "#000000"
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  <View style={{marginBottom: 0, backgroundColor: '#F5FCFF' }}>
    
<Button color="#000000"
        title={Confidence} 

        
      > 
      </Button>

<View style={{marginTop: 13 , backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title={Time}

        
      />
<View style={{marginTop: 13, marginBottom: 34, backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title="LearnMore"
        onPress={() => Linking.openURL(Link) }
      />
</View>
</View>
    </View>
    </View>


);     

}
);

const ProfileScreen5 = React.memo(function ProfileScreen5({ navigation }) {

   var data = [{'Read': [-0.03, -0.37, -0.44, -0.29, -0.4, -1.04, -1.6,
-1.58, -1.61, -1.61, -1.81, -1.58, -1.92, -1.48, -1.56, -1.78, -1.46,
-1.45, -1.8, -1.72, -1.65, -1.29, -1.57, -1.53, -1.24, -0.81, -0.92,
-0.77, -0.59, -0.96, -0.92, -0.79, -1.29, -1.28, -1.2, -1.38, -1.31,
-1.25, -1.42, -1.5, -1.8, -1.86, -1.81, -1.78, -1.92, -1.78, -1.61,
-1.88, -1.69, -0.95, -0.64, -0.64, -0.73, -0.69, -0.68, -0.89, -0.99,
-0.72, -0.73, -0.77, -0.85, -1.05, -0.85, -0.57, -0.64, -0.83, -0.79,
-0.87, -0.63, -0.83, -0.59, -0.57, -0.73, -0.81, -0.91, -0.64, -0.69,
-0.71, -0.05, 0.72, 0.5, 0.56, 0.77, 0.56, 0.61, 0.58, 0.66, 0.56,
0.52, 0.58, 0.68, -0.27, -0.69, -0.99, -0.91, -0.92, -0.87, -0.87,
-1.16, -1.05, -1.19, -1.2, -1.49, -1.12, -1.04, -0.99, -1.53, -1.49,
-1.94, -1.76, -1.8, -1.96, -1.66, -1.74, -1.89, -2.05, -1.76, -1.72,
-2.08, -1.65, -1.94, -1.74, -1.86, -1.81, 1.04, 0.97, 0.82, -0.93,
-1.38, -1.45, -1.37, -1.24, -1.54, -1.64, -1.58, -1.68, -1.86, -1.54,
-1.58, -1.73, -1.61, -1.07, -0.77, -0.81, -0.75, -0.73, -0.61, -0.77,
-0.59, -0.63, 0.58, 0.38, 0.45, 0.22, 0.33, 0.14, 0.25, 0.14, -0.8,
-1.53, -1.46, -1.48, -1.4, -1.24, -0.83, -0.85, -0.68, -0.77, -0.71,
-0.89, -0.28, -0.39, 0.11, 1.02, 0.72, 0.86, 1.05, 1.21, 1.13, 1.13,
0.16, -0.61, -0.44, -0.41, 0.58, 1.04, 1.09, 0.74, 1.04, 0.07, -0.11,
-0.13, 0.17, 1.57, 2.33, 1.89, 1.83, 1.97, 1.93, 1.86, 0.96, 0.8,
1.17, 0.89, 1.01, 1.13, 1.13, 0.88, 0.88, 0.54, 0.77, 0.56, 0.73,
0.52, 0.22, -0.76, -0.71, -0.83, -0.56, -0.53, -0.51, -0.88, -0.81,
-0.67, -0.67, -0.87, -0.76, -1.13, -0.93, -0.71, -0.92, -1.85, -1.81,
-1.81, -0.85, -0.75, -0.64, -0.68, -0.72, -0.56, -0.69, -0.95, -0.72,
-0.41, 0.05, 0.61, 0.24, 0.21, 0.22, 0.38, 0.52, 0.09, -1.15, -0.88,
-1.03, -1.11, -0.73, -0.64, -0.72, -0.8, -0.75, -0.73, -0.45, -0.15,
0.81, 0.73, 0.58, 0.58, 0.78, 0.44, -0.43, -0.43, -0.48, -0.57, -0.64,
-0.49, -0.45, -0.69, -0.52, -0.35, 0.26, 0.37, 0.34, 0.24, 0.97, 1.01,
0.77, 0.04, -0.09, -0.16, -0.04, 0.88, 1.17, 0.92, 0.9, 0.82, 0.9,
0.7, 0.97, 0.96, 0.4, 0.29, 0.16, -0.08, -0.28, -0.03, -0.21, -0.33,
-0.55, -0.16, -0.48, -0.4, -0.11, 0.18, 1.24, 1.26, 1.25, 1.26, 1.12,
0.97, 1.13, 1.09, 0.82, 0.69, 0.7, 1.28, 0.96, 0.73, 0.78, 0.89, 1.18,
1.13, 1.32, 1.26, 1.13, 0.92, 0.86, 0.29, 0.2, 0.25, 0.11, 0.58, 0.72,
0.76, 2.34, 2.31, 2.34, 2.31, 2.31, 2.34, 2.38, 2.3, 2.14, 1.25, 0.93,
1.05, 0.97, 0.97, 1.91, 1.49, 0.7, 0.57, 0.57, 0.58, 0.44, 0.73, 0.61,
0.37, 0.26, -0.12, -0.08, -0.28, -0.11, 0.04, 0.32, 0.2, 0.34, 0.45,
0.53, 0.22, 0.11, 0.29, 0.17, 0.2, 1.32, 1.44, 1.28, 1.78, 1.49, 1.38,
1.54, 1.34, 1.32, 0.56, 0.52, 0.49, 0.44, 0.45, 0.5, 0.36, 0.41, 0.58,
0.53, 0.3, 0.48, 0.5, 0.46, -0.11, -0.03, 0.21, -0.04, 0.08, 0.3, 0.6,
1.57, 1.7, 1.49, 1.48, 1.3, 1.37, 1.4, 1.42, 1.42, 1.48, 1.46, 1.18,
1.52, 1.1, 1.29, 1.38, 0.97, 0.04, 0.05, -0.13, -0.08, -0.17, 0.05,
0.16, 0.28, 0.34, 0.33, 0.41, 0.41, 0.54, 0.52, -0.31, -0.8, -1.08,
0.74, 0.82, 0.72, 0.8, 0.77, 0.57, 1.06, 0.57, 0.74, 0.96, 0.84, 0.66,
0.68, 0.69, 0.84, 0.68, 0.74, 0.7, 0.48, 0.41, 0.33, 0.42, 0.25, 0.33,
0.32, 0.33, 0.22, 0.12, 0.36, 0.37, 0.21, 0.29, 0.77, 1.01, 0.88,
0.84, 1.01, 0.84, 0.66, 0.28, -0.36, -0.51, -0.63, -0.48, -0.67,
-0.57, -0.52, -0.65, -1.08, -0.72, -0.51, -0.43, -0.52, -0.37, -0.24,
0.29, 0.36, 0.53, 0.41, 0.56, 0.2, 0.3, 0.22, 0.24, 0.05, 0.29, 0.09,
0.26, -0.41, -0.29, -0.35, -0.07, -0.25, -0.27, -0.56, -0.28, 0.09,
1.01, 1.26, 1.17, 0.98, 1.05, 0.78, -0.13, -1.21, -1.12, -1.46, -1.44,
-1.6, -1.36, -1.4, -0.63, -1.21, -1.17, -1.37, -1.33, -1.81, -1.46,
-1.33, -1.53, -1.54, -1.7, -1.82, -1.76, -2.14, -1.85, -1.92, -1.98,
-1.84, -1.57, -0.72, 1.89, 2.17, 2.15, 2.05, 0.9, 0.58, 0.61, 0.62,
0.94, 0.58, 0.58, 0.57, 0.72, 0.53, 0.57, 0.53, 0.44, 0.4, 0.07, 0.13,
0.11, 0.07, -0.01, -0.0, 0.17, 0.09, 0.28, 0.05, 0.01, -0.45, -0.01,
-0.03, -0.41, -0.39, -0.47, -0.37, -0.51, -0.4, -0.32, -0.44, -0.44,
-0.57, -0.37, -0.41, -0.35, -0.36, -0.4, -0.41, -0.36, -0.23, 0.42,
0.4, 0.52, 0.56, 0.58, 0.53, 0.49, 0.38, 0.5, 0.29, 0.58, 0.48, 0.37,
0.56, 0.53, 0.3, 0.49, 0.42, 0.56, 0.56, 0.66, 0.74, 0.29, 0.28,
-0.64, -1.45, -1.42, -1.17, -1.37, -1.42, -1.0, -1.15, 0.66, 0.84,
1.0, 0.97, 0.16, -0.19, -0.03, -0.11, -0.12, -0.03, -0.23, -0.25,
-0.03, -0.24, 0.03, 0.65, 0.26, 0.41, 0.64, 0.62, 0.97, 0.52, 0.21,
-0.28, -0.33, -0.4, -0.25, -0.17, -0.28, 0.08, -0.29, -0.35, -0.35,
-0.37, -0.44, -0.84, -0.76, -1.33, -1.7, -2.26, -2.52, -2.5, -2.64,
-2.69, -2.49, -2.62, -2.64, -2.4, -1.03, -0.93, -0.75, -0.76, -0.64,
-0.93, -0.84, -0.76, -0.8, -0.8, 0.57, 0.64, 0.81, 0.77, 0.73, 0.7,
0.8, 0.96, 0.84, 1.01, 0.77, 0.65, 0.84, 0.65, 0.69, 0.64, -0.39,
-0.47, -0.49, -0.75, -0.4, -0.48, -0.92, -0.95, -0.81, -0.53, -0.99,
-0.96, -1.4, -1.53, -1.58, -1.53, -1.7, -1.52, -1.2, -1.07, -0.92,
-1.09, -0.99, -0.91, -0.99, -1.21, -1.01, -0.99, -0.97, -1.09, -0.93,
-1.13, -0.93, -0.92, -0.8, -0.92, 0.32, 0.45, 0.68, 0.14, 0.3, 0.3,
0.22, 0.11, -0.33, -0.44, -0.49, -0.47, -0.47, -0.39, -0.35, -0.48,
-0.4, -0.48, -0.45, -0.35, -0.05, 0.64, 0.36, 0.18, 0.05, -0.71,
-0.52, -0.57, -0.8, -0.47, 0.09, 0.13, -0.09, 0.28, 0.46, 0.52, 0.61,
1.54, 1.87, 1.32, 0.21, 0.44, 0.26, 0.45, 0.56, 0.37, 0.2, 0.38, 0.44,
0.16, 0.25, 0.44, 0.34, 0.21, -0.63, -0.64, -0.52, -0.71, -0.35,
-0.27, -0.17, -0.24, -0.4, -0.37, -0.36, -0.29, -0.44, -0.16, 0.3,
0.7, 0.68, 0.25, 0.88, 0.66, 0.62, 0.3, 0.29, -0.29, -0.23, -0.27,
-0.23, -0.35, -0.11, 0.08, 0.73, 0.54, 0.88, 0.62, 0.74, 0.41, -0.68,
-0.72, -0.72, -0.64, -0.73, -0.83, -0.64, -0.63, -0.55], 'Name':
'49adf045-6329-48f2-aa2f-510d043700d7', 'Confidence': 0.75, 'Time':
1.1e-05} ];


var Confidence = "Confidence : ".concat(data[0].Confidence) ;
var Time = "Time(in sec) : ".concat(data[0].Time) ;
var Link = "https://wikipedia.com/".concat(data[0].Name);

  return (
    <View style={{marginTop: 4}}>
  <Text style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>Disease_Name_5 : {data[0].Name}</Text>

  <LineChart
    data={{
      labels: ["0.2s", "0.4s", "0.6s", "0.8s", "1s"],
      datasets: [
        {
          data: data[0].Read
        }
      ]
    }}


    width={Dimensions.get("window").width} // from react-native
    height={390}
    yAxisLabel=""
    xAxisSuffix="s"
withInnerLines={false}
withOuterLines={false}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
    fromZero: true,
      backgroundColor: "#0000ff",
      backgroundGradientFrom: "#0000ff",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      tooltip: {
    visible: true,
    labelFontSize: 10
  },
      propsForDots: {
        r: "",
        strokeWidth: "2",
        stroke: "#000000"
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  <View style={{marginBottom: 0, backgroundColor: '#F5FCFF' }}>
    
<Button color="#000000"
        title={Confidence} 

        
      > 
      </Button>

<View style={{marginTop: 13 , backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title={Time}

        
      />
<View style={{marginTop: 13, marginBottom: 34, backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title="LearnMore"
        onPress={() => Linking.openURL(Link) }
      />
</View>
</View>
    </View>
    </View>

);     

}

);
  

const AppNavigator = createStackNavigator(  
    {  
        DNA_Demo: DrawingBoard,  
        JSONOuput: Tabs,

        JSON: {
          screen: ProfileScreen,
        

  },

        JSON2: ProfileScreen2,

        JSON3: ProfileScreen3,

        JSON4: ProfileScreen4,
      
        JSON5: ProfileScreen5,

        JSON6: ProfileScreen6,

    },  
    {  
        initialRouteName: "DNA_Demo"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  

const styles = StyleSheet.create({
  strokeColorButton: {
    marginHorizontal: 15,
    justifyContent: 'center',
    marginVertical: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8e8e93',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 50,
    width: 50,
    // backgroundColor: '#f05454',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 25,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 15,
    // backgroundColor: 'green',
  },
  mainModalView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f7',
    justifyContent: 'space-between',
    borderRadius: 50,
    // alignItems: 'center',
    marginTop: 25,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 15,
    // backgroundColor: 'green',
  },
  modalView1: {
    // margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#2d70f7',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    width: 420,
    height: 420,
    // borderColor: '#007AFF',
    // borderWidth: 2
  },
  modalView2: {
    // margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#FF2D55',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    width: 420,
    height: 420,
    // borderColor: '#007AFF',
    // borderWidth: 2
  },
  modalView3: {
    // margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#AF52DE',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    width: 420,
    height: 420,
    // borderColor: '#007AFF',
    // borderWidth: 2
  },
  modalView4: {
    // margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#FF9500',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    width: 420,
    height: 420,
    // borderColor: '#007AFF',
    // borderWidth: 2
  },
  modalView5: {
    // margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#34C759',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    width: 420,
    height: 420,
    // borderColor: '#007AFF',
    // borderWidth: 2
  },
  openButton: {
    backgroundColor: '#4b4d4f',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingTop: 5,
    marginTop: 12,
  },
  textStyle: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('DrawingBoard', () => DrawingBoard);





// <Button color="#000000"
//         title={Confidence} 

        
//       > 
//       </Button>

// <View style={{marginTop: 13 , backgroundColor: '#F5FCFF' }}>

//       <Button color="#000000"
//         title={Time}

        
//       />


























