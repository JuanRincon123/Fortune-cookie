/* eslint-disable react/prop-types */

const PhrasesCard = ({ phrasesRandom }) => {
    return (
        <div className="card">
            <p >{phrasesRandom.phrase}</p>
        </div>
    );
};

export default PhrasesCard;     