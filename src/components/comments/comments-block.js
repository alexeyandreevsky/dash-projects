import './comments-block.scss';

import Comment from "./comment/comment";

function CommentsBlock() {
  return (
    <div class="comments-block">

      <div class="comments-block__title">
        Comments
      </div>

      <div class="comments-block__list">

        <Comment />
        <Comment />
        <Comment />
        <Comment />

      </div>
    </div>
  );

}

export default CommentsBlock;
