// Test function to simulate form submissio
function testOnFormSubmit() {

  //https://codebeautify.org/jsonminifier
  //ITN-Intern
  const itnintern = {"authMode":"FULL","namedValues":{"Start Date":["1/20/2025"],"Job Type:":["ITN-Intern"],"Hire Email":["brishna@udel.edu"],"Responsibilities":["developing software, assisting with curriculum, etc"],"Notes":[""],"Work Location":["Remote"],"Supervisor Name":["Matthew Saponaro"],"Supervisor Email":["brishna@udel.edu"],"Timestamp":["1/18/2025 21:22:34"],"Hire Name":["Ian Brown"],"Should this be posted to Discord?":[""],"Job Title:":["Software Engineer"],"Should this employee be added to QuickBooks?":[""],"Add person to Discord?":["Yes"], "Should submit weekly check-In ?":["Yes"],"Add person to QuickBooks?":[""],"Compensation Amount":[""],"Department/Team":[""],"End Date":["5/31/2025"],"Payment Schedule":[""]},"range":{"columnEnd":18,"columnStart":1,"rowEnd":4,"rowStart":4},"source":{},"triggerUid":"557571584","values":["1/18/2025 21:22:34","Ian Brown","Software Engineer","ITN-Intern","","developing software, assisting with curriculum, etc","","","brishna@udel.edu","Yes","","1/20/2025","5/31/2025","Remote","","","Matthew Saponaro",""]}
  //INDEPENDENT CONTRACTOR
  const contractor = {"authMode":"FULL","namedValues":{"Department/Team":[""],"Timestamp":["1/18/2025 21:20:27"],"Job Type:":["Independent Contractor"],"Should this be posted to Discord?":[""],"Should submit weekly check-In ?":[""],"Add person to Discord?":["No"],"End Date":[""],"Add person to QuickBooks?":["No"],"Compensation Amount":["$1M"],"Hire Name":["Allen Saponaro"],"Job Title:":["Video Game Designer"],"Start Date":["1/15/2025"],"Notes":[""],"Responsibilities":["make ScratchJR games"],"Work Location":["Remote"],"Payment Schedule":["As Invoiced"],"Should this employee be added to QuickBooks?":[""],"Hire Email":["brishna@udel.edu"],"Supervisor Name":["Matthew Saponaro"]},"Supervisor Email":["brishna@udel.edu"],"range":{"columnEnd":18,"columnStart":1,"rowEnd":3,"rowStart":3},"source":{},"triggerUid":"557571584","values":["1/18/2025 21:20:27","Allen Saponaro","Video Game Designer","Independent Contractor","","make ScratchJR games","","","mattsap@udel.edu","No","No","1/15/2025","","Remote","$1M","As Invoiced","Matthew Saponaro",""]};

  const parttime = {"authMode":"FULL","namedValues":{"Job Type:":["ITN-Intern"],"Responsibilities":["developing and maintaining custom scripts using Google Apps Script to automate workflows within Google Workspace, designing and implementing automated workflows using Make.com to streamline processes, creating step-by-step video tutorials to document and train team members on automation workflows, identifying inefficiencies in existing processes and recommending automation solutions, collaborating with stakeholders to gather requirements and deliver tailored solutions, conducting testing to ensure automations meet business needs, maintaining and troubleshooting scripts and workflows, staying updated on advancements in automation tools and technologies, and ensuring all automations comply with organizational security policies and best practices"],"Job Title:":["Automation Engineer"],"Hire Email":["mattsap@udel.edu"],"Notes":["Compensation received from University of Delaware through ICE Grant"],"Add person to QuickBooks?":["No"],"Compensation Amount":["15"],"Hire Name":["Brishna Nazari"],"Start Date":["1/1/2025"],"End Date":["1/31/2025"],"Add person to Discord?":["Yes"],"Should submit weekly check-In ?":["Yes"],"Timestamp":["1/18/2025 21:18:31"],"Supervisor Name":["Matthew Saponaro"],"Supervisor Email":["mattsap@aiwhoo.com"],"Work Location":["Remote"],"Department/Team":[""],"Should this be posted to Discord?":[""],"Should this employee be added to QuickBooks?":[""],"Payment Schedule":["Based on University of Delaware"]},"range":{"columnEnd":18,"columnStart":1,"rowEnd":2,"rowStart":2},"source":{},"triggerUid":"557571584","values":["1/18/2025 21:18:31","Brishna Nazari","Automation Engineer","Part-Time","","developing and maintaining custom scripts using Google Apps Script to automate workflows within Google Workspace, designing and implementing automated workflows using Make.com to streamline processes, creating step-by-step video tutorials to document and train team members on automation workflows, identifying inefficiencies in existing processes and recommending automation solutions, collaborating with stakeholders to gather requirements and deliver tailored solutions, conducting testing to ensure automations meet business needs, maintaining and troubleshooting scripts and workflows, staying updated on advancements in automation tools and technologies, and ensuring all automations comply with organizational security policies and best practices","","","brishna@udel.edu","Yes","No","1/1/2025","1/31/2025","Remote","15","Based on University of Delaware","Matthew Saponaro","Compensation received from University of Delaware through ICE Grant"]}

  //onFormSubmit(itnintern);
  //onFormSubmit(contractor);
  onFormSubmit(parttime);
}
// Function to process the form responses and flatten them into an object
function processResponses(responses) {

  Logger.log("processResponse input"+ JSON.stringify(responses,null,2)) // // Log input for debugging
  const namedValues = responses.namedValues; // Extract named values from the responses
  const flattenedValues = {}; // Initialize a new object to store flattened values

  // Iterate through namedValues and flatten it
  for (const key in namedValues) {
    if (namedValues.hasOwnProperty(key)) {
      // Ensure that we are getting the correct value
      const value = namedValues[key][0] || ""; // // Extract the first value of each key
      
      // Log the email to ensure it's being extracted correctly
      if (key === "Hire Email") {
        Logger.log("Extracted Hire Email:"+ value);
      }

      flattenedValues[key] = value;// // Add the key-value pair to the flattened object
    }
  }

  return flattenedValues;
}

// Helper function to validate email format
function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
// Function to handle form submission
function onFormSubmit(e) {
  // Log the received responses for debugging
  Logger.log("my responses");
  Logger.log(JSON.stringify(e, null, 2));

  // Process the form responses
  const formResponses = processResponses(e);

  // Log the flattened responses to inspect what is being captured
  Logger.log(JSON.stringify(formResponses, null, 2));
  
  // Extract the Hire Email
  const hireEmail = formResponses["Hire Email"];

  // Log before performing validation
  Logger.log("Validating email:", hireEmail);
  if (!validateEmail(hireEmail)) {
    Logger.log(`Invalid email address detected: ${hireEmail}`);
    return; // Exit the function early if the email is invalid
  }

// Folder ID for the Offer Letters Folder
  const folderId = '1b58Nir5GQ9ORJqKQbgIqo_LkYLExMqbL'; //https://drive.google.com/drive/u/0/folders/1b58Nir5GQ9ORJqKQbgIqo_LkYLExMqbL
  
// Create Offer Letter from template
  const offerLetterTemplateId = '1YUQCyktYxZ0t6TGJpSBrYijUhNc4zDTzLSMCl94kNvE';// https://docs.google.com/document/d/1YUQCyktYxZ0t6TGJpSBrYijUhNc4zDTzLSMCl94kNvE/edit?tab=t.0#heading=h.rnfncjqim23z
  const offerLetterDoc = DriveApp.getFileById(offerLetterTemplateId).makeCopy(`Offer Letter - ${formResponses["Hire Name"]} - ${formResponses["Timestamp"]}`, DriveApp.getFolderById(folderId));
  const docId = offerLetterDoc.getId();
  const docBody = DocumentApp.openById(docId).getBody();

  // Replace placeholders with actual values
  for (const [key, value] of Object.entries(formResponses)) {
    docBody.replaceText(`{{${key}}}`, value);
  }
  
const employmentTypeMap = {
  "Full-Time": "Full-Time",
  "Part-Time": "Part-Time",
  "Paid-Intern": "Intern",
  "Independent Contractor": "Independent Contractor",
  "ITN-Intern": "Intern",
  "Unpaid-Intern": "Intern"
};
const employmentType = employmentTypeMap[formResponses["Job Type:"]] || "Unknown";
docBody.replaceText(`{{Employment Type:}}`, employmentType);

if (formResponses["Compensation Amount"]) {
  const compensationDetails = `
    Compensation: ${formResponses["Compensation Amount"]}
    Payment Schedule: ${formResponses["Payment Schedule"]}
  `;
  docBody.replaceText(`{{ Compensation and Benefits }}`, compensationDetails);
} else {
  docBody.replaceText(`{{ Compensation and Benefits }}`, "Unpaid Position");
}


  DocumentApp.openById(docId).saveAndClose();

 Logger.log("offer letter url: " + offerLetterDoc.getUrl());
  // Convert the document to PDF
  const offerLetterPDF = offerLetterDoc.getAs(MimeType.PDF);

  // Check if PDF was created successfully
  if (!offerLetterPDF) {
    Logger.log("Error: Offer letter PDF not generated.");
    return;
  }
  
  Logger.log("Offer Letter PDF generated successfully: "+ offerLetterPDF.getName());



  // Retrieve files to attach (confidentiality and W9)
  const folder = DriveApp.getFolderById(folderId);
  const confidentialityFile = DriveApp.getFileById('1E0bv7bEnlgSWXUzJ7Urf1UHEGGHBkbRS');// https://drive.google.com/file/d/1E0bv7bEnlgSWXUzJ7Urf1UHEGGHBkbRS/view
  
  //if independent contractor
  const w9File = DriveApp.getFileById('1fvS1hYKrpPNQJKo7PXjfMWkn_LwfHDzZ');  // https://drive.google.com/file/d/1fvS1hYKrpPNQJKo7PXjfMWkn_LwfHDzZ/view
  
  // Log file details for debugging
    Logger.log("Confidentiality File Accessed: "+ confidentialityFile.getName());
    Logger.log("W9 File Accessed: "+ w9File.getName());

  const supervisorName = formResponses["Supervisor Name"]
  const decisionIntakeLink = "https://forms.gle/2ssP5LVrvHi6aM8G8"
  let message = `
    <p>Dear ${ formResponses["Hire Name"]},</p>
    
    <p>Congratulations! We are thrilled to extend an offer for the position of <strong>${formResponses["Job Title:"]}</strong>.</p>
    
    <p>Below are the details of your position:</p>
    <ul>
      <li><strong>Start Date:</strong> ${formResponses["Start Date"]}</li>
      <li><strong>End Date:</strong> ${formResponses["End Date"]}</li>
      <li><strong>Supervisor:</strong> ${supervisorName}</li>
    </ul>
    
    <p>To proceed, we kindly request that you review and sign the <strong>Offer Letter</strong> and <strong>Confidentiality Agreement</strong> attached to this email.</p>
    
    <p>Please upload the signed documents via this form: <a href="${decisionIntakeLink}">${decisionIntakeLink}</a>.</p>
    <p><strong>Note:</strong> Please utilize ${hireEmail} in the form's email question and ensure the documents are submitted to finalize the onboarding process.</p>
    
    <p>If you have any questions or need assistance, feel free to reach out to your supervisor, ${supervisorName}, or reply to this email.</p>
    
    <p>We are excited to have you on board and look forward to working with you!</p>
    
    <p>Best regards,</p>
    <p>The A.I. Whoo School</p>
  `;
  
  // Attach documents to email
  const attachments = [offerLetterPDF, confidentialityFile.getAs(MimeType.PDF)];
  if (formResponses["Job Type:"].toLowerCase() === 'independent contractor') {
    attachments.push(w9File.getAs(MimeType.PDF));
  }
  
  // Send the email
  GmailApp.sendEmail(formResponses["Hire Email"], `Onboarding Request for ${formResponses["Hire Name"]}`, "", {
    attachments: attachments,
    name: 'A.I. Whoo School',
    htmlBody: message
  });

  Logger.log(`Offer Letter sent to ${formResponses["Hire Name"]}`);


if(formResponses["Job Type:"] == "ITN-Intern"){
  
    // Folder ID where the personalized documents will be saved
    const ItnIntern_folderId = '1WfwSFKq5z08OBGs-g8V9l5NeEFoR4g6s';  // https://drive.google.com/drive/folders/1WfwSFKq5z08OBGs-g8V9l5NeEFoR4g6s

    // Final Evaluation Template ID
    const finalTemplateDocId = '15cO8CQ_RL89bzqNFFqMEOqa5zzbauaBx_s6uTTTCjew'; // https://docs.google.com/document/d/15cO8CQ_RL89bzqNFFqMEOqa5zzbauaBx_s6uTTTCjew/edit?tab=t.0
    // Midterm Evaluation Template ID
    const midtermTemplateDocId = '1cZdtL73H6h3Dq_DX-Psd1J-loLgSHgHmn_rxd7OlT9U';// https://docs.google.com/document/d/1cZdtL73H6h3Dq_DX-Psd1J-loLgSHgHmn_rxd7OlT9U/edit?tab=t.0

    // Make copies of the templates
    const finalEvaluationDoc = DriveApp.getFileById(finalTemplateDocId).makeCopy(
      `Final Evaluation Document for - ${formResponses["Hire Name"]} - ${formResponses["Timestamp"]}`, 
      DriveApp.getFolderById(ItnIntern_folderId)
    );
    const finalDocId = finalEvaluationDoc.getId();
    const finalEvaluationDocBody = DocumentApp.openById(finalDocId).getBody();

    const midtermEvaluationDoc = DriveApp.getFileById(midtermTemplateDocId).makeCopy(
      `Midterm Evaluation Document for - ${formResponses["Hire Name"]} - ${formResponses["Timestamp"]}`, 
      DriveApp.getFolderById(ItnIntern_folderId)
    );
    const midtermDocId = midtermEvaluationDoc.getId();
    const midtermEvaluationDocBody = DocumentApp.openById(midtermDocId).getBody();

    // Replace placeholders with actual values in Final Evaluation
    for (const [key, value] of Object.entries(formResponses)) {
      finalEvaluationDocBody.replaceText(`{{${key}}}`, value);
    }

    // Replace placeholders with actual values in Midterm Evaluation
    for (const [key, value] of Object.entries(formResponses)) {
      midtermEvaluationDocBody.replaceText(`{{${key}}}`, value);
    }

    // Save and close the documents
    DocumentApp.openById(finalDocId).saveAndClose();
    DocumentApp.openById(midtermDocId).saveAndClose();

    // Log the URLs for reference
    Logger.log("Final Evaluation url: " + finalEvaluationDoc.getUrl());
    Logger.log("Midterm Evaluation url: " + midtermEvaluationDoc.getUrl());

    // Send the email with both document links and attachments
    const supervisorEmail = formResponses["Supervisor Email"];
    const subjectITNEvaluations = `ITN Evaluations for ${formResponses["Hire Name"]}`;
    const messageITNEvaluation = `Dear ${formResponses["Supervisor Name"]},

    The evaluation documents for ${formResponses["Hire Name"]} are ready. You can view them here:

    - Final Evaluation: ${finalEvaluationDoc.getUrl()}
    - Midterm Evaluation: ${midtermEvaluationDoc.getUrl()}

    Please find the documents also attached to this email for your convenience.

    Best regards,
    A.I. Whoo School`;

    GmailApp.sendEmail(supervisorEmail, subjectITNEvaluations, messageITNEvaluation, {
      name: 'A.I. Whoo School',
      
    });

    Logger.log(`Personalized documents created and email sent for ${formResponses["Supervisor Name"]}`);
  }
}
