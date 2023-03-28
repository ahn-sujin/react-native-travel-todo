# ToDos

### AsyncStorage
🔗 https://docs.expo.dev/versions/v48.0.0/sdk/async-storage/

- 암호화 되지 않은 비동기적인 데이터를 관리하는 Key-Value 저장 시스템
- 앱 전역에서 사용할 수 있으며, LocalStorage 대신 사사용

```jsx
// 설치
expo install @react-native-async-storage/async-storage

// import
import AsyncStorage from '@react-native-async-storage/async-storage';

```

### Alert
🔗 [Alert · React Native](https://reactnative.dev/docs/alert)

<img src="https://user-images.githubusercontent.com/67556491/228274761-07617a2d-88f1-43cf-950b-4a95bb57609a.jpeg" width="300" height="300"/>

```jsx
import { Alert } from "react-native";

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
  
  ...
  
  <TouchableOpacity onPress={() => deleteToDo(key)}>
     <Fontisto name="trash" size={18} color={theme.gray} />
  </TouchableOpacity>

```
