//Print out all the cat names in to catNames variable.

function getNames() {
  return fetch(catsAPI)
    .then((response) => response.json())
    .then((data) => {
      const catNames = data.map((cat) => cat.name);
      return catNames;
    });
}

async function printName() {
  const catNames = await getNames();
  console.log(catNames);
}

printName();
