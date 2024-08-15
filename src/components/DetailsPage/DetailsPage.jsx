import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../features/getDetails/getDetailsSlice";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import DetailsCard from "./DetailsCard";

const DetailsPage = () => {
  const { loading, details, error } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchDetails(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      {loading && <Loading />}
      {error && <h1>{error}</h1>}
      {!loading && !error && <DetailsCard details={details} />}
    </div>
  );
};

export default DetailsPage;
