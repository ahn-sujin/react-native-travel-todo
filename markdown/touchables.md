# Touchables
About 버튼 컴포넌트

### TouchableOpacity

[🔗 TouchableOpacity · React Native](https://reactnative.dev/docs/touchableopacity)

```jsx
import {TouchableOpacity} from "react-native"
```

- 누르는 이벤트를 listen 할 준비가 된 view
- opacity의 애니메이션 효과가 있음

<br>

### TouchableHighlight

[🔗 TouchableHighlight · React Native](https://reactnative.dev/docs/touchablehighlight)

```jsx
import {TouchableHighlight} from "react-native"
```

- TouchableOpacity 보다 더 많은 속성 보유
    - 클릭 했을 때 투명도를 조절 할 수 있음
- 요소를 클릭 했을 때 배경색이 바뀌도록 함
    
    ```jsx
    <TouchableHighlight onPress={() => console.log('press!')}>
    	<Text>Button</Text>
    </TouchableHighlight>
    ```
    
    - `onPress` (`onPressIn`) : 유저가 눌렀을 때 실행되는 이벤트 (TouchableOpacity에서도 사용 가능)
    - `onPressOut`: 손가락이 영역에서 벗어났을 때
    - `onLongPress`: 손가락이 영역에 들어가서 오랫동안 머무를 때
    - `underlayColor` : 눌렀을 때 변하는 배경색
    - `activeOpacity` : 눌렀을 때 투명 정도

<br>

### TouchableWithoutFeedback

- Touchable 컴포넌트로, 화면의 가장 위에서 일어나는 탭 이벤트를 listen
- 그랙픽이나 다른 UI 반응을 보여주지 않음 (유저에서 눌렀다는 걸 보여주고 싶지 않을 때 사용)

<br>

### Pressable

[🔗 Pressable · React Native](https://reactnative.dev/docs/pressable)

- `delayLongPress` : 얼마나 길게 누르면 반응하게 만들지 설정 할 수 있음
- `disabled`
    - `TouchableOpacity`에는 없던 속성
- `hitSlop` : 요소 바깥 어디까지 탭 누르는 것을 감지 할지 정함
