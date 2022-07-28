import styled from 'styled-components'

export const BeerWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
`

export const ImageWrapper = styled.div`
  width: 300px;
  height: 600px;

  & > * {
    width: 300px !important;
    height: 600px !important;
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const InfoTitle = styled.h1`
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
`

export const InfoTagline = styled.span`
  color: #8f8f8f;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: none;
`

export const InfoDescription = styled.span`
  color: #ffffff;
  font-size: 1.5rem;
`

export const InfoABVW = styled.span`
  color: #ffffff;
  font-size: 1rem;
`

export const InfoFoodPairing = styled.span`
  color: #ffffff;
  font-size: 1rem;
`

export const ResidualInformationWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    color: #8f8f8f;
    font-size: 0.9rem;
    text-transform: none;
  }
`
