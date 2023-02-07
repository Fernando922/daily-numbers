const disableSnackBarForRoute = [
  //enter name route here for disable snackbar default for this error
  '/test',
];

const shouldShowSnackbarForThisError = (route: string | undefined) => {
  if (!route) {
    return false;
  }
  if (disableSnackBarForRoute.includes(route)) {
    return false;
  }

  return true;
};

export { shouldShowSnackbarForThisError };
