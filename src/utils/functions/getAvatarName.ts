export const getAvatarName = (firstNameOrFullName = '', lastName = '') => {
  if (firstNameOrFullName && lastName) {
    const f = firstNameOrFullName[0];
    const l = lastName[0];
    return String(`${f}${l}`).toUpperCase();
  }
  if (!firstNameOrFullName) return '';

  const nameArray = firstNameOrFullName.trim().split(' ');
  const firstInitial = nameArray[0][0];
  const lastInitial = nameArray[nameArray.length - 1][0]; // NOTE: always get last character
  const results = firstInitial + lastInitial;
  return results.toUpperCase();
};
