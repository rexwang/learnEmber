import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  shouldReloadAll() {
    return true;
  }
});
