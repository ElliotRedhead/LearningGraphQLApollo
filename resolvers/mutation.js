const mutation = {
	toggleFavouriteSession: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.toggleFavouriteSession(id),
	addNewSession: (parent, { session }, { dataSources }, info) => dataSources.sessionAPI.addSession(session)
};

export default mutation;
