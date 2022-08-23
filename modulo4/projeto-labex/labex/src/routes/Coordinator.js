export const goToTripDetail = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
  }

export const lastPage = (navigate) => {
      navigate(-1)
  }

export const goToTrips = (navigate) => {
    navigate ('/trips/list')
  }

export const goToAdmin = (navigate) => {
    navigate('/login')
  }

export const goToHome = (navigate) => {
  navigate("/");
};

export const goToTripDetails = (navigate,id) => {
  navigate(`/admin/trips/${id}`)
}

export const newTrips = (navigate) => {
  navigate('/admin/trips/create')
}