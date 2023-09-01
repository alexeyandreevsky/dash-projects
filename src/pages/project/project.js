import './project.scss';

import 'components/screenshots/screenshots-block.scss';
import 'components/screenshots/list/screenshots-list-item.scss';
import 'components/screenshots/list/screenshots-list.scss';

import CommentsBlock from 'components/comments/comments-block.js';
import ScreenshotsBlock from 'components/screenshots/screenshots-block';
import TagsBlock from 'components/tags/tags-block';


function ProjectPage() {

  return (
    <div class="project-page">
      <div class="project-info">
        <div class="project-info__img-container">
          <img class="project-info__img" src="https://media.dash.org/wp-content/uploads/dash-logo.svg" alt=""/>
        </div>

        <div class="project-info__title">Platform-explorer</div>

        <div class="project-info__description">
          This Developer Documentation describes how Dash works to help educate new Dash developers, but it is not a specification—and it never will be.
          Dash security depends on consensus. Should your program diverge from consensus, its security is weakened or destroyed. The cause of the divergence doesn’t matter: it could be a bug in your program, it could be an error in this documentation which you implemented as described, or it could be you do everything right but other software on the network behaves unexpectedly as in the case of Bitcoin’s v0.8 chain fork. The specific cause will not matter to the users of your software whose wealth is lost.
          The only correct specification of consensus behavior is the actual behavior of programs on the network which maintain consensus. As that behavior is subject to arbitrary inputs in a large variety of unique environments, it cannot ever be fully documented here or anywhere else.
          In addition, we also warn you that this documentation has not been extensively reviewed by Dash experts and so likely contains numerous errors.
        </div>


        <div class='project-info__screenshots-container'>
          <ScreenshotsBlock/>
        </div>

        <a href="/" class='project-info__github-link'>Project on Github</a>


        <div class="tags project-info__tags-container">
          <TagsBlock/>
        </div>



        <div class='project-info__votes-block'>
          Votes block
        </div>


      </div>

      <CommentsBlock />

    </div>
  );
}

export default ProjectPage;
