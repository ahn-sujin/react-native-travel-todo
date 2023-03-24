import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  const [isActive, setIsActive] = useState("work");
  const [text, setText] = useState("");
  const handelActiveMenu = (menu) => {
    setIsActive(menu);
  };
  const onChanageText = (payload) => setText(payload);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handelActiveMenu("work")}>
          <Text
            style={{
              ...styles.tabMenu,
              color: isActive === "work" ? theme.white : theme.gray,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handelActiveMenu("travel")}>
          <Text
            style={{
              ...styles.tabMenu,
              color: isActive === "travel" ? theme.white : theme.gray,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onChangeText={onChanageText}
          value={text}
          placeholder={
            isActive === "work" ? "Add a To Do" : "Where do you want to go?"
          }
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgournd,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  tabMenu: {
    fontSize: 36,
    fontWeight: 700,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 30,
    backgroundColor: theme.white,
    fontSize: 16,
    borderRadius: 30,
  },
});
