import Ember from 'ember';

export function titleizeString(str) {
  if (str && typeof str === 'string') {
    const spacedString = str.replace(/[ \-_]+/g, ' ');
    return Ember.String.w(spacedString).map(Ember.String.capitalize).join(' ');
  } else {
    return str;
  }
}
