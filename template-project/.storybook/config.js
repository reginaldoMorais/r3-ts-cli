import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/loading.stories');
  require('./stories/toastr.stories');
  require('./stories/content.stories');
}

configure(loadStories, module);
