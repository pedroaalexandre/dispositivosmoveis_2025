import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { numberFormat } from "../services/numberFormat";

export const Cart = ({ itensCarrinho = [], removeItemFromCart }) => {
  // Calcula o valor total dos itens no carrinho
  const total = itensCarrinho.reduce((sum, item) => sum + (item.price || 0), 0);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{numberFormat(item.price)}</Text>
      </View>
      <Button
        title="Remover"
        color="red"
        onPress={() => removeItemFromCart(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {itensCarrinho.length === 0 ? (
        <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={itensCarrinho}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>{numberFormat(total)}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "#888",
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#007acc",
    marginTop: 4,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28a745",
  },
});