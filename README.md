## commit msg 규칙

### 1. 커밋 유형 지정하기

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋



### 과제만족도

1. 폴더구조
(page / container / component 미정)
    - 이번 과제물은 자율선택 / 
    
2. 로그인/회원가입 경로 구분
    - 자율선택 

3. 유효성 검사
 - 3-1이메일, 비밀번호 유효성 검사 기능
   - 정규식은 파일을 따로 빼서, 함수 만들기 ✅
  -  3-2. 위 조건 만족할때만 버튼 활성화
   - disabled만으로 조건을 막지말고, 정규식등의 함수를 통해서 재검증 이후 로직 실행이 되도록 ✅
   - option. 이벤트가 있는 버튼과 없는 버튼 두가지.

4. 로그인 API 호출 성공시 /todo 이동
    - response이 200이면 navigate를 사용하여 이동
5. JWT 토큰값 로컬 스토리지에 저장
    - localStorage를 관리하는 함수를 생성하여 사용 ✅
6. 로그인 여부에 따른 리다이렉트 처리
    - 함수를 만들어서 리다이렉트 처리 () ✅
7. 투두 리스트 목록 (/todo 접속시)
    - 값을 받아오는 함수(ex : getTodos) 를 만들어서 useEffect 내부에서 사용 지양 ✅
8. 투두 내용 및 완료 여부 표시
    - 수정모드에서 완료 및 수정이 가능하도록 기능구현 (권장) ✅
9. 입력/추가 버튼, 추가 버튼 클릭시 입력창 내용 투두 리스트에 추가
    - 공백 등의 에러가 없을시 로직 실행 ✅
    - 에러가 있을시 에러 표시 ✅
10. 투두리스트 수정 버튼 클릭시 수정모드 활성화 및 투두 리스트 내용 수정 가능하게
    - 자율선택 ✅
11. 수정모드시 우측에 제출/취소 버튼 표시
    - 자율선택 ✅
12. 개별아이템 우측에 삭제 버튼
    - 자율선택 ✅
13. 그외 기능(옵션)
    - 인풋창 에러메시지 처리 ( ) ✅
    - modal로 메시지 관리 ✅
    - errMsg 보여주기 ✅
    - 로그아웃 기능 ✅
    - 페이지네이션 (경훈님)
    - 카운터 기능 or 완료 또는 미완료 필터 처리
14. 기타 규약
    - 컴포넌트나, 컨텍스트 등 내부에서 크게 상관없는 관심사 밖의 함수는 uitls 등의 파일에 따로 보관. ✅
    - 변수명 data는 지양하고, 가능한 명확한 변수명을 사용
    - resetCSS 적용하기 / 라이브러리 설치 및 적용은 자율적용 ✅
    - CRA에서 필요없는 파일 삭제하기 ✅