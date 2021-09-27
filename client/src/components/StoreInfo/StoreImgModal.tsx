import React , {useMemo} from 'react'
import { 
  ModalContainer , 
} from '../common/Modal/styledModal'
import {
  ModalStoreWrapper ,
  CloseBtnIcon,
  ModalStoreImgSlideBox,
  ModalStoreImgs,
} from './StyledStoreData'
// import {MiddleButton} from '../Button/Button'
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import Slider,{Settings} from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// interface storeSliderProps {
//   autoplay?: boolean | number;
//   speed?: number;
//   loop?: boolean; 
// }

function StoreImgModal(
  props:any,store:any, 
  // {
  // autoplay = false,
  // speed = 800,
  // loop = false,
// }:storeSliderProps
) 
{
  console.log('props',props);
  const history:any = useHistory()
  // const store = useSelector((state:any) => state.store);
  // const storeImg = store;
  console.log('==store info img==',props.store);

  const settings = useMemo<Settings>(
    ()=>({
      dots: true,
      arrows : true,
      // infinite: loop,
      // speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,  
      centerMode: true,
      centerPadding: '0px',  
      // autoplay: Boolean(autoplay),
      // autoplaySpeed: typeof autoplay === 'boolean' ? 5000 : autoplay,
    }),[]);

  const { openModal, setOpenModal, 
    modalTitleText ,modalText, modalBtn,url } = props;

  const closeModal = () => {
    if (url) {
      history.push(url);
    } else {
      setOpenModal(false);
    }
  }
  //여기는 가게 이미지슬라이더만 보여지는 모달입니덩.
  return (
      openModal ? (
        <ModalContainer 
        // onClick = {closeModal}
        className = 'modal-container' >            
          <ModalStoreWrapper className = 'modal-wrapper'>
          <CloseBtnIcon  
            onClick = {closeModal}>
            <i className="fas fa-times"></i>
          </CloseBtnIcon>  
            {/* <Slider {...settings}>
              {storeImg&&storeImg.map((el:any,idx:any)=>{
                return (
                  <ModalStoreImgSlideBox key = {idx}>
                  <ModalStoreImgs src = {el} alt = 'store-imgs'/>
                  </ModalStoreImgSlideBox>
                )
              })}
            </Slider> */}
            </ModalStoreWrapper>
        </ModalContainer>
      )
      :
      null
  )
}

export default StoreImgModal
