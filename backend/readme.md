# Backend

기능별 스크립트 만들기 -> 생성된 스크립트 바탕으로 API 제작

### 1.1 영상 캡쳐
- [x] (Optional) Youtube 링크 입력시 0.3초마다 스크린샷 생성
- [x]  영상 업로드시 초당 1~4장의 Frame 스크린샷 생성
- [ ] 생성된 스크린샷을 OCR API로 전송

``` shell
pip instal pytube
pip install pytube3 --upgrade

brew install opencv
pip install opencv-python numpy

```


### 1.2 자막 생성
- [ ] API Response Data Preprocessing) 위치 정보 기반하여 같은 문장 묶음
- [ ] 통일된 데이터 형식 제작 필요
- [ ] 가공된 데이터를 바탕으로 TTML XML 생성
- [ ] 유튜브에서 테스트
