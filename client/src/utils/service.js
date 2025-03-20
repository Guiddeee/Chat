export const baseUrl = "https://backend-cu-recom.up.railway.app/api";

const getToken = () => {
  return sessionStorage.getItem("authToken") || "";
};

export const postRequest = async (url, body) => {
  const token = getToken();
  console.log("Post request with token:", token);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    let message = data?.message || "An error occurred...";
    return { error: true, status: response.status, message };
  }

  return data;
};

export const getRequest = async (url) => {
  const token = getToken();
  console.log("Get request with token:", token);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (!response.ok) {
    let message = data?.message || "An error occurred...";
    return { error: true, status: response.status, message };
  }

  return data;
};
