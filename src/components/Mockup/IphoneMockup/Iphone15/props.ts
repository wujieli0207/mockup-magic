import { IMockupProps } from '#/mockup'

const createProps = (): IMockupProps => {
  return {
    styles: [
      {
        label: 'Dark Blue',
        imgUrl:
          'https://shots.so/mockups/iPhone%2015%20Pro/style/dark-blue.png',
      },
      {
        label: 'Black Titanium',
        imgUrl:
          'https://shots.so/mockups/iPhone%2015%20Pro/style/black-titanium.png',
      },
      {
        label: 'Natural Titanium',
        imgUrl:
          '	https://shots.so/mockups/iPhone%2015%20Pro/style/natural-titanium.png',
      },
      {
        label: 'White Titanium',
        imgUrl:
          'https://shots.so/mockups/iPhone%2015%20Pro/style/white-titanium.png',
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
    position: [0, 0],
    isHidden: false,
  }
}

export default createProps
