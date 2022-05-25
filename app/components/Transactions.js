import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

export default function Transactions({ pic, name, date, points }) {
  return (
    <View style={styles.content}>
      <View>
        <View style={styles.card}>
          <Image
            source={require("../assets/profilna.jpg")}
            style={styles.profilePic}
          ></Image>
          <View style={styles.transInfo}>
            <Text style={styles.contentInfo}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.numOfPoints}>+ {points}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "left",
    opacity: 40,
  },
  numOfPoints: {
    fontWeight: "bold",
    textAlign: "right",
    lineHeight: 24,
    marginRight: 15,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "black",
  },
  transInfo: {
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 45,
  },
  contentInfo: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    flexDirection: "column",
    justifyContent: "center",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  content: {
    marginTop: "auto",
    textAlign: "auto",
  },
});
