const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

const apiKeys = {
  presidentkey: '0afbc589-d478-4c52-a6fa-4821f47530d3',
  communcationDinternalkey: 'd6ed01a6-47df-4e45-9346-c05035c6550d',
  communcationDexternalkey: '213bc4fb-587a-42c2-aa55-b7120e1fc570',
  devofficekey: '7042d6d1-159b-44ec-8642-564653481a7c',
  alumnigeneralkey: '8f1c9864-5e66-4554-9d64-89d601d32663',
  alumniaroskey: '470359df-21c7-4709-b943-b6ee98ba07a8',
  uointernationalkey: '662799d5-a8b6-481e-a519-80a87e648599',
  vpacademic: '1cc944e7-7349-4679-868d-7ae0c1a32053',
  vrrecherche: '06fb3fef-3040-4fd3-8c83-21c5266e5490',
  hrmodernisation: 'ee92f320-a7d3-44de-b514-30ee39047782',
  ceremoniesandevents: 'df09cbc9-14b2-49b0-880d-ca2f371cb25d',
  leadership: '54bfdff7-7601-4a19-8367-905095d0b167',
  uOsurveys: '728159b5-a939-4fa2-999f-b5d0db7c675f',
};

app.use(cors());
app.use(bodyParser.json());

/*app.listen('9000');*/

/*app.get("/", function (req, res) {
  res.type('html').send(html);
});*/

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index', {})
});


/*
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));*/

/*server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Campaigner</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Campaigner List Upload</h1>
  <form autocomplete="off" id="campaigner-form">
    <div>
      <input type="checkbox" id="582045" name="List2" value="OOP" />
      <label for="582045">582045 Office of the President</label><br />
      <input type="checkbox" id="582645" name="List3" value="DEV" />
      <label for="582645">582645 Development Office</label><br />
      <input type="checkbox" id="582065" name="List4" value="Coms" />
      <label for="582065">582065 Communications Directorate (External)</label><br />
      <input type="checkbox" id="588235" name="List5" value="Alumni" />
      <label for="588235">588235 Alumni Relations (General)</label><br />
      <input type="checkbox" id="588260" name="List6" value="AROs" />
      <label for="588260">588260 Alumni Relations (AROs)</label><br />
      <input type="checkbox" id="588280" name="List7" value="HR" />
      <label for="588280">588280 Human Resources</label><br />
      <input type="checkbox" id="746765" name="List8" value="VR" />
      <label for="746765">746765 VR Recherche</label><br />
      <input type="checkbox" id="760138" name="List9" value="HRModern" />
      <label for="760138">760138 HR Modernisation</label><br />
      <input type="checkbox" id="772710" name="List10" value="Ceremonies" />
      <label for="772710">772710 Ceremonies & Events</label><br />
      <input type="checkbox" id="776515" name="List11" value="Leadership" />
      <label for="776515">776515 Leadership académique</label><br />
      <input type="checkbox" id="777832" name="List12" value="uOsurveys" />
      <label for="777832">777832 uOsondages-uOsurveys</label><br /><br />
    </div>
    <label for="name">List Name:</label>
    <input type="text" id="name" name="name" /><br />
    <label for="fileUpload">Upload Excel Files:</label>
    <input type="file" id="fileUpload" accept=".xlsx" multiple /><br />
	<strong>Excel file must contain a column with a header named "Email"</strong><br />
    <label for="itemnumber" id="itemnumber"></label><br />
    <button type="submit" id="submitButton">Submit</button>
    <div id="progressBarContainer">
      <div id="progressBar"></div>
    </div>
  </form>
  <p class="waiting"></p>
  <p class="upload-status-name"></p>
  <p class="upload-status-data"></p>
    <script
      src="https://cdn.jsdelivr.net/npm/xlsx@0.16.8/dist/xlsx.full.min.js"
      integrity="sha256-Ic7HP804IrYks4vUqX1trFF1Nr33RjONeJESZnYxsOY="
      crossorigin="anonymous"
    ></script>
  <script type="text/javascript" >
    const uploadName = document.querySelector('.upload-status-name')
    const uploadData = document.querySelector('.upload-status-data')
    const waitingmessage = document.querySelector('.waiting')
    const listOfEmails = []
    const form = document.getElementById('campaigner-form')
    const fileUpload = document.getElementById('fileUpload')

    function splitLargeArray(data) {
      if (data.length <= 1000) {
        return [data]
      }
      const subArrays = []
      let remaining = data
      while (remaining.length) {
        const chunk = remaining.slice(0, 1000)
        subArrays.push(chunk)
        remaining = remaining.slice(1000)
      }
      return subArrays
    }

  </script>
</body>
</html>
`;
/*
    async function getData(accountid) {
      const listname = document.getElementById('name').value
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      const raw = JSON.stringify({
        Name: listname,
        Accountid: accountid,
      })
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }
      try {
        const response = await fetch(
          'https://campaigner.onrender.com/get-lists',
          requestOptions
        )
        const result = await response.text()
        const list = JSON.parse(result).ListID
        const concat = `${result}`.split(',')
        console.log(result)
        uploadData.innerHTML = `List Uploaded: ${concat[1]}`
        splitLargeArray(listOfEmails).forEach((element) => {
          getEmails(element, list, accountid)
        })
      } catch (error) {
        console.error(error)
      }
    }

    async function getEmails(emailsList, listid, accountno) {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      const raw = JSON.stringify({
        emailsList,
        listid,
        accountno,
      })
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }
      try {
        const response = await fetch(
          'https://campaigner.onrender.com/get-emails',
          requestOptions
        )
        const result = await response.text()
        console.log(result)
        waitingmessage.innerHTML = ''
        uploadName.innerHTML = result
      } catch (error) {
        console.error(error)
        uploadName.innerHTML = error
      }
    }

    form.addEventListener('submit', (event) => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]')
      const accountsarray = []
      waitingmessage.innerHTML = 'Uploading contacts...'
      for (const checkbox of checkboxes) {
        if (checkbox.checked) {
          accountsarray.push(parseInt(checkbox.id))
        }
      }
      event.preventDefault()
      console.log(accountsarray)
      accountsarray.forEach((element) => {
        getData(element)
      })
    })

    const emailCountLabel = document.getElementById('itemnumber')

    fileUpload.addEventListener('change', function () {
      const selectedFiles = fileUpload.files
      if (selectedFiles.length === 0) {
        return
      }
      const emailList = []
      let emailCount = 0

      for (const file of selectedFiles) {
        const reader = new FileReader()
        reader.onload = function (event) {
          const data = event.target.result
          const workbook = XLSX.read(data, { type: 'binary' })
          const sheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[sheetName]
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
          emailCount += jsonData.length - 1

          workbook.SheetNames.forEach((sheet) => {
            const result = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
              raw: false,
            })
            result.forEach((element) => {
              if ('email' in element) {
                listOfEmails.push(element.email)
              } else if ('Email' in element) {
                listOfEmails.push(element.Email)
              } else {
                listOfEmails.push(element.Subscribers)
              }
            })
          })
          console.log(listOfEmails)
          const formattedEmails = emailList.join('<br>')
        }
        reader.readAsBinaryString(file)
      }
      emailCountLabel.innerHTML = `Total emails: ${emailCount}`
    })
  </script>
</body>
</html>
`;*/

app.post('/get-lists', async (req, res) => {
  try {
    const Name = req.body.Name;
    const Account = req.body.Accountid;

    let selectedApiKey;
    if (Account === 582645) {
      selectedApiKey = apiKeys.devofficekey;
    }
    if (Account === 582045) {
      selectedApiKey = apiKeys.presidentkey;
    }
    if (Account === 578195) {
      selectedApiKey = apiKeys.communcationDinternalkey;
    }
    if (Account === 582065) {
      selectedApiKey = apiKeys.communcationDexternalkey;
    }
    if (Account === 588235) {
      selectedApiKey = apiKeys.alumnigeneralkey;
    }
    if (Account === 588260) {
      selectedApiKey = apiKeys.alumniaroskey;
    }
    if (Account === 598700) {
      selectedApiKey = apiKeys.uointernationalkey;
    }
    if (Account === 777832) {
      selectedApiKey = apiKeys.uOsurveys;
    }
    if (Account === 578195) {
      selectedApiKey = apiKeys.vpacademic;
    }
    if (Account === 746765) {
      selectedApiKey = apiKeys.vrrecherche;
    }
    if (Account === 760138) {
      selectedApiKey = apiKeys.hrmodernisation;
    }
    if (Account === 772710) {
      selectedApiKey = apiKeys.ceremoniesandevents;
    }
    if (Account === 776515) {
      selectedApiKey = apiKeys.leadership;
    }

    const response = await fetch('https://edapi.campaigner.com/v1/Lists/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

        ApiKey: selectedApiKey,
      },
      body: JSON.stringify({
        Name,
      }),
    });

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Campaigner API' });
  }
});

app.post('/get-emails', async (req, res) => {
  try {
    const Emails = req.body.emailsList;
    const ListID = req.body.listid;
    const accountID = req.body.accountno;
    console.log(Emails);
    console.log(ListID);
    console.log(accountID);

    let selectedApiKeyEmails;
    if (accountID === 582645) {
      selectedApiKeyEmails = apiKeys.devofficekey;
    }
    if (accountID === 582045) {
      selectedApiKeyEmails = apiKeys.presidentkey;
    }
    if (accountID === 578195) {
      selectedApiKeyEmails = apiKeys.communcationDinternalkey;
    }
    if (accountID === 582065) {
      selectedApiKeyEmails = apiKeys.communcationDexternalkey;
    }
    if (accountID === 588235) {
      selectedApiKeyEmails = apiKeys.alumnigeneralkey;
    }
    if (accountID === 588260) {
      selectedApiKeyEmails = apiKeys.alumniaroskey;
    }
    if (accountID === 598700) {
      selectedApiKeyEmails = apiKeys.uointernationalkey;
    }
    if (accountID === 777832) {
      selectedApiKeyEmails = apiKeys.uOsurveys;
    }
    if (accountID === 578195) {
      selectedApiKeyEmails = apiKeys.vpacademic;
    }
    if (accountID === 746765) {
      selectedApiKeyEmails = apiKeys.vrrecherche;
    }
    if (accountID === 760138) {
      selectedApiKeyEmails = apiKeys.hrmodernisation;
    }
    if (accountID === 772710) {
      selectedApiKeyEmails = apiKeys.ceremoniesandevents;
    }
    if (accountID === 776515) {
      selectedApiKeyEmails = apiKeys.leadership;
    }

    const subscriberData2 = {
      EmailAddresses: Emails,
    };

    const response = await fetch(
      `https://edapi.campaigner.com/v1/Lists/${ListID}/AddEmails`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

          ApiKey: selectedApiKeyEmails,
        },

        body: JSON.stringify(subscriberData2),
      }
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Campaigner API' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
