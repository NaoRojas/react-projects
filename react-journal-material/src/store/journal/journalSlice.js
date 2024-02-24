import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    successMessage: '',
    notes: [],
    active: null,
    // active: {
    //   id: '',
    //   title: '',
    //   body: '',
    //   date: '',
    //   imagaUrls: []
    // },

  },
  reducers: {
    addEmpyNote: (state, action) => {
      state.journal = action.payload;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = action.payload
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    }
  },
});

export const {
  actionName,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  addNote,
  deleteNote
} = journalSlice.actions;
