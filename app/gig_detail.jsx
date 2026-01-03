import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock, RotateCcw, XCircle } from 'lucide-react-native';
import { useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const App = () => {
  const [activeTab, setActiveTab] = useState('Basic');

  const renderTab = (name) => (
    <TouchableOpacity
      style={[styles.tab, activeTab === name && styles.activeTab]}
      onPress={() => setActiveTab(name)}
    >
      <Text style={[styles.tabText, activeTab === name && styles.activeTabText]}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{headerShown : false}} />
      <StatusBar barStyle="dark-content" />
  
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft color="#78A5A6" size={28} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Profile Section */}
        <View style={styles.profileRow}>
          <Image 
            source={require("@/assets/girl.jpg")} 
            style={styles.avatar} 
          />
          <Text style={styles.profileName}>Grace Moody</Text>
        </View>

        <Text style={styles.gigTitle}>Clean & Minimalist Logo Design</Text>

        {/* Main Banner Image */}
        <View style={styles.bannerContainer}>
          <Image 
            source={require("@/assets/banner.png")} 
            style={styles.bannerImage}
          />
          <TouchableOpacity style={styles.nextArrow}>
             <ChevronRight color="white" size={20} />
          </TouchableOpacity>
        </View>

        {/* About This Gig */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>About This Gig</Text>
          <Text style={styles.cardSubTitle}>Clean & Minimalist Logo Design</Text>
          <Text style={styles.cardDescription}>
            I design unique, professional, and eye-catching logos tailored to your brand's identity. 
            Whether you need a minimalist, vintage, 3D, mascot, or signature style, I deliver 
            high-quality designs that make your business stand out.
          </Text>
        </View>

        {/* Get To Know Section */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Get To Know Grace Moody</Text>
          <View style={styles.miniProfileRow}>
             <Image source={require("@/assets/girl.jpg")} style={styles.miniImage} />
             <View style={{flex: 1}}>
                <Text style={styles.miniProfileName}>Grace Moody</Text>
                <Text style={styles.placeholderText} numberOfLines={4}>
                  Deserunt quisquam maDeserunt quisquam maDeserunt quisquam maDeserunt quisquam 
                  maDeserunt quisquam maDeserunt quisquam maDeserunt quisquam maDeserunt quisquam ma
                </Text>
             </View>
          </View>
        </View>

        {/* Pricing Card */}
        <View style={styles.pricingCard}>
          <View style={styles.tabBar}>
            {renderTab('Basic')}
            {renderTab('Standard')}
            {renderTab('Premium')}
          </View>

          <View style={styles.pricingContent}>
            <Text style={styles.priceTitle}>{activeTab}</Text>
            <Text style={styles.priceValue}>$ 644</Text>
            
            <Text style={styles.vendorName}>Violet Garza</Text>
            <Text style={styles.vendorSub}>Amet ut nostrud ea</Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Clock size={16} color="#A0A0A0" />
                <Text style={styles.statText}>1 Concepts</Text>
              </View>
              <View style={styles.statItem}>
                <Clock size={16} color="#A0A0A0" />
                <Text style={styles.statText}>1 day delivery</Text>
              </View>
              <View style={styles.statItem}>
                <RotateCcw size={16} color="#A0A0A0" />
                <Text style={styles.statText}>1 Revisions</Text>
              </View>
            </View>

            {/* Features */}
            <View style={styles.featureItem}>
              <CheckCircle2 size={20} color="#147D7E" fill="#E8F2F2" />
              <Text style={styles.featureText}>Instagram promotion</Text>
            </View>
            <View style={styles.featureItem}>
              <XCircle size={20} color="#B0B0B0" />
              <Text style={[styles.featureText, {color: '#B0B0B0'}]}>Facebook ads</Text>
            </View>
            <View style={styles.featureItem}>
              <CheckCircle2 size={20} color="#147D7E" fill="#E8F2F2" />
              <Text style={styles.featureText}>Youtube channel marketing</Text>
            </View>
          </View>
        </View>

        {/* Bottom Buttons */}
       <TouchableOpacity activeOpacity={0.8}>
  <LinearGradient
    colors={["#15A9B2", "#115B60"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.continueBtn}
  >
    <Text style={styles.continueBtnText}>Continue</Text>
  </LinearGradient>
</TouchableOpacity>

        <TouchableOpacity style={styles.contactBtn}>
          <Text style={styles.contactBtnText}>Contact me</Text>
        </TouchableOpacity>
        
        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F0F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#147D7E',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#000',
  },
  gigTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#043A53',
    marginTop: 20,
    marginBottom: 15,
  },
  bannerContainer: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nextArrow: {
    position: 'absolute',
    right: 10,
    top: '45%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 5,
    padding: 5,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cardSubTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#043A53',
    opacity : 0.5,
    lineHeight: 20,
  },
  miniProfileRow: {
    flexDirection: "column",
  },
  miniImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    marginTop: 15,
  },
  miniProfileName: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
  },
  placeholderText: {
    fontSize: 13,
    marginTop: 10,
    color: '#043A53',
    opacity : 0.5,
    lineHeight: 18,
  },
  pricingCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    overflow: 'hidden',
    marginBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#FFF',
    borderBottomColor: '#00334E',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00334E',
  },
  activeTabText: {
    color: '#00334E',
  },
  pricingContent: {
    padding: 20,
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#043A53',
    marginVertical: 5,
  },
  vendorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  vendorSub: {
    color: '#78A5A6',
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginLeft: 5,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#00334E',
    fontWeight: '500',
    marginLeft: 10,
  },
  continueBtn: {
    backgroundColor: '#147D7E',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  continueBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactBtn: {
    backgroundColor: '#FFF',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#147D7E',
  },
  contactBtnText: {
    color: '#147D7E',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;