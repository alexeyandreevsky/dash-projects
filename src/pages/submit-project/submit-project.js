import './submit-project.scss';
import './form-elements.scss';
import './submit-project-form.scss';

function SubmitProjectPage() {
  return (
    <div class="submit-project-page">
      <form class="submit-project-form">


        <label class="text-input submit-project-form__input">
          <span class="text-input__title">Project name</span>
          <input type='text' placeholder='Project name'/>
        </label>

        <label class="text-input submit-project-form__input">
          <span class="text-input__title">Github link</span>
          <input type='text' placeholder='Github link'/>
        </label>

        <label class='textarea-block submit-project-form__input'>
          <span class='textarea-block__title'>Description</span>
          <textarea class='submit-project-form__textarea' placeholder='Description'>
          </textarea>
        </label>

        <div class="submit-project-form__inputs-line">

                <label class="file-input submit-project-form__input submit-project-form__input--file">
                  <span class="file-input__title">Main Img</span>
                  <input type='file' accept="image/png, image/jpg, image/jpeg, image/gif"/>
                </label>

                <label class="file-input submit-project-form__input submit-project-form__input--file">
                  <span class="file-input__title">Screenshots</span>
                  <input type='file' accept="image/png, image/jpg, image/jpeg, image/gif"/>
                </label>

                <button type='submit' class="submit-project-form__submit-button">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default SubmitProjectPage;
