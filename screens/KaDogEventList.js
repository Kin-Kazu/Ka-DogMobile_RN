import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const KaDogEventList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.kaDogEventList}
      resizeMode="cover"
      source={require("../assets/kadogeventlist.png")}
    >
      <Image
        style={[styles.backgroundPic2Icon, styles.tablePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-6.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
      <Image
        style={[styles.iphoneXstatusBarsstatusBa, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/iphone-xstatus-barsstatus-bar-black.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/1removebgpreview-3.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon1, styles.removebgLayout]}
        contentFit="cover"
        source={require("../assets/2removebgpreview-1.png")}
      />
      <Image
        style={[styles.removebgPreview1Icon2, styles.removebgIconPosition]}
        contentFit="cover"
        source={require("../assets/3removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon3}
        contentFit="cover"
        source={require("../assets/4removebgpreview-1.png")}
      />
      <Image
        style={styles.removebgPreview1Icon4}
        contentFit="cover"
        source={require("../assets/5removebgpreview-1.png")}
      />
      <Image
        style={[styles.backgroundPic2Icon, styles.tablePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-6.png")}
      />
      <Image
        style={[styles.backgroundPic3Icon, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/backgroundpic-3.png")}
      />
      <Text style={styles.kaDog}>Ka-Dog</Text>
      <Pressable
        style={[styles.removebgPreview1Icon, styles.removebgIconPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/1removebgpreview-3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.removebgPreview1Icon3}
        onPress={() => navigation.navigate("KaDogDashboard")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/4removebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.removebgPreview1Icon4}
        onPress={() => navigation.navigate("KaDogDashboard")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/5removebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.removebgPreview3, styles.removebgLayout]}
        onPress={() => navigation.navigate("Notification2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/2removebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.stopCovid19VaccineVaccine}
        onPress={() => navigation.navigate("Vaccine1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/stopcovid19vaccinevaccineicon-149152679removebgpreview-2.png")}
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
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Wiktoria</Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Rem</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Maltese dog</Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Small</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.trixieByrd, styles.arsTypo]}>
                Trixie Byrd
              </Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.ars, styles.arsTypo]}>Ars</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.borderCollie, styles.arsTypo]}>
                Border Collie
              </Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.bradMason, styles.arsTypo]}>Brad Mason</Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Fauna</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Rottweiler</Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.trixieByrd, styles.arsTypo]}>Sanderson</Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Towa</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>
                Australian Shepherd
              </Text>
            </View>
            <View style={[styles.mediumFrame, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.trixieByrd, styles.arsTypo]}>
                Jun Redfern
              </Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.ars, styles.arsTypo]}>Watame</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>
                Anatolian Shepherd Dog
              </Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>6</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.trixieByrd, styles.arsTypo]}>
                Miriam Kidd
              </Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Suisei</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Shih Tzu</Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Small</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.trixieByrd, styles.arsTypo]}>Dominic</Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.ars, styles.arsTypo]}>Croni</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>{`Labradoodle
`}</Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>8</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.trixieByrd, styles.arsTypo]}>Shanice</Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Botan</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Sarabi dog</Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Large</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.wrapperLayout}>
              <Text style={styles.text}>9</Text>
            </View>
            <View style={styles.wiktoriaWrapper}>
              <Text style={[styles.trixieByrd, styles.arsTypo]}>
                Poppy-Rose
              </Text>
            </View>
            <View style={styles.remWrapper}>
              <Text style={[styles.ars, styles.arsTypo]}>Koro</Text>
            </View>
            <View style={styles.malteseDogWrapper}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Chow Chow</Text>
            </View>
            <View style={[styles.smallWrapper, styles.wrapperLayout]}>
              <Text style={[styles.wiktoria, styles.arsTypo]}>Medium</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profileWrapper}>
        <Text style={[styles.profile, styles.numberTypo]}>Fashion Show</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tablePosition: {
    left: 0,
    position: "absolute",
  },
  profilePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  removebgIconPosition: {
    top: 783,
    position: "absolute",
  },
  removebgLayout: {
    height: 54,
    width: 60,
    position: "absolute",
  },
  table1Border: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frameFlexBox: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
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
  arsTypo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "left",
  },
  backgroundPic2Icon: {
    top: 760,
    height: 85,
    width: 390,
  },
  backgroundPic3Icon: {
    height: 111,
    width: 390,
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
  },
  removebgPreview1Icon: {
    left: 298,
    width: 61,
    height: 43,
  },
  removebgPreview1Icon1: {
    top: 778,
    left: 123,
  },
  removebgPreview1Icon2: {
    left: 217,
    width: 52,
    height: 37,
  },
  removebgPreview1Icon3: {
    top: 771,
    left: 3,
    width: 109,
    height: 61,
    position: "absolute",
  },
  removebgPreview1Icon4: {
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
  removebgPreview3: {
    left: 119,
    top: 779,
  },
  stopCovid19VaccineVaccine: {
    left: 208,
    top: 781,
    width: 66,
    height: 41,
    position: "absolute",
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
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    alignSelf: "stretch",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    flex: 1,
  },
  wiktoria: {
    flex: 1,
  },
  wiktoriaWrapper: {
    width: 75,
    flexDirection: "row",
  },
  remWrapper: {
    width: 90,
    alignItems: "center",
    flexDirection: "row",
  },
  malteseDogWrapper: {
    width: 100,
    alignItems: "center",
    flexDirection: "row",
  },
  smallWrapper: {
    alignItems: "center",
  },
  frameGroup: {
    backgroundColor: Color.colorWhite,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  trixieByrd: {
    width: 60,
    fontSize: FontSize.size_4xs,
  },
  ars: {
    width: 90,
  },
  borderCollie: {
    width: 100,
  },
  frameContainer: {
    backgroundColor: Color.colorGhostwhite,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  bradMason: {
    opacity: 0.75,
    width: 60,
    fontSize: FontSize.size_4xs,
  },
  mediumFrame: {
    opacity: 0.4,
    alignItems: "center",
  },
  table1: {
    borderWidth: 1,
    width: 390,
  },
  table: {
    top: 175,
    height: 516,
    flexDirection: "row",
  },
  profile: {
    fontSize: FontSize.size_13xl,
    lineHeight: 19,
    fontFamily: FontFamily.interBold,
    top: 0,
    left: 0,
    position: "absolute",
  },
  profileWrapper: {
    top: 136,
    left: 16,
    width: 218,
    height: 19,
    position: "absolute",
  },
  kaDogEventList: {
    borderRadius: Border.br_30xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default KaDogEventList;
