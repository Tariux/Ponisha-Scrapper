const request = require('request');
const Functions = require('../../module/Functions');


class PonishaProjects {
  constructor() {

    this.searchUrl = 'https://ponisha.ir/search';
  }
  async searchProject(
    keyword = [""],
    type = ["featured", "urgent", "fulltime"],
    sort = ["newest"],
    skill = [""],
    status = ["open"],
    content = ["projects"],
    currency = ["IRR"],
    minAmount = [],
    maxAmount = [],
  ) {

    let options = {
      'method': 'POST',
      'url': this.searchUrl,
      'headers': {
        'accept': 'application/json, application/json;q=0.8, text/plain;q=0.5, */*;q=0.2',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        "keyword": keyword,
        "type": type,
        "sort": sort,
        "skill": skill,
        "status": status,
        "currency": currency,
        "content": content,
        "minAmount": minAmount,
        "maxAmount": maxAmount
      })

    };
    request(options, function (error, response) {
      if (error) {
        console.log("There was a problem with the connection to receive the projects");
        return false;
      };
      let response_data = Functions.isObject(response.body)
      if (response_data && response_data.result !== undefined) {

        console.log("New projects successfully loaded");
        projects.total = response_data.result.items;
        return response_data.result.items;

      } else {
        console.log("Error in receiving project information");
        return false;
      }
    });

    return projects;

  }

}


module.exports = PonishaProjects;
