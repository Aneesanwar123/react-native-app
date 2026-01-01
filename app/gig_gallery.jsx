import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GalleryScreen() {
  const router = useRouter();

  const steps = [
    { label: "Overview", screen: "/gig_overview" },
    { label: "Pricing", screen: "/gig_price" },
    { label: "Description", screen: "/gig_decs" },
    { label: "Gallery", screen: "/gig_gallery" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Steps */}
            <View style={styles.stepsRow}>
              {steps.map((step, index) => {
                const isActive = index === 3; // Gallery active
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.stepItem}
                    onPress={() => router.push(step.screen)}
                  >
                    <View
                      style={[styles.stepCircle, isActive && styles.activeCircle]}
                    >
                      <Text style={[styles.stepText, isActive && styles.activeText]}>
                        {index + 1}
                      </Text>
                    </View>
                    <Text style={[styles.stepLabel, isActive && styles.activeLabel]}>
                      {step.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Card */}
            <View style={styles.card}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>④ Gallery</Text>
              </View>

              {/* Card Body */}
              <Text style={styles.title}>Showcase Your Services In A Gig Gallery</Text>
              <Text style={styles.subtitle}>
                Encourage buyers to choose your gig by featuring a variety of your work.
              </Text>

              {/* Image Boxes */}
              <View style={styles.imageRow}>
                <View style={styles.imageBox}>
                  <Ionicons name="camera" size={24} color="#9AA0A6" />
                  <Text>Drop a photo</Text>
                </View>
                <View style={styles.imageBox}>
                  <Ionicons name="camera" size={24} color="#9AA0A6" />
                  <Text>Drop a photo</Text>
                </View>
                <View style={styles.imageBox}>
                  <Ionicons name="camera" size={24} color="#9AA0A6" />
                  <Text>Drop a photo</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save & Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  /* Back Button */
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#17747A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },

  /* Steps */
  stepsRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  stepItem: {
    alignItems: "center",
  },
  stepCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#9AA0A6",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    backgroundColor: "#688998",
  },
  stepText: {
    fontSize: 12,
    color: "#9AA0A6",
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  stepLabel: {
    fontSize: 12,
    color: "#9AA0A6",
    marginTop: 4,
  },
  activeLabel: {
    color: "#043A53",
    fontWeight: "700",
  },

  /* Card */
  card: {
    backgroundColor: "#F8F9FB",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5, // Android shadow
    shadowColor: "#000",  // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingBottom: 20,
    marginTop: 20,
  },
  cardHeader: {
    backgroundColor: "#043A53",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardHeaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    paddingLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 16,
    paddingLeft: 10,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent:"space-around",
    marginBottom: 20,
  },
  imageBox: {
    width: "27%",
    height: 100,
    backgroundColor: "#F8F9FB",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",

  },
  button: {
    backgroundColor: "#043A53",
    padding: 14,
    marginRight: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    alignSelf: "flex-end",
    width: 160,
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
