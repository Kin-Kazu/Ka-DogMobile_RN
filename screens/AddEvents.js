import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AddEvents = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addEvents}>
      <Image
        style={styles.addEventsChild}
        contentFit="cover"
        source={require("../assets/rectangle-18882.png")}
      />
      <View style={[styles.inputfields, styles.inputfieldsBorder]}>
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
      <View style={[styles.inputfields4, styles.inputfieldsBorder]}>
        <Text style={styles.text} />
      </View>
      <Image
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
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
        style={[styles.backgroundPic3Icon, styles.backgroundPic3IconPosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Pressable
        style={[styles.profileGroup, styles.profileLayout]}
        onPress={() => navigation.navigate("Notification1")}
      >
        <Text style={[styles.profile1, styles.profileFlexBox]}>Events</Text>
        <Image
          style={[styles.iconlylightarrowLeft, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left.png")}
        />
      </Pressable>
      <Text style={[styles.title, styles.titleTypo]}>Title</Text>
      <Text style={[styles.description, styles.titleTypo]}>Description</Text>
      <Text style={[styles.date, styles.dateTypo]}>{`Date `}</Text>
      <Text style={[styles.time, styles.dateTypo]}>Time</Text>
      <Text style={[styles.address, styles.dateTypo]}>Address</Text>
      <Text style={[styles.activities, styles.dateTypo]}>Activities</Text>
      <View style={[styles.addEventsItem, styles.addChildLayout]} />
      <View style={[styles.addEventsInner, styles.addChildLayout]} />
      <Text style={[styles.parade, styles.gamesTypo]}>Parade</Text>
      <View style={[styles.rectangleView, styles.addChildLayout]} />
      <Text style={[styles.funMatch, styles.gamesTypo]}>Fun Match</Text>
      <View style={[styles.addEventsChild1, styles.addChildLayout]} />
      <View style={[styles.addEventsChild2, styles.addChildLayout]} />
      <Text style={[styles.fashionShow, styles.gamesTypo]}>Fashion Show</Text>
      <Text style={[styles.petBlessings, styles.gamesTypo]}>Pet Blessings</Text>
      <Text style={[styles.games, styles.gamesTypo]}>Games</Text>
      <Image
        style={styles.insertImageHere1Icon}
        contentFit="cover"
        source={require("../assets/insert-image-here-1.png")}
      />
      <Pressable
        style={styles.closeButton}
        onPress={() => navigation.navigate("Event1")}
      >
        <View style={styles.rectangle} />
        <Text style={[styles.confirm, styles.profileFlexBox]}>Confirm</Text>
      </Pressable>
      <Image
        style={[styles.checkmarkIcon, styles.checkmarkIconLayout]}
        contentFit="cover"
        source={require("../assets/checkmark.png")}
      />
      <Image
        style={[styles.checkmarkIcon1, styles.checkmarkIconLayout]}
        contentFit="cover"
        source={require("../assets/checkmark.png")}
      />
      <Image
        style={[styles.checkmarkIcon2, styles.checkmarkIconLayout]}
        contentFit="cover"
        source={require("../assets/checkmark.png")}
      />
      <Image
        style={[styles.checkmarkIcon3, styles.checkmarkIconLayout]}
        contentFit="cover"
        source={require("../assets/checkmark.png")}
      />
      <Image
        style={[styles.checkmarkIcon4, styles.checkmarkIconLayout]}
        contentFit="cover"
        source={require("../assets/checkmark.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputfieldsBorder: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    position: "absolute",
  },
  inputfieldsLayout: {
    left: 94,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 27,
    width: 261,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  backgroundPic3IconPosition: {
    top: 0,
    left: 0,
  },
  profileLayout: {
    height: 22,
    position: "absolute",
  },
  profileFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  dateTypo: {
    height: 26,
    width: 85,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  addChildLayout: {
    height: 29,
    width: 266,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 93,
    position: "absolute",
  },
  gamesTypo: {
    width: 131,
    left: 165,
    height: 26,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  checkmarkIconLayout: {
    height: 23,
    width: 26,
    left: 330,
    position: "absolute",
  },
  addEventsChild: {
    top: 110,
    width: 389,
    height: 733,
    left: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  inputfields: {
    top: 237,
    height: 27,
    width: 261,
    left: 93,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
  },
  inputfields1: {
    top: 277,
  },
  inputfields2: {
    top: 320,
  },
  inputfields3: {
    top: 360,
  },
  inputfields4: {
    top: 649,
    left: 23,
    width: 336,
    height: 101,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
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
    left: 127,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_8xl,
    top: 2,
    color: Color.colorBlack,
  },
  profileGroup: {
    width: 215,
    left: 26,
    top: 78,
    height: 22,
  },
  title: {
    top: 240,
    height: 28,
    left: 13,
    width: 390,
  },
  description: {
    top: 624,
    left: 7,
    width: 280,
    height: 25,
  },
  date: {
    top: 276,
    left: 13,
  },
  time: {
    top: 319,
    left: 14,
  },
  address: {
    top: 362,
    left: 13,
  },
  activities: {
    top: 403,
    left: 13,
  },
  addEventsItem: {
    top: 429,
  },
  addEventsInner: {
    top: 469,
  },
  parade: {
    top: 477,
  },
  rectangleView: {
    top: 509,
  },
  funMatch: {
    top: 514,
  },
  addEventsChild1: {
    top: 546,
  },
  addEventsChild2: {
    top: 588,
  },
  fashionShow: {
    top: 437,
  },
  petBlessings: {
    top: 554,
  },
  games: {
    top: 591,
  },
  insertImageHere1Icon: {
    top: 143,
    left: 138,
    width: 136,
    height: 52,
    position: "absolute",
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
    height: "50.84%",
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
    top: "90.05%",
    right: "33.59%",
    bottom: "6.16%",
    left: "34.36%",
    position: "absolute",
  },
  checkmarkIcon: {
    top: 432,
  },
  checkmarkIcon1: {
    top: 472,
  },
  checkmarkIcon2: {
    top: 513,
  },
  checkmarkIcon3: {
    top: 549,
  },
  checkmarkIcon4: {
    top: 591,
  },
  addEvents: {
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddEvents;
