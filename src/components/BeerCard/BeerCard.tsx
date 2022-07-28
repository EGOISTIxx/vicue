import React, { RefObject } from 'react'
import Link from 'next/link'
import {
  BeerCardWrapper,
  EmptyImage,
  ImageWrapper,
  InfoDescription,
  InfoTitle,
  MainInfoWrapper,
} from './SBeerCard'
import Image from 'next/image'
import { truncateString } from '../../helpers/truncateString/truncateString'

export const BeerCard: React.FC<
  React.PropsWithChildren<{
    elemRef?: (node: HTMLDivElement) => void
    id: number
    image: string
    name: string
    description: string
  }>
> = (props) => {
  const { id, name, elemRef, image, description } = props

  return (
    <BeerCardWrapper ref={elemRef}>
      <ImageWrapper>
        {image !== null ? (
          <Image
            src={image}
            alt={name}
            width={150}
            height={300}
          />
        ) : (
          <EmptyImage>Empty image</EmptyImage>
        )}
      </ImageWrapper>
      <MainInfoWrapper>
        <InfoTitle>{name}</InfoTitle>
        <InfoDescription>
          {truncateString(description)}
        </InfoDescription>
        <Link href={`/${name}/${id}`}>
          Перейти на страницу товара
        </Link>
      </MainInfoWrapper>
    </BeerCardWrapper>
  )
}
