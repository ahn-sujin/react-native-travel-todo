# TextInput
[🔗 TextInput · React Native](https://reactnative.dev/docs/textinput)

- RN에서 유저가 text를 쓸 수 있는 유일한 방법
    - RN에는 HTML에서처럼 textarea나 input이 없음

```jsx
import {View, TextInput} from "react-native"

<View>
  <TextInput></TextInput>
</View>

```

### Props

- `placeholer`
- `onFocus`: 화면을 터치하면 쓸 준비가 된 상태
- `onPressIn`, `onPressOut`
- **⭐️`onChangeText`: 입력한 Text를 받을 수 있음**
- `keyboardType` : 유저가 이메일이나 핸드폰번호를 입력해야할 때 키보드 타입을 변경할 수 있음
    - number-pad , exmail-address, phone-pad, url, web-search …
- **⭐️`returnKeyType` : return 모양을 바꿀 수 있음**
    - send, go, next, done …
- `secureTextEntry` : 비밀번호
- `multiline` : 한 줄 이상 쓰는 경우
- `autoCorrect` : 자동완성 활성화, 비활성화
- `autoCapitalize` : 대문자로 만들고 싶은 것을 지정할 수 있음
- **⭐️`onSubmitEditing` : 입력한 text를 제출 했을 때 실행될 함수를 지정함**
