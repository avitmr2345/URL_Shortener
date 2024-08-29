const mapSessionIdToUser = new Map();

function setUser(id, user) {
  mapSessionIdToUser.set(id, user);
}

function getUser(id) {
  return mapSessionIdToUser.get(id);
}

export { setUser, getUser };
