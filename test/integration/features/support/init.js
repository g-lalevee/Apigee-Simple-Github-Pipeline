"use strict";

const apickliModule = require("apickli");
const { Before, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(5 * 1000); // this is in ms

Before(function () {
  const host = "organization_hostname";
  const basePath = "api_basepath";;
  const baseUri = `${host}${basePath}`;
  console.log(`Test Base URI: ${baseUri}`);
  this.apickli = new apickliModule.Apickli("https", baseUri);
  this.apickli.addRequestHeader("Cache-Control", "no-cache");
});