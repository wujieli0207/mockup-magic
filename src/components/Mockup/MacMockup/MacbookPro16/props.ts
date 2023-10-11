import { IMockupProps } from '#/mockup'

const createProps = (): IMockupProps => {
  return {
    styles: [
      {
        label: 'Space Grey',
        imgUrl:
          'https://shots.so/mockups/iPad%20Pro%2011/styles/space-grey.png',
      },
    ],
    layouts: [
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Pro%2016/thumbs/1.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Pro%2016/thumbs/2.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Pro%2016/thumbs/3.png',
      },
      // 前三个菜展示预览图
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Pro%2016/thumbs/3.png',
      },
    ],
    shadow: 0,
    scale: 0,
    position: [0, 0],
    isHidden: false,
  }
}

export default createProps
