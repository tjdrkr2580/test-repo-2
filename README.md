# 과제 4

| 게시글 생성 | /diarys       | POST   | {id : number, user : string, title : string, content : string }                                                                                                                                      | -   |
| ----------- | ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| 게시글 수정 | /diarys/:id   | PATCH  | {id : number, user : string, title : string, content : string }                                                                                                                                      | -   |
| 게시글 삭제 | /diarys/:id   | DELETE | -                                                                                                                                                                                                    | -   |
| 게시글 조회 | /diarys       | GET    | [{id : number, user : string, title : string, content : string },{id : number, user : string, title : string, content : string },{id : number, user : string, title : string, content : string }...] | -   |
| 댓글 조회   | /comments     | GET    | [{id : number, postId : string, user : string, comment : string },{id : number, postId : string, user : string, comment : string },{id : number, postId : string, user : string, comment : string }] | -   |
| 댓글 삭제   | /comments/:id | DELETE | -                                                                                                                                                                                                    | -   |
| 댓글 생성   | /comments     | POST   | {id : number, postId : string, user : string, comment : string }                                                                                                                                     | -   |
