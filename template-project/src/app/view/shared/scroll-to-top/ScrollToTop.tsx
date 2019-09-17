import React from 'react';

import { ScrollToTopButton } from './ScrollToTopStyle';
import ScrollToTop from 'react-scroll-up';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <ScrollToTop showUnder={160}>
    <ScrollToTopButton>
      <FontAwesomeIcon icon={faChevronUp} />
    </ScrollToTopButton>
  </ScrollToTop>
);
