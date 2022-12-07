
import PropTypes from "prop-types";

const countryImage='https://st3.depositphotos.com/11747323/35165/v/600/depositphotos_351651704-stock-illustration-corona-virus-icon-vector-logo.jpg';
const Card = ({country,totalCase,totalRecovered,totalDeaths}) =>{
    return(
         <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
           <img className="w-full" src={countryImage} alt="Country" />
           <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{country}</div>
            <p className="text-gray-700 text-base">
             Total Case:{totalCase}
            </p>
            <p className="text-gray-700 text-base">
             Total Deaths:{totalDeaths}
            </p>
           </div>
           <div className="px-6 mt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{totalRecovered}
            </span>
           </div>
         </div>
    );
}

Card.propTypes = {
    country: PropTypes.string,
    totalCase: PropTypes.string,
    totalRecovered: PropTypes.string,
    totalDeaths: PropTypes.string,

}
Card.defaultProps = {
    country: "",
    totalCase: "",
    totalRecovered: "",
    totalDeaths: "",
}

export default Card