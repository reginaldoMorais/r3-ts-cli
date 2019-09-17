export const isEmpty = (str?: string | null): boolean => {
  if (str === undefined || str === null || str === '') {
    return true;
  }

  return false;
}

export const isNotEmpty = (str?: string | null): boolean => {
  if (str === undefined || str === null || str === '') {
    return false;
  }

  return true;
}

const StingUtils = { isEmpty, isNotEmpty };

export default StingUtils;
