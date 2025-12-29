import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router'; // Added router
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 1. Mock Data for the list
const JOBS_DATA = [
  { id: '1', title: 'Ui/Ux designing', location: 'Islamabad', type: 'Full-time', initials: 'AU' },
  { id: '2', title: 'React Native Dev', location: 'Remote', type: 'Contract', initials: 'RN' },
  { id: '3', title: 'Backend Engineer', location: 'Karachi', type: 'Full-time', initials: 'BE' },
  { id: '4', title: 'Graphic Designer', location: 'Lahore', type: 'Freelance', initials: 'GD' },
  { id: '5', title: 'Product Manager', location: 'Dubai', type: 'Full-time', initials: 'PM' },
];

// 2. Optimized JobCard Component
const JobCard = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => router.push({ pathname: '/PostedJobDetail', params: { id: item.id } })}
    >
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>{item.initials}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <View style={styles.postedContainer}>
              <MaterialCommunityIcons name="history" size={14} color="#043A53" />
              <Text style={styles.postedText}>Recently posted</Text>
            </View>
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.tag}>
            <MaterialCommunityIcons name="briefcase-variant" size={16} color="#2D5D63" />
            <Text style={styles.tagText}>{item.type}</Text>
          </View>
          
          <View style={styles.tag}>
            <Ionicons name="location-sharp" size={16} color="#331A13" />
            <Text style={styles.tagText}>{item.location}</Text>
          </View>

          <View style={styles.tag}>
            <View style={styles.iconCircle}>
              <FontAwesome5 name="dollar-sign" size={10} color="#1E293B" />
            </View>
            <Text style={styles.tagText}>Salary</Text>
          </View>

          <View style={styles.tag}>
             <View style={styles.iconCircle}>
              <FontAwesome5 name="dollar-sign" size={10} color="#1E293B" />
            </View>
            <Text style={styles.tagText}>Monthly</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={JOBS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    backgroundColor: '#1E293B',
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleContainer: {
    marginLeft: 15,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  postedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  postedText: {
    fontSize: 13,
    color: '#8A7B7B',
    marginLeft: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.04)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    width: '48%',
    marginBottom: 10,
  },
  tagText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  iconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.2,
    borderColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
