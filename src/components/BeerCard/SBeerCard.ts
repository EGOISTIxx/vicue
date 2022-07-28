import styled from 'styled-components'

export const BeerCardWrapper = styled.div`
  padding: 2rem;
  border: 1.5px solid #f3f4f6;
  display: flex;
  column-gap: 2.5rem;
  margin-bottom: 3rem;
  border-radius: 3px;
  background: #111827;

  &:last-child {
    margin-bottom: 5rem;
  }
`

export const ImageWrapper = styled.div`
  width: 150px;
  height: 300px;

  & > * {
    width: 150px !important;
    height: 300px !important;
  }
`

export const EmptyImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6b7280;
`

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`

export const InfoTitle = styled.h1`
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
`

export const InfoDescription = styled.span`
  color: #ffffff;
  font-size: 1rem;
`
