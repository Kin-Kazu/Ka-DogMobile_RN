import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Register2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.register2}>
      <Image
        style={[styles.register2Child, styles.text32Position]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Text style={styles.registration}>Registration</Text>
      <View style={[styles.genInfo, styles.infoSpaceBlock]}>
        <Text style={styles.generalInformation}>General Information</Text>
      </View>
      <View style={[styles.dogInfo, styles.infoSpaceBlock]}>
        <Text style={styles.generalInformation}>Pet Information</Text>
        <Image
          style={styles.addbtnRemovebgPreview2Icon}
          contentFit="cover"
          source={require("../assets/addbtnremovebgpreview-2.png")}
        />
      </View>
      <View style={styles.genInfoInputfields}>
        <View style={styles.inputfieldsLayout1}>
          <Text style={[styles.text, styles.textLayout]}>First Name</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>First Name</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Last Name</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields2, styles.inputfieldsLayout]}>
          <Text style={[styles.text4, styles.textTypo]}>Sex</Text>
          <View style={styles.sexSelectionParent}>
            <View style={[styles.sexSelection, styles.sexPosition]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={styles.s}>M</Text>
              </View>
            </View>
            <View style={[styles.sexSelection1, styles.sexPosition]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={styles.s}>F</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Email Address</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Contact No.</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Username</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Password</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Confirm Pass</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.logokadogRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-1.png")}
      />
      <View style={[styles.petInfoInputfields, styles.petSpaceBlock]}>
        <View style={styles.head}>
          <Text style={styles.text15}>#1</Text>
          <Pressable
            style={[styles.delete, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Register1")}
          >
            <Text style={[styles.text16, styles.loginTypo]}>-</Text>
          </Pressable>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Owner</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>First Name</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Name</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Dog Breed</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields11, styles.inputfieldsLayout]}>
          <Text style={[styles.text4, styles.textTypo]}>Sex</Text>
          <View style={styles.sexSelectionParent}>
            <View style={[styles.sexSelection, styles.sexPosition]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={styles.s}>M</Text>
              </View>
            </View>
            <View style={[styles.sexSelection1, styles.sexPosition]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={styles.s}>F</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Contact No.</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Date of Birth</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Age</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Event</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Select Show v</Text>
          </View>
        </View>
        <View style={styles.sizeSelectionParent}>
          <View style={[styles.sizeSelection, styles.text32Position]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={styles.s}>S</Text>
            </View>
            <View style={[styles.button5, styles.buttonFlexBox]}>
              <Text style={styles.s}>M</Text>
            </View>
            <View style={[styles.button5, styles.buttonFlexBox]}>
              <Text style={styles.s}>L</Text>
            </View>
            <View style={[styles.button5, styles.buttonFlexBox]}>
              <Text style={styles.s}>XL</Text>
            </View>
          </View>
          <Text style={[styles.text32, styles.textTypo]}>Size</Text>
        </View>
      </View>
      <View style={[styles.petInfoInputfields1, styles.petSpaceBlock]}>
        <View style={styles.head}>
          <Text style={styles.text15}>#2</Text>
          <Pressable
            style={[styles.delete, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("Register1")}
          >
            <Text style={[styles.text16, styles.loginTypo]}>-</Text>
          </Pressable>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Owner</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>First Name</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Name</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Dog Breed</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields11, styles.inputfieldsLayout]}>
          <Text style={[styles.text4, styles.textTypo]}>Sex</Text>
          <View style={styles.sexSelectionParent}>
            <View style={[styles.sexSelection, styles.sexPosition]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={styles.s}>M</Text>
              </View>
            </View>
            <View style={[styles.sexSelection1, styles.sexPosition]}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={styles.s}>F</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Contact No.</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Date of Birth</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Age</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textLayout]}>Event</Text>
          <View style={styles.textWrapper}>
            <Text style={[styles.text1, styles.textTypo]}>Select Show v</Text>
          </View>
        </View>
        <View style={styles.sizeSelectionParent}>
          <View style={[styles.sizeSelection, styles.text32Position]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={styles.s}>S</Text>
            </View>
            <View style={[styles.button5, styles.buttonFlexBox]}>
              <Text style={styles.s}>M</Text>
            </View>
            <View style={[styles.button5, styles.buttonFlexBox]}>
              <Text style={styles.s}>L</Text>
            </View>
            <View style={[styles.button5, styles.buttonFlexBox]}>
              <Text style={styles.s}>XL</Text>
            </View>
          </View>
          <Text style={[styles.text32, styles.textTypo]}>Size</Text>
        </View>
      </View>
      <Pressable
        style={[styles.button14, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("KaDogDashboard")}
      >
        <Text style={[styles.login, styles.loginTypo]}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text32Position: {
    top: 0,
    position: "absolute",
  },
  infoSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    width: 340,
    backgroundColor: Color.colorGainsboro_200,
    left: 10,
    flexDirection: "row",
    position: "absolute",
  },
  textLayout: {
    height: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  inputfieldsLayout1: {
    height: 28,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  inputfieldsLayout: {
    width: 245,
    height: 28,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  sexPosition: {
    top: 3,
    flexDirection: "row",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  petSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.colorLightgray_200,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  loginTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  register2Child: {
    width: 360,
    height: 1123,
    borderRadius: Border.br_mini,
    left: 0,
  },
  registration: {
    top: 58,
    left: 30,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  generalInformation: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  genInfo: {
    top: 112,
  },
  addbtnRemovebgPreview2Icon: {
    width: 25,
    height: 26,
    marginLeft: 162,
  },
  dogInfo: {
    top: 407,
  },
  text: {
    fontSize: FontSize.size_sm,
    width: 95,
    textAlign: "left",
  },
  text1: {
    top: 2,
    left: 9,
    fontFamily: FontFamily.arapeyRegular,
    color: Color.colorDarkgray_200,
    position: "absolute",
  },
  textWrapper: {
    width: 200,
    height: 20,
    marginLeft: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  inputfields1: {
    marginTop: 2,
  },
  text4: {
    width: 106,
    height: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  s: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  button: {
    width: 41,
    borderRadius: Border.br_6xl,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
  },
  sexSelection: {
    left: 0,
  },
  sexSelection1: {
    left: 58,
  },
  sexSelectionParent: {
    width: 303,
    height: 24,
    marginLeft: -1,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  inputfields2: {
    marginTop: 2,
  },
  genInfoInputfields: {
    top: 146,
    left: 32,
    position: "absolute",
  },
  logokadogRemovebgPreview1Icon: {
    top: 27,
    left: 245,
    width: 96,
    height: 80,
    position: "absolute",
  },
  text15: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.antonioBold,
    color: Color.colorDarkgray_400,
    width: 305,
    textAlign: "left",
    fontWeight: "700",
  },
  text16: {
    fontSize: FontSize.size_xl,
  },
  delete: {
    backgroundColor: Color.colorRed,
    width: 15,
    height: 15,
    borderRadius: Border.br_mini,
  },
  head: {
    justifyContent: "space-between",
    width: 305,
    flexDirection: "row",
  },
  inputfields8: {
    marginTop: 1,
  },
  inputfields11: {
    marginTop: 1,
  },
  button5: {
    width: 41,
    borderRadius: Border.br_6xl,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    marginLeft: 10,
  },
  sizeSelection: {
    left: 105,
    width: 194,
    flexDirection: "row",
  },
  text32: {
    width: 77,
    height: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sizeSelectionParent: {
    width: 299,
    height: 19,
    marginTop: 1,
  },
  petInfoInputfields: {
    top: 454,
    left: 17,
  },
  petInfoInputfields1: {
    top: 745,
    left: 18,
  },
  login: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  button14: {
    top: 1048,
    left: 28,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSteelblue,
    padding: Padding.p_3xs,
    width: 305,
    flexDirection: "row",
    position: "absolute",
  },
  register2: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    width: "100%",
    height: 1127,
    overflow: "hidden",
  },
});

export default Register2;
