// postedprojects.jsx
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  StatusBar as RNStatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const projects = [
  {
    id: 1,
    initials: "AU",
    title: "Ui/UX designing",
    project: "Project #2",
    category: "Digital Marketing",
    status: "Active",
    budget: "$500 - 7000",
    deadline: "6, November 2025",
  },
  {
    id: 2,
    initials: "JD",
    title: "Web Development",
    project: "Project #5",
    category: "Software",
    status: "Active",
    budget: "$1000 - 10000",
    deadline: "12, December 2025",
  },
  {
    id: 3,
    initials: "MK",
    title: "App Prototype",
    project: "Project #1",
    category: "UI/UX",
    status: "Pending",
    budget: "$300 - 5000",
    deadline: "1, January 2026",
  },
  {
    id: 4,
    initials: "RT",
    title: "Digital Campaign",
    project: "Project #3",
    category: "Marketing",
    status: "Active",
    budget: "$800 - 6000",
    deadline: "20, February 2026",
  },
];

export default function PostedProjects() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <RNStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container}>
        {projects.map((project) => (
          <TouchableOpacity
            key={project.id}
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: "/JobDetail",
                params: { id: project.id },
              })
            }
          >
            <View style={styles.card}>
              <View style={styles.header}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{project.initials}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{project.title}</Text>
                  <Text style={styles.project}>{project.project}</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Text style={styles.label}>CATEGORY</Text>
                  <Text style={styles.value}>{project.category}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={styles.label}>STATUS</Text>
                  <Text style={styles.value}>{project.status}</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Text style={styles.label}>BUDGET</Text>
                  <Text style={styles.value}>
                    <FontAwesome name="dollar" size={14} /> {project.budget}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text style={styles.label}>DEADLINE</Text>
                  <Text style={styles.value}>
                    <MaterialCommunityIcons name="calendar" size={14} />{" "}
                    {project.deadline}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    backgroundColor: "#2c3e50",
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  project: {
    fontSize: 12,
    color: "#777",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  section: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: "#999",
    marginTop: 12,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 2,
  },
});
