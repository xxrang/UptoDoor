const { kakao } = window;

//searchPlace,dataSet => search 자체
export default function Keyword(searchPlace,dataSet){

  const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
  const mapOption = { 
        center: new kakao.maps.LatLng(37.54989223753498, 126.98131131199537), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  const map = new kakao.maps.Map(mapContainer, mapOption); 
  // 장소 검색 객체를 생성합니다
  const ps = new kakao.maps.services.Places(); 
  
  // 키워드로 장소를 검색합니다
  ps.keywordSearch(searchPlace, placesSearchCB); 

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status) {
  let arr =[];
  if (status === kakao.maps.services.Status.OK) {

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds();
      for (let i=0; i<data.length; i++) {
          arr.push(data[i]);
          displayMarker(data[i]);    
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }       

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      dataSet(arr);
      map.setBounds(bounds);
  } 
}
  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(place,message) {

    var iwContent = message, //info window에 표시할내용
    iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable
    });
    
  // 마커를 생성하고 지도에 표시합니다
  const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x) 
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, 'mouseover', function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
      infowindow.open(map, marker);
  });
  kakao.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close();
  });
}
// 지도 중심좌표를 접속위치로 변경합니다
// map.setCenter(locPosition);

}