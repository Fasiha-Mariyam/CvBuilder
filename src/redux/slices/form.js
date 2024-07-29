import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  formData: {
    publications: [],
  },
};

const slice = createSlice({
  name: "form",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    resetForm: () => initialState,
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getDataSuccess(state, action) {
      state.error = null;
      state.isLoading = false;
      state.formData = action.payload;
      console.log(state.formData);
    },
    deleteEducationSuccess(state, action) {
      const { index } = action.payload;
      const newFormData = { ...state.formData };
      console.log("Deleting education at index:", index);
      console.log("Before deletion:", newFormData);
      // Remove all keys related to the specific education index
      Object.keys(newFormData).forEach((key) => {
        if (key.startsWith(`education${index}_`)) {
          delete newFormData[key];
        }
      });
      console.log("After deletion:", newFormData);
      state.formData = newFormData;
    },

    deleteCertificateSuccess(state, action) {
      const { index } = action.payload;
      const newFormData = { ...state.formData };
      console.log("Deleting education at index:", index);
      console.log("Before deletion:", newFormData);
      // Remove all keys related to the specific education index
      Object.keys(newFormData).forEach((key) => {
        if (key.startsWith(`education${index}_`)) {
          delete newFormData[key];
        }
      });
      console.log("After deletion:", newFormData);
      state.formData = newFormData;
    },
  },
});

export default slice.reducer;

export const { getDataSuccess, resetForm } = slice.actions;

export function getformData(data) {
  return async (dispatch) => {
    try {
      console.log(data);
      dispatch(slice.actions.getDataSuccess(data));
      // debugger
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}

export function deleteEducation(index) {
  return async (dispatch) => {
    try {
      console.log("Dispatching deleteEducationSuccess for index:", index);
      dispatch(slice.actions.deleteEducationSuccess({ index }));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}
 

export function deleteCertificate(index) {
  return async (dispatch) => {
    try {
      console.log("Dispatching deleteEducationSuccess for index:", index);
      dispatch(slice.actions.deleteEducationSuccess({ index }));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return error;
    }
  };
}
