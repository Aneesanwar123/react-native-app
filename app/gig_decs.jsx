import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DescriptionScreen() {
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
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
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
                const isActive = index === 2; // Description is active
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
                <Text style={styles.cardHeaderText}>③ Description</Text>
              </View>

              {/* Card Body */}
              <TextInput
                placeholder="Briefly Describe Your Gig"
                multiline
                style={[styles.input, styles.textArea]}
                placeholderTextColor="#9F9F9F"
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
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
    marginTop: 20,
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
  },
  cardHeaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  /* Input */
  input: {
    backgroundColor: "#F8F9FB",
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#9F9F9F",
  },
  textArea: {
    height: 300,
  },

  /* Button */
  button: {
    backgroundColor: "#043A53",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    alignSelf: "flex-end",
    width: 120,
    marginHorizontal: 16,
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
