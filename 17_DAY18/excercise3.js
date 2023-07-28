//Read the cats api and find the average weight of cat in metric unit.
function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => e.message);
}

getData(catsAPI).then((response) => {
  response.forEach((catData) => {
    console.log(
      `${catData.name} has average weight ${getAverageWeightInMetric(catData)}`
    );
  });
});

function getAverageWeightInMetric(catData) {
  const weightInMetric = catData.weight.metric;
  const weights = weightInMetric.split(" - ");
  const minWeight = parseFloat(weights[0]);
  const maxWeight = parseFloat(weights[1]);
  const averageWeight = (minWeight + maxWeight) / 2;
  return averageWeight;
}

//Read the countries api and find out the 10 largest countries
getData(countriesAPI).then((response) => {
  const largestCountries = response
    .sort((a, b) => b.area - a.area)
    .slice(0, 10);
  console.log(largestCountries);
});

//Read the countries api and count total number of languages in the world used as officials.
// Assuming you have a function called `getData` that fetches data from the countries API

function countTotalOfficialLanguages() {
  getData(countriesAPI)
    .then((response) => {
      const languagesSet = new Set();

      response.forEach((country) => {
        country.languages.forEach((lang) => languagesSet.add(lang.name));
      });

      const totalLanguages = languagesSet.size;
      console.log(
        "Total Number of Official Languages in the World:",
        totalLanguages
      );
      for (const lang of languagesSet) {
        console.log(lang);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

countTotalOfficialLanguages();
