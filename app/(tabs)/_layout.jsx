import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Tabs } from "expo-router";
import React from "react";
import { Animated } from "react-native";

export default function TabLayout() {
  const iconColor = "#292929ff";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 50,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <IconSymbol name="house.fill" size={28} color={iconColor} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: ({ focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <IconSymbol name="paperplane.fill" size={28} color={iconColor} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <IconSymbol name="bookmark.fill" size={28} color={iconColor} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <IconSymbol name="person.fill" size={28} color={iconColor} />
            </Animated.View>
          ),
        }}
      />
  

    </Tabs>
  );
}
