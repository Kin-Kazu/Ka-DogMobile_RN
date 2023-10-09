import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const Ranking = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ranking}>
      <Image
        style={[styles.backgroundPic3Icon, styles.tablePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
      <Image
        style={[styles.iphoneXstatusBarsstatusBa, styles.tablePosition]}
        contentFit="cover"
        source={require("../assets/iphone-xstatus-barsstatus-bar-black.png")}
      />
      <Image
        style={styles.removebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/5removebgpreview-1.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.tablePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
      <Pressable
        style={styles.removebgPreview1Icon}
        onPress={() => navigation.navigate("KaDogDashboardJudge")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/5removebgpreview-1.png")}
        />
      </Pressable>
      <View style={[styles.table, styles.tablePosition]}>
        <View style={[styles.table1, styles.table1Border]}>
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View style={styles.numberWrapper}>
              <Text style={[styles.number, styles.numberTypo]}>Number</Text>
            </View>
            <View style={[styles.nameParent, styles.nameParentSpaceBlock]}>
              <Text style={[styles.name, styles.nameTypo]}>Name</Text>
              <Image
                style={styles.bxssortIconLayout}
                contentFit="cover"
                source={require("../assets/bxssortalt.png")}
              />
            </View>
            <View style={[styles.dogNameParent, styles.nameParentSpaceBlock]}>
              <Text style={[styles.dogName, styles.nameTypo]}>Dog Name</Text>
              <Image
                style={[styles.bxssortAltIcon1, styles.bxssortIconLayout]}
                contentFit="cover"
                source={require("../assets/bxssortalt.png")}
              />
            </View>
            <View style={[styles.dogBreedWrapper, styles.nameParentSpaceBlock]}>
              <Text style={[styles.dogBreed, styles.nameTypo]}>Dog Breed</Text>
            </View>
            <View style={[styles.sizeWrapper, styles.wrapperLayout]}>
              <Text style={[styles.size, styles.nameTypo]}>Size</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>9</Text>
            </View>
            <View style={styles.poppyRoseWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>
                Poppy-Rose
              </Text>
            </View>
            <View style={styles.koroWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Koro</Text>
            </View>
            <View style={styles.chowchowWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>ChowChow</Text>
            </View>
            <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Medium</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.poppyRoseWrapper}>
              <Text style={styles.dominicTypo}>Dominic</Text>
            </View>
            <View style={styles.koroWrapper}>
              <Text style={[styles.croni, styles.croniTypo]}>Croni</Text>
            </View>
            <View style={styles.chowchowWrapper}>
              <Text style={[styles.labradoodle, styles.croniTypo]}>
                Labradoodle
              </Text>
            </View>
            <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Medium</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>8</Text>
            </View>
            <View style={styles.poppyRoseWrapper}>
              <Text style={[styles.shanice, styles.dominicTypo]}>Shanice</Text>
            </View>
            <View style={styles.koroWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Botan</Text>
            </View>
            <View style={styles.chowchowWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>
                Sarabi dog
              </Text>
            </View>
            <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Large</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.poppyRoseWrapper}>
              <Text style={styles.dominicTypo}>Wiktoria</Text>
            </View>
            <View style={styles.koroWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Rem</Text>
            </View>
            <View style={styles.chowchowWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>
                Maltese dog
              </Text>
            </View>
            <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Small</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>6</Text>
            </View>
            <View style={styles.poppyRoseWrapper}>
              <Text style={styles.dominicTypo}>Miriam Kidd</Text>
            </View>
            <View style={styles.koroWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Suisei</Text>
            </View>
            <View style={styles.chowchowWrapper}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Shih Tzu</Text>
            </View>
            <View style={[styles.mediumWrapper, styles.wrapperLayout]}>
              <Text style={[styles.poppyRose, styles.croniTypo]}>Small</Text>
            </View>
          </View>
          <View style={styles.tableChild} />
          <View style={styles.tableChild} />
          <View style={styles.tableChild} />
        </View>
      </View>
      <View style={styles.profileWrapper}>
        <Text style={[styles.profile, styles.numberTypo]}>Ranking</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tablePosition: {
    left: 0,
    position: "absolute",
  },
  table1Border: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frameFlexBox: {
    padding: Padding.p_base,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  numberTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
  },
  nameParentSpaceBlock: {
    marginLeft: 6,
    alignItems: "center",
  },
  nameTypo: {
    color: Color.colorBlack,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  bxssortIconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  wrapperLayout: {
    width: 45,
    flexDirection: "row",
  },
  croniTypo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
  },
  dominicTypo: {
    width: 60,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
    top: 0,
    left: 0,
  },
  kaDog: {
    top: 52,
    left: 151,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa: {
    height: 44,
    width: 390,
    top: 0,
    left: 0,
  },
  removebgPreview1Icon: {
    top: 49,
    left: 23,
    height: 42,
    width: 58,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  number: {
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    flex: 1,
  },
  numberWrapper: {
    width: 44,
    flexDirection: "row",
  },
  name: {
    width: 33,
  },
  nameParent: {
    width: 65,
    flexDirection: "row",
  },
  dogName: {
    width: 58,
  },
  bxssortAltIcon1: {
    marginLeft: 1,
  },
  dogNameParent: {
    width: 85,
    flexDirection: "row",
  },
  dogBreed: {
    width: 65,
  },
  dogBreedWrapper: {
    width: 91,
    flexDirection: "row",
  },
  size: {
    flex: 1,
  },
  sizeWrapper: {
    marginLeft: 6,
    alignItems: "center",
  },
  frameParent: {
    borderWidth: 0.5,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    flex: 1,
  },
  poppyRose: {
    flex: 1,
  },
  poppyRoseWrapper: {
    width: 75,
    flexDirection: "row",
  },
  koroWrapper: {
    width: 90,
    alignItems: "center",
    flexDirection: "row",
  },
  chowchowWrapper: {
    width: 100,
    alignItems: "center",
    flexDirection: "row",
  },
  mediumWrapper: {
    alignItems: "center",
  },
  frameGroup: {
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
  },
  croni: {
    width: 90,
  },
  labradoodle: {
    width: 100,
  },
  frameContainer: {
    backgroundColor: Color.colorGhostwhite,
  },
  shanice: {
    opacity: 0.75,
  },
  tableChild: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  table1: {
    borderWidth: 1,
    width: 390,
  },
  table: {
    top: 175,
    height: 255,
    flexDirection: "row",
  },
  profile: {
    fontSize: FontSize.size_13xl,
    lineHeight: 19,
    fontFamily: FontFamily.interBold,
    left: 0,
    position: "absolute",
    top: 0,
  },
  profileWrapper: {
    top: 131,
    left: 133,
    width: 127,
    height: 19,
    position: "absolute",
  },
  ranking: {
    borderRadius: Border.br_30xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Ranking;
