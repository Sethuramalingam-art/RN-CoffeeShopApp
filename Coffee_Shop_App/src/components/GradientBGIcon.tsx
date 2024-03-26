import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/theme';

interface GradientBGIconProps {
  name: string;
  size: number;
  color: string;
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({name, size, color}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradientBG}></LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
  LinearGradientBG: {},
});

export default GradientBGIcon;
