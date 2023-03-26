import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  const [isActive, setIsActive] = useState("work");
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const isWorkTodo = isActive === "work" ? true : false;

  const handelActiveMenu = (menu) => {
    setIsActive(menu);
  };
  const onChanageText = (payload) => setText(payload);
  const addToDo = () => {
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, isWorkTodo },
    };
    setToDos(newToDos);
    setText("");
  };

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
          onSubmitEditing={addToDo}
          onChangeText={onChanageText}
          returnKeyType="done"
          value={text}
          placeholder={
            isActive === "work" ? "Add a To Do" : "Where do you want to go?"
          }
          style={styles.input}
        />
        <ScrollView>
          {Object.keys(toDos).map((key) =>
            toDos[key].isWorkTodo === isWorkTodo ? (
              <View key={key} style={styles.toDos}>
                <Text style={styles.toDosText}>{toDos[key].text}</Text>
              </View>
            ) : null
          )}
        </ScrollView>
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
    marginVertical: 30,
    backgroundColor: theme.white,
    fontSize: 16,
    borderRadius: 30,
  },
  toDos: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.gray,
    borderRadius: 15,
  },
  toDosText: {
    color: theme.white,
  },
});
