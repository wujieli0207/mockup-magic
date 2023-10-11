import { IMockupProps } from '#/mockup'

const createProps = (): IMockupProps => {
  return {
    styles: [
      {
        label: 'Midnight',
        imgUrl:
          'https://shots.so/mockups/Macbook%20Air%20M2/styles/midnight.png',
      },
      {
        label: 'Silver',
        imgUrl: 'https://shots.so/mockups/Macbook%20Air%20M2/styles/silver.png',
      },
      {
        label: 'Space Gray',
        imgUrl:
          'https://shots.so/mockups/Macbook%20Air%20M2/styles/space-gray.png',
      },
      {
        label: 'Starlight',
        imgUrl:
          'https://shots.so/mockups/Macbook%20Air%20M2/styles/starlight.png',
      },
    ],
    layouts: [
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Air%20M2/thumbs/1.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Air%20M2/thumbs/2.png',
      },
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Air%20M2/thumbs/3.png',
      },
      // 前三个菜展示预览图
      {
        imgUrl: 'https://shots.so/mockups/Macbook%20Air%20M2/thumbs/3.png',
      },
    ],
    shadow: 0,
    scale: 0,
    position: [0, 0],
    isHidden: false,
  }
}

export default createProps
