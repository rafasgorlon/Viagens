import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

interface FooterTab {
  id: string;
  icon: string;
  label: string;
}

interface FooterProps {
  activeTab?: string;
  onTabPress?: (tabId: string) => void;
}

const tabs: FooterTab[] = [
  {
    id: 'explore',
    icon: '🌐',
    label: 'Explorar',
  },
  {
    id: 'trip',
    icon: '🧳',
    label: 'Minha Viagem',
  },
];

const Footer: React.FC<FooterProps> = ({
  activeTab = 'explore',
  onTabPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />

      <View style={styles.tabRow}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tab}
              onPress={() => onTabPress?.(tab.id)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isActive && styles.iconWrapperActive,
                ]}
              >
                <Text
                  style={[
                    styles.tabIcon,
                    isActive && styles.tabIconActive,
                  ]}
                >
                  {tab.icon}
                </Text>
              </View>

              <Text
                style={[
                  styles.tabLabel,
                  isActive && styles.tabLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {Platform.OS === 'ios' && (
        <View style={styles.homeIndicator} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A0A0F',
    paddingTop: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#1E1E2E',
    marginHorizontal: 20,
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
    gap: 4,
  },

  iconWrapper: {
    width: 48,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconWrapperActive: {
    backgroundColor: '#1E1E2E',
  },

  tabIcon: {
    fontSize: 19,
    color: '#555555',
  },

  tabIconActive: {
    color: '#E8C547',
  },

  tabLabel: {
    fontSize: 11,
    color: '#555555',
    letterSpacing: 0.5,
    fontWeight: '400',
  },

  tabLabelActive: {
    color: '#E8C547',
    fontWeight: '700',
  },

  homeIndicator: {
    height: 20,
  },
});

export default Footer;