export default async function getInfo(name) {
  const apiKey = '0f42a8e045f288a4fd0dd59c2b465abb';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}