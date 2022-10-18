import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Save from './routes/Save';
import Load from './routes/Load';
import { useEffect, useRef } from 'react';

function App() {

  // const mapElement = useRef(null);

  //   useEffect(() => {
  //   const { naver } = window;
  //   if (!mapElement.current || !naver) return;

  //   // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
  //   const location = new naver.maps.LatLng(37.5656, 126.9769);
  //   const mapOptions = {
  //     center: location,
  //     zoom: 17,
  //     zoomControl: true,
  //     zoomControlOptions: {
  //       position: naver.maps.Position.TOP_RIGHT,
  //     },
  //   };
  //   const map = new naver.maps.Map(mapElement.current, mapOptions);
  //   new naver.maps.Marker({
  //     position: location,
  //     map,
  //   });
  // }, []);

  let navigate = useNavigate();
  return (
    <div className="App">
      <div className='background-black'>
      <h1 onClick={()=>{navigate('/')}} className='pt-5'>지진시 근처대피장소 앱</h1>
        <Routes>
          <Route path='/' element={
              <>                
                <Button onClick={()=>{navigate('/save')}} className='w-75 big-btn big-top-gap' variant="primary">내 위치 조회 및 저장</Button>
                <Button onClick={()=>{navigate('/load')}} className='w-75 big-btn middle-top-gap' variant="primary">저장됬던 내위치 조회</Button>
                {/* <div className='small-map' ref ={mapElement}></div> */}
              </>
            } />
          <Route path='/save' element={
            // <Save mapElement={mapElement}></Save>
            <Save></Save>
          } />
          <Route path='/load' element={
            <Load></Load>
          } />        
        </Routes>
      
        
      </div>
    </div>
  );
}

export default App;
