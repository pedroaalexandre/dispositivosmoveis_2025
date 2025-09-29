import { Text, View, FlatList, StyleSheet, Button} from "react-native";

export const Cart = ({ cartItems = [], removeItemFromCart }) => {

  // Calcula o total
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyMessage}>Seu carrinho está vazio.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
              <Button title="Remover" onPress={() => removeItemFromCart(item.id)} />
            </View>
          )}
        />
      )}
      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  empty: { fontSize: 18, color: "#888", textAlign: "center", marginTop: 32 },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: { fontSize: 16, flex: 1 },
  price: { fontSize: 16, fontWeight: "bold", marginHorizontal: 8 },
  total: { fontSize: 20, fontWeight: "bold", marginTop: 24, textAlign: "right" },
});