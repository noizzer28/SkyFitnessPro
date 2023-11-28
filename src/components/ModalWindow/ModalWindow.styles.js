import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 5;
`
export const ModalContent = styled.div`
  position: relative;
  width: 444px;
  min-height: 360px;
  background: #fff;
  padding: 40px 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`
export const ModalSuccessHeader = styled.h2`
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`
export const ModalSuccessPicture = styled.div``
export const ModalSuccessImg = styled.img`
  width: 100%;
  height: auto;
  justify-self: flex-end;
  margin-bottom: -45px;
  object-fit: cover;
`
export const ModalCloseButton = styled.button`
  position: absolute;
  border: none;
  background: none;
  color: #909090;
  top: 10px;
  right: 18px;
  font-size: 30px;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    color: #606060;
  }
`
