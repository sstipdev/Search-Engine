/** store.ts 파일 */

import { atom, selector, DefaultValue } from "recoil";

/**
 * # Recoil의 기본 자료형
 *
 * - atom: 값을 저장한다.
 *   "값을 저장만 할 수 있음"
 * - selector: 상태값을 상속 받아서 사용하는 상태 선언 함수
 *   "값의 저장을 못 함. 대신 getter, setter 선언을 통한 상속, 부가 처리가 가능"
 */

/**
 * 오늘의 할 일
 *
 * - 모달창을 하나 띄우고 싶음.
 * - 띄운 모달창을 닫았을 때, 닫혀야 됨.
 *
 * [ 모달창 관련 상태 선언 ]
 * - isModalActivated (is~~~)
 */

// export const IsModalActivated = atom({
//   /** 키 값, 식별자 */
//   key: "IsModalActivated",
//   /** 기본값 */
//   default: false,
// });

// selector 예시
// IsModalActivated에 필터 추가 (boolean만)
const _IsModalActivated = atom({
  key: "is-modal-activated-private",
  default: false,
});

export const IsModalActivated = selector({
  key: "is-modal-activated",
  get: ({ get }) => get(_IsModalActivated),
  set: ({ set, get, reset }, newValue) => {
    // 검증단계
    // if (newValue instanceof DefaultValue) throw new Error(`기본값이야.`);
    // if (newValue instanceof Array && newValue.length === 0) throw new Error(`빈 배열이야 임마`);
    if (!(typeof newValue === "boolean")) throw new Error(`boolean 외 사절.`);

    // setter
    set(_IsModalActivated, newValue);
    // getter
    // get(_IsModalActivated);
    // reset
    // reset(_IsModalActivated);
  },
});

/**
 * getter 호출 -> 값 나옴.
 * getter 호출 -> 검사 과정 / 변환 과정 (층) -> 값 나옴.
 */
