import React from 'react'
import {
  MypageOrderListWrapper,
  OrderListWrapper
} from "../Mypage/StyledMypage";
import { StoreTitle,StoreDesc,StoreDescContent,StoreDescImg,StoreMenu ,MenuDesc,MenuImg,MenuContent} from './StyledAdminPage'

const AdminStoreInfo = ({store}:any) => {
  console.log("11", store);
  return (
      <MypageOrderListWrapper>
      <OrderListWrapper >
        <StoreDescContent>
          <StoreTitle>
            <h2>{store.name}</h2>
            <div>{store.category}</div>
          </StoreTitle>
          <StoreDescImg>
            <img src={store.image.split(",")[0]} alt="store" width="100%" height="100%"></img>
          </StoreDescImg>
          <StoreDesc>
            <h3>스토어 정보</h3>
            <div>
              <span>주소:</span>
              <p>{store.address}</p>
            </div>
            <div><span>연락처:</span><p>{store.number}</p></div>
            <div><span>영업시간:</span><p> 10:00 - 19:00</p></div>
            <div><span>가게 설명:</span><p>{store.introduce } </p></div>
            <div></div>
          </StoreDesc>
          <StoreMenu>
            <h3>메뉴 정보</h3>
            {store.store_menus.map((item:any) => {
              return (
                <MenuContent key={item.menu.name}>
                  <MenuImg>
                    <img src={item.menu.image} alt="menu" />
              </MenuImg>
              <MenuDesc>
                    <h4>{item.menu.name}</h4>
                <p>{item.menu.price} 원</p>
                <p>{item.menu.detail}</p>
              </MenuDesc>
              
            </MenuContent>
              )
            })}
            
          </StoreMenu>
        </StoreDescContent> 
         
        </OrderListWrapper>
    </MypageOrderListWrapper>
  )
}

export default AdminStoreInfo
