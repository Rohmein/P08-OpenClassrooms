export const fetchData = async () => {
  try {
    const response = await fetch("./logements.json");
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};
