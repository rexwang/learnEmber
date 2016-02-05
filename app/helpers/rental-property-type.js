import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

// We are using ES6 destructuring to get the first
// item in the array and name it 'type'
export function rentalGroup([type]/*, hash*/) {
  if (communityPropertyTypes.contains(type)) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalGroup);
