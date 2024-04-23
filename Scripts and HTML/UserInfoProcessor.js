var UserInfoProcessor = 
{
  extractUserInfo: function(body) 
  {
    if (!body) 
    {
      return []; // Return empty array if body is undefined
    }
    var userInfo = [];
    // Extract last name
    var lastNameRegex = /Last Name: (.*)/i;
    var lastNameMatch = body.match(lastNameRegex);
    if (lastNameMatch && lastNameMatch.length > 1) 
    {
      userInfo.push(lastNameMatch[1]);
    } else 
    {
      userInfo.push("");
    }
    // Extract first name
    var firstNameRegex = /First Name: (.*)/i;
    var firstNameMatch = body.match(firstNameRegex);
    if (firstNameMatch && firstNameMatch.length > 1) 
    {
      userInfo.push(firstNameMatch[1]);
    } else 
    {
      userInfo.push("");
    }
    // Extract address
    var addressRegex = /Address: (.*)/i;
    var addressMatch = body.match(addressRegex);
    if (addressMatch && addressMatch.length > 1) 
    {
      userInfo.push(addressMatch[1]);
    } else 
    {
      userInfo.push("");
    }
    // Extract state
    var stateRegex = /State: (.*)/i;
    var stateMatch = body.match(stateRegex);
    if (stateMatch && stateMatch.length > 1) 
    {
      userInfo.push(stateMatch[1]);
    } else 
    {
      userInfo.push("");
    }
    // Extract zip code
    var zipRegex = /Zip Code: (\d{5}|\d{5}-\d{4})/i;
    var zipMatch = body.match(zipRegex);
    if (zipMatch && zipMatch.length > 1) 
    {
      userInfo.push(zipMatch[1]);
    } else 
    {
      userInfo.push("");
    }
    // Extract phone number
    var phoneRegex = /Phone Number: (\d{3}-\d{3}-\d{4})/i;
    var phoneMatch = body.match(phoneRegex);
    if (phoneMatch && phoneMatch.length > 1) 
    {
      userInfo.push(phoneMatch[1]);
    } else 
    {
      userInfo.push("");
    }
    // Extract DOB
    var dobRegex = /Date of Birth: (\d{2}\/\d{2}\/\d{4})/i;
    var dobMatch = body.match(dobRegex);
    if (dobMatch && dobMatch.length > 1) 
    {
      userInfo.push(dobMatch[1]);
    } else 
    {
      userInfo.push("");
    }
    return userInfo;
  }
};
