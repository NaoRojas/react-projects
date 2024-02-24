




export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    console.log(getState())
    console.log('startNewNote')

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: [],

    }
    //dispatch ()

    //dispatch (activar la nota)
  }
}