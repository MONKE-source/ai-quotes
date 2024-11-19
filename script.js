const accessKey = "9Bj7cgr-nIbHzaSfdW5ozUMXkvXo4tTtudq6023aSyc";

async function getRandomImage() {
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
  try {
    const response = await fetch(apiUrl);
    const imageData = await response.json();

    document.getElementById(
      "background"
    ).style.backgroundImage = `url(${imageData.urls.full})`;

    if (!response.ok) {
      console.log("An error has occurred");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function getQuotes() {
  try {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();
    document.getElementById("quote").innerText = data.quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

getRandomImage();
getQuotes();
