import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const VaccinationAdd = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vaccinationAdd}>
      <Image
        style={styles.vaccinationAddChild}
        contentFit="cover"
        source={require("../assets/rectangle-18882.png")}
      />
      <Image
        style={styles.backgroundPic3Icon}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <View style={[styles.profileParent, styles.profileLayout]}>
        <Text style={[styles.profile, styles.profileFlexBox]}>Vaccine</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left.png")}
        />
      </View>
      <Image
        style={styles.backgroundPic3Icon}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Pressable
        style={[styles.profileGroup, styles.profileLayout]}
        onPress={() => navigation.navigate("Vaccine")}
      >
        <Text style={[styles.profile1, styles.profileFlexBox]}>
          Vaccination
        </Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left.png")}
        />
      </Pressable>
      <Text style={[styles.quantity, styles.dateTypo]}>Quantity</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.time, styles.dateTypo]}>Time</Text>
      <Pressable
        style={styles.closeButton}
        onPress={() => navigation.navigate("Vaccine")}
      >
        <View style={styles.rectangle} />
        <Text style={[styles.confirm, styles.profileFlexBox]}>Confirm</Text>
      </Pressable>
      <Text style={styles.vaccine}>Vaccine</Text>
      <View style={[styles.inputfields, styles.inputfieldsLayout]}>
        <Text style={styles.text} />
      </View>
      <View style={[styles.inputfields1, styles.inputfieldsLayout]}>
        <Text style={styles.text} />
      </View>
      <View style={[styles.inputfields2, styles.inputfieldsLayout]}>
        <Text style={styles.text} />
      </View>
      <View style={[styles.inputfields3, styles.inputfieldsLayout]}>
        <Text style={styles.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 22,
    position: "absolute",
  },
  profileFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  dateTypo: {
    height: 28,
    left: 14,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    width: 390,
    position: "absolute",
  },
  inputfieldsLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 27,
    width: 261,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    left: 92,
    borderStyle: "solid",
    position: "absolute",
  },
  vaccinationAddChild: {
    top: 111,
    width: 389,
    height: 733,
    left: 0,
    position: "absolute",
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  profile: {
    left: 119,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    top: 2,
    color: Color.colorBlack,
  },
  iconlylightarrowLeft: {
    width: 22,
    height: 22,
    top: 0,
    left: 0,
  },
  profileParent: {
    width: 224,
    left: 26,
    top: 78,
    height: 22,
  },
  profile1: {
    left: 93,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    top: 2,
    color: Color.colorBlack,
  },
  profileGroup: {
    width: 249,
    left: 26,
    top: 78,
    height: 22,
  },
  quantity: {
    top: 221,
  },
  date: {
    top: 279,
  },
  time: {
    top: 326,
  },
  rectangle: {
    height: "106.25%",
    width: "101.6%",
    top: "-3.12%",
    right: "-0.8%",
    bottom: "-3.12%",
    left: "-0.8%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorAliceblue,
    borderColor: Color.colorSilver,
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  confirm: {
    marginLeft: -35.5,
    top: "12.5%",
    left: "50%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    width: 70,
  },
  closeButton: {
    height: "3.79%",
    width: "32.05%",
    top: "67.3%",
    right: "33.33%",
    bottom: "28.91%",
    left: "34.62%",
    position: "absolute",
  },
  vaccine: {
    top: 173,
    left: 11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  inputfields: {
    top: 169,
  },
  inputfields1: {
    top: 218,
  },
  inputfields2: {
    top: 274,
  },
  inputfields3: {
    top: 318,
  },
  vaccinationAdd: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default VaccinationAdd;
