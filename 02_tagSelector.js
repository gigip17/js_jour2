function tagSelector() {
    const button = document.querySelector('button');
    if (button) {
      return button.outerHTML;
    }
    return null;
  }
console.log(tagSelector()); // element>button 
console.log(tagSelector().innerHTML); //"hello"