import DS from 'ember-data';

export default DS.Model.extend({
  club: DS.attr('string'),
  talk: DS.attr('string')
});
