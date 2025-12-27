import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>MY PROFILE</Text>
      </View>

      <View style={styles.profileCard}>
        <Image
          source={require("../../assets/girl.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Ashar Usmani</Text>
        <Text style={styles.email}>asharahmed90@gmail.com</Text>

        <Text style={styles.sectionTitle}>Profile Stats</Text>
        <View style={styles.statsRow}>
          <StatBox number="3" label="Education" />
          <StatBox number="6" label="Certification" />
        </View>
        <View style={styles.statsRow}>
          <StatBox number="8" label="Skills" />
          <StatBox number="4" label="Language" />
        </View>
      </View>

      <View style={styles.menu}>
        <MenuItem 
          icon="create-outline" 
          label="Edit Profile" 
          onPress={() => router.push("/edit_profile")} 
        />
        <MenuItem icon="help-circle-outline" label="FAQ" />
        <MenuItem icon="share-social-outline" label="Invite" />
        <MenuItem icon="log-out-outline" label="Logout" danger />
      </View>
    </SafeAreaView>
  );
}

/* COMPONENTS */
const StatBox = ({ number, label }) => (
  <View style={styles.statBox}>
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

//  Updated MenuItem to accept onPress
const MenuItem = ({ icon, label, danger, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={20} color={danger ? "#075458" : "#043A53"} />
    <Text style={[styles.menuText, danger && { color: "#075458" }]}>{label}</Text>
    <MaterialCommunityIcons
      name="chevron-right"
      size={22}
      color="#075458"
      style={{ marginLeft: "auto" }}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 160,
    backgroundColor: "#1F3C58",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  profileCard: {
    marginTop: 120, // push below header
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 4,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: "#fff",
    marginTop: -60,
    zIndex: 2, 
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    color: "#043A53",
  },

  email: {
    fontSize: 13,
    color: "#043A53",
    marginBottom: 14,
    opacity: 0.5,
  },

  sectionTitle: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },

  statBox: {
    width: "48%",
    backgroundColor: "#043A53",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  statLabel: {
    fontSize: 12,
    color: "#E6F4F1",
    marginTop: 4,
  },

  menu: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 8,
    elevation: 3,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderColor: "#B4B4B4",
  },

  menuText: {
    fontSize: 14,
    marginLeft: 12,
    color: "#043A53",
    fontWeight: "500",
  },
});
