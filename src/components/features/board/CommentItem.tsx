// src/components/features/board/CommentItem.tsx

import type { FC } from 'react';

//データを受け取るための型定義
type Props = {
    authorName: string;
    content: string;
    createdAt: Date;
};

export const CommentItem: FC<Props> = ({ authorName, content, createdAt: _createdAt }) => {
    return (
        <div className="rounded-lg border bg-white p-4">
            <p className="text-sm font-bold text-gray-700">{ authorName }</p>
            <p className="mt-2 text-gray-800">{ content }</p>
            <p className="mt-1 text-xs text-gray-500">
                {new Intl.DateTimeFormat('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                }).format(_createdAt)}
            </p>
        </div>
    );
};