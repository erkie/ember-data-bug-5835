import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { observer } from '@ember/object';

export default Model.extend({
  justAnAttribute: attr("string"),

  doSomethingWhenCurrentStateChanges: observer("currentState", function() {
    console.log("currentState changed!");
  })
});
