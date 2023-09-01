import TagsList from './tags-list';

import './tags-block.scss';

function TagsBlock({tagsArray}) {

  if (tagsArray === undefined){
    // return;

    tagsArray = [
          {
            id: 1,
            name: 'platform'
          },
          {
            id: 2,
            name: 'mobile'
          },
          {
            id: 1,
            name: 'private'
          }
        ];
  }

  return (
    <div class='tags-block'>
      <span class="projects-list-item__tags-title">Tags: </span>
      <span class="projects-list-item__tags-list">
        <TagsList tagsArray={tagsArray}/>
      </span>
    </div>
  );
}

export default TagsBlock;
