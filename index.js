//download the json file
$.getJSON("https://files.gwo.pl/custom/random-data.json", function(programmers) {
  const programmersArray = Object.keys(programmers).map(i => programmers[i]);
  console.log('Agency before adding programmer\n', programmersArray);

  const additionalProgrammer = {
    name: "Alan",
    framework: "Ember",
    experience: 10,
    available: true
  };

  //add new programmer
  const allProgrammers = [...programmersArray, additionalProgrammer];
  console.log('Agency after adding programmer\n', allProgrammers);

  //add id
  let id = 0;
  allProgrammers.map(e => {
    e.id = id++;
  });
  console.log('All programmers\n', allProgrammers);

  //delete programmer from array
  const removingProgrammer = allProgrammers.filter(function(e) {
    return e.name !== 'Mark';
  });
  console.log('All programmers after removing first programmer\n', removingProgrammer);

  //update name of first programmer
  const updateProgrammer = [];
  for (let i = 0; i < removingProgrammer.length; i++) {
    updateProgrammer[i] = {};
    for (let prop in removingProgrammer[i]) {
      updateProgrammer[i][prop] = removingProgrammer[i][prop];
    }
  }
  updateProgrammer[0].name = "Johnny";
  console.log('All programmers after updating first programmer\n', updateProgrammer);

  //filter programmers by key
  const filterProgrammer = allProgrammers.filter(function(e) {
    return e.available === true && e.framework === 'Angular';
  });
  console.log('Filtered programmers\n', filterProgrammer);

  //show all developers available for this moment
  const getShowcase = [];
  console.log('Hello, list of all available programmers at now:');
  for (let i = 0; i < updateProgrammer.length; i++) {
    getShowcase[i] = updateProgrammer[i];
    console.log(getShowcase[i].name);
  }
});
