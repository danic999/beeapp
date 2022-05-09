import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

function HeadingProfile({ numOfPoints }) {
  return (
    <View style={styles.heading}>
      <View style={styles.left}>
        <Text style={styles.text}>Ukupno bodova</Text>
        <Text style={styles.text2}>
          {numOfPoints}
          <Image
            style={styles.image}
            source={require("../assets/BeeCard.png")}
          />
        </Text>
      </View>

      <View style={styles.profile}>
        <Image
          style={styles.profilePic}
          source={require("../assets/profilna.jpg")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    paddingTop: 50,
    flex: 0.13,
    width: "100%",
    backgroundColor: "#0D0B26",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
  },
  left: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    alignSelf: "flex-start",
  },
  text2: {
    fontSize: 40,
    color: "#ffffff",
    alignSelf: "flex-start",
  },
  image: {
    width: 54,
    height: 42,
  },
  profilePic: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginRight: 20,
    marginBottom: 45,
  },
});
export default HeadingProfile;
