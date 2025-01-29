// Function to simulate form submission for testing
function testFormSubmit() {

  
  const rejection = {"authMode":"FULL","namedValues":{"Phone number":[""],"Github Username":[""],"What is your ideal position?":[""],"What are your interests? ":[""],"Confirmation of job acceptance":["No"],"Signed offer letter ":[""],"Emergency Contact (Name and Phone Number)":[""],"Full name:":["Matt "],"Email:":["brishna@udel.edu"],"Signed confidentiality agreement:":[""],"Address:":[""],"Timestamp":["1/19/2025 22:02:23"],"What do you see yourself doing in 3-5 years?":[""],"Could you screenshot/provide your schedule so that we could coordinate a meeting time if needed?":[""],"What do you do for fun?":[""]},"range":{"columnEnd":9,"columnStart":1,"rowEnd":4,"rowStart":4},"source":{},"triggerUid":"557989565","values":["1/19/2025 22:02:23","No","Matt ","","","","","","brishna@udel.edu","","","","","",""]}

  const acceptance = {"authMode":"FULL","namedValues":{"What do you do for fun?":["fun stuff"],"Signed confidentiality agreement:":["https://drive.google.com/open?id=1vG89kTyozKnNuZRF6401hFD_Y3KOj1Nh"],"Phone number":["123456789"],"Address:":["123 Fake street"],"What do you see yourself doing in 3-5 years?":["here"],"Signed offer letter ":["https://drive.google.com/open?id=1VbAUYCfJfaaW_rBMVxFOMl-Gl7JkHiAb"],"Github Username":["aiwhoo"],"Timestamp":["1/19/2025 22:03:32"],"Emergency Contact (Name and Phone Number)":["Matt's mom"],"Confirmation of job acceptance":["Yes"],"What is your ideal position?":["things"],"Could you screenshot/provide your schedule so that we could coordinate a meeting time if needed?":[""],"What are your interests? ":["stuff"],"Email:":["brishna@udel.edu"],"Full name:":["Matthew Saponaro 1"]},"range":{"columnEnd":15,"columnStart":1,"rowEnd":5,"rowStart":5},"source":{},"triggerUid":"557989565","values":["1/19/2025 22:03:32","Yes","Matthew Saponaro","123 Fake street","123456789","aiwhoo","https://drive.google.com/open?id=1VbAUYCfJfaaW_rBMVxFOMl-Gl7JkHiAb","https://drive.google.com/open?id=1vG89kTyozKnNuZRF6401hFD_Y3KOj1Nh","brishna@udel.edu","","here","stuff","things","fun stuff","Matt's mom"]}

  const mattacceptancetest = {
  "authMode": "FULL",
  "namedValues": {
    "What do you see yourself doing in 3-5 years?": [
      ""
    ],
    "Emergency Contact (Name and Phone Number)": [
      ""
    ],
    "What are your interests? ": [
      ""
    ],
    "Signed confidentiality agreement:": [
      "https://drive.google.com/open?id=1sFlQpQVIyPChSl3FO_siXLY9KO_2CXRi"
    ],
    "Email:": [
      "brishna@udel.edu"
    ],
    "Address:": [
      "123 Fake Street"
    ],
    "Timestamp": [
      "1/24/2025 12:02:39"
    ],
    "What do you do for fun?": [
      ""
    ],
    "Full name:": [
      "Test HireName4"
    ],
    "Signed offer letter ": [
      "https://drive.google.com/open?id=13-0KRbeFy9N41P-fp-izUF4F7O6frs0I"
    ],
    "What is your ideal position?": [
      ""
    ],
    "Confirmation of job acceptance": [
      "Yes"
    ],
    "Could you screenshot/provide your schedule so that we could coordinate a meeting time if needed?": [
      ""
    ],
    "Github Username": [
      ""
    ],
    "Phone number": [
      "3025555555"
    ]
  },
  "range": {
    "columnEnd": 15,
    "columnStart": 1,
    "rowEnd": 10,
    "rowStart": 10
  },
  "source": {},
  "triggerUid": "557989565",
  "values": [
    "1/24/2025 12:02:39",
    "Yes",
    "Test HireName4",
    "123 Fake Street",
    "3025555555",
    "",
    "https://drive.google.com/open?id=13-0KRbeFy9N41P-fp-izUF4F7O6frs0I",
    "https://drive.google.com/open?id=1sFlQpQVIyPChSl3FO_siXLY9KO_2CXRi",
    "brishna@udel.edu",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
}
  onFormSubmit(mattacceptancetest);
 
}
// function to process the form responses and flatten them into key-value pairs
function processResponses(responses) {
  const namedValues = responses.namedValues;
  const flattenedValues = {};

  // Iterate through namedValues and flatten it
  for (const key in namedValues) {
    if (namedValues.hasOwnProperty(key)) {
      // Ensure that we are getting the correct value
      const value = namedValues[key][0] || "";
      
      // Log the email to ensure it's being extracted correctly
      if (key === "Hire Email") {
        Logger.log("Extracted Hire Email:"+ value);
      }
      // store the flattened value into the object
      flattenedValues[key] = value;
    }
  }
  return flattenedValues;
}
// function to create and share a timesheet for an employee
function createAndShareTimesheet(name, email) {

    // Spreadsheet ID of the source file
  const sourceSpreadsheetId = "1Kq5FzJ0tXlsoXM3hCMimevR1RQYqqOvAE7oPS5Azf1w";// https://docs.google.com/spreadsheets/d/1Kq5FzJ0tXlsoXM3hCMimevR1RQYqqOvAE7oPS5Azf1w/edit?gid=1469507844#gid=1469507844
  
  // Folder ID where the copied file should be moved
  const targetFolderId = "1WytJWkn7tfLIhO4OnObsApHCW3m3_PrD"; // https://drive.google.com/drive/u/0/folders/1WytJWkn7tfLIhO4OnObsApHCW3m3_PrD

  try {
    // Open the source spreadsheet
    const sourceSpreadsheet = DriveApp.getFileById(sourceSpreadsheetId);

    // Create a copy of the spreadsheet
    const copiedFile = sourceSpreadsheet.makeCopy(`${name} Timesheet`,  DriveApp.getFolderById(targetFolderId));

    // Use Drive API to move the copied file to the target folder
    const copiedFileId = copiedFile.getId();
    //const targetFolder = DriveApp.getFolderById(targetFolderId);
    Logger.log(copiedFile.getUrl());
    // Add the file to the target folder

    // Share the file with the email address
    copiedFile.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.EDIT);
    copiedFile.addEditor(email);

    Logger.log(`Spreadsheet copied, renamed, moved, and shared successfully!`);

    return copiedFile.getUrl();
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
  }
  return null;
}
  // function to save empolyee documents to a specific folder structure 
  function saveEmployeeDocuments(decisionIntakeResponse,hiringRequestResponse ) {

    const employeesFolderId = "1n17Xp9HmFuH-ShI-Gc2BsFP5bSmJH-04";//https://drive.google.com/drive/u/0/folders/1n17Xp9HmFuH-ShI-Gc2BsFP5bSmJH-04


    try {
      const employeeName = decisionIntakeResponse["Full name:"] || "Unknown";
      const email = decisionIntakeResponse["Email:"]; // Use email as the unique identifier
      if (!email) {
        throw new Error("Email is missing in the responses. Cannot match the job type.");
      }

      const jobFolderName = hiringRequestResponse["Job Type:"] || "Other";

      // Create the Employees_Folder
      let employeesFolder =  DriveApp.getFolderById(employeesFolderId);
      // Create the job type folder
      let jobFolder = employeesFolder.getFoldersByName(jobFolderName).hasNext()
        ? employeesFolder.getFoldersByName(jobFolderName).next()
        : employeesFolder.createFolder(jobFolderName);

      // Create a folder for the employee
      let employeeFolder = jobFolder.getFoldersByName(employeeName).hasNext()
        ? jobFolder.getFoldersByName(employeeName).next()
        : jobFolder.createFolder(employeeName);

      // Move uploaded documents to the employee's folder
      const documentLinks = [
        decisionIntakeResponse["Signed offer letter "] || "",
        decisionIntakeResponse["Signed confidentiality agreement:"] || "",
        // Add other document fields as needed
      ];

      documentLinks.forEach((link) => {
        if (link) {
          const fileId = link.split("id=")[1]; // Extract file ID from Google Drive link
          const file = DriveApp.getFileById(fileId);
          file.moveTo(employeeFolder);
        }
      });

      Logger.log(`Documents saved successfully for ${employeeName} in ${jobFolderName}.`);
    } catch (error) {
      Logger.log(`Error saving documents: ${error.message}`);
    }
}

// // Function triggered when a form is submitted
function onFormSubmit(e){
  Logger.log(JSON.stringify(e, null, 2))

  const responses = processResponses(e)

  // Define constants
  const hiringRequestSpreadsheetId = "1dgjKi4fh3I213JaGZ624ZJkjC9wZfpylz3_fkOIWQXY";// https://docs.google.com/spreadsheets/d/1dgjKi4fh3I213JaGZ624ZJkjC9wZfpylz3_fkOIWQXY/edit?resourcekey=&gid=1655165821#gid=1655165821
  const sheetName = "Hiring Requests"; // Replace with your sheet name
  const hireEmailColumn = "Hire Email"; // The column to match emails
  const targetEmail = responses["Email:"]; // Replace with your email to match
  const timesheetLink = createAndShareTimesheet(responses["Full name:"], responses["Email:"])
  const discordLink = "https://discord.gg/bAUuR5qP3U";
  const googleFormLink = "https://forms.gle/zap5DNtuX6pLNspDA";
  
  try {
    // Open the spreadsheet and the sheet
    const sheet = SpreadsheetApp.openById(hiringRequestSpreadsheetId).getSheetByName(sheetName);

    // Get headers and data
    const headers = sheet.getDataRange().getValues()[0]; // Get headers (first row)
    const data = sheet.getDataRange().getValues(); // Get all data

    // Find the row with the matching email
    let matchingRow = null;
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const emailIndex = headers.indexOf(hireEmailColumn);
      if (row[emailIndex] === targetEmail) {
        matchingRow = row;
        break;
      }
    }

    if (!matchingRow) {
      Logger.log(`No matching email found for: ${targetEmail}`);
      let errorMessageEmailBody = 'There was an error looking up ' + targetEmail + ' for this script: https://script.google.com/u/0/home/projects/1HxHSDGfhZWVHkNZFp-dbxnfcw5FEW0nyx-jttDU-hAax-3V3MJkw3CLY/edit Please look into it since they were not provided the discord link: ' + discordLink + ' or weekly check-in if needed: ' + googleFormLink + " employee data is in the other folder: https://drive.google.com/drive/u/0/folders/1NRbm1hBfoWkjBUK8ZjpuZ_nSJsU6glCl";
      Logger.log(errorMessageEmailBody);
      GmailApp.sendEmail("mattsap@udel.edu", "Error in Offer Decision", "", { htmlBody: errorMessageEmailBody});
      Logger.log(`sent mattsap@udel.edu email for error in offer decision for above`);
    }

    // Convert row to JSON using headers
    const rowJson = headers.reduce((obj, header, index) => {
      obj[header] = matchingRow[index];
      return obj;
    }, {});

    // Save documents based on job type
    saveEmployeeDocuments(responses, rowJson);

    // Create the email content
    let emailBody = `
  <p>Dear ${responses["Full name:"] || "Team Member"},</p>

  <p>Welcome aboard! We're excited to have you join the team, and I'm confident we'll accomplish great things together.</p>
  
  <p>I'll be reaching out shortly to schedule our weekly meetings. In the meantime, I'd like to request a few things to help streamline our collaboration:</p>

  <p><strong>Time Tracking:</strong></p>
  <p>Make sure to log your hours regularly here: 
  <a href="${timesheetLink}">${timesheetLink}</a>. Keeping this updated is essential while you’re working.</p>
`;

// If "Add person to Discord?" is Yes, include the Discord statement
if (rowJson["Add person to Discord?"] && rowJson["Add person to Discord?"].toLowerCase() === "yes") {
  emailBody += `
    <p><strong>Join Our Discord:</strong></p>
    <p>To stay connected, please join our Discord community where we’ll host meetings in the game room: 
    <a href="${discordLink}">${discordLink}</a>.</p>`;
}

//TODO:  If ""Should submit weekly check-In ?"Yes, include the Check-In statment
if (rowJson["Should submit weekly check-In ?"] && rowJson["Should submit weekly check-In ?"].toLowerCase() === "yes") {
   Logger.log("Weekly Check-In is required.");
  emailBody += `<p><strong>Weekly Check-Ins:</strong></p>
  <p>Please complete a weekly check-in before the night prior to our weekly meeting. You can submit your updates via this form: 
  <a href="${googleFormLink}">${googleFormLink}</a>.</p>
  
  <p>In your weekly check-ins, include the following:</p>
  <ul>
    <li>Screenshots, videos, or documents showcasing your progress.</li>
    <li>A detailed update on what you've accomplished and your upcoming plans.</li>
    <li>Any requests for support to ensure your success.</li>
  </ul>
  
  <p>I recommend setting a calendar reminder to help you stay on track with these submissions. Your check-ins will also be helpful during evaluations.</p>
  `
}else {
  Logger.log("Weekly Check-In is NOT required.");
}

// Add closing
emailBody += `
  <p>If you have any questions or need further clarification, feel free to reach out anytime.</p>
  <p>Looking forward to working with you!</p>
  <p>Best regards,</p>
  <p>- Matt</p>`;

    // Send the email
    GmailApp.sendEmail(targetEmail, "A.I. Whoo School Kick-Off", "", {
      htmlBody: emailBody,
    });

    Logger.log(`Email sent to ${targetEmail} successfully.`);
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
  }
}

