import React from 'react';

type Props = {
  title: string;
  name: string;
};

const BoardMemberCard: React.FC<Props> = ({ title, name }) => {
  return (
    <button style={{
      backgroundColor: '#A71D24',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      textAlign: 'center',
      width: '200px',
      border: 'none',
      cursor: 'pointer'
    }}>
      <div style={{ fontWeight: 'bold' }}>{title}</div>
      <div>{name}</div>
    </button>
  );
};

export default BoardMemberCard;