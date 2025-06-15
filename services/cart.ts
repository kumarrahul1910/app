import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

const CART_STORAGE_KEY = '@cart_items';
const MAX_QUANTITY = 99;

class CartService {
  private items: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  private async loadCart() {
    try {
      const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        this.items = JSON.parse(storedCart);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }

  private async saveCart() {
    try {
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }

  addItem(product: Product, quantity: number = 1) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }

    if (quantity > MAX_QUANTITY) {
      throw new Error(`Quantity cannot exceed ${MAX_QUANTITY}`);
    }

    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > MAX_QUANTITY) {
        throw new Error(`Total quantity cannot exceed ${MAX_QUANTITY}`);
      }
      existingItem.quantity = newQuantity;
    } else {
      this.items.push({ product, quantity });
    }

    this.saveCart();
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    if (quantity > MAX_QUANTITY) {
      throw new Error(`Quantity cannot exceed ${MAX_QUANTITY}`);
    }

    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  getItemCount(): number {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  clear() {
    this.items = [];
    this.saveCart();
  }
}

export const cartService = new CartService(); 