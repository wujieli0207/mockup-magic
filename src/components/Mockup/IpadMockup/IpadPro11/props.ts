import { IMockupProps } from '#/mockup'

const createProps = (): IMockupProps => {
  return {
    styles: [
      {
        label: 'Space Grey',
        imgUrl:
          'https://shots.so/mockups/iPad%20Pro%2011/styles/space-grey.png',
      },
      {
        label: 'Silver',
        imgUrl: 'https://shots.so/mockups/iPad%20Pro%2011/styles/silver.png',
      },
    ],
    layouts: [
      {
        imgUrl: 'https://shots.so/mockups/iPad%20Pro%2011/thumbs/1.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/iPad%20Pro%2011/thumbs/2.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/iPad%20Pro%2011/thumbs/3.png',
      },
      // 前三个菜展示预览图
      {
        imgUrl: 'https://shots.so/mockups/iPad%20Pro%2011/thumbs/3.png',
      },
    ],
    shadow: 0,
    scale: 0,
    positionX: 0,
    positionY: 0,
    isHidden: false,
  }
}

export default createProps
