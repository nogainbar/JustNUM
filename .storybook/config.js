 /* eslint-disable global-require */
import { configure } from '@kadira/storybook';

const loadStories = () => {
  require('../stories/index');
  require('../stories/icon_menu');
  require('../stories/case_checkboxes');
  require('../stories/case_text_field');
};

configure(loadStories, module);
