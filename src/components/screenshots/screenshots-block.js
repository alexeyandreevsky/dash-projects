import './screenshots-block.scss'

import ScreenshotsList from './list/screenshots-list.js';

function ScreenshotsBlock() {
  return (
    <div class='screenshots-block'>
      <div class='screenshots-block__title'>Screenshots</div>
      <div class='screenshots-block__list-container'>
        <ScreenshotsList/>
      </div>
    </div>

  );
}

export default ScreenshotsBlock
