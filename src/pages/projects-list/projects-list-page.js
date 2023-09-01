import ProjectsFilter from 'components/projects-filter/projects-filter';
import ProjectsList from 'components/projects-list/projects-list';

function ProjectListPage() {
  return (
    <div class="project-list-page">
      <ProjectsFilter/>
      <ProjectsList/>
    </div>
  );
}

export default ProjectListPage;
