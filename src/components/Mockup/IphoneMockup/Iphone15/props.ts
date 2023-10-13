import { IMockupProps } from '#/mockup'

const createProps = (): IMockupProps => {
  return {
    styles: [
      {
        label: 'Black',
        imgUrl: 'https://shots.so/mockups/iPhone%2015/style/black.png',
      },
      {
        label: 'Blue',
        imgUrl: 'https://shots.so/mockups/iPhone%2015/style/blue.png',
      },
      {
        label: 'Green',
        imgUrl: 'https://shots.so/mockups/iPhone%2015/style/green.png',
      },
      {
        label: 'Pink',
        imgUrl: 'https://shots.so/mockups/iPhone%2015/style/pink.png',
      },
      {
        label: 'Yellow',
        imgUrl: 'https://shots.so/mockups/iPhone%2015/style/yellow.png',
      },
    ],
    layouts: [
      {
        imgUrl: 'https://shots.so/mockups/iPhone%2015/thumbs/1.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/iPhone%2015/thumbs/2.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/iPhone%2015/thumbs/3.png',
      },
      // 前三个菜展示预览图
      {
        imgUrl: 'https://shots.so/mockups/iPhone%2015/thumbs/3.png',
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
