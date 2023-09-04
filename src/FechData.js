const fetchData = async () => {
    try {
      const response = await fetch(' https://docs.google.com/document/d/1rim-mhA2Tk-LUSdPUow3HikEUcTXaopG/edit');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };
  
  export default fetchData;