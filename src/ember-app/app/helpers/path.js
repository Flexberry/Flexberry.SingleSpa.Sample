import { helper } from '@ember/component/helper';
import { buildPath } from '../utils/url';
import ENV from 'ember-app/config/environment';

export function path([_path]/*, hash*/) {
  return buildPath(ENV.APP.publicUrl, ENV.rootURL, _path);
}

export default helper(path);
