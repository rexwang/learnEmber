import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  filteredList: null,
  actions: {
    autoComplete() {
      var ctrlAutoComplete = this.get('autoComplete'),
          filterValue = this.get('filter');

      ctrlAutoComplete(filterValue);
    },
    search() {
      this.get('search')(this.get('filter'));
    },
    choose(city) {
      this.set('filter', city);
    }
  }
});
