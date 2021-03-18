const mutation = {
	toggleFavouriteSession: (parent, { id }, { dataSources }, info) => dataSources.sessionAPI.toggleFavouriteSession(id)
};

export default mutation;
