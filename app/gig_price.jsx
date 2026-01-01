import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
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

export default function PricingScreen() {
  const router = useRouter();

  // Checkbox state
  const [colorPalette, setColorPalette] = useState(true);
  const [logoUsage, setLogoUsage] = useState(false);

  // Step navigation mapping
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

      {/* Keyboard handling */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Steps */}
            <View style={styles.stepsRow}>
              {steps.map((step, index) => {
                const isActive = index === 1; // Highlight current step (Pricing)
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.stepItem}
                    onPress={() => router.push(step.screen)}
                  >
                    <View style={[styles.stepCircle, isActive && styles.activeCircle]}>
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
                <Text style={styles.cardHeaderText}>② Scope & Pricing</Text>
              </View>

              {/* Card Body */}
              <Text style={styles.title}>Basic</Text>

              <TextInput
                placeholder="Name your package"
                style={styles.input}
                placeholderTextColor="#9F9F9F"
              />

              <TextInput
                placeholder="Describe your offering"
                multiline
                placeholderTextColor="#9F9F9F"
                style={[styles.input, styles.textArea]}
              />

              <TextInput
                placeholder="Delivery Time"
                style={styles.input}
                placeholderTextColor="#9F9F9F"
              />
              <TextInput
                placeholder="Revisions"
                style={styles.input}
                placeholderTextColor="#9F9F9F"
              />
              <TextInput
                placeholder="Concept"
                style={styles.input}
                placeholderTextColor="#9F9F9F"
              />
              <TextInput
                placeholder="Price"
                style={styles.input}
                placeholderTextColor="#9F9F9F"
              />

              {/* Checkbox Row */}
              <View style={styles.checkboxRow}>
                <TouchableOpacity
                  style={[styles.checkbox, colorPalette && styles.checkedBox]}
                  onPress={() => setColorPalette(!colorPalette)}
                >
                  {colorPalette && <Text style={styles.checkboxTick}>✓</Text>}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>Color Palette</Text>

                <TouchableOpacity
                  style={[styles.checkbox, logoUsage && styles.checkedBox]}
                  onPress={() => setLogoUsage(!logoUsage)}
                >
                  {logoUsage && <Text style={styles.checkboxTick}>✓</Text>}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>Logo Usage Rules</Text>
              </View>
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

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginVertical: 16,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#F8F9FB",
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#9F9F9F",
  },

  textArea: {
    height: 100,
  },

  /* Checkbox */
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    margin: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#9AA0A6",
    borderRadius: 4,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "#043A53",
    borderColor: "#043A53",
    alignItems: "center",
  },
  checkboxTick: {
    color: "#fff",
    fontWeight: "700",
    alignItems: "center",
  },
  checkboxLabel: {
    marginRight: 30,
    fontSize: 14,
    color: "#333",
    alignItems: "center",
  },
});
