/**
 * 인덱스드 엑세스 타입
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    }
}

const post: Post = {
    title : "게시글 제목"
    ,content : "게시글 본문"
    ,author: {
        id: 1,
        name: "전형일"
    }
}

/* 기존
function printAuthorInfo(author: {id: number; name:string;}){
...
}
*/

/* Indexed-Access */
function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.id}-${author.name}`)
}