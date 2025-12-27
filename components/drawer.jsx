// CustomDrawer.jsx
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomDrawer({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Top Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.profileImage}
        />
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.name}>Ashar Usmani</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="user" size={20} color="#444" />
          <Text style={styles.menuText}>Switch to Freelancer</Text>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="#444" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome5 name="folder-open" size={18} color="#444" />
          <Text style={styles.menuText}>Posted Projects</Text>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="#444" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome5 name="clipboard-list" size={18} color="#444" />
          <Text style={styles.menuText}>Posted Jobs</Text>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="#444" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="alert-triangle" size={20} color="#444" />
          <Text style={styles.menuText}>Disputes Lists</Text>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="#444" />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff"},
  header: { backgroundColor: "#003B5C", paddingTop: 50, padding: 20, paddingBottom: 40 },
  profileImage: { width: 55, height: 55, borderRadius: 30, marginBottom: 10 },
  welcome: { color: "#ddd", fontSize: 14 },
  name: { color: "#fff", fontSize: 18, fontWeight: "600" },
  menuSection: { marginTop: 15 },
  menuItem: { flexDirection: "row", alignItems: "center", paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderColor: "#eee" },
  menuText: { flex: 1, marginLeft: 15, fontSize: 15, color: "#333" },
});
