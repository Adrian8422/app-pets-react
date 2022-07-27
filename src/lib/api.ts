// const API_BASE_URL = "http://localhost:3002";
const API_BASE_URL = "https://current-desafio-m-7.herokuapp.com";
// https://current-desafio-m-7.herokuapp.com

//// FETCH DE RESULTS CLOSE TO ME
export async function getLatAndLng(data) {
  const res = await fetch(
    API_BASE_URL +
      "/reports-close-to?lat=" +
      data["lat"] +
      "&lng=" +
      data["lng"],
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const json = await res.json();
  console.log(json);
  return json;
}
//// Function Sent Email to user owner pet
export async function useSentEmail(email, name, message, cellphone) {
  const response = await fetch(API_BASE_URL + "/email", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      emailUser: email["email"],
      name: name,
      message: message,
      cellphone: cellphone,
    }),
  });
  const json = await response.json();
  return json;
}

//// Function Save SignUp in data Base
export async function setDataSignUp(data) {
  const res = await fetch(API_BASE_URL + "/auth", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: data.nombre,
      email: data.email,
      password: data.password,
    }),
  });
  const json = await res.json();
  return json;
}

//// Function sign in get data base

export async function getEntriLogin(email: string, password: string) {
  const data = { email, password };
  const res = await fetch(API_BASE_URL + "/auth/token", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  const json = await res.json();

  return json;
}
//// Function getMeData

export async function getMeDataUser(token) {
  const res = await fetch(API_BASE_URL + "/me", {
    headers: {
      authorization: `bearer ${token}`,
      "content-type": "application/json",
    },
  });
  const json = await res.json();
  return json;
}

////Function Update me data user

export async function updateMeDate(email, name, token) {
  const res = await fetch(API_BASE_URL + "/me/modified", {
    method: "put",
    headers: {
      authorization: `bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, name }),
  });
  const json = await res.json();
  return json;
}

/// Update password user

export async function updatePassword(
  token,
  passwordActual,
  repetirPassword,
  newPassword
) {
  const data = { token, passwordActual, repetirPassword, newPassword };
  const res = await fetch(API_BASE_URL + "/change-password", {
    method: "post",
    headers: {
      authorization: `bearer ${data.token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      passwordOld: passwordActual,
      passwordVerify: repetirPassword,
      passwordNew: newPassword,
    }),
  });
  const json = await res.json();
  return json;
}

//// Get me reports

export async function getMeReports(token) {
  const res = await fetch(API_BASE_URL + "/me/reports-pets", {
    method: "get",
    headers: {
      authorization: `bearer ${token}`,
      "content-type": "application/json",
    },
  });
  const json = await res.json();
  return json;
}

////Deleted Report with id

export async function deletedReport(id, token) {
  const res = await fetch(API_BASE_URL + "/delete-report/" + id, {
    method: "delete",
    headers: {
      authorization: `bearer ${token}`,
      "content-type": "application/json",
    },
  });
  const json = await res.json();
  return json;
}

//// Create report Pet

export async function createReport(
  namePet,
  location,
  lat,
  lng,
  pictureURL,
  token
) {
  console.log(namePet, location, lat, lng, pictureURL, token);
  const res = await fetch(API_BASE_URL + "/report-pet", {
    method: "post",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      namePet: namePet,
      location: location,
      lat: lat,
      lng: lng,
      pictureURL: pictureURL,
    }),
  });
  const json = await res.json();
  console.log(json);
}

//// Update report

export async function updateReportInDB(data, token, idReport) {
  const { namePet, location, lat, lng, pictureURL } = data;
  const res = await fetch(API_BASE_URL + "/me/reports-modified/" + idReport, {
    method: "put",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token} `,
    },
    body: JSON.stringify({
      namePet: namePet,
      location: location,
      lat: lat,
      lng: lng,
      pictureURL: pictureURL,
    }),
  });
  const json = await res.json();
  console.log("update realizado", json);
}

/// Getme one report

export async function getMeOneReport(token, idReport) {
  const res = await fetch(API_BASE_URL + "/me/report/" + idReport, {
    method: "get",
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  const json = await res.json();
  return json;
}
