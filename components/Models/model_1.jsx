import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const OrderModal = ({ visible, onClose, order }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{order?.title}</Text>
          <Text style={styles.desc}>{order?.desc}</Text>
          <Text style={styles.price}>{order?.price}</Text>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%"
  },
  title: { fontSize: 16, fontWeight: "bold" },
  desc: { marginTop: 10, fontSize: 14 },
  price: { marginTop: 10, fontWeight: "bold", fontSize: 14 },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#5AB7B3",
    padding: 10,
    borderRadius: 8
  },
  closeText: { color: "#fff", textAlign: "center" }
});
