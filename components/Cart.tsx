import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart } from './CartContext';

export const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.emptyCart}>
        <Ionicons name="cart-outline" size={64} color="#666" />
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {items.map((item) => (
        <View key={item.product.id} style={styles.cartItem}>
          <Image
            source={{ uri: item.product.image }}
            style={styles.productImage}
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.product.title}</Text>
            <Text style={styles.itemPrice}>${item.product.price.toFixed(2)}</Text>
          </View>
          
          <View style={styles.quantityControls}>
            <TouchableOpacity
              onPress={() => updateQuantity(item.product.id, item.quantity - 1)}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            
            <Text style={styles.quantity}>{item.quantity}</Text>
            
            <TouchableOpacity
              onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => removeFromCart(item.product.id)}
            style={styles.removeButton}
          >
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal:</Text>
          <Text style={styles.totalAmount}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Shipping:</Text>
          <Text style={styles.totalAmount}>$0.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, styles.grandTotal]}>Total:</Text>
          <Text style={[styles.totalAmount, styles.grandTotal]}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  quantityButton: {
    backgroundColor: '#007AFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  removeButton: {
    padding: 8,
  },
  totalContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 