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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={styles.container}>

            {/* Back */}
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Steps */}
            <View style={styles.stepsRow}>
              {["Overview", "Pricing", "Description", "Gallery"].map((label, i) => {
                const active = i === 1;
                return (
                  <View key={i} style={styles.stepItem}>
                    <View style={[styles.stepCircle, active && styles.activeCircle]}>
                      <Text style={[styles.stepText, active && styles.activeText]}>
                        {i + 1}
                      </Text>
                    </View>
                    <Text style={[styles.stepLabel, active && styles.activeLabel]}>
                      {label}
                    </Text>
                  </View>
                );
              })}
            </View>

            {/* BASIC */}
            <PackageCard title="Basic" />

            {/* STANDARD */}
            <PackageCard title="Standard" />

            {/* PREMIUM */}
            <PackageCard title="Premium" />

            {/* Bottom Buttons */}
            <View style={styles.footerButtons}>
              <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


/* PACKAGE CARD */
function PackageCard({ title }) {
  const [colorPalette, setColorPalette] = useState(true);
  const [logoUsage, setLogoUsage] = useState(false);
  const [typography, setTypography] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>② Scope & Pricing</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <TextInput placeholder="Name your package" style={styles.input} placeholderTextColor={"#00000033"} />
      <TextInput
        placeholder="Describe your offering"
        multiline
        style={[styles.input, styles.textArea]}
        placeholderTextColor={"#00000033"}
      />
      <TextInput placeholder="Delivery Time" style={styles.input} placeholderTextColor={"#00000033"} />
      <TextInput placeholder="Revisions" style={styles.input} placeholderTextColor={"#00000033"} />
      <TextInput placeholder="Concept" style={styles.input} placeholderTextColor={"#00000033"} />
      <TextInput placeholder="Price" style={styles.input} placeholderTextColor={"#00000033"} />

      {/* Checkboxes */}
      <View style={styles.checkboxRow}>
        <CheckBox label="Color Palette" value={colorPalette} setValue={setColorPalette} />
        <CheckBox label="Logo Usage Rules" value={logoUsage} setValue={setLogoUsage} />
        <CheckBox label="Typography Guide" value={typography} setValue={setTypography} />
      </View>
    </View>
  );
}

/* CHECKBOX */
function CheckBox({ label, value, setValue }) {
  return (
    <TouchableOpacity style={styles.checkItem} onPress={() => setValue(!value)}>
      <View style={[styles.checkbox, value && styles.checkedBox]}>
        {value && <Text style={styles.tick}>✓</Text>}
      </View>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },

  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#17747A",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  TextInput:{
    placeholderTextColor: "#000",
  },
  stepsRow: {
    flexDirection: "row",
    justifyContent:"space-evenly",
    gap: 50,
    marginVertical: 20,
  },
  stepItem: { alignItems: "center" },
  stepCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#9AA0A6",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: { backgroundColor: "#688998" },
  stepText: { fontSize: 12, color: "#9AA0A6" },
  activeText: { color: "#fff", fontWeight: "700" },
  stepLabel: { fontSize: 12, marginTop: 4, color: "#9AA0A6" },
  activeLabel: { color: "#043A53", fontWeight: "700" },

  card: {
    backgroundColor: "#F8F9FB",
    borderRadius: 12,
    marginBottom: 24,
    overflow: "hidden",
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
    textAlign: "center",
    marginVertical: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textArea: { height: 100 },

  checkboxRow: {
    margin: 16,
    flexDirection : "row",
    flexWrap : "wrap",
    gap : 12,
  },
  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap : "wrap",
    marginBottom: 12,
  },
  checkbox: {
    width: 22,
    flexDirection : "row",
    height: 22,
    borderWidth: 2,
    borderColor: "#9AA0A6",
    borderRadius: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "#043A53",
    borderColor: "#043A53",
  },
  tick: { color: "#fff", fontWeight: "700" },
  checkboxLabel: { fontSize: 14 },

  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backButton: {
    backgroundColor: "#6B8795",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  backText: { color: "#fff", fontWeight: "600" },

  continueButton: {
    backgroundColor: "#043A53",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  continueText: { color: "#fff", fontWeight: "600" },
});
