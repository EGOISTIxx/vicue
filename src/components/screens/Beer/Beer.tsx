import React, { memo } from 'react'
import Image from 'next/image'
import {
  BeerWrapper,
  EmptyImage,
  ImageWrapper,
  InfoABVW,
  InfoDescription,
  InfoFoodPairing,
  InfoTagline,
  InfoTitle,
  InfoWrapper,
  ResidualInformationWrapper,
} from './SBeer'

const Beer: React.FC<{
  beer: {
    image_url: string
    name: string
    description: string
    tagline: string
    abv: number
    food_pairing: string[]
  }
}> = (props) => {
  const { beer } = props

  const {
    image_url,
    name,
    description,
    tagline,
    abv,
    food_pairing,
  } = beer

  return (
    <BeerWrapper>
      <ImageWrapper>
        {image_url !== null ? (
          <Image
            src={image_url}
            alt={name}
            width={300}
            height={600}
          />
        ) : (
          <EmptyImage>Empty image</EmptyImage>
        )}
      </ImageWrapper>
      <InfoWrapper>
        <InfoTitle>
          {name} <InfoTagline>{tagline}</InfoTagline>
        </InfoTitle>
        <InfoDescription>{description}</InfoDescription>
        <ResidualInformationWrapper>
          <InfoABVW>ABV:&nbsp;</InfoABVW>
          <InfoABVW>{abv}%</InfoABVW>
        </ResidualInformationWrapper>
        <ResidualInformationWrapper>
          <InfoFoodPairing>Food pairing:&nbsp;</InfoFoodPairing>
          {/* {food_pairing.map((food) => (
            <InfoFoodPairing key={food}>
              {food}
            </InfoFoodPairing>
          ))} */}
          <InfoFoodPairing>{food_pairing.join(', ')}</InfoFoodPairing>
        </ResidualInformationWrapper>
      </InfoWrapper>
    </BeerWrapper>
  )
}

export default memo(Beer)
