import { Link, useParams } from "react-router-dom";
import api, { api_key } from "../../axios";
import { useEffect, useState } from "react";
import { PersonMovieCastCredits } from "./PersonMovieCredits";

const Person = () => {
  const { personid } = useParams();
  const [data, setData] = useState({});
  const apiTvCrew = api.get(`/person/${personid}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiTvCrew;
      setData(response.data);
    };
    data();
  }, [personid]);

  return (
    <>
      <div className="person-details-container">
        <div className="person-detail-box">
          <div className="person-image-in-person-details">
            <div>
              <div className="person-image-container">
                {(data.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
                    alt={data.title || data.name}
                  />
                )) ||
                  (!data.poster_path && (
                    <img
                      src={require("../../Images/credit-image.png")}
                      alt={data.title || data.name}
                    />
                  ))}
                <div className="person-name">
                  <h2>{data.name}</h2>
                </div>
              </div>
              <div className="person-table">
                <table>
                  <tbody>
                    {
                      <tr>
                        <th>
                          <div>Born</div>
                        </th>
                        <td>
                          <div>
                            {(data.birthday && <>{data.birthday}</>) ||
                              (!data.birthday && <>No-data</>)}
                          </div>
                        </td>
                      </tr>
                    }
                    <tr>
                      <th>
                        <div>Gender</div>
                      </th>
                      <td>
                        <div>
                          {(data.gender === 1 && <>Female</>) ||
                            (data.gender === 2 && <>Male</>) ||
                            (data.gender && <>Transgender</>) ||
                            (!data.gender && <>No-data</>)}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div>Present Status</div>
                      </th>
                      <td>
                        <div>
                          {(data.deathday && (
                            <span>Left At {data.deathday}</span>
                          )) ||
                            (!data.deathday && <span>Alive</span>)}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div>Place Of Birth</div>
                      </th>
                      <td>
                        <div>
                          {(data.place_of_birth && (
                            <>{data.place_of_birth}</>
                          )) ||
                            (!data.place_of_birth && <>No-data</>)}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div>Proffesion</div>
                      </th>
                      <td>
                        <div>
                          {(data.known_for_department && (
                            <>{data.known_for_department}</>
                          )) ||
                            (!data.known_for_department && <>No-data</>)}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="person-overview">
            <div className="biography">
              <h4>Biography</h4>
              <p>{data.biography}</p>
            </div>
            {/* <div className="cast-and-crew-ciredits-container"> */}
            <PersonMovieCastCredits />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
