import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Register1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.register1}>
      <Image
        style={[styles.register1Child, styles.text29Position]}
        contentFit="cover"
        source={require("../assets/rectangle-191.png")}
      />
      <Text style={styles.registration}>Registration</Text>
      <View style={[styles.genInfo, styles.infoSpaceBlock]}>
        <Text style={styles.generalInformation}>General Information</Text>
      </View>
      <View style={[styles.dogInfo, styles.infoSpaceBlock]}>
        <Text style={styles.generalInformation}>Pet Information</Text>
        <Pressable
          style={styles.addbtnRemovebgPreview2}
          onPress={() => navigation.navigate("Register2")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/addbtnremovebgpreview-2.png")}
          />
        </Pressable>
      </View>
      <View style={styles.genInfoInputfields}>
        <View style={styles.inputfieldsLayout1}>
          <Text style={[styles.text, styles.textTypo]}>First Name</Text>
          <TextInput
            style={[styles.inputfieldsChild, styles.text2Typo]}
            placeholder="First Name"
            placeholderTextColor="#afafaf"
          />
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Last Name</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields2, styles.inputfieldsLayout]}>
          <Text style={[styles.text3, styles.textTypo]}>Sex</Text>
          <View style={styles.sexSelectionParent}>
            <View style={[styles.sexSelection, styles.sexPosition]}>
              <View style={styles.buttonFlexBox}>
                <Text style={styles.s}>M</Text>
              </View>
            </View>
            <View style={[styles.sexSelection1, styles.sexPosition]}>
              <View style={styles.buttonFlexBox}>
                <Text style={styles.s}>F</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Email Address</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Contact No.</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Username</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Password</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields1, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Confirm Pass</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.logokadogRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-1.png")}
      />
      <View style={styles.petInfoInputfields}>
        <Text style={styles.text14}>#1</Text>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Owner</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>First Name</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Name</Text>
          <TextInput
            style={[styles.inputfieldsChild, styles.text2Typo]}
            placeholder="Placeholder"
            placeholderTextColor="#afafaf"
          />
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Dog Breed</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields11, styles.inputfieldsLayout]}>
          <Text style={[styles.text3, styles.textTypo]}>Sex</Text>
          <View style={styles.sexSelectionParent}>
            <View style={[styles.sexSelection, styles.sexPosition]}>
              <View style={styles.buttonFlexBox}>
                <Text style={styles.s}>M</Text>
              </View>
            </View>
            <View style={[styles.sexSelection1, styles.sexPosition]}>
              <View style={styles.buttonFlexBox}>
                <Text style={styles.s}>F</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Contact No.</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Date of Birth</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Age</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Placeholder</Text>
          </View>
        </View>
        <View style={[styles.inputfields8, styles.inputfieldsLayout1]}>
          <Text style={[styles.text, styles.textTypo]}>Event</Text>
          <View style={[styles.textWrapper, styles.textWrapperLayout]}>
            <Text style={[styles.text2, styles.text2Typo]}>Select Show v</Text>
          </View>
        </View>
        <View style={styles.sizeSelectionParent}>
          <View style={styles.sizeSelection}>
            <View style={styles.buttonFlexBox}>
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
          <Text style={[styles.text29, styles.textTypo]}>Size</Text>
        </View>
      </View>
      <Button
        title="Register"
        type="solid"
        color="#0386d0"
        titleStyle={styles.buttonBtn}
        onPress={() => navigation.navigate("KaDogDashboard")}
        containerStyle={styles.buttonBtn1}
        buttonStyle={styles.buttonBtn2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  buttonBtn1: {
    left: 28,
    padding: 10,
    top: 778,
    position: "absolute",
  },
  buttonBtn2: {
    borderRadius: 20,
    width: 305,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text29Position: {
    top: 0,
    left: 0,
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
  textTypo: {
    height: 18,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text2Typo: {
    fontFamily: FontFamily.arapeyRegular,
    fontSize: FontSize.size_mini,
  },
  inputfieldsLayout1: {
    height: 28,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textWrapperLayout: {
    height: 20,
    width: 200,
    backgroundColor: Color.colorWhite,
    marginLeft: 10,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
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
    width: 41,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    flexDirection: "row",
  },
  register1Child: {
    borderRadius: Border.br_mini,
    width: 360,
    height: 867,
    left: 0,
  },
  registration: {
    top: 58,
    left: 30,
    fontSize: FontSize.size_8xl,
    lineHeight: 19,
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_100,
    textAlign: "center",
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
  icon: {
    height: "100%",
    width: "100%",
  },
  addbtnRemovebgPreview2: {
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
  },
  inputfieldsChild: {
    marginLeft: 10,
    fontSize: FontSize.size_mini,
    height: 20,
    width: 200,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  text2: {
    top: 2,
    left: 9,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  textWrapper: {
    marginLeft: 10,
  },
  inputfields1: {
    marginTop: 2,
  },
  text3: {
    width: 106,
    fontSize: FontSize.size_mini,
  },
  s: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
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
  text14: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.antonioBold,
    color: Color.colorDarkgray_400,
    textAlign: "left",
    fontWeight: "700",
  },
  inputfields8: {
    marginTop: 1,
  },
  inputfields11: {
    marginTop: 1,
  },
  button5: {
    marginLeft: 10,
  },
  sizeSelection: {
    left: 105,
    width: 194,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  text29: {
    width: 77,
    fontSize: FontSize.size_mini,
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
    backgroundColor: Color.colorLightgray_200,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingBottom: Padding.p_3xs,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  register1: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    height: 881,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register1;
