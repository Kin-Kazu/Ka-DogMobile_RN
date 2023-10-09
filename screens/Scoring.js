import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Scoring = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.scoringIcon}
      resizeMode="cover"
      source={require("../assets/scoring.png")}
    >
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <View style={[styles.rectangleView, styles.frameChildLayout]} />
        <Image
          style={[styles.rectangleIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18828.png")}
        />
        <View style={[styles.inputfield, styles.inputfieldLayout9]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield1, styles.inputfieldLayout8]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield2, styles.inputfieldLayout8]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield3, styles.inputfieldLayout8]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield4, styles.inputfieldLayout7]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield5, styles.inputfieldLayout7]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield6, styles.inputfieldLayout9]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield7, styles.inputfieldLayout7]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield8, styles.inputfieldLayout6]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield9, styles.inputfieldLayout6]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield10, styles.inputfieldLayout6]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield11, styles.inputfieldLayout9]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield12, styles.inputfieldLayout5]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield13, styles.inputfieldLayout5]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield14, styles.inputfieldLayout5]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield15, styles.inputfieldLayout5]}>
          <Text style={styles.text} />
        </View>
        <Text style={[styles.contestant1, styles.contestantTypo1]}>
          Contestant #1
        </Text>
        <Text style={[styles.contestant2, styles.contestantTypo]}>
          Contestant #2
        </Text>
        <Text style={[styles.contestant3, styles.contestantTypo1]}>
          Contestant #3
        </Text>
        <Text style={[styles.contestant4, styles.contestantTypo]}>
          Contestant #4
        </Text>
        <Text style={[styles.contestant5, styles.contestantTypo1]}>
          Contestant #5
        </Text>
        <Text style={[styles.text16, styles.textTypo7]}>1</Text>
        <Text style={[styles.text17, styles.textTypo7]}>2</Text>
        <Text style={[styles.text18, styles.textTypo7]}>4</Text>
        <Text style={[styles.text19, styles.textTypo7]}>3</Text>
        <Text style={[styles.text20, styles.textTypo6]}>1</Text>
        <Text style={[styles.text21, styles.textTypo6]}>2</Text>
        <Text style={[styles.text22, styles.textTypo6]}>4</Text>
        <Text style={[styles.text23, styles.textTypo6]}>3</Text>
        <View style={[styles.inputfield16, styles.inputfieldLayout4]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield17, styles.inputfieldLayout4]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield18, styles.inputfieldLayout4]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield19, styles.inputfieldLayout4]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield20, styles.inputfieldLayout3]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield21, styles.inputfieldLayout3]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield22, styles.inputfieldLayout3]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield23, styles.inputfieldLayout3]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield24, styles.inputfieldLayout2]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield25, styles.inputfieldLayout2]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield26, styles.inputfieldLayout2]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield27, styles.inputfieldLayout2]}>
          <Text style={styles.text} />
        </View>
        <Text style={[styles.contestant6, styles.contestantTypo1]}>
          Contestant #6
        </Text>
        <Text style={[styles.text36, styles.textTypo5]}>1</Text>
        <Text style={[styles.text37, styles.textTypo5]}>2</Text>
        <Text style={[styles.text38, styles.textTypo5]}>4</Text>
        <Text style={[styles.text39, styles.textTypo5]}>3</Text>
        <Text style={[styles.contestant8, styles.contestantTypo1]}>
          Contestant #8
        </Text>
        <Text style={[styles.text40, styles.textTypo4]}>1</Text>
        <Text style={[styles.text41, styles.textTypo4]}>2</Text>
        <Text style={[styles.text42, styles.textTypo4]}>4</Text>
        <Text style={[styles.text43, styles.textTypo4]}>3</Text>
        <Text style={[styles.contestant7, styles.contestantTypo1]}>
          Contestant #7
        </Text>
        <Text style={[styles.text44, styles.textTypo3]}>1</Text>
        <Text style={[styles.text45, styles.textTypo3]}>2</Text>
        <Text style={[styles.text46, styles.textTypo3]}>4</Text>
        <Text style={[styles.text47, styles.textTypo3]}>3</Text>
        <Text style={[styles.text48, styles.textTypo2]}>1</Text>
        <Text style={[styles.text49, styles.textTypo2]}>2</Text>
        <Text style={[styles.text50, styles.textTypo2]}>4</Text>
        <Text style={[styles.text51, styles.textTypo2]}>3</Text>
        <Text style={[styles.text52, styles.textTypo1]}>1</Text>
        <Text style={[styles.text53, styles.textTypo1]}>2</Text>
        <Text style={[styles.text54, styles.textTypo1]}>4</Text>
        <Text style={[styles.text55, styles.textTypo1]}>3</Text>
        <View style={[styles.inputfield28, styles.inputfieldLayout1]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield29, styles.inputfieldLayout1]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield30, styles.inputfieldLayout]}>
          <Text style={styles.text} />
        </View>
        <View style={[styles.inputfield31, styles.inputfieldLayout]}>
          <Text style={styles.text} />
        </View>
        <Text style={[styles.text60, styles.textTypo7]}>1</Text>
        <Text style={[styles.text61, styles.textTypo7]}>2</Text>
        <Text style={[styles.text62, styles.textTypo7]}>4</Text>
        <Text style={[styles.text63, styles.textTypo7]}>3</Text>
        <Text style={[styles.text64, styles.textTypo]}>1</Text>
        <Text style={[styles.text65, styles.textTypo]}>2</Text>
        <Text style={[styles.text66, styles.textTypo]}>4</Text>
        <Text style={[styles.text67, styles.textTypo]}>3</Text>
      </View>
      <Image
        style={styles.backgroundPic3Icon}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Pressable
        style={styles.profileParent}
        onPress={() => navigation.navigate("KaDogDashboardJudge")}
      >
        <Text style={[styles.profile, styles.submitFlexBox]}>Judging</Text>
        <Image
          style={styles.iconlylightarrowLeft}
          contentFit="cover"
          source={require("../assets/iconlylightarrow--left.png")}
        />
      </Pressable>
      <View style={[styles.footer, styles.footerLayout]}>
        <View style={[styles.taskbar, styles.footerLayout]}>
          <Image
            style={[styles.taskbar, styles.footerLayout]}
            contentFit="cover"
            source={require("../assets/backgroundpic-6.png")}
          />
        </View>
        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate("Ranking")}
        >
          <View style={styles.rectangle} />
          <Text style={[styles.submit, styles.submitFlexBox]}>Submit</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    marginTop: 18,
    height: 93,
    width: 351,
  },
  inputfieldLayout9: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    height: 22,
    position: "absolute",
  },
  inputfieldLayout8: {
    top: 176,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputfieldLayout7: {
    top: 283,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputfieldLayout6: {
    top: 397,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputfieldLayout5: {
    top: 501,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  contestantTypo1: {
    height: 27,
    width: 200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  contestantTypo: {
    left: 16,
    height: 27,
    width: 200,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  textTypo7: {
    height: 28,
    width: 26,
    top: 33,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo6: {
    top: 479,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  inputfieldLayout4: {
    top: 613,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputfieldLayout3: {
    top: 721,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputfieldLayout2: {
    top: 832,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo5: {
    top: 591,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo4: {
    top: 809,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo3: {
    top: 699,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo2: {
    top: 369,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo1: {
    top: 151,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  inputfieldLayout1: {
    top: 55,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inputfieldLayout: {
    top: 52,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 22,
    width: 29,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorDeepskyblue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    top: 258,
    height: 28,
    width: 26,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  submitFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  footerLayout: {
    height: 85,
    width: 390,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
    height: 93,
    width: 351,
    backgroundColor: Color.colorGray_200,
  },
  frameItem: {
    zIndex: 1,
    backgroundColor: Color.colorGray_200,
    marginTop: 18,
  },
  frameInner: {
    zIndex: 2,
    backgroundColor: Color.colorGray_200,
    marginTop: 18,
  },
  rectangleView: {
    zIndex: 3,
    backgroundColor: Color.colorGray_200,
    marginTop: 18,
  },
  rectangleIcon: {
    zIndex: 4,
  },
  frameChild1: {
    zIndex: 5,
  },
  frameChild2: {
    zIndex: 6,
  },
  frameChild3: {
    zIndex: 7,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorDarkgray_200,
    textAlign: "left",
  },
  inputfield: {
    top: 179,
    zIndex: 8,
    left: 33,
  },
  inputfield1: {
    zIndex: 9,
    left: 128,
  },
  inputfield2: {
    zIndex: 10,
    left: 215,
  },
  inputfield3: {
    left: 305,
    zIndex: 11,
  },
  inputfield4: {
    zIndex: 12,
    left: 306,
  },
  inputfield5: {
    zIndex: 13,
    left: 216,
  },
  inputfield6: {
    top: 286,
    zIndex: 14,
    left: 127,
  },
  inputfield7: {
    zIndex: 15,
    left: 33,
  },
  inputfield8: {
    zIndex: 16,
    left: 33,
  },
  inputfield9: {
    zIndex: 17,
    left: 127,
  },
  inputfield10: {
    zIndex: 18,
    left: 215,
  },
  inputfield11: {
    top: 394,
    zIndex: 19,
    left: 306,
  },
  inputfield12: {
    zIndex: 20,
    left: 300,
  },
  inputfield13: {
    left: 213,
    zIndex: 21,
  },
  inputfield14: {
    zIndex: 22,
    left: 121,
  },
  inputfield15: {
    left: 27,
    zIndex: 23,
  },
  contestant1: {
    top: 7,
    zIndex: 24,
    left: 13,
    height: 27,
    width: 200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  contestant2: {
    zIndex: 25,
    top: 124,
  },
  contestant3: {
    top: 225,
    zIndex: 26,
    left: 13,
    height: 27,
    width: 200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  contestant4: {
    top: 342,
    zIndex: 27,
  },
  contestant5: {
    top: 451,
    zIndex: 28,
    left: 13,
    height: 27,
    width: 200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  text16: {
    zIndex: 29,
    left: 34,
  },
  text17: {
    zIndex: 30,
    left: 128,
  },
  text18: {
    zIndex: 31,
    left: 306,
  },
  text19: {
    zIndex: 32,
    left: 216,
  },
  text20: {
    zIndex: 33,
    left: 28,
  },
  text21: {
    zIndex: 34,
    left: 122,
  },
  text22: {
    zIndex: 35,
    left: 300,
  },
  text23: {
    zIndex: 36,
    left: 210,
  },
  inputfield16: {
    zIndex: 37,
    left: 295,
  },
  inputfield17: {
    zIndex: 38,
    left: 208,
  },
  inputfield18: {
    left: 116,
    zIndex: 39,
  },
  inputfield19: {
    left: 22,
    zIndex: 40,
  },
  inputfield20: {
    zIndex: 41,
    left: 28,
  },
  inputfield21: {
    zIndex: 42,
    left: 121,
  },
  inputfield22: {
    zIndex: 43,
    left: 208,
  },
  inputfield23: {
    zIndex: 44,
    left: 300,
  },
  inputfield24: {
    left: 301,
    zIndex: 45,
  },
  inputfield25: {
    zIndex: 46,
    left: 208,
  },
  inputfield26: {
    zIndex: 47,
    left: 121,
  },
  inputfield27: {
    zIndex: 48,
    left: 28,
  },
  contestant6: {
    top: 563,
    left: 8,
    zIndex: 49,
  },
  text36: {
    left: 23,
    zIndex: 50,
  },
  text37: {
    left: 117,
    zIndex: 51,
  },
  text38: {
    zIndex: 52,
    left: 295,
  },
  text39: {
    left: 205,
    zIndex: 53,
  },
  contestant8: {
    top: 781,
    zIndex: 54,
    left: 13,
    height: 27,
    width: 200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  text40: {
    zIndex: 55,
    left: 28,
  },
  text41: {
    zIndex: 56,
    left: 122,
  },
  text42: {
    zIndex: 57,
    left: 300,
  },
  text43: {
    zIndex: 58,
    left: 210,
  },
  contestant7: {
    top: 671,
    zIndex: 59,
    left: 13,
    height: 27,
    width: 200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  text44: {
    zIndex: 60,
    left: 28,
  },
  text45: {
    zIndex: 61,
    left: 122,
  },
  text46: {
    zIndex: 62,
    left: 300,
  },
  text47: {
    zIndex: 63,
    left: 210,
  },
  text48: {
    zIndex: 64,
    left: 34,
  },
  text49: {
    zIndex: 65,
    left: 128,
  },
  text50: {
    zIndex: 66,
    left: 306,
  },
  text51: {
    zIndex: 67,
    left: 216,
  },
  text52: {
    zIndex: 68,
    left: 34,
  },
  text53: {
    zIndex: 69,
    left: 128,
  },
  text54: {
    zIndex: 70,
    left: 306,
  },
  text55: {
    zIndex: 71,
    left: 216,
  },
  inputfield28: {
    zIndex: 72,
    left: 35,
  },
  inputfield29: {
    zIndex: 73,
    left: 127,
  },
  inputfield30: {
    zIndex: 74,
    left: 215,
  },
  inputfield31: {
    left: 304,
    zIndex: 75,
  },
  text60: {
    zIndex: 76,
    left: 34,
  },
  text61: {
    zIndex: 77,
    left: 128,
  },
  text62: {
    zIndex: 78,
    left: 306,
  },
  text63: {
    zIndex: 79,
    left: 216,
  },
  text64: {
    zIndex: 80,
    left: 35,
  },
  text65: {
    left: 129,
    zIndex: 81,
  },
  text66: {
    left: 307,
    zIndex: 82,
  },
  text67: {
    left: 217,
    zIndex: 83,
  },
  rectangleParent: {
    left: 20,
    height: 991,
    alignItems: "flex-end",
    top: 124,
    position: "absolute",
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  profile: {
    top: 2,
    left: 120,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  iconlylightarrowLeft: {
    width: 22,
    left: 0,
    top: 0,
    height: 22,
    position: "absolute",
  },
  profileParent: {
    top: 78,
    left: 26,
    width: 223,
    height: 22,
    position: "absolute",
  },
  taskbar: {
    top: 0,
    height: 85,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSteelblue,
    position: "absolute",
    width: "100%",
  },
  submit: {
    height: "34.55%",
    width: "42.94%",
    top: "32.73%",
    left: "30.59%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorWhite,
  },
  editButton: {
    height: "64.71%",
    width: "43.59%",
    top: "17.65%",
    right: "29.74%",
    bottom: "17.65%",
    left: "26.67%",
    position: "absolute",
  },
  footer: {
    top: 760,
  },
  scoringIcon: {
    borderRadius: Border.br_30xl,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Scoring;
