import React from 'react';
import BoardMemberCard from '@/components/board/BoardMemberCard';

const BoardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <BoardMemberCard title="Faculty Advisor" name="Professor John Doe" />
        <BoardMemberCard title="President" name="Jane Smith" />
        <BoardMemberCard title="Vice President" name="Alice Johnson" />

      </div>
    </div>
  );
};

export default BoardPage;
