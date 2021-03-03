
import {
    SafeAreaView,
    Platform,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground,
    Linking,
    FlatList,
    Dimensions,
    AsyncStorage,
    PermissionsAndroid,
    NativeModules,
    BackHandler,




} from 'react-native';

import React, { Component, } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

class TotalEarning extends React.Component {

    constructor(props) {
        super(props);
          
        this.state={
            
            FlatListItems: [

                {"key": "#1",

                 "profile": require('./profile.png'),
                 "name":('Payment Received from: Rahul Sharma'),
                 "date":('24 Nov 2020'),
                 "money":('+ ₹ 500'),
              
               
                                           
                },
            
                {"key": "#2",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),
            
                },
            
                {"key": "#3",
            
                "profile": require('./profile.png'),
                 "name":('Payment Received from: Rahul Sharma'),
                 "date":('24 Nov 2020'),
                 "money":('+ ₹ 500'),
                          
                },
            
                {"key": "#4",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),
            
                },
            
                {"key": "#5",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),

                },

                {"key": "#6",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),

                },


                {"key": "#7",
            
                "profile": require('./profile.png'),
                 "name":('Payment Received from: Rahul Sharma'),
                 "date":('24 Nov 2020'),
                 "money":('+ ₹ 500'),
                 
                },


                {"key": "#8",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),
            
                },


                {"key": "#9",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),
                },

                {"key": "#10",
            
               
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),

                },


                {"key": "#11",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),
            
                },

                {"key": "#12",
            
                "profile": require('./profile.png'),
                "name":('Payment Received from: Rahul Sharma'),
                "date":('24 Nov 2020'),
                "money":('+ ₹ 500'),
            
                },],
            
            
            
        
            
            }}





            renderItem1=({item, index}) => {
                // alert(JSON.stringify(item))
            return(
        



<View style={{flexDirection:'column',width:'90%',marginTop:10,justifyContent:'center',alignSelf:'center',alignItems:'center'}}>


<TouchableOpacity >

<View  style={{width:'90%',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
       
       
       <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',width:'83%'}}>
        <Image style={{ height: 50, width: 50,resizeMode: 'contain',marginTop:-5 }} source={item.profile}/>
      
      
        <View style={{flexDirection:'column',marginLeft:15,width:'70%'}}>
        <Text style={{ fontFamily:'Avenir',fontSize: 16, fontFamily: 'Avenir', color: '#1E1F20' }}>{item.name}</Text>

        <Text style={{ fontFamily:'Avenir',fontSize: 15, fontFamily: 'Avenir', color: '#979797' }}>{item.date}</Text>

        </View>
        
        </View>

        <Text style={{ marginTop:-15,fontFamily:'Avenir',fontSize: 15, fontFamily: 'Avenir', color: '#F97012', marginLeft: 20 }}>{item.money}</Text>


    </View>

    </TouchableOpacity>



<View style={{width:'100%',borderWidth:0.3,borderColor:'#D1D1D1',marginTop:10}}></View>


        
         </View>
        
        )
        }
        
        _keyExtractor=(item, index)=>item.key;















    render() {
        return (

            <SafeAreaProvider style={{ backgroundColor: 'white' }}>
                <StatusBar
                    backgroundColor='#F97012'


                />


<View style={{ width: '100%', height: 60, elevation: 2, backgroundColor: '#F97012', justifyContent: 'center' }}>

<View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: "center" }} >


    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Image style={{ height: 22, width: 12, resizeMode: 'contain' }} source={require('./backwhite.png')} />
    </TouchableOpacity>

    <Text style={{ fontFamily:'Avenir',fontSize: 20, fontFamily: 'Avenir', color: 'white', marginLeft: 20 }}>Total Earning</Text>

</View>
</View>






<View style={{flexDirection:'column',width:'90%',backgroundColor:'#F97012',height:152,justifyContent:'center',marginTop:20,alignSelf:'center',borderRadius:10}}>

<Text style={{fontSize:45,fontFamily:'Avenir',color:'#FFF',fontWeight:'bold',alignSelf:'center'}}>₹10,000</Text>

<Text style={{fontSize:18,fontFamily:'Avenir',color:'#FFF',fontWeight:'bold',alignSelf:'center'}}>Total Earnings</Text>


</View>


<View style={{ width: '90%',flexDirection: 'row', justifyContent:'space-between',alignSelf:'center',marginTop:25}} >
   
    <Text style={{ lineHeight:34,fontSize: 30,fontWeight:'normal', color: '#000',fontFamily:'Avenir' }}>Earning History</Text>


<TouchableOpacity>
    <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={require('./whiteCalendar.png')} />
  
    </TouchableOpacity>
    </View>


    
<View style={{width:'100%',justifyContent:'center',alignSelf:'center',marginBottom:120}}>


                    
<FlatList  style={{width:'100%'}}
   data={this.state.FlatListItems}
   horizontal={false}
   showsVerticalScrollIndicator={false}
   keyExtractor={this._keyExtractor}
   renderItem={this.renderItem1}
/>

</View>








               

            </SafeAreaProvider>

        );
    }
}

export default TotalEarning;