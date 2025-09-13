import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  reviews: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
}

export default function ProductDetailScreen() {
  const router = useRouter();
  const { productId } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data: Product = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product detail:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number, size: number = 16) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Ionicons key={i} name="star" size={size} color="#FFD700" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Ionicons key={i} name="star-half" size={size} color="#FFD700" />
        );
      } else {
        stars.push(
          <Ionicons key={i} name="star-outline" size={size} color="#DDD" />
        );
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#B33A3A" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF5F5" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image with Header Overlay */}
        <View style={styles.imageContainer}>
          {/* Header Overlay */}
          <View style={styles.headerOverlay}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bagButton}>
              <Ionicons name="bag-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <Image
            source={{ uri: product.images[selectedImageIndex] || product.thumbnail }}
            style={styles.productImage}
          />

          {/* Bottom Action Bar */}
          <View style={styles.imageFooter}>
            <TouchableOpacity style={styles.viewSimilarButton}>
              <Text style={styles.viewSimilarText}>View Similar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareIconBottom}>
              <Ionicons name="share-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.contentContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {renderStars(product.rating, 20)}
            </View>
            <Text style={styles.ratingText}>{product.rating.toFixed(2)}/5</Text>
          </View>

          {/* Sold By */}
          <Text style={styles.soldBy}>Sold by : {product.brand}</Text>

          {/* Price and Add to Bag */}
          <View style={styles.priceContainer}>
            <View style={styles.priceInfo}>
              <Text style={styles.currentPrice}>${discountedPrice.toFixed(2)}</Text>
              <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.addToBagButton}>
              <Text style={styles.addToBagText}>Add to Bag</Text>
            </TouchableOpacity>
          </View>

          {/* Highlights */}
          <View style={styles.highlightsSection}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            <View style={styles.highlightsGrid}>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Width</Text>
                <Text style={styles.highlightValue}>15.14</Text>
              </View>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Height</Text>
                <Text style={styles.highlightValue}>13.08</Text>
              </View>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Warranty</Text>
                <Text style={styles.highlightValue}>1 week</Text>
              </View>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Shipping</Text>
                <Text style={styles.highlightValue}>In 3-5 business days</Text>
              </View>
            </View>
          </View>

          {/* Ratings & Reviews */}
          <View style={styles.reviewsSection}>
            <Text style={styles.sectionTitle}>Ratings & Reviews</Text>

            {/* Eleanor Collins Review */}
            <View style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewerInfo}>
                  <View style={styles.reviewerAvatar}>
                    <Text style={styles.reviewerInitial}>E</Text>
                  </View>
                  <View style={styles.reviewerDetails}>
                    <Text style={styles.reviewerName}>Eleanor Collins</Text>
                    <Text style={styles.reviewerEmail}>eleanor.collins@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.reviewRating}>
                  {renderStars(3, 16)}
                </View>
              </View>
              <Text style={styles.reviewText}>Would not recommend...</Text>
            </View>

            {/* Lucas Gordon Review */}
            <View style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewerInfo}>
                  <View style={styles.reviewerAvatar}>
                    <Text style={styles.reviewerInitial}>L</Text>
                  </View>
                  <View style={styles.reviewerDetails}>
                    <Text style={styles.reviewerName}>Lucas Gordon</Text>
                    <Text style={styles.reviewerEmail}>lucas.gordon@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.reviewRating}>
                  {renderStars(3, 16)}
                </View>
              </View>
              <Text style={styles.reviewText}>Very satisfied!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
  },
  errorText: {
    fontSize: 16,
    color: '#666',
  },
  headerOverlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bagButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: '#F8A5A5',
    height: height * 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  productImage: {
    width: width * 0.8,
    height: '65%',
    resizeMode: 'contain',
  },
  imageFooter: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewSimilarButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  viewSimilarText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  shareIconBottom: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  currentPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  addToBagButton: {
    backgroundColor: '#B33A3A',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 25,
  },
  addToBagText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  highlightsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  highlightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  highlightItem: {
    width: '48%',
    marginBottom: 20,
    paddingRight: 10,
  },
  highlightLabel: {
    fontSize: 15,
    color: '#666',
    marginBottom: 6,
  },
  highlightValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  reviewsSection: {
    marginBottom: 30,
  },
  reviewItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reviewerInitial: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  reviewerDetails: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  reviewerEmail: {
    fontSize: 13,
    color: '#999',
  },
  reviewRating: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 25,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  soldBy: {
    fontSize: 15,
    color: '#666',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 20,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  }
});