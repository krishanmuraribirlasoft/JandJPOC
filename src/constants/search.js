const promptData = [
  {
    id: 1,
    question:
      "Share the Productwise distribution of dossiers have been submitted during the period May 2016 to December 2023?",
    fileName: "1.csv",
    metaData: [
      {
        prompt:
          "Share the country wise distribution data of dossier during this period?",
        response:
          "During the period from May 2016 to December 2023, the distribution of dossiers by country is as follows: Russia has the highest number of dossiers with 7, followed by the USA with 4 dossiers. Sweden has 2 dossiers, while Japan and Australia each have 1 dossier.",
      },
      {
        prompt:
          "Share the ratio of processed, pending, closed, and terminated status?",
        response:
          "The ratio of processed, pending, closed, and terminated status is as follows: Processed: 7, Pending: 4, Closed: 3, Terminated: 2,  Ratio is 7:4:3:2",
      },
      {
        prompt:
          "What is the country wise submission data of Macitentan for the period 2016 to 2023?",
        response:
          "The country wise submission data for Macitentan from 2016 to 2023 is as follows: Russia has 5 submissions, Sweden has 2 submissions, and the USA has 1 	submission.",
      },
      {
        prompt:
          "How many dossier have been processed during the period for the product Macitentan?",
        response:
          "During the specified period, a total of 8 dossiers have been processed for the product Macitentan.",
      },
      {
        prompt:
          "How many Macitentan dossiers are in pending status for this period?",
        response:
          "There are 2 Macitentan dossiers in pending status for this period.",
      },
      {
        prompt:
          "How many Macitentan dossiers are pending for the country Sweden?",
        response:
          "There is currently 1 Macitentan dossier pending for the country Sweden.",
      },
      {
        prompt: "What is the submission date for this record?",
        response:
          "The submission date for this 2 records of Machitentan is 10-12-2020 and 05-04-2023",
      },
    ],
    intelligibilityData: [
      {
        text1: "Model Recieved Query:",
        text2: "Country wise submission data for Macitentan from 2016 to 2023",
      },
      {
        text1: "Main entities in the query:",
        text2:
          "The Main entities in the question is 'Product Name' and 'Country'",
      },
      {
        text1: "Model has Mapped : ",
        text2:
          "'Product Name ' to the 'Country' measure referring only to Macitentan",
      },
      {
        text1: "Model has Mapped : ",
        text2: "'Country' to the 'submission_count'",
      },
      {
        text1: "Model has Mapped : ",
        text2:
          "'Registration no 441798-33-0 ' to the '54-11-5' value in the 'Registration no' column",
      },
    ],
    recommendations: [
      {
        id: 1,
        recommendation: "Countries having maximum submission data for Blastin.",
      },
      {
        id: 2,
        recommendation: "Number of dossages for Selxipag in Russia",
      },
    ],
    dataInsigts: [
      {
        id: 1,
        insight: "Countries having maximum submission data for Blastin.",
      },
      {
        id: 2,
        insight: "Number of dossages for Selxipag in Russia",
      },
    ],
  },

  {
    id: 2,
    question:
      "Find the overall countrywise count of the request id's of structured Product Labelling?",
    fileName: "2.csv",
    metaData: [
      {
        prompt: "Find the approval status of Fentanyl during this period?",
        response:
          "The approval status of Fentanyl during this period is as follows:, Processed: 6, Pending: 8, Closed: 6, Terminated: 1",
      },
      {
        prompt:
          "Find the geographic location wise SPL data of fentanyl for notification?",
        response:
          "The geographic location wise for fentanyl for noticiation is as follows: Russia has the highest number with 4, followed by the Argentina and Australia has 2, 	while Canada has 1 label change notification.",
      },
      {
        prompt: "How many fentanyl SPL data are in pending status?",
        response: "There are 8 records for fentanly with pending status.",
      },
      {
        prompt: "Which countries are associated to the pending status?",
        response: "Russia with 4 records are associated with pending status.",
      },
      {
        prompt:
          "What is the expected date of approval for these pending items?",
        response:
          "The expected date of approval for these pending items are 20-2-2021,07-12-2022 and 12-12-2022.",
      },
      {
        prompt:
          "Share the list of entries related to label change notification.",
        response:
          "There are 9 entries with Fentanyl related to label change notification.",
      },
    ],
    intelligibilityData: [
      {
        text1: "Model Recieved Query: ",
        text2:
          "Status of approval of Structured Product labelling for the products Fentanyl, cyclopropyl fentanyl and Lonazep from 2016 to 2023",
      },
      {
        text1: "Main entities in the query:",
        text2:
          "The Main entities in the question is 'Registration_No', 'Product_Name', 'Tracking_ID', 'Request_ID'",
      },
      {
        text1: "Model has Mapped: ",
        text2: "'Product Name ' to the 'Tracking_status' measure",
      },
      {
        text1: "Model has Mapped: ",
        text2:
          "'Tracking IDs', Request IDs and Product Names for the two products",
      },
      {
        text1: "Model has Mapped: ",
        text2:
          "'Registration no 437-38-7' to the '1169-68-2' value in the 'Registration no' column",
      },
    ],
    recommendations: [
      {
        id: 1,
        recommendation:
          "List of product categories  which had done registration Lonazep",
      },
      {
        id: 2,
        recommendation: "Dosage for Fenatnyl in Argentina",
      },
    ],
  },

  {
    id: 3,
    question:
      "What is the current status of registration of  Drugs by FDA and find the ratio of BLA, ANDA, NDA and IND filing during period 2023 to 2024?",
    fileName: "3.csv",
    metaData: [
      {
        prompt:
          "Find the countrywise status of registration of Drugs applied during 2023 to 2024?",
        response: "USA 10, UK 2, EU 2, Canada 1",
      },
      {
        prompt: "How many drugs have been applied for Registration in  USA?",
        response:
          "There are 10 drugs which have been applied for Registration in USA.",
      },
      {
        prompt:
          "How many total  Biological Lisencing Application BLA have been applied?",
        response: "Total 6 Biological Lisencing Application.",
      },
      {
        prompt: "Which Drugs  are covered in BLA application?",
        response: "6 drugs for BLA application.",
      },
      {
        prompt: "How many BLA application is showing pending status?",
        response:
          "There are 4 BLA applications which is showing as pending status.",
      },
      {
        prompt:
          "What are the corresponding application numbers for pending status?",
        response: `Below are the application numbers for BLA in pending status:-
          BLA# 452234
          BLA# 557812
          BLA# 102234
          BLA# 423402`,
      },
      {
        prompt:
          "What are the countries asscociated to the pending BLA application?",
        response: "USA",
      },
      {
        prompt: "What are the stages of these BLA products in pending status?",
        response: "Phase 3",
      },
      {
        prompt: "Find the countrywise status of these application?",
        response: `Below are BLA Products based on countrywise status:-
          USA 
            Pending - 3
            Processed - 1
            Closed - 0
            Terminated - 0
         
          Europe
            Pending - 0
            Processed - 0
            Closed - 0
            Terminated - 1
         
          Canada
            Pending - 1
            Processed - 0
            Closed - 0
            Terminated - 0`,
      },
    ],
    intelligibilityData: [
      {
        text1: "Model Recieved Query: ",
        text2:
          "Current status of registration of  Drugs by FDA and ratio of BLA, ANDA, NDA and IND filing during period 2023 to 2024.",
      },
      {
        text1: "Main entities in the query:",
        text2:
          "The Main entities in the question is 'Registration_No', 'Drug_name', 'Type_of_application', 'Submission_date'.",
      },
      {
        text1: "Model has Mapped: ",
        text2: "'Drug_name' and 'Genric_name' for a given 'Application_no'.",
      },
      {
        text1: "Model has Mapped: ",
        text2: "'Type_of_application', 'Request ID's and 'Drug_name.'",
      },
      {
        text1: "Model has Mapped: ",
        text2:
          "'Application_no ANDA#040666' to the 'ANDA#085928' value in the 'Application_no' column.",
      },
    ],
    recommendations: [
      {
        id: 1,
        recommendation:
          "List the entries of AHydrocort drug which had done registration",
      },
      {
        id: 2,
        recommendation:
          "Get the Marketing Status for Application No.s ANDA #040666  & IND# 355091",
      },
    ],
  },
];

export { promptData };

export const topTrendingQuestions = [
  {
    id: 1,
    question:
      "Share the Productwise distribution of dossiers have been submitted during the period May 2016 to December 2023?",
  },
  {
    id: 2,
    question:
      "Find the overall countrywise count of the request id's of structured Product Labelling?",
  },
  {
    id: 3,
    question:
      "What is the current status of registration of  Drugs by FDA and find the ratio of BLA, ANDA, NDA and IND filing during period 2023 to 2024?",
  },
];
