import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { icon: "location-outline", title: "Address", subtitle: "Manage your saved address", action: () => {} },
    { icon: "receipt-outline", title: "Order History", subtitle: "View your past orders", action: () => {} },
    { icon: "language-outline", title: "Language", subtitle: "", action: () => {} },
    { icon: "notifications-outline", title: "Notifications", subtitle: "", action: () => {} },
    { icon: "chatbubble-outline", title: "Contact Us", subtitle: "", action: () => {} },
    { icon: "help-circle-outline", title: "Get Help", subtitle: "", action: () => {} },
    { icon: "shield-outline", title: "Privacy Policy", subtitle: "", action: () => {} },
    { icon: "document-text-outline", title: "Terms and Conditions", subtitle: "", action: () => {} },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF5F5" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://via.placeholder.com/60x60/CCCCCC/FFFFFF?text=O' }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Olivia</Text>
              <Text style={styles.userEmail}>Olivia@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={item.action}>
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon as any} size={24} color="#666" />
                <View style={styles.menuItemText}>
                  <Text style={styles.menuItemTitle}>{item.title}</Text>
                  {item.subtitle ? (
                    <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
                  ) : null}
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.push("/login")}>
          <Ionicons name="log-out-outline" size={24} color="#B33A3A" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="pricetag-outline" size={24} color="#999" />
          <Text style={styles.navText}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={24} color="#999" />
          <Text style={styles.navText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Ionicons name="person" size={24} color="#B33A3A" />
          <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  menuButton: {
    padding: 5,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E5E5E5",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  editButton: {
    padding: 8,
  },
  menuContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuItemText: {
    marginLeft: 15,
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 2,
  },
  menuItemSubtitle: {
    fontSize: 12,
    color: "#999",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 16,
    color: "#B33A3A",
    fontWeight: "500",
    marginLeft: 15,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  activeNavItem: {
    // Active state styling
  },
  navText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  activeNavText: {
    color: "#B33A3A",
  },
});