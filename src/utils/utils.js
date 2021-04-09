

export async function returnGetJSON(url) {
  let resp = await fetch(url, {
    headers: {
      Authentication: 'Bearer '
    }
  });
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return await resp.json();
}