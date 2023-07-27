const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
let filterType = 'startWord'
let flag = true;
const data = document.getElementById('data');
function setCountries(countries, key = '') {
    clearDom()
    if (key && filterType === 'startWord') {
        countries.filter((e) => e.toLowerCase().startsWith(key)).forEach((name) => {
            const card = document.createElement('div');
            card.className = 'card'
            card.textContent = name
            document.querySelector('.cards').appendChild(card)

            data.textContent = `Countries starts with '${key}' are ${countries.filter((e) => e.toLowerCase().startsWith(key)).length || 0}`
        })
    } else if (key && filterType === 'bet') {
        countries.filter((e) => e.toLowerCase().includes(key)).forEach((name) => {
            const card = document.createElement('div');
            card.className = 'card'
            card.textContent = name
            document.querySelector('.cards').appendChild(card)
            data.textContent = `Countries that includes '${key}' are ${countries.filter((e) => e.toLowerCase().includes(key)).length || 0}`
        })
    }
    else if (filterType === 'sortAtoZ') {
        countries.sort().forEach((name) => {
            const card = document.createElement('div');
            card.className = 'card'
            card.textContent = name
            document.querySelector('.cards').appendChild(card)
        })
    }
    else if (filterType === 'sortZtoA') {
        countries.sort(function (a, b) {
            return b.localeCompare(a);
        }).forEach((name) => {
            const card = document.createElement('div');
            card.className = 'card'
            card.textContent = name
            document.querySelector('.cards').appendChild(card)
        })


    }
    else {
        countries.forEach((name) => {
            const card = document.createElement('div');
            card.className = 'card'
            card.textContent = name
            document.querySelector('.cards').appendChild(card)
        })
    }
}
setCountries(countries)

function clearDom() {
    const cards = document.querySelector('.cards');
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
}


const startingWordBtn = document.getElementById("starting-word-btn");
const searchAnyWordBtn = document.getElementById("search-any-word-btn");
const aToZBtn = document.getElementById("a-to-z-btn");

function setActiveButton(btn) {
    startingWordBtn.classList.remove("active");
    searchAnyWordBtn.classList.remove("active");
    aToZBtn.classList.remove("active");

    btn.classList.add("active");
}

startingWordBtn.addEventListener("click", function () {
    filterType = 'startWord'
    setActiveButton(startingWordBtn);
});

searchAnyWordBtn.addEventListener("click", function () {
    setActiveButton(searchAnyWordBtn);
    filterType = 'bet'
});

aToZBtn.addEventListener("click", function () {
    if (flag) {
        filterType = 'sortZtoA'
        flag = false;
    } else {
        filterType = 'sortAtoZ'
        flag = true;
    }
    setCountries(countries)
    setActiveButton(aToZBtn);
});


function onSearchChar(event) {
    const key = document.getElementById('sch').value;
    setCountries(countries, key)
}