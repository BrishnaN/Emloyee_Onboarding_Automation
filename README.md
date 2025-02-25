# Hiring Request & Offer Decision Intake Automation

This repository contains two Google Apps Script projects designed to automate the hiring request and offer decision intake processes for **A.I. Whoo School**. The scripts work with **Google Forms, Google Drive, and Gmail** to streamline onboarding tasks, including generating offer letters, validating email addresses, and sending necessary documents.

---

## **Hiring Request**

### **Description**
This script processes responses from the **Hiring Request Form**, generates a personalized **offer letter**, validates the provided **email**, and sends an **onboarding email** with the necessary documents. It also creates **evaluation documents** for ITN interns.

### **Key Features**
- **Flatten Form Responses:** Processes nested form responses into a structured object.
- **Email Validation:** Ensures the provided email is in a valid format.
- **Offer Letter Generation:** Creates a personalized offer letter using a **Google Docs** template.
- **Onboarding Email:** Sends an email with attached documents, including the **offer letter** and **confidentiality agreement**.
- **Evaluation Document Creation:** Generates **midterm** and **final evaluation** documents for ITN interns and emails them to supervisors.

---

## **Offer Decision Intake**

### **Description**
This script processes submissions from the **Offer Decision Intake Form**, collecting signed documents from employees and validating their submission. It ensures all **onboarding materials** are received and stored in the appropriate folders.

### **Key Features**
- **File Upload Validation:** Ensures the **signed offer letter** and **confidentiality agreement** are uploaded.
- **Document Organization:** Saves submitted documents to a designated **Google Drive** folder.
- **Email Confirmation:** Sends a **confirmation email** to the employee after successful submission.
