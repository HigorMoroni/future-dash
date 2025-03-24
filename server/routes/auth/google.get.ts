export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        id: user.id,
        email: user.email,
        picture: user.picture,
        name: String(user.name).trim()
      }
    });
    
    return sendRedirect(event, '/login/success');
  },

  onError(event, error) {
    console.error('Erro Google Auth', error);

    return sendRedirect(event, '/login');
  }
});