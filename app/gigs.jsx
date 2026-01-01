import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const gigs = () => { 
  const router = useRouter();
  const [search, setSearch] = useState("");

  const orders = [
    { 
      id: "1", 
      desc: "I will create professional 2D and 3D animated videos...", 
      category: "Video & Animation",
      type: "Animation",
      image: require("../assets/img_1.png")
    },
    { 
      id: "2", 
      desc: "I will design a modern logo for your business...", 
      category: "Graphic Design",
      type: "Logo Design",
      image: require("../assets/img_2.png")
    },
    { 
      id: "3", 
      desc: "I will develop a fully functional e-commerce website...", 
      category: "Web Development",
      type: "E-commerce",
      image: require("../assets/img_3.png")
    },
    { 
      id: "4", 
      desc: "I will create a realistic 3D model for your project...", 
      category: "3D Modeling",
      type: "3D Design",
      image: require("../assets/img_4.png")
    },
  ];

  const filteredOrders = orders.filter(order =>
    order.desc.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Pressable onPress={() => router.push("/order")}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.cardContent}>
          <Text style={styles.cardDesc}>{item.desc}</Text>
          <Text style={styles.categoryText}>Category: {item.category}</Text>
          <Text style={styles.typeText}>{item.type}</Text>
        </View>
        <TouchableOpacity style={styles.menuBtn}>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#777" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={false} />
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.safeContainer}>
        <LinearGradient
          colors={["#15A9B2", "#17747A"]}
          style={styles.headerCard}
        >
          <Text style={styles.headerTitle}>Order Management</Text>
          <Text style={styles.headerSubtitle}>
            Manage orders easily with smart tools — track progress, get updates, and chat all in one place.
          </Text>
        </LinearGradient>

        <TextInput
          placeholder="Search Gigs..."
          placeholderTextColor="#777"
          value={search}
          onChangeText={setSearch}
          style={styles.searchBar}
        />

        {/* Gradient Button */}
        <View style={styles.buttonRow}>
          <View style={{ flex: 1 }} />
          <TouchableOpacity onPress={() => router.push("/gig_overview")}>
            <LinearGradient
              colors={["#15A9B2", "#17747A"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>Add New Gig</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        />

      </SafeAreaView>
    </>
  );
};

export default gigs;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#efefefff", padding: 15 },

  headerCard: { 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15 
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  headerSubtitle: { fontSize: 13, color: "#fff", marginTop: 5 },

  searchBar: { 
    backgroundColor: "#fff", 
    borderRadius: 8, 
    padding: 12, 
    borderWidth: 1, 
    borderColor: "#BDBDBD", 
    marginBottom: 10 
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 15
  },

  addButton: { 
    width: 123,
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: "center", 
    elevation: 2
  },

  addButtonText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 14 
  },

  card: { 
    flexDirection: "row", 
    backgroundColor: "#fff", 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 15, 
    elevation: 2,
    position: "relative",
    alignItems: "center"
  },

  cardImage: { width: 120, height: 80, borderRadius: 10 }, 
  cardContent: { flex: 1, marginLeft: 10, justifyContent: "center" },

  menuBtn: { 
    position: "absolute", 
    right: 10, 
    top: 10 
  },

  cardDesc: { fontSize: 14, color: "#075458", fontWeight:"600" },
  categoryText: { fontSize: 12, color: "#075458", fontWeight:"500", marginTop: 4 },
  typeText: { fontSize: 12, color: "#075458", fontWeight:"400", marginTop: 2 }
});
