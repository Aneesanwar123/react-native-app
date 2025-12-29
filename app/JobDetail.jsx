import {
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const JobDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Back Button */}
      <View style={styles.headerNav}>
        <TouchableOpacity style={styles.backButton} onPress={router.back}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* SECTION 1 */}
        <View style={[styles.card, styles.cardShadow]}>
          <View style={styles.titleRow}>
            <View style={styles.purpleBar} />
            <Text style={styles.mainTitle}>We're looking for a...</Text>
          </View>

          <Text style={styles.subTitle}>Ui/Ux designing</Text>

          <View style={styles.tagContainer}>
            <View style={styles.tagBubble}>
              <MaterialCommunityIcons name="earth" size={18} color="white" />
              <Text style={styles.tagText}>Remote</Text>
            </View>

            <View style={styles.tagBubble}>
              <MaterialCommunityIcons
                name="clock-time-four-outline"
                size={18}
                color="white"
              />
              <Text style={styles.tagText}>2 to 4 months</Text>
            </View>
          </View>

          <View style={[styles.tagBubble, { width: 220, marginTop: 15 }]}>
            <MaterialIcons name="group" size={18} color="white" />
            <Text style={styles.tagText}>Hiring 3 to 4 freelancer</Text>
          </View>
        </View>

        {/* SECTION 2 */}
        <LinearGradient
          colors={["#CCF2F4", "#FFFFFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.budgetCard, styles.cardShadow]}
        >
          <Text style={styles.budgetTextSmall}>Client Budget</Text>
          <Text style={styles.budgetAmount}>5000-7000 $</Text>

          <View style={styles.proposalRow}>
            <View style={styles.proposalSegments}>
              {[1, 2, 3].map((i) => (
                <View
                  key={i}
                  style={[styles.segment, styles.activeSegment]}
                />
              ))}
              {[4, 5].map((i) => (
                <View
                  key={i}
                  style={[styles.segment, styles.inactiveSegment]}
                />
              ))}
            </View>
            <Text style={styles.proposalText}>2 Proposals</Text>
          </View>

          <TouchableOpacity style={styles.interestButton}>
            <Text style={styles.interestButtonText}>I'm Interested</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* SECTION 3 */}
        <View style={[styles.cardWithHeader, styles.cardShadow]}>
          <View style={styles.cardHeaderArea}>
            <Text style={styles.cardHeaderText}>Deliverables</Text>
          </View>

          <View style={styles.cardBody}>
            <Text style={styles.descriptionText}>
              Officia est asperior. Officia est asperior. Officia est asperior.
              Officia est asperior. Officia est asperior.
            </Text>

            <View style={styles.deadlineBox}>
              <View style={styles.deadlineHeader}>
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={20}
                  color="#0A5A72"
                />
                <Text style={styles.deadlineTitle}>Deadline</Text>
              </View>
              <Text style={styles.deadlineDate}>
                April 3 - April 3, 2010
              </Text>
            </View>
          </View>
        </View>

        {/* SECTION 4 */}
        <View style={[styles.card, styles.cardShadow]}>
          <View style={styles.infoItem}>
            <View style={styles.iconCircle}>
              <MaterialIcons
                name="business-center"
                size={24}
                color="white"
              />
            </View>
            <Text style={styles.infoLabel}>Project type</Text>
            <Text style={styles.infoValue}>Fixed Prize</Text>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="earth" size={24} color="white" />
            </View>
            <Text style={styles.infoLabel}>Language</Text>
            <Text style={styles.infoValue}>English , Urdu</Text>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="calendar-check"
                size={24}
                color="white"
              />
            </View>
            <Text style={styles.infoLabel}>Project Deadline</Text>
            <Text style={styles.infoValue}>
              April 3 - April 3, 2010
            </Text>
          </View>
        </View>

        {/* SECTION 5 */}
        <View style={[styles.cardWithHeader, styles.cardShadow]}>
          <View style={styles.cardHeaderArea}>
            <Text style={styles.cardHeaderText}>Clients & Proposals</Text>
          </View>

          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Name</Text>
            <Text style={styles.tableHeaderText}>Exprience</Text>
            <Text style={styles.tableHeaderText}>CV</Text>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.nameCell}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/44.jpg",
                }}
                style={styles.avatar}
              />
              <Text style={styles.rowText}>Sarah</Text>
            </View>
            <Text style={styles.rowText}>1</Text>
            <TouchableOpacity>
              <Text style={styles.cvText}>Download{"\n"}cv</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.nameCell}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/68.jpg",
                }}
                style={styles.avatar}
              />
              <Text style={styles.rowText}>Khadija</Text>
            </View>
            <Text style={styles.rowText}>3</Text>
            <TouchableOpacity>
              <Text style={styles.cvText}>Download{"\n"}cv</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SECTION 6 */}
        <View style={[styles.cardWithHeader, styles.cardShadow]}>
          <View style={styles.cardHeaderArea}>
            <Text style={styles.cardHeaderText}>Required Skills</Text>
          </View>
          <View style={styles.skillTagRow}>
            <View style={styles.skillTag}>
              <Text style={styles.skillTagText}>Node.js</Text>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillTagText}>Figma</Text>
            </View>
          </View>
        </View>

        {/* SECTION 7 */}
        <View style={[styles.cardWithHeader, styles.cardShadow]}>
          <View style={styles.cardHeaderArea}>
            <Text style={styles.cardHeaderText}>Freelancer Type</Text>
          </View>
          <View style={styles.skillTagRow}>
            <View style={styles.skillTag}>
              <Text style={styles.skillTagText}>Web</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  scrollContent: { padding: 15 },

  headerNav: { paddingHorizontal: 15, paddingVertical: 10 },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#8CB4B8",
    justifyContent: "center",
    alignItems: "center",
  },

  /* 🔹 GLOBAL CARD SHADOW */
  cardShadow: {
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },

  titleRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  purpleBar: {
    width: 5,
    height: 30,
    backgroundColor: "#6200EE",
    marginRight: 10,
    borderRadius: 2,
  },

  mainTitle: { fontSize: 20, fontWeight: "bold", color: "#000" },
  subTitle: {
    fontSize: 18,
    color: "#8CB4B8",
    marginLeft: 15,
    marginBottom: 15,
    fontWeight: "600",
  },

  tagContainer: { flexDirection: "row" },
  tagBubble: {
    flexDirection: "row",
    backgroundColor: "#8CA7B4",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: "center",
    marginRight: 10,
  },
  tagText: { color: "white", marginLeft: 5, fontSize: 12 },

  budgetCard: { borderRadius: 12, padding: 20, marginBottom: 20 },

  budgetTextSmall: { fontSize: 16, color: "#7B9E9E" },
  budgetAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A5A72",
    marginVertical: 10,
  },

  proposalRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  proposalSegments: { flexDirection: "row", marginRight: 10 },
  segment: { width: 15, height: 8, borderRadius: 2, marginRight: 4 },
  activeSegment: { backgroundColor: "#00D15D" },
  inactiveSegment: { backgroundColor: "#B2E0E6" },
  proposalText: { fontSize: 12, color: "#7B9E9E" },

  interestButton: {
    backgroundColor: "#0A5A72",
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  interestButtonText: { color: "white", fontWeight: "600" },

  cardWithHeader: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
  },

  cardHeaderArea: { backgroundColor: "#CCF2F4", padding: 15 },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A5A72",
  },

  cardBody: { padding: 15 },
  descriptionText: {
    color: "#999",
    lineHeight: 20,
    fontSize: 14,
    marginBottom: 15,
  },

  deadlineBox: {
    backgroundColor: "#E8EAF6",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C5CAE9",
  },

  deadlineHeader: { flexDirection: "row", alignItems: "center" },
  deadlineTitle: { fontSize: 14, fontWeight: "bold", marginLeft: 8 },
  deadlineDate: { marginLeft: 28 },

  infoItem: { alignItems: "center", marginBottom: 25 },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#0A5A72",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  infoLabel: { fontSize: 16, fontWeight: "bold", color: "#0A5A72" },
  infoValue: { fontSize: 14, color: "#0A5A72" },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#0A5A72",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  tableHeaderText: {
    flex: 1,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  tableRow: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    alignItems: "center",
  },

  nameCell: { flex: 1, flexDirection: "row", alignItems: "center" },
  avatar: { width: 35, height: 35, borderRadius: 17.5, marginRight: 10 },
  rowText: {
    flex: 1,
    textAlign: "center",
    color: "#0A5A72",
    fontWeight: "500",
  },
  cvText: {
    flex: 1,
    color: "#8CB4B8",
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
  },

  skillTagRow: { flexDirection: "row", padding: 15 },
  skillTag: {
    backgroundColor: "#E0D8DE",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginRight: 10,
  },
  skillTagText: { fontWeight: "600" },
});

export default JobDetail;
