import './projects-filter.scss';

function ProjectsFilter() {
  return (
    <div class="projects-filter">
          <div class="projects-filter-item projects-filter__item">
            <div class="projects-filter-item__title">
              Tags:
            </div>

            <select class="" name="">
              <option value="all">All</option>
              <option value="platform">platform</option>
              <option value="mobile">mobile</option>
              <option value="private">private</option>
            </select>
          </div>

          <div class="projects-filter-item projects-filter__item">
            <label class="dash-checkbox">
              <input type="checkbox" name="insprogress" value="1"/>
              <span>in progress</span>
            </label>
          </div>

          <div class="projects-filter-item projects-filter__item">
            <label class="dash-checkbox">
              <input type="checkbox" name="insprogress" value="1"/>
              <span>in progress</span>
            </label>
          </div>
    </div>
  );
}

export default ProjectsFilter;
