
// API service for connecting to the live trend analysis backend

export interface TrendApiResponse {
  historical: Array<{
    date: string;
    value: number;
    is_spike: boolean;
  }>;
  prediction: Array<{
    date: string;
    predicted_value: number;
  }>;
}

export async function fetchTrendAnalysis(keyword: string, timeframe: string): Promise<TrendApiResponse> {
  // Construct the full URL to your live API on Render
  const apiUrl = `https://trend-api-backend.onrender.com/api/analyze?keyword=${encodeURIComponent(keyword)}&timeframe=${encodeURIComponent(timeframe)}`;

  try {
    console.log(`Fetching data from: ${apiUrl}`); // For debugging
    
    // Make the network request
    const response = await fetch(apiUrl);

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      // If not, get the error message from the API's JSON response
      const errorData = await response.json();
      throw new Error(errorData.detail || `HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();
    
    // Return the final data which matches our required structure
    return data;

  } catch (error) {
    // Handle network errors or errors thrown from the response check
    console.error("Failed to fetch trend analysis:", error);
    // Re-throw the error so the UI component can catch it and display an error message
    throw error;
  }
}
