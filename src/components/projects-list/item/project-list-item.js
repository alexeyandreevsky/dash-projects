import './projects-list-item.scss';
import TagsBlock from 'components/tags/tags-block';

const projects = [
  {
    title: 'Platform-explorer',
    imageUrl: 'https://media.dash.org/wp-content/uploads/dash-logo.svg',
    tags : [
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
    ]
  }
];

function ProjectListItem() {
  return (
    <div class="projects-list-item">
      <div class="projects-list-item__img-container">
        <img class="projects-list-item__img" src={projects[0].imageUrl} alt={projects[0].title}/>
      </div>

      <a href="/project/1" class="projects-list-item__title">{projects[0].title}</a>

      <div class="projects-list-item__tags-container">
        <TagsBlock tagsArray={projects[0].tags}/>
      </div>
    </div>
  );
}

export default ProjectListItem;
