import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground } from 'react-native'


const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
          options={{
           title: 'Home',
           headerShown: false,
           tabBarIcon: ({focused})=>(
            <>
              <ImageBackground
              source={images.highlight}
              >
                <Image source={icons.home} tintColor="#151512" className="size-5"/>
              </ImageBackground>
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
                <ImageBackground
                source={images.highlight}
                >
                  <Image source={icons.save} tintColor="#151512" className="size-5"/>
                </ImageBackground>
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
               <ImageBackground
               source={images.highlight}
               >
                 <Image source={icons.search} tintColor="#151512" className="size-5"/>
               </ImageBackground>
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
               <ImageBackground
               source={images.highlight}
               >
                 <Image source={icons.person} tintColor="#151512" className="size-5"/>
               </ImageBackground>
             </>
           )
        }}
      />
    </Tabs>
  )
}

export default _layout