const API_URL = "https://dummyjson.com/users";

export const getEmployees = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    const data = await response.json();

    return data.users;
};