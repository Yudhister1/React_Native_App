
import * as React from 'react';
import { Button, View, Linking  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DrawingBoard } from './compon/DrawingBoard';
import { AnalyzeButton } from './compon/AnalyzeButton';


import { StyleSheet, Text, Dimensions } from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,

} from "react-native-chart-kit";
// import {
//   SafeAreaView,
  
//   ScrollView,
//   Button,
 
//   StatusBar,
// } from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function HomeScreen({ navigation }) {
  return (
      
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 43, backgroundColor: '#F5FCFF' }}>
      <Button color="#000000" 
        title="Analyz"
        onPress={() => navigation.navigate('JSONOuput')}
      />
     
      </View>
    );
  }

    
function ProfileScreen({ navigation }) {
  return (

       <View>
  <Text style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
              }}>Disease_Name_</Text>

  <LineChart
    data={{
      labels: ["0.2s", "0.4s", "0.6s", "0.8s", "1s"],
      datasets: [
        {
          data: [
            0.54, 0.32, 0.43, -0.43, 0.44, .43
          ]
        }
      ]
    }}


    width={Dimensions.get("window").width} // from react-native
    height={320}
    yAxisLabel=""
    xAxisSuffix="s"

    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
    fromZero: false,
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
        r: "6",
        strokeWidth: "2",
        stroke: "#000000"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  <View style={{marginBottom: 0, backgroundColor: '#F5FCFF' }}>
    
<Button color="#000000"
        title="Confidence : "
        
      />

      
<View style={{marginTop: 54, marginBottom: 34, backgroundColor: '#F5FCFF' }}>

      <Button color="#000000"
        title="LearnMore"
        onPress={() => Linking.openURL('https://reactnavigation.org/') }
      />
</View>
    </View>
    </View>
  );
}



const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      
      
      <Stack.Screen name="JSONOuput" component={ProfileScreen} />
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  appHeading: {
    position: 'relative',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    fontFamily: 'Trebuchet-BoldItalic',
    textAlign: 'center',
    color: Colors.black,
  },
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});















