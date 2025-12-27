import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const chatList = [
  { id: "1", name: "Imran Khan", date: "12/09/2025" },
  { id: "2", name: "Sarah khanzada", date: "12/09/2025" },
  { id: "3", name: "Maaz khan", date: "12/09/2025" },
  { id: "4", name: "Wardah Mushtaq", date: "12/09/2025" },
  { id: "5", name: "Wania Khan", date: "12/09/2025" },
];

export default function Chat() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>MY CHAT</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput placeholder="Search chats..." style={styles.searchInput} placeholderTextColor="#888" />
      </View>

      {/* CHAT LIST */}
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // Move the onPress logic here to each individual row
          <TouchableOpacity 
            style={styles.chatItem} 
            onPress={() => router.push("/chatting")}
          >
            <View style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "#0A2A43",
    paddingTop: Constants.statusBarHeight + 40,
    paddingBottom: 20,
    paddingHorizontal: 16,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 45,
    elevation: 2,
    borderColor: "#ccc",
    borderWidth: 1,
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
    color: "#888",
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ccc",
    marginRight: 12,
  },

  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
  },

  date: {
    fontSize: 12,
    color: "#888",
  },
});