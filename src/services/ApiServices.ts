import Department from '../models/DepartmentData';

class ApiService {
  static async fetchDepartmentData(): Promise<Department[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      // Assuming the API response has an array of objects, each with an 'id' and 'title' property
      const departmentData: Department[] = data.map((item: any) => ({
        id: item.id,
        name: item.title,
        subDepartments: [], // You can adjust this as needed
      }));

      return departmentData;
    } catch (error) {
      console.error('Error fetching department data:', error);
      return []; // Return empty array in case of error
    }
  }
}

export default ApiService;
