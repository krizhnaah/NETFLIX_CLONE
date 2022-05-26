import { Link } from "react-router-dom";

const PersonList = ({ data }) => {
  return (
    <div className="person-box">
      {data.map((person) => {
        return (
          <div>
            <ul className="person-box-ul">
              <li>
                {(person.profile_path && (
                  <img
                    className="person-box-img"
                    src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}
                    alt={person.name}
                  />
                )) ||
                  (!person.profile_path && (
                    <img
                      className="person-box-img"
                      src={require("../../Images/credit-image.png")}
                      alt={person.name}
                    />
                  ))}
              </li>
              <li>
                <p>
                  <Link to={`/person/${person.id}`}>
                    <b className="actress-name">{person.name}</b>
                  </Link>
                  <span>
                    <b> {person.known_for_department} </b>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
