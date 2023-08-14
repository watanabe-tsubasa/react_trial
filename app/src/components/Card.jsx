import React from 'react';

export const Card = (props) => {
  const { title, image, imageUrl } = props; // propsに追加で定義する
  const cardStyle = {
    flex: '0 0 calc(25% - 16px)',
    maxWidth: '25%',
    border: '1px solid #333',
    padding: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '8px',
    boxSizing: 'border-box',
    height: '300px'
  };
  
  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const titleStyle = {
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  // 画像を開く関数を定義する
  const onClickImage = () => {
    const newWindow = window.open(imageUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  return (
    <div style={cardStyle}>
      <img
       src={image}
       alt={title}
       style={imageStyle}
       onClick={onClickImage} // onClickに関数を追加
      />
      <div style={titleStyle}>{title}</div>
    </div>
  );
}
