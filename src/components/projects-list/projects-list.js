import ProjectListItem from 'components/projects-list/item/project-list-item';
import './projects-list.scss';

function ProjectsList() {
  return(
    <div class="projects-list">
      <ProjectListItem/>
      <ProjectListItem/>
      <ProjectListItem/>
    </div>
  );
}

export default ProjectsList;
