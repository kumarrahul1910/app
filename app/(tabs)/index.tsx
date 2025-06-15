import { useCart } from '@/components/CartContext';
import { ThemedText } from '@/components/ThemedText';
import { products } from '@/services/products';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.logo}
        />
        <ThemedText type="title" style={styles.title}>CricHub</ThemedText>
        <ThemedText style={styles.subtitle}>Your One-Stop Cricket Shop</ThemedText>
      </View>

      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Bats', 'Balls', 'Protection', 'Accessories'].map((category) => (
            <TouchableOpacity key={category} style={styles.categoryButton}>
              <ThemedText>{category}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.productsGrid}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <ThemedText type="defaultSemiBold" numberOfLines={2}>{product.title}</ThemedText>
              <ThemedText style={styles.price}>${product.price.toFixed(2)}</ThemedText>
              {product.rating && (
                <View style={styles.rating}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <ThemedText style={styles.ratingText}>
                    {product.rating.rate} ({product.rating.count})
                  </ThemedText>
                </View>
              )}
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(product)}
              >
                <ThemedText style={styles.addButtonText}>Add to Cart</ThemedText>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#A1CEDC',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  categories: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  productsGrid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productInfo: {
    padding: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginVertical: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});
