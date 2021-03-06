# 트리플 과제

## 요구사항
![image](https://user-images.githubusercontent.com/28842641/178129962-75203bec-8086-4071-8900-d13800cc180a.png)


## 프로젝트 실행 방법

```
yarn

yarn run dev // 프로젝트 실행
yarn run storybook // 스토리북 실행
yarn run test // test 실행
```

## 기술 스택과 선정 이유

### TypeScript

- 정적 타입을 지원하기 때문에 컴파일 타임에 오류를 체크할 수 있기 때문에 사용했습니다.
- 명시적인 타입 지정으로 변수, 함수등의 선언 의도를 명확하게 할 수 있기 때문에 사용했습니다. 이로 인해 가독성을 높일 수 있다고 생각했습니다.

### styled-components

- CSS를 컴포넌트 단위로 관리하여 재사용성을 높이기 위해 사용했습니다.
- 컴포넌트의 props를 참조할 수 있기 때문에 JavaScript 환경을 최대한 활용할 수 있습니다.
- CSS의 className 중복을 걱정할 필요가 없습니다.

### Webpack

- 프로젝트 초기 설정을 빠르게 하기 위해서 만들어둔 템플릿을 활용했습니다. 해당 템플릿은 Webpack으로 번들링 되어 있습니다.
- CRA와 다르게 필요한 설정들만 다운로드하여 사용하기 때문에 프로젝트 무게가 가볍습니다. (커스텀 용이) 따라서 애플리케이션의 성능 및 속도가 개선됩니다.

### Storybook

- 컴포넌트 코드를 작성한 이후 해당 컴포넌트를 직접 호출하지 않아도 확인할 수 있는 장점이 있기 때문에 사용했습니다.
- 확장성을 고려한다면 Storybook을 활용하여 필요한 컴포넌트를 찾아서 사용할 수 있다는 장점이 있다고 생각합니다.

### React Testing Library

- Cypress에 비해 설정 사항이 적기 때문에 사용했습니다.
- 코드 리팩토링 진행시에 디버깅을 용이하게 하기 위해 사용했습니다.

## 코딩 컨벤션

### 컴포넌트명

- Container: 여러 개의 요소를 감싸는 경우
- Wrapper: 단일 요소를 감싸는 경우

### import 순서

- library -> lib -> hooks -> components -> types -> styles
