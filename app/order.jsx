import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderDetails() {
  const router = useRouter();
  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Ionicons name="chevron-back" size={20} color="#555" />
          </TouchableOpacity>

          <View>
            <Text style={styles.headerTitle}>Order Details</Text>
            <Text style={styles.headerSub}>Order #143</Text>
          </View>

          <View style={styles.paidBadge}>
            <Ionicons name="checkmark-circle" size={14} color="#fff" />
            <Text style={styles.paidText}>Paid</Text>
          </View>
        </View>

        <TouchableOpacity 
            style={styles.bannerCard} 
            onPress={() => router.push("/gigs")} // navigate to Gigs screen
          >
            <Image
              source={require("../assets/page.png")}
              style={styles.bannerImage}
            />
          </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Package Details</Text>
          <Text style={styles.sectionSub}>
            Everything included in your order
          </Text>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.infoCard}>
            <Text style={styles.cardLabel}>Package Name</Text>
            <Text style={styles.cardValue}>
              Custom Design with Advanced Functionality
            </Text>
          </View>

          <View style={styles.priceCard}>
            <Text style={styles.cardLabel}>Package Price</Text>
            <Text style={styles.priceText}>$150.00</Text>
          </View>
        </View>

       <View style={styles.featuresCard}>
  <Text style={styles.featuresTitle}>Included Features</Text>

  {/* ONE ROW */}
  <View style={styles.featuresRow}>
    {[
      "React Web App",
      "React Web App",
    ].map((item, index) => (
      <View key={index} style={styles.featureItem}>
        <Ionicons name="checkmark-circle" size={18} color="#2ECC71" />
        <Text style={styles.featureText}>{item}</Text>
      </View>
    ))}
  </View>
</View>


      </ScrollView>

      {/* ===== BOTTOM TAB ===== */}
      <View style={styles.bottomTab}>
        <Ionicons name="home-outline" size={22} />
        <Ionicons name="receipt-outline" size={22} />
        <Ionicons name="stats-chart-outline" size={22} />
        <Ionicons name="person-outline" size={22} />
      </View>
    </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 10
  },

  backBtn: {
    backgroundColor: "#EEE",
    padding: 8,
    borderRadius: 20
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700"
  },

  headerSub: {
    fontSize: 12,
    color: "#888"
  },

  paidBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2BB0E6",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20
  },

  paidText: {
    color: "#fff",
    marginLeft: 4,
    fontSize: 12
  },

  /* Banner */
  bannerCard: {
    margin: 16,
    borderRadius: 22,
    overflow: "hidden",
    elevation: 4
  },

  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },

  /* Section */
  section: {
    paddingHorizontal: 16,
    marginTop: 10
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700"
  },

  sectionSub: {
    fontSize: 12,
    color: "#888"
  },

  /* Cards */
  cardRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 12
  },

  infoCard: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 14,
    borderRadius: 16,
    marginRight: 8
  },

  priceCard: {
    width: 120,
    backgroundColor: "#F0F0F0",
    padding: 14,
    borderRadius: 16
  },

  cardLabel: {
    fontSize: 12,
    color: "#777"
  },

  cardValue: {
    fontSize: 13,
    fontWeight: "600",
    marginTop: 4
  },

  priceText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2ECC71",
    marginTop: 4
  },
  featuresTitle : {
    fontSize:18,
    padding:18,
    fontWeight: "700"
  },
  featuresRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingLeft:20,
},

featureItem: {
  flexDirection: "row",
  alignItems: "center",
  marginLeft: 20
},

  /* Bottom Tab */
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10
  }
});
