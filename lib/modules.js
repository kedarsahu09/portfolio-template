import config from '../portfolio.config.json';

// True when the user turned on the backend features (contact storage, comments,
// testimonials, blog admin). These need Upstash Redis. When false, those parts are hidden.
export const BACKEND = !!(config.modules && config.modules.backend);
