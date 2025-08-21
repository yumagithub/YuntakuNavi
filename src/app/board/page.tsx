// src/app/board/page.tsx

import { CommentItem } from "~/components/features/board/CommentItem";

// 表示確認用ダミーデータ
const mockComments = [
    { id: 1, authorName: "琉大生A", content: "初コメントです", createdAt: new Date() },
    { id: 2, authorName: "琉大生B", content: "二番目のコメントです", createdAt: new Date() },
    { id: 3, authorName: "琉大生C", content: "三番目のコメントです", createdAt: new Date() },
];

export default function BoardPage() {
    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold">ゆんたく掲示板</h1>

            <div className="mt-8 space-y-4">
                {mockComments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        authorName={comment.authorName}
                        content={comment.content}
                        createdAt={comment.createdAt}
                    />
                ))}
            </div>
        </main>
    );
};