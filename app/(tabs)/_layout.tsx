import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'



const TabIcon = ({focused, icon, title }: any) => {

 if (focused) { return (
    <ImageBackground
      source={images.highlight}
      className='flex flex-row w-full flex-1 min-w-[110px] min-h-16 justify-center items-center rounded-full overflow-hidden mt-4'
    >
      <Image source={icon} tintColor="#151512" className="size-5" />
                <Text className='text-secondary font-semibold'>{title}</Text>
              </ImageBackground>
  )}

  return (
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image source={icon} tintColor="#a8b5db" className="size-5" />
    </View>
  )

}


const _layout = () => {
  return (
    <Tabs
     screenOptions = {{
    tabBarShowLabel: false,
    tabBarItemStyle: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',

     
    },
    tabBarStyle:{
      backgroundColor: '#0f0d23',
      borderRadius: 50,
      marginHorizontal: 20,
      marginBottom: 52,
      height: 52,
      position: 'absolute',
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#0f0d23',
    }

  }}
    
    
    
    >
      <Tabs.Screen
        name="index"
          options={{
           title: 'Home',
           headerShown: false,
           tabBarIcon: ({focused})=>(
            <>
              <TabIcon 
                focused={focused}  
                icon={icons.home} 
                title="Home" 
              />
            </>
          )
        }}
      />

       <Tabs.Screen
        name="search"
          options={{
           title: 'Search',
           headerShown: false,
           tabBarIcon: ({focused})=>(
            <>
              <TabIcon 
                focused={focused}  
                icon={icons.search} 
                title="Search" 
              />
            </>
          )
        }}
      />

       <Tabs.Screen
        name="saved"
          options={{
           title: 'Saved',
           headerShown: false,
           tabBarIcon: ({focused})=>(
            <>
              <TabIcon 
                focused={focused}  
                icon={icons.save} 
                title="Saved" 
              />
            </>
          )
        }}
      />


       <Tabs.Screen
        name="profile"
          options={{
           title: 'Profile',
           headerShown: false,
           tabBarIcon: ({focused})=>(
            <>
              <TabIcon 
                focused={focused}  
                icon={icons.person} 
                title="Profile" 
              />
            </>
          )
        }}
      />
      
     
     
     
    </Tabs>
  )
}


export default _layout