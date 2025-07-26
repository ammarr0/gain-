import { createSlice } from '@reduxjs/toolkit';

// Helper function to get a cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const accessToken = getCookie('access_token');

fetch('https://gain-b7ea8e7de810.herokuapp.com/jobs/list', {
  headers: {
    'Authorization': accessToken ? `Bearer ${accessToken}` : ''
  }
})
  .then(response => response.json())
  .then(data => {
    console.log('Jobs List On Redux:', data);
  })
  .catch(error => {
    console.error('Error fetching jobs:', error);
  });

const initialState = {
  jobs: [],
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setJobs: (state, action) => {  
      state.jobs = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { setUser, setLoading, setError,setJobs, logout } = userSlice.actions;
export default userSlice.reducer;