function tagSelector() {
    return document.querySelector('button');
  }
console.log(tagSelector());
console.log(tagSelector().innerHTML);
module.export = tagSelector;