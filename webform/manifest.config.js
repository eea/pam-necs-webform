//basic configuration settings used to create the webform-project-export.metadata-file

module.exports = {
  "production" : {
    "title" : "National Emission Ceiling Directive (NECD)",
    "file" : {
      "name" : "index.html"
    },
    "newXmlFileName" : "pam-nec.xml",
    "emptyInstanceUrl" : "https://webforms.eionet.europa.eu/download/project/mmr-necs/file/instance-empty.xml",
    "description" : "National Emission Ceiling Directive (NECD) web questionnaire",
    "xmlSchema" : "http://dd.eionet.europa.eu/schemas/mmr-necs/NEC_PAMs.xsd",
    "active" : true,
    "localForm" : true,
    "remoteForm" : true,
    "fileType" : "WEBFORM"
  },
  "development" : {
    "title" : "National Emission Ceiling Directive (NECD)",
    "file" : {
      "name" : "index.html"
    },
    "newXmlFileName" : "pam-nec.xml",
    "emptyInstanceUrl" : "https://webq2test.eionet.europa.eu/download/project/mmr-necs/file/instance-empty.xml",
    "description" : "National Emission Ceiling Directive (NECD) web questionnaire",
    "xmlSchema" : "http://dd.eionet.europa.eu/schemas/mmr-necs/NEC_PAMs.xsd",
    "active" : true,
    "localForm" : true,
    "remoteForm" : true,
    "fileType" : "WEBFORM"
  }
}
