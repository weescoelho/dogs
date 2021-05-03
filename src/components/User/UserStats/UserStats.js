import React from "react";
import { STATS_GET } from "../../../api/api";
import useFetch from "../../../hooks/useFetch";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head/Head";
import Loading from "../../Helper/Loading/Loading";
import UserStatsGraphs from "../UserStatsGraphs/UserStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data}/>
      </div>
    );
  else return null;
};

export default UserStats;
