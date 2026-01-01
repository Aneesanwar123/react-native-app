import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const messages = [
  { id: "1", text: "Hello 👋 how can I help you?", time: "09:24 pm", sender: "me" },
  { id: "2", text: "Need an app.", time: "09:24 pm", sender: "other" },
  { id: "3", text: "Sure! Flutter or web?", time: "09:24 pm", sender: "me" },
  { id: "4", text: "Yeh! Flutter", time: "09:24 pm", sender: "other" },
];

export default function Chatting() {
  const router = useRouter();

  const renderItem = ({ item }) => {
    const isMe = item.sender === "me";
    return (
      <View style={[styles.messageContainer, isMe ? styles.myMessage : styles.otherMessage]}>
        <Text style={[styles.messageText, { color: isMe ? "#fff" : "#000" }]}>{item.text}</Text>
        <Text style={[styles.timeText, { color: isMe ? "#eee" : "#555" }]}>{item.time}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <View style={styles.avatar} />
          <Text style={styles.userName}>Wardah Mushtaq</Text>
        </View>
      </View>

      {/* KeyboardAvoidingView */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingTop: 130, paddingHorizontal: 16, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />

        {/* Input */}
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type a message"
              style={styles.input}
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.sendBtn}>
              <Ionicons name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 130,
    backgroundColor: "#0A2A43",
    paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backBtn: { marginRight: 8 },
  userInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#ddd", marginRight: 10 },
  userName: { color: "#fff", fontSize: 16, fontWeight: "600" },

  messageContainer: {
    maxWidth: "75%",
    marginBottom: 14,
    padding: 12,
    borderRadius: 15,
  },
  myMessage: { backgroundColor: "#1CA7A6", alignSelf: "flex-end", borderBottomRightRadius: 2 },
  otherMessage: { backgroundColor: "#F0F0F0", alignSelf: "flex-start", borderBottomLeftRadius: 2 },
  messageText: { fontSize: 15, lineHeight: 20 },
  timeText: { fontSize: 10, alignSelf: "flex-end", marginTop: 4 },

  inputWrapper: {
    // borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  inputContainer: { flexDirection: "row", alignItems: "center", paddingHorizontal: 15 },
  input: { flex: 1, height: 44, backgroundColor: "#F5F5F5", borderRadius: 22, paddingHorizontal: 20, fontSize: 15 },
  sendBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: "#1CA7A6", justifyContent: "center", alignItems: "center", marginLeft: 10 },
});
