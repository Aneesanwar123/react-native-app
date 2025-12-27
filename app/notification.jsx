import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

const notifications = [
  {
    id: "1",
    name: "Sophia",
    message:
      'Your gig request "Modern Mobile App UI Design" has been reviewed and successfully approved. It\'s now live for clients to view.',
    time: "1h",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Olivia",
    message:
      'Your gig request "Modern Mobile App UI Design" has been reviewed and successfully approved. It\'s now live for clients to view.',
    time: "2h",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Emma",
    message:
      'Your gig request "Modern Mobile App UI Design" has been reviewed and successfully approved. It\'s now live for clients to view.',
    time: "3h",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export default function notification() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#fff" paddingTop={16}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 16,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#0D3B66",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#fff",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    opacity: 0.7,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: "#fff",
    flexWrap: "wrap",
  },
  time: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
});
