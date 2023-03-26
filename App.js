import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { theme } from "./colors";
import { Fontisto } from "@expo/vector-icons";

const STORAGE_KEY = "@toDos";

export default function App() {
  const [isActive, setIsActive] = useState("work");
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const isWorkTodo = isActive === "work" ? true : false;

  useEffect(() => {
    loadToDos();
  }, []);

  const saveToDos = async (toSave) => {
    try {
      const jsonValue = JSON.stringify(toSave);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadToDos = async () => {
    try {
      const stringValue = await AsyncStorage.getItem(STORAGE_KEY);
      setToDos(JSON.parse(stringValue));
    } catch (e) {
      console.log(e);
    }
  };

  const handelActiveMenu = (menu) => {
    setIsActive(menu);
  };

  const onChanageText = (payload) => setText(payload);

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, isWorkTodo },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = (key) => {
    Alert.alert("To Do를 삭제합니다.", "정말 삭제할까요?", [
      {
        text: "예",

        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
      { text: "아니요", style: "destructive" },
    ]);
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
                <TouchableOpacity onPress={() => deleteToDo(key)}>
                  <Fontisto name="trash" size={18} color={theme.gray} />
                </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.deepGray,
    borderRadius: 15,
  },
  toDosText: {
    color: theme.white,
  },
});
