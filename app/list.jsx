import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../assets/girl.jpg");

const list = () => { 
  const router = useRouter();
  const [search, setSearch] = useState("");



  const orders = [
    { id: "1", title: "Package: Basic", desc: "I create unique, professional designs", price: "Price: $88.9", status: "Paid"},
    { id: "2", title: "Package: Standard", desc: "Professional designs for your project", price: "Price: $120.0", status: "Paid" },
    { id: "3", title: "Package: Premium", desc: "High-quality designs with support", price: "Price: $200.5", status: "Paid" },
    { id: "4", title: "Package: Ultimate", desc: "All-inclusive package for businesses", price: "Price: $350.0", status: "Paid" },
  ];

  const filteredOrders = orders.filter(order =>
    order.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Pressable onPress={()=>router.push("/order")}>
      <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc}>{item.desc}</Text>
      <View style={styles.cardBottom}>
        <View style={styles.statusTag}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity style={styles.menuBtn}>
            <MaterialCommunityIcons name="dots-vertical" size={20} color="#777" />
          </TouchableOpacity>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </View>
  </View>
    </Pressable>
);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.headerCard}>
          <Text style={styles.headerTitle}>Order Management</Text>
          <Text style={styles.headerSubtitle}>
            Manage orders easily with smart tools — track progress, get updates, and chat all in one place.
          </Text>
        </View>

        <TextInput
          placeholder="Search Order..."
          placeholderTextColor="#777"
          value={search}
          onChangeText={setSearch}
          style={styles.searchBar}
        />

        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        />

        <Pressable onPress={() => router.replace("/")} style={{ marginTop: 20 }}>
          <Text style={{ color: "blue", fontWeight: "bold" }}>Go Back Home</Text>
        </Pressable>

      </SafeAreaView>
    </>
  );
}


export default list;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#efefefff", padding: 15 },

  headerCard: { backgroundColor: "#5AB7B3", padding: 15, borderRadius: 10, marginBottom: 15 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  headerSubtitle: { fontSize: 13, color: "#fff", marginTop: 5 },

  searchBar: { backgroundColor: "#fff", borderRadius: 8, padding: 12, borderWidth: 1, borderColor: "#BDBDBD", marginBottom: 15 },

  card: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 10, padding: 10, marginBottom: 15, elevation: 2 },
  cardImage: { width: 70, height: 70, borderRadius: 10 },
  cardContent: { flex: 1, marginLeft: 10 },
  cardTitle: { fontSize: 15, fontWeight: "bold", color: "#333" },
  cardDesc: { fontSize: 12, color: "#777", marginBottom: 6 },

  cardBottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  statusTag: { backgroundColor: "#17C2A4", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  statusText: { color: "#fff", fontSize: 12 },

  menuBtn: { position: "relative" },
  price: { fontSize: 14, fontWeight: "bold", color: "#333", marginTop: 5 },
});
