import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login1}>
      <Image
        style={[styles.login1Child, styles.login1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-192.png")}
      />
      <Image
        style={[styles.login1Item, styles.login1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-193.png")}
      />
      <Image
        style={styles.logokadogRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logokadogremovebgpreview-11.png")}
      />
      <View style={styles.welcomeMsg}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.bySigningInContainer}>
          <Text style={styles.bySigningIn}>
            By signing in you are agreeing our
          </Text>
          <Text>
            <Text style={styles.termAndPrivacy}>Term and privacy polic</Text>
            <Text style={styles.y}>y</Text>
          </Text>
        </Text>
      </View>
      <TextInput
        style={[styles.inputfields, styles.inputfieldsLayout]}
        placeholder="Username"
        placeholderTextColor="#afafaf"
      />
      <TextInput
        style={[styles.inputfields1, styles.inputfieldsLayout]}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="#afafaf"
      />
      <View style={[styles.rememberMe, styles.orLayout]}>
        <Image
          style={styles.checkmarkIcon}
          contentFit="cover"
          source={require("../assets/checkmark1.png")}
        />
        <Text style={[styles.rememberMe1, styles.or2Position]}>
          Remember me?
        </Text>
      </View>
      <Button
        title="Forgot Password?"
        type="outline"
        color="#2295d6"
        titleStyle={styles.forgotPasswordBtn}
        containerStyle={styles.forgotPasswordBtn1}
        buttonStyle={styles.forgotPasswordBtn2}
      />
      <Button
        title="Login"
        type="solid"
        color="#0386d0"
        titleStyle={styles.buttonBtn}
        onPress={() => navigation.navigate("KaDogDashboard")}
        containerStyle={styles.buttonBtn1}
        buttonStyle={styles.buttonBtn2}
      />
      <View style={[styles.or, styles.orLayout]}>
        <View style={styles.orChild} />
        <View style={styles.or1}>
          <Text style={[styles.or2, styles.or2Position]}>or</Text>
        </View>
      </View>
      <Button
        title="Register"
        type="outline"
        titleStyle={styles.button1Btn}
        onPress={() => navigation.navigate("Register1")}
        containerStyle={styles.button1Btn1}
        buttonStyle={styles.button1Btn2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordBtn: {
    color: "#2295d6",
    fontSize: 12,
    fontFamily: "Arapey-Regular",
  },
  forgotPasswordBtn1: {
    left: 211,
    top: 539,
    position: "absolute",
  },
  forgotPasswordBtn2: {},
  buttonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  buttonBtn1: {
    left: 47,
    padding: 10,
    top: 576,
    position: "absolute",
  },
  buttonBtn2: {
    borderRadius: 20,
    width: 266,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button1Btn: {
    color: "#0386d0",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  button1Btn1: {
    left: 47,
    padding: 10,
    top: 666,
    position: "absolute",
  },
  button1Btn2: {
    borderRadius: 20,
    borderStyle: "solid",
    width: 266,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  login1Layout: {
    width: 352,
    position: "absolute",
  },
  inputfieldsLayout: {
    fontSize: FontSize.size_mini,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    width: 266,
    left: 42,
    fontFamily: FontFamily.arapeyRegular,
    position: "absolute",
  },
  orLayout: {
    height: 15,
    position: "absolute",
  },
  or2Position: {
    textAlign: "left",
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  login1Child: {
    top: 17,
    left: 4,
    height: 535,
  },
  login1Item: {
    top: 474,
    left: 5,
    height: 305,
  },
  logokadogRemovebgPreview1Icon: {
    top: 48,
    left: 98,
    width: 164,
    height: 138,
    position: "absolute",
  },
  welcome: {
    fontSize: 21,
    fontFamily: FontFamily.fontdinerSwankyRegular,
    width: 242,
    height: 35,
    textAlign: "center",
    color: Color.colorBlack,
  },
  bySigningIn: {
    color: "#6b5e5e",
  },
  termAndPrivacy: {
    color: Color.colorSteelblue,
  },
  y: {
    color: "#036bb9",
  },
  bySigningInContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 29,
    width: 244,
    height: 66,
    marginTop: -12,
    fontFamily: FontFamily.arapeyRegular,
    textAlign: "center",
  },
  welcomeMsg: {
    top: 217,
    left: 58,
    position: "absolute",
  },
  inputfields: {
    top: 336,
  },
  inputfields1: {
    top: 391,
  },
  checkmarkIcon: {
    top: 1,
    left: -1,
    width: 14,
    height: 14,
    position: "absolute",
  },
  rememberMe1: {
    left: 18,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.arapeyRegular,
  },
  rememberMe: {
    top: 444,
    width: 105,
    height: 15,
    left: 42,
  },
  orChild: {
    top: 10,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 267,
    height: 1,
    position: "absolute",
  },
  or2: {
    left: 8,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  or1: {
    left: 114,
    backgroundColor: "#f5f5f5",
    width: 28,
    top: 0,
    height: 15,
    position: "absolute",
  },
  or: {
    top: 633,
    left: 47,
    width: 266,
    height: 15,
  },
  login1: {
    backgroundColor: Color.colorLightblue,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login1;
