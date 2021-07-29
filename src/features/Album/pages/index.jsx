import React from 'react';
import AlbumList from '../components/AlbumList';

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhạc Hàn Hôm Nay Nghe Gì?',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/b/2/4/fb24f30cf3d268bff56ff3a0d22677c5.jpg',
    },
    {
      id: 2,
      name: 'Tản Mạn Cùng Indie Việt',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/f/e/6efe33c1efa950b4bf44a926b0eafaf1.jpg',
    },
    {
      id: 3,
      name: 'Bộ 3 Kết Hợp',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/8/e/0/78e0bb286573c95ecd2b575a7ed04f8e.jpg',
    },
    {
      id: 4,
      name: 'Band I Love',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/3/e/6/83e6625450f6f16cd831eae7a31eb35b.jpg',
    },
  ];
  return (
    <div>
      <h2>List nhạc tháng 7</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
