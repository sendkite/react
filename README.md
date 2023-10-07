# React Official Tutorial

## 1. Intro

- 리액트 문서에 있는 튜토리얼을 진행 [출처](https://react.dev/learn/tutorial-tic-tac-toe)
- React의 elements, components, props, and state의 컨셉을 이해한다.

how to run

```shell
npm install
npm start
```

## 2. 기본 개념

- component
  - 재사용 가능한 Code 조각
- state
  - 어떤 변경이 일어났을때 data를 'remember' 하게하는 object
- props
  - component 간에 data를 전달하는 object
- key
  - React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
  - React가 식별 할 수 있다는 것은 re-rendering 효율이 올라간다.
  - key는 sibling element 사이에서 고유해야 한다.

## 3. 튜토리얼에서 설명하는 React Concept

1. state 관리는 부모 component에서 하고 props로 전달한다.
   - state를 가지고 있는 component를 찾기, 관리가 쉽다.
   - 리팩토링시 부모 객체를 만들어서 state lifting up을 생각하자.
2. 불변성을 신경 쓴다.
   - 본 예제에서는 게임의 X, O 상태를 slice()로 복사하여 변경하여 원본 데이터의 불변성을 보장한다.  
   - 불변으로 관리해야 React가 re-rendering 시점을 더 쉽게 판단하게 할 수 있다. 
   - 또한 원본 데이터를 가지고 있으면 실행 취소, 다시 실행 같은 구현이 쉽다.

## 완성본
 
![스크린샷 2023-10-07 오후 9 27 10](https://github.com/sendkite/react/assets/90877864/2aabcbb5-ab6f-4973-84cf-cdccc8d3f8bc)
